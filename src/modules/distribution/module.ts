/* eslint-disable @typescript-eslint/naming-convention */

import Long from "long";
import {Client} from "../../client";
import {Coin, DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {ValidatorAccumulatedCommission, ValidatorOutstandingRewards} from "../../codec/cosmos/distribution/v1beta1/distribution";
import {
  QueryClientImpl,
  QueryDelegationTotalRewardsResponse,
  QueryValidatorSlashesResponse
} from "../../codec/cosmos/distribution/v1beta1/query";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission
} from "../../codec/cosmos/distribution/v1beta1/tx";
import {createPagination, createProtobufRpcClient} from "../../query";
import {
  MsgFundCommunityPoolEncodeObject,
  MsgSetWithdrawAddressEncodeObject,
  MsgWithdrawDelegatorRewardEncodeObject,
  MsgWithdrawValidatorCommissionEncodeObject
} from "./amino";

export type DistributionQueryExtension = {
  get distribution(): {
    readonly communityPool: () => Promise<DecCoin[]>;
    readonly delegationRewards: (delegatorAddress: string, validatorAddress: string) => Promise<DecCoin[]>;
    readonly delegationTotalRewards: (delegatorAddress: string) => Promise<QueryDelegationTotalRewardsResponse>;
    readonly delegatorValidators: (delegatorAddress: string) => Promise<string[]>;
    readonly delegatorWithdrawAddress: (delegatorAddress: string) => Promise<string>;
    readonly validatorCommission: (validatorAddress: string) => Promise<ValidatorAccumulatedCommission | undefined>;
    readonly validatorOutstandingRewards: (validatorAddress: string) => Promise<ValidatorOutstandingRewards | undefined>;
    readonly validatorSlashes: (
      validatorAddress: string,
      startingHeight: number,
      endingHeight: number,
      paginationKey?: Uint8Array
    ) => Promise<QueryValidatorSlashesResponse>;
  };
};

export type DistributionTxExtension = {
  get distribution(): {
    readonly setWithdrawAddress: (delegatorAddress: string, withdrawAdress: string) => MsgSetWithdrawAddressEncodeObject;
    readonly withdrawRewards: (delegatorAddress: string, validatorAddress: string) => MsgWithdrawDelegatorRewardEncodeObject;
    readonly withdrawCommissions: (validatorAddress: string) => MsgWithdrawValidatorCommissionEncodeObject;
    readonly fundCommunityPool: (depositor: string, amount: Coin[]) => MsgFundCommunityPoolEncodeObject;
  };
};

export type DistributionExtension = DistributionQueryExtension & DistributionTxExtension;

export function DistributionQueryExtension<T extends {new (...args: any[]): Client & DistributionQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get distribution() {
      return {
        ...super["distribution"],
        communityPool: async () => {
          const {pool} = await queryService.CommunityPool({});
          return pool;
        },
        delegationRewards: async (delegatorAddress: string, validatorAddress: string) => {
          const {rewards} = await queryService.DelegationRewards({
            delegatorAddress: delegatorAddress,
            validatorAddress: validatorAddress
          });
          return rewards;
        },
        delegationTotalRewards: async (delegatorAddress: string) => {
          const response = await queryService.DelegationTotalRewards({
            delegatorAddress: delegatorAddress
          });
          return response;
        },
        delegatorValidators: async (delegatorAddress: string) => {
          const {validators} = await queryService.DelegatorValidators({
            delegatorAddress: delegatorAddress
          });
          return validators;
        },
        delegatorWithdrawAddress: async (delegatorAddress: string) => {
          const {withdrawAddress} = await queryService.DelegatorWithdrawAddress({
            delegatorAddress: delegatorAddress
          });
          return withdrawAddress;
        },
        validatorCommission: async (validatorAddress: string) => {
          const {commission} = await queryService.ValidatorCommission({
            validatorAddress: validatorAddress
          });
          return commission;
        },
        validatorOutstandingRewards: async (validatorAddress: string) => {
          const {rewards} = await queryService.ValidatorOutstandingRewards({
            validatorAddress: validatorAddress
          });
          return rewards;
        },
        validatorSlashes: async (validatorAddress: string, startingHeight: number, endingHeight: number, paginationKey?: Uint8Array) => {
          const response = await queryService.ValidatorSlashes({
            validatorAddress: validatorAddress,
            startingHeight: Long.fromNumber(startingHeight, true),
            endingHeight: Long.fromNumber(endingHeight, true),
            pagination: createPagination(paginationKey)
          });
          return response;
        }
      };
    }
  };
}

export function DistributionTxExtension<T extends {new (...args: any[]): Client & DistributionTxExtension}>(constructor: T): T {
  return class extends constructor {
    get distribution() {
      return {
        ...super["distribution"],
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
      };
    }
  };
}

export function DistributionExtension<T extends {new (...args: any[]): Client & DistributionExtension}>(constructor: T): T {
  return class extends DistributionTxExtension(DistributionQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": "distribution_set-withdraw-address",
    "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": "distribution_withdraw-delegator-reward",
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": "distribution_withdraw-validator-commission",
    "/cosmos.distribution.v1beta1.MsgFundCommunityPool": "distribution_fund-community-pool"
  };
}
