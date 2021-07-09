/* eslint-disable @typescript-eslint/naming-convention */
import {
  QueryClientImpl,
  QueryDelegationResponse,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorResponse,
  QueryDelegatorValidatorsResponse,
  QueryHistoricalInfoResponse,
  QueryParamsResponse,
  QueryPoolResponse,
  QueryRedelegationsResponse,
  QueryUnbondingDelegationResponse,
  QueryValidatorDelegationsResponse,
  QueryValidatorResponse,
  QueryValidatorsResponse,
  QueryValidatorUnbondingDelegationsResponse
} from "../../codec/cosmos/staking/v1beta1/query";
import {BondStatus} from "../../codec/cosmos/staking/v1beta1/staking";
import Long from "long";
import {createPagination, createProtobufRpcClient} from "../../query";
import {Client} from "../../client";
import {MsgBeginRedelegateEncodeObject, MsgDelegateEncodeObject, MsgUndelegateEncodeObject} from "./amino";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {MsgBeginRedelegate, MsgDelegate, MsgUndelegate} from "../../codec/cosmos/staking/v1beta1/tx";

export type BondStatusString = Exclude<keyof typeof BondStatus, "BOND_STATUS_UNSPECIFIED">;

export interface StakingExtension {
  readonly staking: {
    readonly delegation: (delegatorAddress: string, validatorAddress: string) => Promise<QueryDelegationResponse>;
    readonly delegatorDelegations: (delegatorAddress: string, paginationKey?: Uint8Array) => Promise<QueryDelegatorDelegationsResponse>;
    readonly delegatorUnbondingDelegations: (
      delegatorAddress: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
    readonly delegatorValidator: (delegatorAddress: string, validatorAddress: string) => Promise<QueryDelegatorValidatorResponse>;
    readonly delegatorValidators: (delegatorAddress: string, paginationKey?: Uint8Array) => Promise<QueryDelegatorValidatorsResponse>;
    readonly historicalInfo: (height: number) => Promise<QueryHistoricalInfoResponse>;
    readonly params: () => Promise<QueryParamsResponse>;
    readonly pool: () => Promise<QueryPoolResponse>;
    readonly redelegations: (
      delegatorAddress: string,
      sourceValidatorAddress: string,
      destinationValidatorAddress: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryRedelegationsResponse>;
    readonly unbondingDelegation: (delegatorAddress: string, validatorAddress: string) => Promise<QueryUnbondingDelegationResponse>;
    readonly validator: (validatorAddress: string) => Promise<QueryValidatorResponse>;
    readonly validatorDelegations: (validatorAddress: string, paginationKey?: Uint8Array) => Promise<QueryValidatorDelegationsResponse>;
    readonly validators: (status: BondStatusString, paginationKey?: Uint8Array) => Promise<QueryValidatorsResponse>;
    readonly validatorUnbondingDelegations: (
      validatorAddress: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryValidatorUnbondingDelegationsResponse>;
    readonly tx: {
      delegate: (delegatorAddress: string, validatorAddress: string, amount: Coin) => MsgDelegateEncodeObject;
      undelegate: (delegatorAddress: string, validatorAddress: string, amount: Coin) => MsgUndelegateEncodeObject;
      beginRedelegate: (
        delegatorAddress: string,
        validatorSrcAddress: string,
        validatorDstAddress: string,
        amount: Coin
      ) => MsgBeginRedelegateEncodeObject;
    };
  };
}

export function StakingExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    staking = {
      delegation: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.Delegation({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress
        });
        return response;
      },
      delegatorDelegations: async (delegatorAddress: string, paginationKey?: Uint8Array) => {
        const response = await queryService.DelegatorDelegations({
          delegatorAddr: delegatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      delegatorUnbondingDelegations: async (delegatorAddress: string, paginationKey?: Uint8Array) => {
        const response = await queryService.DelegatorUnbondingDelegations({
          delegatorAddr: delegatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      delegatorValidator: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.DelegatorValidator({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress
        });
        return response;
      },
      delegatorValidators: async (delegatorAddress: string, paginationKey?: Uint8Array) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddr: delegatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      historicalInfo: async (height: number) => {
        const response = await queryService.HistoricalInfo({
          height: Long.fromNumber(height, true)
        });
        return response;
      },
      params: async () => {
        const response = await queryService.Params({});
        return response;
      },
      pool: async () => {
        const response = await queryService.Pool({});
        return response;
      },
      redelegations: async (
        delegatorAddress: string,
        sourceValidatorAddress: string,
        destinationValidatorAddress: string,
        paginationKey?: Uint8Array
      ) => {
        const response = await queryService.Redelegations({
          delegatorAddr: delegatorAddress,
          srcValidatorAddr: sourceValidatorAddress,
          dstValidatorAddr: destinationValidatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      unbondingDelegation: async (delegatorAddress: string, validatorAddress: string) => {
        const response = await queryService.UnbondingDelegation({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress
        });
        return response;
      },
      validator: async (validatorAddress: string) => {
        const response = await queryService.Validator({validatorAddr: validatorAddress});
        return response;
      },
      validatorDelegations: async (validatorAddress: string, paginationKey?: Uint8Array) => {
        const response = await queryService.ValidatorDelegations({
          validatorAddr: validatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      validators: async (status: BondStatusString, paginationKey?: Uint8Array) => {
        const response = await queryService.Validators({
          status: status,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      validatorUnbondingDelegations: async (validatorAddress: string, paginationKey?: Uint8Array) => {
        const response = await queryService.ValidatorUnbondingDelegations({
          validatorAddr: validatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      tx: {
        delegate: (delegatorAddress: string, validatorAddress: string, amount: Coin): MsgDelegateEncodeObject => {
          return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: MsgDelegate.fromPartial({
              delegatorAddress,
              validatorAddress,
              amount
            })
          };
        },
        undelegate: (delegatorAddress: string, validatorAddress: string, amount: Coin): MsgUndelegateEncodeObject => {
          return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: MsgUndelegate.fromPartial({
              delegatorAddress,
              validatorAddress,
              amount
            })
          };
        },
        beginRedelegate: (
          delegatorAddress: string,
          validatorSrcAddress: string,
          validatorDstAddress: string,
          amount: Coin
        ): MsgBeginRedelegateEncodeObject => {
          return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: MsgBeginRedelegate.fromPartial({
              delegatorAddress,
              validatorSrcAddress,
              validatorDstAddress,
              amount
            })
          };
        }
      }
    };
  };
}
