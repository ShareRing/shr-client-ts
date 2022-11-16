import {BaseClient} from "../../baseclient";
import {QueryClientImpl} from "../../codec/cosmos/auth/v1beta1/query";
import {Any} from "../../codec/google/protobuf/any";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export type AuthQueryExtension = {
  get auth(): {
    /**
     * Returns an account if it exists and `null` otherwise.
     *
     * The account is a protobuf Any in order to be able to support many different
     * account types in one API. The caller needs to switch over the expected and supported
     * `typeUrl` and decode the `value` using its own type decoder.
     */
    readonly account: (address: string) => Promise<Any | null>;
  };
};

export function AuthQueryExtension<T extends {new (...args: any[]): BaseClient & AuthQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get auth() {
      return {
        ...super["auth"],
        account: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {account} = await queryService.Account({address: address});
          return account ?? null;
        }
      };
    }
  };
}
