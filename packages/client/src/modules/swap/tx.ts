import {EncodeObject, GeneratedType} from "@shareledgerjs/signing";
import {DecCoin} from "@shareledgerjs/types/cosmos/base/v1beta1/coin";
import {TxEvent} from "@shareledgerjs/types/shareledger/swap/request";
import {
  MsgApproveIn,
  MsgApproveOut,
  MsgCancel,
  MsgCancelBatches,
  MsgCompleteBatch,
  MsgCreateSchema,
  MsgDeleteSchema,
  MsgDeposit,
  MsgReject,
  MsgRequestIn,
  MsgRequestOut,
  MsgUpdateSchema,
  MsgUpdateSwapFee,
  MsgWithdraw
} from "@shareledgerjs/types/shareledger/swap/tx";
import Long from "long";

import {BaseClient} from "../../baseclient";

export function createSwapTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.swap.MsgRequestIn", MsgRequestIn],
    ["/shareledger.swap.MsgRequestOut", MsgRequestOut],
    ["/shareledger.swap.MsgApproveIn", MsgApproveIn],
    ["/shareledger.swap.MsgApproveOut", MsgApproveOut],
    ["/shareledger.swap.MsgCancel", MsgCancel],
    ["/shareledger.swap.MsgReject", MsgReject],
    ["/shareledger.swap.MsgDeposit", MsgDeposit],
    ["/shareledger.swap.MsgWithdraw", MsgWithdraw],
    ["/shareledger.swap.MsgCreateSchema", MsgCreateSchema],
    ["/shareledger.swap.MsgUpdateSchema", MsgUpdateSchema],
    ["/shareledger.swap.MsgDeleteSchema", MsgDeleteSchema],
    ["/shareledger.swap.MsgCancelBatches", MsgCancelBatches],
    ["/shareledger.swap.MsgCompleteBatch", MsgCompleteBatch],
    ["/shareledger.swap.MsgUpdateSwapFee", MsgUpdateSwapFee]
  ];
}

export function createSwapActions(): Record<string, string> {
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
    "/shareledger.swap.MsgCompleteBatch": "swap_update-batch",
    "/shareledger.swap.MsgUpdateSwapFee": "swap_update-swap-fee"
  };
}

export interface MsgRequestInEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgRequestIn";
  readonly value: Partial<MsgRequestIn>;
}

export function isMsgRequestInEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRequestInEncodeObject {
  return (encodeObject as MsgRequestInEncodeObject).typeUrl === "/shareledger.swap.MsgRequestIn";
}

export interface MsgRequestOutEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgRequestOut";
  readonly value: Partial<MsgRequestOut>;
}

export function isMsgRequestOutEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRequestOutEncodeObject {
  return (encodeObject as MsgRequestOutEncodeObject).typeUrl === "/shareledger.swap.MsgRequestOut";
}

export interface MsgApproveInEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgApproveIn";
  readonly value: Partial<MsgApproveIn>;
}

export function isMsgApproveInEncodeObject(encodeObject: EncodeObject): encodeObject is MsgApproveInEncodeObject {
  return (encodeObject as MsgApproveInEncodeObject).typeUrl === "/shareledger.swap.MsgApproveIn";
}

export interface MsgApproveOutEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgApproveOut";
  readonly value: Partial<MsgApproveOut>;
}

export function isMsgApproveOutEncodeObject(encodeObject: EncodeObject): encodeObject is MsgApproveOutEncodeObject {
  return (encodeObject as MsgApproveOutEncodeObject).typeUrl === "/shareledger.swap.MsgApproveOut";
}

export interface MsgCancelEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCancel";
  readonly value: Partial<MsgCancel>;
}

export function isMsgCancelEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCancelEncodeObject {
  return (encodeObject as MsgCancelEncodeObject).typeUrl === "/shareledger.swap.MsgCancel";
}

export interface MsgRejectEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgReject";
  readonly value: Partial<MsgReject>;
}

export function isMsgRejectEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRejectEncodeObject {
  return (encodeObject as MsgRejectEncodeObject).typeUrl === "/shareledger.swap.MsgReject";
}

export interface MsgDepositEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgDeposit";
  readonly value: Partial<MsgDeposit>;
}

export function isMsgDepositEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDepositEncodeObject {
  return (encodeObject as MsgDepositEncodeObject).typeUrl === "/shareledger.swap.MsgDeposit";
}

export interface MsgWithdrawEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgWithdraw";
  readonly value: Partial<MsgWithdraw>;
}

export function isMsgWithdrawEncodeObject(encodeObject: EncodeObject): encodeObject is MsgWithdrawEncodeObject {
  return (encodeObject as MsgWithdrawEncodeObject).typeUrl === "/shareledger.swap.MsgWithdraw";
}

