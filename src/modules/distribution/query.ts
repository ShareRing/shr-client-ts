/* eslint-disable @typescript-eslint/naming-convention */

import Long from "long";
import {BaseClient} from "../../baseclient";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {ValidatorAccumulatedCommission, ValidatorOutstandingRewards} from "../../codec/cosmos/distribution/v1beta1/distribution";
import {
  QueryClientImpl,
  QueryDelegationTotalRewardsResponse,
  QueryValidatorSlashesResponse
} from "../../codec/cosmos/distribution/v1beta1/query";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export interface DistributionQueryExtensionMethods {
  communityPool(height?: number): Promise<DecCoin[]>;
  delegationRewards(delegatorAddress: string, validatorAddress: string, height?: number): Promise<DecCoin[]>;
  delegationTotalRewards(delegatorAddress: string, height?: number): Promise<QueryDelegationTotalRewardsResponse>;
  delegatorValidators(delegatorAddress: string, height?: number): Promise<string[]>;
  delegatorWithdrawAddress(delegatorAddress: string, height?: number): Promise<string>;
  validatorCommission(validatorAddress: string, height?: number): Promise<ValidatorAccumulatedCommission | undefined>;
  validatorOutstandingRewards(validatorAddress: string, height?: number): Promise<ValidatorOutstandingRewards | undefined>;
  validatorSlashes(
    validatorAddress: string,
    startingHeight: number,
    endingHeight: number,
    paginationKey?: Uint8Array,
    height?: number
  ): Promise<QueryValidatorSlashesResponse>;
}

export interface DistributionQueryExtension {
  readonly distribution: DistributionQueryExtensionMethods;
}

export function DistributionQueryExtension<T extends {new (...args: any[]): BaseClient & DistributionQueryExtension}>(constructor: T): T {
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
    get distribution() {
      return {
        ...super["distribution"],
        communityPool: async (height?: number) => {
          rpcClient.withHeight(height);
          const {pool} = await queryService.CommunityPool({});
          return pool;
        },
        delegationRewards: async (delegatorAddress: string, validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {rewards} = await queryService.DelegationRewards({
            delegatorAddress: delegatorAddress,
            validatorAddress: validatorAddress
          });
          return rewards;
        },
        delegationTotalRewards: async (delegatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.DelegationTotalRewards({
            delegatorAddress: delegatorAddress
          });
          return response;
        },
        delegatorValidators: async (delegatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {validators} = await queryService.DelegatorValidators({
            delegatorAddress: delegatorAddress
          });
          return validators;
        },
        delegatorWithdrawAddress: async (delegatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {withdrawAddress} = await queryService.DelegatorWithdrawAddress({
            delegatorAddress: delegatorAddress
          });
          return withdrawAddress;
        },
        validatorCommission: async (validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {commission} = await queryService.ValidatorCommission({
            validatorAddress: validatorAddress
          });
          return commission;
        },
        validatorOutstandingRewards: async (validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {rewards} = await queryService.ValidatorOutstandingRewards({
            validatorAddress: validatorAddress
          });
          return rewards;
        },
        validatorSlashes: async (
          validatorAddress: string,
          startingHeight: number,
          endingHeight: number,
          paginationKey?: Uint8Array,
          height?: number
        ) => {
          rpcClient.withHeight(height);
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
