/* eslint-disable @typescript-eslint/naming-convention */

import {Client} from "../../client";
import {QueryClientImpl, QuerySigningInfosResponse} from "../../codec/cosmos/slashing/v1beta1/query";
import {ValidatorSigningInfo} from "../../codec/cosmos/slashing/v1beta1/slashing";
import {MsgUnjail} from "../../codec/cosmos/slashing/v1beta1/tx";
import {createPagination, createProtobufRpcClient} from "../../query";
import {MsgUnjailEncodeObject} from "./amino";

export interface SlashingExtension {
  readonly slashing: {
    readonly signingInfo: (consAddress: string) => Promise<ValidatorSigningInfo | undefined>;
    readonly signingInfos: (paginationKey?: Uint8Array) => Promise<QuerySigningInfosResponse>;
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
        const {valSigningInfo} = await queryService.SigningInfo({
          consAddress
        });
        return valSigningInfo;
      },
      signingInfos: async (paginationKey?: Uint8Array) => {
        const response = await queryService.SigningInfos({
          pagination: createPagination(paginationKey)
        });
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
