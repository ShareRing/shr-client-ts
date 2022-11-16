import Long from "long";
import {BaseClient} from "../../baseclient";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {Params} from "../../codec/shareledger/swap/params";
import {PastTxEvent} from "../../codec/shareledger/swap/past_tx_event";
import {
  QuerySchemasResponse,
  QueryBatchesResponse,
  QueryClientImpl,
  QuerySwapResponse,
  QueryPastTxEventsResponse
} from "../../codec/shareledger/swap/query";
import {Schema} from "../../codec/shareledger/swap/schema";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export type SwapQueryExtension = {
  get swap(): {
    readonly params: (height?: number) => Promise<Params | undefined>;
    readonly batches: (ids?: Long[], network?: string, paginationKey?: Uint8Array, height?: number) => Promise<QueryBatchesResponse>;
    readonly tokensAvailable: (height?: number) => Promise<DecCoin | undefined>;
    readonly requests: (
      ids?: Long[],
      destAddr?: string,
      destNetwork?: string,
      srcAddr?: string,
      srcNetwork?: string,
      status?: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QuerySwapResponse>;
    readonly schema: (network: string, height?: number) => Promise<Schema | undefined>;
    readonly schemas: (paginationKey?: Uint8Array, height?: number) => Promise<QuerySchemasResponse>;
    readonly pastEvent: (txHash: string, logIndex: number, height?: number) => Promise<PastTxEvent | undefined>;
    readonly pastEvents: (txHash?: string, paginationKey?: Uint8Array, height?: number) => Promise<QueryPastTxEventsResponse>;
  };
};

export function SwapQueryExtension<T extends {new (...args: any[]): BaseClient & SwapQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get swap() {
      return {
        ...super["swap"],
        batches: async (ids?: Long[], network?: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          return queryService.Batches({
            ids: ids || [],
            network: network || "",
            pagination: createPagination(paginationKey)
          });
        },
        tokensAvailable: async (height?: number) => {
          rpcClient.withHeight(height);
          return queryService.Balance({}).then((res) => res.balance);
        },
        requests: async (
          ids?: Long[],
          destAddr?: string,
          destNetwork?: string,
          srcAddr?: string,
          srcNetwork?: string,
          status?: string,
          paginationKey?: Uint8Array,
          height?: number
        ) => {
          rpcClient.withHeight(height);
          return queryService.Swap({
            ids: ids || [],
            destAddr: destAddr || "",
            destNetwork: destNetwork || "",
            srcAddr: srcAddr || "",
            srcNetwork: srcNetwork || "",
            status: status || "pending", // cannot be empty
            pagination: createPagination(paginationKey)
          });
        },
        schema: async (network: string, height?: number) => {
          rpcClient.withHeight(height);
          return queryService.Schema({network}).then((res) => res.schema);
        },
        schemas: async (paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          return queryService.Schemas({pagination: createPagination(paginationKey)});
        },
        pastEvent: async (txHash: string, logIndex: number, height?: number) => {
          rpcClient.withHeight(height);
          return queryService.PastTxEvent({txHash, logIndex: Long.fromNumber(logIndex)}).then((res) => res.event);
        },
        pastEvents: async (txHash?: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          if (txHash) {
            return queryService.PastTxEventsByTxHash({txHash});
          }
          return queryService.PastTxEvents({pagination: createPagination(paginationKey)});
        }
      };
    }
  };
}
