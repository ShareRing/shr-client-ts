/* eslint-disable @typescript-eslint/naming-convention */
import Long from "long";
import {Client} from "../../client";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {
  QueryClientImpl,
  QueryDelegatorDelegationsResponse,
  QueryDelegatorUnbondingDelegationsResponse,
  QueryDelegatorValidatorsResponse,
  QueryRedelegationsResponse,
  QueryValidatorDelegationsResponse,
  QueryValidatorsResponse,
  QueryValidatorUnbondingDelegationsResponse
} from "../../codec/cosmos/staking/v1beta1/query";
import {
  BondStatus,
  DelegationResponse,
  HistoricalInfo,
  Pool,
  UnbondingDelegation,
  Validator
} from "../../codec/cosmos/staking/v1beta1/staking";
import {MsgBeginRedelegate, MsgDelegate, MsgUndelegate} from "../../codec/cosmos/staking/v1beta1/tx";
import {createPagination, createProtobufRpcClient} from "../../query";
import {MsgBeginRedelegateEncodeObject, MsgDelegateEncodeObject, MsgUndelegateEncodeObject} from "./amino";

export type BondStatusString = Exclude<keyof typeof BondStatus, "BOND_STATUS_UNSPECIFIED">;

export type StakingQueryExtension = {
  readonly staking: {
    readonly delegation: (delegatorAddress: string, validatorAddress: string) => Promise<DelegationResponse | undefined>;
    readonly delegatorDelegations: (delegatorAddress: string, paginationKey?: Uint8Array) => Promise<QueryDelegatorDelegationsResponse>;
    readonly delegatorUnbondingDelegations: (
      delegatorAddress: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
    readonly delegatorValidator: (delegatorAddress: string, validatorAddress: string) => Promise<Validator | undefined>;
    readonly delegatorValidators: (delegatorAddress: string, paginationKey?: Uint8Array) => Promise<QueryDelegatorValidatorsResponse>;
    readonly historicalInfo: (height: number) => Promise<HistoricalInfo | undefined>;
    readonly pool: () => Promise<Pool | undefined>;
    readonly redelegations: (
      delegatorAddress: string,
      sourceValidatorAddress: string,
      destinationValidatorAddress: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryRedelegationsResponse>;
    readonly unbondingDelegation: (delegatorAddress: string, validatorAddress: string) => Promise<UnbondingDelegation | undefined>;
    readonly validator: (validatorAddress: string) => Promise<Validator | undefined>;
    readonly validatorDelegations: (validatorAddress: string, paginationKey?: Uint8Array) => Promise<QueryValidatorDelegationsResponse>;
    readonly validators: (status: BondStatusString, paginationKey?: Uint8Array) => Promise<QueryValidatorsResponse>;
    readonly validatorUnbondingDelegations: (
      validatorAddress: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryValidatorUnbondingDelegationsResponse>;
  };
};

export type StakingTxExtension = {
  readonly staking: {
    readonly delegate: (delegatorAddress: string, validatorAddress: string, amount: Coin) => MsgDelegateEncodeObject;
    readonly undelegate: (delegatorAddress: string, validatorAddress: string, amount: Coin) => MsgUndelegateEncodeObject;
    readonly beginRedelegate: (
      delegatorAddress: string,
      validatorSrcAddress: string,
      validatorDstAddress: string,
      amount: Coin
    ) => MsgBeginRedelegateEncodeObject;
  };
};

export type StakingExtension = StakingQueryExtension & StakingTxExtension;

export function StakingQueryExtension<T extends {new (...args: any[]): Client & StakingQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    staking = {
      ...super["staking"],
      delegation: async (delegatorAddress: string, validatorAddress: string) => {
        const {delegationResponse} = await queryService.Delegation({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress
        });
        return delegationResponse;
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
        const {validator} = await queryService.DelegatorValidator({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress
        });
        return validator;
      },
      delegatorValidators: async (delegatorAddress: string, paginationKey?: Uint8Array) => {
        const response = await queryService.DelegatorValidators({
          delegatorAddr: delegatorAddress,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      historicalInfo: async (height: number) => {
        const {hist} = await queryService.HistoricalInfo({
          height: Long.fromNumber(height, true)
        });
        return hist;
      },
      pool: async () => {
        const {pool} = await queryService.Pool({});
        return pool;
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
        const {unbond} = await queryService.UnbondingDelegation({
          delegatorAddr: delegatorAddress,
          validatorAddr: validatorAddress
        });
        return unbond;
      },
      validator: async (validatorAddress: string) => {
        const {validator} = await queryService.Validator({validatorAddr: validatorAddress});
        return validator;
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
      }
    };
  };
}

export function StakingTxExtension<T extends {new (...args: any[]): Client & StakingTxExtension}>(constructor: T): T {
  return class extends constructor {
    staking = {
      ...super["staking"],
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
    };
  };
}

export function StakingExtension<T extends {new (...args: any[]): Client & StakingExtension}>(constructor: T): T {
  return class extends StakingTxExtension(StakingQueryExtension(constructor)) {};
}
