import Long from "long";
import {Client} from "../../client";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {Params} from "../../codec/shareledger/swap/params";
import {QueryAllSchemasResponse, QueryBatchesResponse, QueryClientImpl, QuerySwapResponse} from "../../codec/shareledger/swap/query";
import {Schema} from "../../codec/shareledger/swap/schema";
import {
  MsgApproveIn,
  MsgApproveOut,
  MsgCancel,
  MsgCreateSchema,
  MsgDeleteSchema,
  MsgDeposit,
  MsgReject,
  MsgRequestIn,
  MsgRequestOut,
  MsgUpdateSchema,
  MsgWithdraw,
  MsgCancelBatches,
  MsgUpdateBatch,
  MsgUpdateSwapFee
} from "../../codec/shareledger/swap/tx";
import {createPagination, createProtobufRpcClient} from "../../query";
import {
  MsgApproveInEncodeObject,
  MsgApproveOutEncodeObject,
  MsgCancelEncodeObject,
  MsgCreateSchemaEncodeObject,
  MsgDeleteSchemaEncodeObject,
  MsgDepositEncodeObject,
  MsgRejectEncodeObject,
  MsgRequestInEncodeObject,
  MsgRequestOutEncodeObject,
  MsgUpdateSchemaEncodeObject,
  MsgWithdrawEncodeObject,
  MsgCancelBatchesEncodeObject,
  MsgUpdateBatchEncodeObject,
  MsgUpdateSwapFeeEncodeObject
} from "./amino";

export type SwapQueryExtension = {
  get swap(): {
    readonly params: () => Promise<Params | undefined>;
    readonly batches: (ids?: Long[], network?: string, status?: string, paginationKey?: Uint8Array) => Promise<QueryBatchesResponse>;
    readonly tokensAvailable: () => Promise<DecCoin | undefined>;
    readonly requests: (
      ids?: Long[],
      destAddr?: string,
      destNetwork?: string,
      srcAddr?: string,
      srcNetwork?: string,
      status?: string,
      paginationKey?: Uint8Array
    ) => Promise<QuerySwapResponse>;
    readonly schema: (network: string) => Promise<Schema | undefined>;
    readonly schemas: () => Promise<QueryAllSchemasResponse>;
  };
};

export type SwapTxExtension = {
  get swap(): {
    readonly requestSwapIn: (
      creator: string,
      destAddress: string,
      network: string,
      amount: DecCoin,
      fee: DecCoin,
      txHashes: string[]
    ) => MsgRequestInEncodeObject;
    readonly requestSwapOut: (
      creator: string,
      destAddress: string,
      network: string,
      amount: DecCoin,
      fee: DecCoin
    ) => MsgRequestOutEncodeObject;
    readonly approveSwapIn: (creator: string, ids: Long[]) => MsgApproveInEncodeObject;
    readonly approveSwapOut: (creator: string, ids: Long[], signature: string) => MsgApproveOutEncodeObject;
    readonly deposit: (creator: string, amount: DecCoin) => MsgDepositEncodeObject;
    readonly withdraw: (creator: string, to: string, amount: DecCoin) => MsgWithdrawEncodeObject;
    readonly cancelSwap: (creator: string, ids: Long[]) => MsgCancelEncodeObject;
    readonly rejectSwap: (creator: string, ids: Long[]) => MsgRejectEncodeObject;
    readonly createSchema: (
      creator: string,
      network: string,
      schema: string,
      decimals: number,
      fee?: {in?: DecCoin; out?: DecCoin}
    ) => MsgCreateSchemaEncodeObject;
    readonly updateSchema: (
      creator: string,
      network: string,
      schema: string,
      decimals: number,
      fee?: {in?: DecCoin; out?: DecCoin}
    ) => MsgUpdateSchemaEncodeObject;
    readonly deleteSchema: (creator: string, network: string) => MsgDeleteSchemaEncodeObject;
    readonly cancelBatches: (creator: string, ids: Long[]) => MsgCancelBatchesEncodeObject;
    readonly updateBatch: (batchId: Long, creator: string, network: string, status: string) => MsgUpdateBatchEncodeObject;
    readonly updateSwapFee: (creator: string, network: string, fee?: {in?: DecCoin; out?: DecCoin}) => MsgUpdateSwapFeeEncodeObject;
  };
};

export type SwapExtension = SwapQueryExtension & SwapTxExtension;

export function SwapQueryExtension<T extends {new (...args: any[]): Client & SwapQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get swap() {
      return {
        ...super["swap"],
        batches: async (ids?: Long[], network?: string, status?: string, paginationKey?: Uint8Array) => {
          return queryService.Batches({
            ids: ids || [],
            network: network || "",
            status: status || "",
            pagination: createPagination(paginationKey)
          });
        },
        tokensAvailable: async () => {
          return queryService.Balance({}).then((res) => res.balance);
        },
        requests: async (
          ids?: Long[],
          destAddr?: string,
          destNetwork?: string,
          srcAddr?: string,
          srcNetwork?: string,
          status?: string,
          paginationKey?: Uint8Array
        ) => {
          return queryService.Swap({
            ids: ids || [],
            destAddr: destAddr || "",
            destNetwork: destNetwork || "",
            srcAddr: srcAddr || "",
            srcNetwork: srcNetwork || "",
            status: status || "pending", // cannot be empty
            pagination: createPagination(paginationKey)
          });
        },
        schema: async (network: string) => {
          return queryService.Schema({network}).then((res) => res.schema);
        },
        schemas: async (paginationKey?: Uint8Array) => {
          return queryService.AllSchemas({pagination: createPagination(paginationKey)});
        }
      };
    }
  };
}

