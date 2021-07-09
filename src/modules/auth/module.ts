import {Client} from "../../client";
import {QueryClientImpl} from "../../codec/cosmos/auth/v1beta1/query";
import {Any} from "../../codec/google/protobuf/any";
import {createProtobufRpcClient, toAccAddress} from "../../query";

export interface AuthExtension {
  readonly auth: {
    /**
     * Returns an account if it exists and `null` otherwise.
     *
     * The account is a protobuf Any in order to be able to support many different
     * account types in one API. The caller needs to switch over the expected and supported
     * `typeUrl` and decode the `value` using its own type decoder.
     */
    readonly account: (address: string) => Promise<Any | null>;
    readonly verified: {
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
}

export function AuthExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class Client extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    auth = {
      account: async (address: string) => {
        const {account} = await queryService.Account({address: address});
        return account ?? null;
      },
      verified: {
        account: async (address: string) => {
          // https://github.com/cosmos/cosmos-sdk/blob/8cab43c8120fec5200c3459cbf4a92017bb6f287/x/auth/types/keys.go#L29-L32
          const key = Uint8Array.from([0x01, ...toAccAddress(address)]);
          const responseData = await this.forceGetQueryClient().queryVerified("acc", key);
          if (responseData.length === 0) return null;
          return Any.decode(responseData);
        }
      }
    };
  };
}
