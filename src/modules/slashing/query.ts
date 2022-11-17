/* eslint-disable @typescript-eslint/naming-convention */

import {BaseClient} from "../../baseclient";
import {QueryClientImpl, QuerySigningInfosResponse} from "../../codec/cosmos/slashing/v1beta1/query";
import {Params, ValidatorSigningInfo} from "../../codec/cosmos/slashing/v1beta1/slashing";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export interface SlashingQueryExtensionMethods {
  signingInfo(consAddress: string, height?: number): Promise<ValidatorSigningInfo | undefined>;
  signingInfos(paginationKey?: Uint8Array, height?: number): Promise<QuerySigningInfosResponse>;
  params(height?: number): Promise<Params | undefined>;
}

export interface SlashingQueryExtension {
  readonly slashing: SlashingQueryExtensionMethods;
}

export function SlashingQueryExtension<T extends {new (...args: any[]): BaseClient & SlashingQueryExtension}>(constructor: T): T {
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
    get slashing() {
      return {
        ...super["slashing"],
        signingInfo: async (consAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {valSigningInfo} = await queryService.SigningInfo({
            consAddress
          });
          return valSigningInfo;
        },
        signingInfos: async (paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.SigningInfos({
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        params: async (height?: number) => {
          rpcClient.withHeight(height);
          const {params} = await queryService.Params({});
          return params;
        }
      };
    }
  };
}
