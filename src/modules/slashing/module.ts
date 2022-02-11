/* eslint-disable @typescript-eslint/naming-convention */

import {Client} from "../../client";
import {QueryClientImpl, QuerySigningInfosResponse} from "../../codec/cosmos/slashing/v1beta1/query";
import {Params, ValidatorSigningInfo} from "../../codec/cosmos/slashing/v1beta1/slashing";
import {MsgUnjail} from "../../codec/cosmos/slashing/v1beta1/tx";
import {createPagination, createProtobufRpcClient} from "../../query";
import {MsgUnjailEncodeObject} from "./amino";

export type SlashingQueryExtension = {
  get slashing(): {
    readonly signingInfo: (consAddress: string) => Promise<ValidatorSigningInfo | undefined>;
    readonly signingInfos: (paginationKey?: Uint8Array) => Promise<QuerySigningInfosResponse>;
    readonly params: () => Promise<Params | undefined>;
  };
};

export type SlashingTxExtension = {
  get slashing(): {
    readonly unjail: (validatorAddress: string) => MsgUnjailEncodeObject;
  };
};

export type SlashingExtension = SlashingQueryExtension & SlashingTxExtension;

export function SlashingQueryExtension<T extends {new (...args: any[]): Client & SlashingQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get slashing() {
      return {
        ...super["slashing"],
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
        params: async () => {
          const {params} = await queryService.Params({});
          return params;
        }
      };
    }
  };
}

export function SlashingTxExtension<T extends {new (...args: any[]): Client & SlashingTxExtension}>(constructor: T): T {
  return class extends constructor {
    get slashing() {
      return {
        ...super["slashing"],
        unjail: (validatorAddress: string): MsgUnjailEncodeObject => {
          return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: MsgUnjail.fromPartial({
              validatorAddr: validatorAddress
            })
          };
        }
      };
    }
  };
}

export function SlashingExtension<T extends {new (...args: any[]): Client & SlashingExtension}>(constructor: T): T {
  return class extends SlashingTxExtension(SlashingQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/cosmos.slashing.v1beta1.MsgUnjail": "slashing_unjail"
  };
}
