/* eslint-disable @typescript-eslint/naming-convention */

import {
  QueryClientImpl,
  QueryParamsResponse,
  QuerySigningInfoResponse,
  QuerySigningInfosResponse
} from "../../codec/cosmos/slashing/v1beta1/query";
import {createPagination, createProtobufRpcClient} from "../../query";
import {Client} from "../../client";
import {MsgUnjailEncodeObject} from "./amino";
import {MsgUnjail} from "../../codec/cosmos/slashing/v1beta1/tx";

export interface SlashingExtension {
  readonly slashing: {
    readonly signingInfo: (consAddress: string) => Promise<QuerySigningInfoResponse>;
    readonly signingInfos: (paginationKey?: Uint8Array) => Promise<QuerySigningInfosResponse>;
    readonly params: () => Promise<QueryParamsResponse>;
    readonly tx: {
      unjail: (validatorAddress: string) => MsgUnjailEncodeObject;
    };
  };
}

export function SlashingExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    slashing = {
      signingInfo: async (consAddress: string) => {
        const response = await queryService.SigningInfo({
          consAddress
        });
        return response;
      },
      signingInfos: async (paginationKey?: Uint8Array) => {
        const response = await queryService.SigningInfos({
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      params: async () => {
        const response = await queryService.Params({});
        return response;
      },
      tx: {
        unjail: (validatorAddress: string): MsgUnjailEncodeObject => {
          return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: MsgUnjail.fromPartial({
              validatorAddr: validatorAddress
            })
          };
        }
      }
    };
  };
}
