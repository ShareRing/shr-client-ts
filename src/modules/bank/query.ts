/* eslint-disable @typescript-eslint/naming-convention */

import {assert} from "@cosmjs/utils";
import {BaseClient} from "../../baseclient";
import {Metadata} from "../../codec/cosmos/bank/v1beta1/bank";
import {QueryClientImpl, QueryTotalSupplyResponse} from "../../codec/cosmos/bank/v1beta1/query";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export type BankQueryExtension = {
  get bank(): {
    readonly balance: (address: string, denom: string, height?: number) => Promise<Coin>;
    readonly allBalances: (address: string, height?: number) => Promise<Coin[]>;
    readonly totalSupply: (height?: number) => Promise<Coin[]>;
    readonly supplyOf: (denom: string, height?: number) => Promise<Coin>;
    readonly denomMetadata: (denom: string, height?: number) => Promise<Metadata>;
    readonly denomsMetadata: (height?: number) => Promise<Metadata[]>;
  };
};

export function BankQueryExtension<T extends {new (...args: any[]): BaseClient & BankQueryExtension}>(constructor: T): T {
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
    get bank() {
      return {
        ...super["bank"],
        balance: async (address: string, denom: string, height?: number) => {
          rpcClient.withHeight(height);
          const {balance} = await queryService.Balance({address: address, denom: denom});
          assert(balance);
          return balance;
        },
        allBalances: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {balances} = await queryService.AllBalances({address: address});
          return balances;
        },
        totalSupply: async (height?: number) => {
          rpcClient.withHeight(height);
          const supply: Coin[] = [];
          let paginationKey = undefined;
          do {
            const res: QueryTotalSupplyResponse = await queryService.TotalSupply({pagination: createPagination(paginationKey)});
            supply.push(...res.supply);
            paginationKey = res.pagination?.nextKey;
          } while (paginationKey && paginationKey.length);
          return supply;
        },
        supplyOf: async (denom: string, height?: number) => {
          rpcClient.withHeight(height);
          const {amount} = await queryService.SupplyOf({denom: denom});
          assert(amount);
          return amount;
        },
        denomMetadata: async (denom: string, height?: number) => {
          rpcClient.withHeight(height);
          const {metadata} = await queryService.DenomMetadata({denom});
          assert(metadata);
          return metadata;
        },
        denomsMetadata: async (height?: number) => {
          rpcClient.withHeight(height);
          const {metadatas} = await queryService.DenomsMetadata({
            pagination: undefined // Not implemented
          });
          return metadatas;
        }
      };
    }
  };
}