export function SwapTxExtension<T extends {new (...args: any[]): Client & SwapTxExtension}>(constructor: T): T {
  return class extends constructor {
    get swap() {
      return {
        ...super["swap"],
        requestSwapIn: (
          creator: string,
          destAddress: string,
          network: string,
          amount: DecCoin,
          fee: DecCoin,
          txHashes: string[]
        ): MsgRequestInEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgRequestIn",
            value: MsgRequestIn.fromPartial({
              creator,
              destAddress,
              network,
              amount,
              fee,
              txHashes
            })
          };
        },
        requestSwapOut: (
          creator: string,
          destAddress: string,
          network: string,
          amount: DecCoin,
          fee: DecCoin
        ): MsgRequestOutEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgRequestOut",
            value: MsgRequestOut.fromPartial({
              creator,
              destAddress,
              network,
              amount,
              fee
            })
          };
        },
        approveSwapIn: (creator: string, ids: Long[]): MsgApproveInEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgApproveIn",
            value: MsgApproveIn.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        approveSwapOut: (creator: string, ids: Long[], signature: string): MsgApproveOutEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgApproveOut",
            value: MsgApproveOut.fromPartial({
              creator,
              signature,
              ids: [...ids]
            })
          };
        },
        deposit: (creator: string, amount: DecCoin): MsgDepositEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgDeposit",
            value: MsgDeposit.fromPartial({
              creator,
              amount
            })
          };
        },
        withdraw: (creator: string, to: string, amount: DecCoin): MsgWithdrawEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgWithdraw",
            value: MsgWithdraw.fromPartial({
              creator,
              receiver: to,
              amount
            })
          };
        },
        cancelSwap: (creator: string, ids: Long[]): MsgCancelEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgCancel",
            value: MsgCancel.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        rejectSwap: (creator: string, ids: Long[]): MsgRejectEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgReject",
            value: MsgReject.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        createSchema: (
          creator: string,
          network: string,
          schema: string,
          decimals: number,
          fee?: {in?: DecCoin; out?: DecCoin}
        ): MsgCreateSchemaEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgCreateSchema",
            value: MsgCreateSchema.fromPartial({
              creator,
              network,
              schema,
              contractExponent: decimals,
              in: fee?.in,
              out: fee?.out
            })
          };
        },
        updateSchema: (
          creator: string,
          network: string,
          schema: string,
          decimals: number,
          fee?: {in?: DecCoin; out?: DecCoin}
        ): MsgUpdateSchemaEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgUpdateSchema",
            value: MsgUpdateSchema.fromPartial({
              creator,
              network,
              schema,
              contractExponent: decimals,
              in: fee?.in,
              out: fee?.out
            })
          };
        },
        deleteSchema: (creator: string, network: string): MsgDeleteSchemaEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgDeleteSchema",
            value: MsgDeleteSchema.fromPartial({
              creator,
              network
            })
          };
        },
        cancelBatches: (creator: string, ids: Long[]): MsgCancelBatchesEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgCancelBatches",
            value: MsgCancelBatches.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        updateBatch: (batchId: Long, creator: string, network: string, status: string): MsgUpdateBatchEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgUpdateBatch",
            value: MsgUpdateBatch.fromPartial({
              batchId,
              creator,
              network,
              status
            })
          };
        },
        updateSwapFee: (creator: string, network: string, fee?: {in?: DecCoin; out?: DecCoin}): MsgUpdateSwapFeeEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgUpdateSwapFee",
            value: MsgUpdateSwapFee.fromPartial({
              creator,
              network,
              in: fee?.in,
              out: fee?.out
            })
          };
        }
      };
    }
  };
}

export function SwapExtension<T extends {new (...args: any[]): Client & SwapExtension}>(constructor: T): T {
  return class extends SwapTxExtension(SwapQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/shareledger.swap.MsgRequestIn": "swap_request-in",
    "/shareledger.swap.MsgRequestOut": "swap_request-out",
    "/shareledger.swap.MsgApproveIn": "swap_approve-in",
    "/shareledger.swap.MsgApproveOut": "swap_approve-out",
    "/shareledger.swap.MsgCancel": "swap_cancel",
    "/shareledger.swap.MsgReject": "swap_reject",
    "/shareledger.swap.MsgDeposit": "swap_deposit",
    "/shareledger.swap.MsgWithdraw": "swap_withdraw",
    "/shareledger.swap.MsgCreateSchema": "swap_create-schema",
    "/shareledger.swap.MsgUpdateSchema": "swap_update-schema",
    "/shareledger.swap.MsgDeleteSchema": "swap_delete-schema",
    "/shareledger.swap.MsgCancelBatches": "swap_cancel-batches",
    "/shareledger.swap.MsgUpdateBatch": "swap_update-batch",
    "/shareledger.swap.MsgUpdateSwapFee": "swap_update-swap-fee"
  };
}
