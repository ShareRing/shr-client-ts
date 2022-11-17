/* eslint-disable @typescript-eslint/naming-convention */
import Long from "long";
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
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";
import {BaseClient} from "../../baseclient";

export type BondStatusString = keyof Pick<typeof BondStatus, "BOND_STATUS_BONDED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING"> | "";

export interface StakingQueryExtensionMethods {
  delegation(delegatorAddress: string, validatorAddress: string, height?: number): Promise<DelegationResponse | undefined>;
  delegatorDelegations(delegatorAddress: string, paginationKey?: Uint8Array, height?: number): Promise<QueryDelegatorDelegationsResponse>;
  delegatorUnbondingDelegations(
    delegatorAddress: string,
    paginationKey?: Uint8Array,
    height?: number
  ): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  delegatorValidator(delegatorAddress: string, validatorAddress: string, height?: number): Promise<Validator | undefined>;
  delegatorValidators(delegatorAddress: string, paginationKey?: Uint8Array, height?: number): Promise<QueryDelegatorValidatorsResponse>;
  historicalInfo(height: number): Promise<HistoricalInfo | undefined>;
  pool(height?: number): Promise<Pool | undefined>;
  redelegations(
    delegatorAddress: string,
    sourceValidatorAddress: string,
    destinationValidatorAddress: string,
    paginationKey?: Uint8Array,
    height?: number
  ): Promise<QueryRedelegationsResponse>;
  unbondingDelegation(delegatorAddress: string, validatorAddress: string, height?: number): Promise<UnbondingDelegation | undefined>;
  validator(validatorAddress: string, height?: number): Promise<Validator | undefined>;
  validatorDelegations(validatorAddress: string, paginationKey?: Uint8Array, height?: number): Promise<QueryValidatorDelegationsResponse>;
  validators(status: BondStatusString, paginationKey?: Uint8Array, height?: number): Promise<QueryValidatorsResponse>;
  validatorUnbondingDelegations(
    validatorAddress: string,
    paginationKey?: Uint8Array,
    height?: number
  ): Promise<QueryValidatorUnbondingDelegationsResponse>;
  validatorSetByHeight(height: Long, paginationKey?: Uint8Array): Promise<GetValidatorSetByHeightResponse>;
  latestValidatorSet(paginationKey?: Uint8Array): Promise<GetLatestValidatorSetResponse>;
  params(height?: number): Promise<Params | undefined>;
}

export interface StakingQueryExtension {
  readonly staking: StakingQueryExtensionMethods;
}

export function StakingQueryExtension<T extends {new (...args: any[]): BaseClient & StakingQueryExtension}>(constructor: T): T {
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