export interface MsgCreateSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCreateSchema";
  readonly value: Partial<MsgCreateSchema>;
}

export function isMsgCreateSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateSchemaEncodeObject {
  return (encodeObject as MsgCreateSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgCreateSchema";
}

export interface MsgUpdateSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgUpdateSchema";
  readonly value: Partial<MsgUpdateSchema>;
}

export function isMsgUpdateSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateSchemaEncodeObject {
  return (encodeObject as MsgUpdateSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgUpdateSchema";
}

export interface MsgDeleteSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgDeleteSchema";
  readonly value: Partial<MsgDeleteSchema>;
}

export function isMsgDeleteSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDeleteSchemaEncodeObject {
  return (encodeObject as MsgDeleteSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgDeleteSchema";
}

export interface MsgCancelBatchesEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCancelBatches";
  readonly value: Partial<MsgCancelBatches>;
}

export function isMsgCancelBatchesEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCancelBatchesEncodeObject {
  return (encodeObject as MsgCancelBatchesEncodeObject).typeUrl === "/shareledger.swap.MsgCancelBatches";
}

export interface MsgCompleteBatchEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCompleteBatch";
  readonly value: Partial<MsgCompleteBatch>;
}

export function isMsgCompleteBatchEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCompleteBatchEncodeObject {
  return (encodeObject as MsgCompleteBatchEncodeObject).typeUrl === "/shareledger.swap.MsgCompleteBatch";
}

export interface MsgUpdateSwapFeeEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgUpdateSwapFee";
  readonly value: Partial<MsgUpdateSwapFee>;
}

export function isMsgUpdateSwapFeeEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateSwapFeeEncodeObject {
  return (encodeObject as MsgUpdateSwapFeeEncodeObject).typeUrl === "/shareledger.swap.MsgUpdateSwapFee";
}

export interface SwapTxExtensionMethods {
  requestSwapIn(
    creator: string,
    srcAddress: string,
    destAddress: string,
    network: string,
    amount: DecCoin,
    events: TxEvent[]
  ): MsgRequestInEncodeObject;
  requestSwapOut(creator: string, srcAddress: string, destAddress: string, network: string, amount: DecCoin): MsgRequestOutEncodeObject;
  approveSwapIn(creator: string, ids: Long[]): MsgApproveInEncodeObject;
  approveSwapOut(creator: string, ids: Long[], signature: string): MsgApproveOutEncodeObject;
  deposit(creator: string, amount: DecCoin): MsgDepositEncodeObject;
  withdraw(creator: string, to: string, amount: DecCoin): MsgWithdrawEncodeObject;
  cancelSwap(creator: string, ids: Long[]): MsgCancelEncodeObject;
  rejectSwap(creator: string, ids: Long[]): MsgRejectEncodeObject;
  createSchema(
    creator: string,
    network: string,
    schema: string,
    decimals: number,
    fee?: {in?: DecCoin; out?: DecCoin}
  ): MsgCreateSchemaEncodeObject;
  updateSchema(
    creator: string,
    network: string,
    schema: string,
    decimals: number,
    fee?: {in?: DecCoin; out?: DecCoin}
  ): MsgUpdateSchemaEncodeObject;
  deleteSchema(creator: string, network: string): MsgDeleteSchemaEncodeObject;
  cancelBatches(creator: string, ids: Long[]): MsgCancelBatchesEncodeObject;
  completeBatch(batchId: Long, creator: string): MsgCompleteBatchEncodeObject;
  updateSwapFee(creator: string, network: string, fee?: {in?: DecCoin; out?: DecCoin}): MsgUpdateSwapFeeEncodeObject;
}

export interface SwapTxExtension {
  readonly swap: SwapTxExtensionMethods;
}

export function SwapTxExtension<T extends {new (...args: any[]): BaseClient & SwapTxExtension}>(constructor: T): T {
  return class extends constructor {
    override get swap() {
      return {
        ...super["swap"],
        requestSwapIn: (
          creator: string,
          srcAddress: string,
          destAddress: string,
          network: string,
          amount: DecCoin,
          events: TxEvent[]
        ): MsgRequestInEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgRequestIn",
            value: MsgRequestIn.fromPartial({
              creator,
              srcAddress,
              destAddress,
              network,
              amount,
              txEvents: [...events]
            })
          };
        },
        requestSwapOut: (
          creator: string,
          srcAddress: string,
          destAddress: string,
          network: string,
          amount: DecCoin
        ): MsgRequestOutEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgRequestOut",
            value: MsgRequestOut.fromPartial({
              creator,
              srcAddress,
              destAddress,
              network,
              amount
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
        completeBatch: (batchId: Long, creator: string): MsgCompleteBatchEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgCompleteBatch",
            value: MsgCompleteBatch.fromPartial({
              batchId,
              creator
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
