import {BaseClient} from "../../baseclient";
import {Id} from "../../codec/shareledger/id/id";
import {QueryClientImpl} from "../../codec/shareledger/id/query";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export {Id};

export interface IdQueryExtensionMethods {
  id(id: string, height?: number): Promise<Id | undefined>;
  idByAddress(address: string, height?: number): Promise<Id | undefined>;
}

export interface IdQueryExtension {
  readonly id: IdQueryExtensionMethods;
}

export function IdQueryExtension<T extends {new (...args: any[]): BaseClient & IdQueryExtension}>(constructor: T): T {
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
    get id() {
      return {
        ...super["id"],
        id: async (id: string, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.IdById({id});
          return response.id;
        },
        idByAddress: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.IdByAddress({address});
          return response.id;
        }
      };
    }
  };
}
