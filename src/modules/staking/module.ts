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
  ServiceClientImpl,
  GetValidatorSetByHeightResponse,
  GetLatestValidatorSetResponse
} from "../../codec/cosmos/base/tendermint/v1beta1/query";
import {
  BondStatus,
  DelegationResponse,
  HistoricalInfo,
  Params,
  Pool,
  UnbondingDelegation,
  Validator
} from "../../codec/cosmos/staking/v1beta1/staking";
import {MsgBeginRedelegate, MsgDelegate, MsgUndelegate} from "../../codec/cosmos/staking/v1beta1/tx";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";
import {MsgBeginRedelegateEncodeObject, MsgDelegateEncodeObject, MsgUndelegateEncodeObject} from "./amino";

export type BondStatusString = Exclude<keyof typeof BondStatus, "BOND_STATUS_UNSPECIFIED">;

export type StakingQueryExtension = {
  get staking(): {
    readonly delegation: (delegatorAddress: string, validatorAddress: string, height?: number) => Promise<DelegationResponse | undefined>;
    readonly delegatorDelegations: (
      delegatorAddress: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryDelegatorDelegationsResponse>;
    readonly delegatorUnbondingDelegations: (
      delegatorAddress: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryDelegatorUnbondingDelegationsResponse>;
    readonly delegatorValidator: (delegatorAddress: string, validatorAddress: string, height?: number) => Promise<Validator | undefined>;
    readonly delegatorValidators: (
      delegatorAddress: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryDelegatorValidatorsResponse>;
    readonly historicalInfo: (height: number) => Promise<HistoricalInfo | undefined>;
    readonly pool: (height?: number) => Promise<Pool | undefined>;
    readonly redelegations: (
      delegatorAddress: string,
      sourceValidatorAddress: string,
      destinationValidatorAddress: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryRedelegationsResponse>;
    readonly unbondingDelegation: (
      delegatorAddress: string,
      validatorAddress: string,
      height?: number
    ) => Promise<UnbondingDelegation | undefined>;
    readonly validator: (validatorAddress: string, height?: number) => Promise<Validator | undefined>;
    readonly validatorDelegations: (
      validatorAddress: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryValidatorDelegationsResponse>;
    readonly validators: (status: BondStatusString, paginationKey?: Uint8Array, height?: number) => Promise<QueryValidatorsResponse>;
    readonly validatorUnbondingDelegations: (
      validatorAddress: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryValidatorUnbondingDelegationsResponse>;
    readonly validatorSetByHeight: (height: Long, paginationKey?: Uint8Array) => Promise<GetValidatorSetByHeightResponse>;
    readonly latestValidatorSet: (paginationKey?: Uint8Array) => Promise<GetLatestValidatorSetResponse>;
    readonly params: (height?: number) => Promise<Params | undefined>;
  };
};

export type StakingTxExtension = {
  get staking(): {
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
  let tendermintQueryService: ServiceClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
      tendermintQueryService = new ServiceClientImpl(rpcClient);
    }
    get staking() {
      return {
        ...super["staking"],
        delegation: async (delegatorAddress: string, validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {delegationResponse} = await queryService.Delegation({
            delegatorAddr: delegatorAddress,
            validatorAddr: validatorAddress
          });
          return delegationResponse;
        },
        delegatorDelegations: async (delegatorAddress: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.DelegatorDelegations({
            delegatorAddr: delegatorAddress,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        delegatorUnbondingDelegations: async (delegatorAddress: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.DelegatorUnbondingDelegations({
            delegatorAddr: delegatorAddress,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        delegatorValidator: async (delegatorAddress: string, validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {validator} = await queryService.DelegatorValidator({
            delegatorAddr: delegatorAddress,
            validatorAddr: validatorAddress
          });
          return validator;
        },
        delegatorValidators: async (delegatorAddress: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
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
        pool: async (height?: number) => {
          rpcClient.withHeight(height);
          const {pool} = await queryService.Pool({});
          return pool;
        },
        redelegations: async (
          delegatorAddress: string,
          sourceValidatorAddress: string,
          destinationValidatorAddress: string,
          paginationKey?: Uint8Array,
          height?: number
        ) => {
          rpcClient.withHeight(height);
          const response = await queryService.Redelegations({
            delegatorAddr: delegatorAddress,
            srcValidatorAddr: sourceValidatorAddress,
            dstValidatorAddr: destinationValidatorAddress,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        unbondingDelegation: async (delegatorAddress: string, validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {unbond} = await queryService.UnbondingDelegation({
            delegatorAddr: delegatorAddress,
            validatorAddr: validatorAddress
          });
          return unbond;
        },
        validator: async (validatorAddress: string, height?: number) => {
          rpcClient.withHeight(height);
          const {validator} = await queryService.Validator({validatorAddr: validatorAddress});
          return validator;
        },
        validatorDelegations: async (validatorAddress: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.ValidatorDelegations({
            validatorAddr: validatorAddress,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        validators: async (status: BondStatusString, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.Validators({
            status: status,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        validatorUnbondingDelegations: async (validatorAddress: string, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.ValidatorUnbondingDelegations({
            validatorAddr: validatorAddress,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        latestValidatorSet: async (paginationKey?: Uint8Array) => {
          const response = await tendermintQueryService.GetLatestValidatorSet({
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        validatorSetByHeight: async (height: Long, paginationKey?: Uint8Array) => {
          const response = await tendermintQueryService.GetValidatorSetByHeight({
            height,
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

export function StakingTxExtension<T extends {new (...args: any[]): Client & StakingTxExtension}>(constructor: T): T {
  return class extends constructor {
    get staking() {
      return {
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
    }
  };
}

export function StakingExtension<T extends {new (...args: any[]): Client & StakingExtension}>(constructor: T): T {
  return class extends StakingTxExtension(StakingQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/cosmos.staking.v1beta1.MsgCreateValidator": "staking_create-validator",
    "/cosmos.staking.v1beta1.MsgEditValidator": "staking_edit-validator",
    "/cosmos.staking.v1beta1.MsgDelegate": "staking_delegate",
    "/cosmos.staking.v1beta1.MsgBeginRedelegate": "staking_redelegate",
    "/cosmos.staking.v1beta1.MsgUndelegate": "staking_unbond"
  };
}
