import {DecCoin} from "@shareledgerjs/types/cosmos/base/v1beta1/coin";
import {Params} from "@shareledgerjs/types/shareledger/swap/params";
import {PastTxEvent} from "@shareledgerjs/types/shareledger/swap/past_tx_event";
import {
  QueryBatchesResponse,
  QueryClientImpl,
  QueryPastTxEventsResponse,
  QuerySchemasResponse,
  QuerySwapResponse
} from "@shareledgerjs/types/shareledger/swap/query";
import {Schema} from "@shareledgerjs/types/shareledger/swap/schema";
import Long from "long";

import {BaseClient} from "../../baseclient";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export interface SwapQueryExtensionMethods {
  params(height?: number): Promise<Params | undefined>;
  batches(ids?: Long[], network?: string, paginationKey?: Uint8Array, height?: number): Promise<QueryBatchesResponse>;
  tokensAvailable(height?: number): Promise<DecCoin | undefined>;
  requests(
    ids?: Long[],
    destAddr?: string,
    destNetwork?: string,
    srcAddr?: string,
    srcNetwork?: string,
    status?: string,
    paginationKey?: Uint8Array,
    height?: number
  ): Promise<QuerySwapResponse>;
  schema(network: string, height?: number): Promise<Schema | undefined>;
  schemas(paginationKey?: Uint8Array, height?: number): Promise<QuerySchemasResponse>;
  pastEvent(txHash: string, logIndex: number, height?: number): Promise<PastTxEvent | undefined>;
  pastEvents(txHash?: string, paginationKey?: Uint8Array, height?: number): Promise<QueryPastTxEventsResponse>;
}

export interface SwapQueryExtension {
  readonly swap: SwapQueryExtensionMethods;
}

export function SwapQueryExtension<T extends {new (...args: any[]): BaseClient & SwapQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    override get swap() {
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
