/* eslint-disable @typescript-eslint/naming-convention */

import {
  QueryClientImpl,
  QueryCommunityPoolResponse,
  QueryDelegationRewardsResponse,
  QueryDelegationTotalRewardsResponse,
  QueryDelegatorValidatorsResponse,
  QueryDelegatorWithdrawAddressResponse,
  QueryParamsResponse,
  QueryValidatorCommissionResponse,
  QueryValidatorOutstandingRewardsResponse,
  QueryValidatorSlashesResponse
} from "../../codec/cosmos/distribution/v1beta1/query";
import Long from "long";

import {createProtobufRpcClient, createPagination} from "../../query";
import {Client} from "../../client";
import {
  MsgSetWithdrawAddressEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  MsgWithdrawValidatorCommissionEncodeObject,
  MsgFundCommunityPoolEncodeObject
} from "./amino";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission
} from "../../codec/cosmos/distribution/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";

export interface DistributionExtension {
  readonly distribution: {
    readonly communityPool: () => Promise<QueryCommunityPoolResponse>;
    readonly delegationRewards: (delegatorAddress: string, validatorAddress: string) => Promise<QueryDelegationRewardsResponse>;
    readonly delegationTotalRewards: (delegatorAddress: string) => Promise<QueryDelegationTotalRewardsResponse>;
    readonly delegatorValidators: (delegatorAddress: string) => Promise<QueryDelegatorValidatorsResponse>;
    readonly delegatorWithdrawAddress: (delegatorAddress: string) => Promise<QueryDelegatorWithdrawAddressResponse>;
    readonly params: () => Promise<QueryParamsResponse>;
    readonly validatorCommission: (validatorAddress: string) => Promise<QueryValidatorCommissionResponse>;
    readonly validatorOutstandingRewards: (validatorAddress: string) => Promise<QueryValidatorOutstandingRewardsResponse>;
    readonly validatorSlashes: (
      validatorAddress: string,
      startingHeight: number,
      endingHeight: number,
      paginationKey?: Uint8Array
    ) => Promise<QueryValidatorSlashesResponse>;
    readonly tx: {
      readonly setWithdrawAddress: (delegatorAddress: string, withdrawAdress: string) => MsgSetWithdrawAddressEncodeObject;
      readonly withdrawRewards: (delegatorAddress: string, validatorAddress: string) => MsgWithdrawDelegatorRewardEncodeObject;
      readonly withdrawCommissions: (validatorAddress: string) => MsgWithdrawValidatorCommissionEncodeObject;
      readonly fundCommunityPool: (depositor: string, amount: Coin[]) => MsgFundCommunityPoolEncodeObject;
    };
  };
}

export function DistributionExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    distribution = {
      communityPool: async () => {
        const response = await queryService.CommunityPool({});
        return response;
      },
      delegationRewards: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.DelegationRewards({
          delegatorAddress: delegatorAddress,
          validatorAddress: validatorAddress
        });
        return response;
      },
      delegationTotalRewards: async (delegatorAddress: string) => {
        const response = await queryService.DelegationTotalRewards({
          delegatorAddress: delegatorAddress
        });
        return response;
      },
      delegatorValidators: async (delegatorAddress: string) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddress: delegatorAddress
        });
        return response;
      },
      delegatorWithdrawAddress: async (delegatorAddress: string) => {
        const response = await queryService.DelegatorWithdrawAddress({
          delegatorAddress: delegatorAddress
        });
        return response;
      },
      params: async () => {
        const response = await queryService.Params({});
        return response;
      },
      validatorCommission: async (validatorAddress: string) => {
        const response = await queryService.ValidatorCommission({
          validatorAddress: validatorAddress
        });
        return response;
      },
      validatorOutstandingRewards: async (validatorAddress: string) => {
        const response = await queryService.ValidatorOutstandingRewards({
          validatorAddress: validatorAddress
        });
        return response;
      },
      validatorSlashes: async (validatorAddress: string, startingHeight: number, endingHeight: number, paginationKey?: Uint8Array) => {
        const response = await queryService.ValidatorSlashes({
          validatorAddress: validatorAddress,
          startingHeight: Long.fromNumber(startingHeight, true),
          endingHeight: Long.fromNumber(endingHeight, true),
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      tx: {
        setWithdrawAddress: (delegatorAddress: string, withdrawAddress: string): MsgSetWithdrawAddressEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: MsgSetWithdrawAddress.fromPartial({
              delegatorAddress,
              withdrawAddress
            })
          };
        },
        withdrawRewards: (delegatorAddress: string, validatorAddress: string): MsgWithdrawDelegatorRewardEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: MsgWithdrawDelegatorReward.fromPartial({
              delegatorAddress,
              validatorAddress
            })
          };
        },
        withdrawCommissions: (validatorAddress: string): MsgWithdrawValidatorCommissionEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: MsgWithdrawValidatorCommission.fromPartial({
              validatorAddress
            })
          };
        },
        fundCommunityPool: (depositor: string, amount: Coin[]): MsgFundCommunityPoolEncodeObject => {
          return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: MsgFundCommunityPool.fromPartial({
              depositor,
              amount: [...amount]
            })
          };
        }
      }
    };
  };
}
