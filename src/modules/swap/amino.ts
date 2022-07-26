/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {assertDefinedAndNotNull} from "@cosmjs/utils";
import Long from "long";
import {AminoConverter} from "../../amino/types";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {
  MsgApproveIn,
  MsgApproveOut,
  MsgCancel,
  MsgCancelBatches,
  MsgCreateSchema,
  MsgDeleteSchema,
  MsgDeposit,
  MsgReject,
  MsgRequestIn,
  MsgRequestOut,
  MsgCompleteBatch,
  MsgUpdateSchema,
  MsgUpdateSwapFee,
  MsgWithdraw
} from "../../codec/shareledger/swap/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgRequestIn extends AminoMsg {
  readonly type: "swap/RequestIn";
  readonly value: {
    readonly creator: string;
    readonly srcAddress: string;
    readonly destAddress: string;
    readonly network: string;
    readonly amount: DecCoin;
    readonly fee: DecCoin;
    readonly txHashes: string[];
  };
}

export function isAminoMsgRequestIn(msg: AminoMsg): msg is AminoMsgRequestIn {
  return msg.type === "swap/MsgRequestIn";
}

export interface MsgRequestInEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgRequestIn";
  readonly value: Partial<MsgRequestIn>;
}

export function isMsgRequestInEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRequestInEncodeObject {
  return (encodeObject as MsgRequestInEncodeObject).typeUrl === "/shareledger.swap.MsgRequestIn";
}

export interface AminoMsgRequestOut extends AminoMsg {
  readonly type: "swap/RequestOut";
  readonly value: {
    readonly creator: string;
    readonly srcAddress: string;
    readonly destAddress: string;
    readonly network: string;
    readonly amount: DecCoin;
    readonly fee: DecCoin;
  };
}

export function isAminoMsgRequestOut(msg: AminoMsg): msg is AminoMsgRequestOut {
  return msg.type === "swap/MsgRequestOut";
}

export interface MsgRequestOutEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgRequestOut";
  readonly value: Partial<MsgRequestOut>;
}

export function isMsgRequestOutEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRequestOutEncodeObject {
  return (encodeObject as MsgRequestOutEncodeObject).typeUrl === "/shareledger.swap.MsgRequestOut";
}

export interface AminoMsgApproveIn extends AminoMsg {
  readonly type: "swap/ApproveIn";
  readonly value: {
    readonly creator: string;
    readonly ids: Long[];
  };
}

export function isAminoMsgApproveIn(msg: AminoMsg): msg is AminoMsgApproveIn {
  return msg.type === "swap/MsgApproveIn";
}

export interface MsgApproveInEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgApproveIn";
  readonly value: Partial<MsgApproveIn>;
}

export function isMsgApproveInEncodeObject(encodeObject: EncodeObject): encodeObject is MsgApproveInEncodeObject {
  return (encodeObject as MsgApproveInEncodeObject).typeUrl === "/shareledger.swap.MsgApproveIn";
}

export interface AminoMsgApproveOut extends AminoMsg {
  readonly type: "swap/ApproveOut";
  readonly value: {
    readonly creator: string;
    readonly ids: Long[];
    readonly signature: string;
  };
}

export function isAminoMsgApproveOut(msg: AminoMsg): msg is AminoMsgApproveOut {
  return msg.type === "swap/MsgApproveOut";
}

export interface MsgApproveOutEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgApproveOut";
  readonly value: Partial<MsgApproveOut>;
}

export function isMsgApproveOutEncodeObject(encodeObject: EncodeObject): encodeObject is MsgApproveOutEncodeObject {
  return (encodeObject as MsgApproveOutEncodeObject).typeUrl === "/shareledger.swap.MsgApproveOut";
}

export interface AminoMsgCancel extends AminoMsg {
  readonly type: "swap/Cancel";
  readonly value: {
    readonly creator: string;
    readonly ids: Long[];
  };
}

export function isAminoMsgCancel(msg: AminoMsg): msg is AminoMsgCancel {
  return msg.type === "swap/MsgCancel";
}

export interface MsgCancelEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCancel";
  readonly value: Partial<MsgCancel>;
}

export function isMsgCancelEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCancelEncodeObject {
  return (encodeObject as MsgCancelEncodeObject).typeUrl === "/shareledger.swap.MsgCancel";
}

export interface AminoMsgReject extends AminoMsg {
  readonly type: "swap/Reject";
  readonly value: {
    readonly creator: string;
    readonly ids: Long[];
  };
}

export function isAminoMsgReject(msg: AminoMsg): msg is AminoMsgReject {
  return msg.type === "swap/MsgReject";
}

export interface MsgRejectEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgReject";
  readonly value: Partial<MsgReject>;
}

export function isMsgRejectEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRejectEncodeObject {
  return (encodeObject as MsgRejectEncodeObject).typeUrl === "/shareledger.swap.MsgReject";
}

export interface AminoMsgDeposit extends AminoMsg {
  readonly type: "swap/Deposit";
  readonly value: {
    readonly creator: string;
    readonly amount: DecCoin;
  };
}

export function isAminoMsgDeposit(msg: AminoMsg): msg is AminoMsgDeposit {
  return msg.type === "swap/MsgDeposit";
}

export interface MsgDepositEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgDeposit";
  readonly value: Partial<MsgDeposit>;
}

export function isMsgDepositEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDepositEncodeObject {
  return (encodeObject as MsgDepositEncodeObject).typeUrl === "/shareledger.swap.MsgDeposit";
}

export interface AminoMsgWithdraw extends AminoMsg {
  readonly type: "swap/Withdraw";
  readonly value: {
    readonly creator: string;
    readonly to: string;
    readonly amount: DecCoin;
  };
}

export function isAminoMsgWithdraw(msg: AminoMsg): msg is AminoMsgWithdraw {
  return msg.type === "swap/MsgWithdraw";
}

export interface MsgWithdrawEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgWithdraw";
  readonly value: Partial<MsgWithdraw>;
}

export function isMsgWithdrawEncodeObject(encodeObject: EncodeObject): encodeObject is MsgWithdrawEncodeObject {
  return (encodeObject as MsgWithdrawEncodeObject).typeUrl === "/shareledger.swap.MsgWithdraw";
}

export interface AminoMsgCreateSchema extends AminoMsg {
  readonly type: "swap/CreateSchema";
  readonly value: {
    readonly creator: string;
    readonly network: string;
    readonly schema: string;
    readonly exponent: number;
    readonly fee?: {
      readonly in?: DecCoin;
      readonly out?: DecCoin;
    };
  };
}

export function isAminoMsgCreateSchema(msg: AminoMsg): msg is AminoMsgCreateSchema {
  return msg.type === "swap/MsgCreateSchema";
}

export interface MsgCreateSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCreateSchema";
  readonly value: Partial<MsgCreateSchema>;
}

export function isMsgCreateSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateSchemaEncodeObject {
  return (encodeObject as MsgCreateSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgCreateSchema";
}

export interface AminoMsgUpdateSchema extends AminoMsg {
  readonly type: "swap/UpdateSchema";
  readonly value: {
    readonly creator: string;
    readonly network: string;
    readonly schema: string;
    readonly decimals: number;
    readonly fee?: {
      readonly in?: DecCoin;
      readonly out?: DecCoin;
    };
  };
}

export function isAminoMsgUpdateSchema(msg: AminoMsg): msg is AminoMsgUpdateSchema {
  return msg.type === "swap/MsgUpdateSchema";
}

export interface MsgUpdateSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgUpdateSchema";
  readonly value: Partial<MsgUpdateSchema>;
}

export function isMsgUpdateSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateSchemaEncodeObject {
  return (encodeObject as MsgUpdateSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgUpdateSchema";
}

export interface AminoMsgDeleteSchema extends AminoMsg {
  readonly type: "swap/DeleteSchema";
  readonly value: {
    readonly creator: string;
    readonly network: string;
  };
}

export function isAminoMsgDeleteSchema(msg: AminoMsg): msg is AminoMsgDeleteSchema {
  return msg.type === "swap/MsgDeleteSchema";
}

export interface MsgDeleteSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgDeleteSchema";
  readonly value: Partial<MsgDeleteSchema>;
}

export function isMsgDeleteSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDeleteSchemaEncodeObject {
  return (encodeObject as MsgDeleteSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgDeleteSchema";
}

export interface AminoMsgCancelBatches extends AminoMsg {
  readonly type: "swap/CancelBatches";
  readonly value: {
    readonly creator: string;
    readonly ids: Long[];
  };
}

export function isAminoMsgCancelBatches(msg: AminoMsg): msg is AminoMsgCancelBatches {
  return msg.type === "swap/MsgCancelBatches";
}

export interface MsgCancelBatchesEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCancelBatches";
  readonly value: Partial<MsgCancelBatches>;
}

export function isMsgCancelBatchesEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCancelBatchesEncodeObject {
  return (encodeObject as MsgCancelBatchesEncodeObject).typeUrl === "/shareledger.swap.MsgCancelBatches";
}

export interface AminoMsgCompleteBatch extends AminoMsg {
  readonly type: "swap/CompleteBatch";
  readonly value: {
    readonly creator: string;
    readonly batchId: Long;
  };
}

export function isAminoMsgCompleteBatch(msg: AminoMsg): msg is AminoMsgCompleteBatch {
  return msg.type === "swap/MsgCompleteBatch";
}

export interface MsgCompleteBatchEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCompleteBatch";
  readonly value: Partial<MsgCompleteBatch>;
}

export function isMsgCompleteBatchEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCompleteBatchEncodeObject {
  return (encodeObject as MsgCompleteBatchEncodeObject).typeUrl === "/shareledger.swap.MsgCompleteBatch";
}

export interface AminoMsgUpdateSwapFee extends AminoMsg {
  readonly type: "swap/UpdateSwapFee";
  readonly value: {
    readonly creator: string;
    readonly network: string;
    readonly fee?: {
      readonly in?: DecCoin;
      readonly out?: DecCoin;
    };
  };
}

export function isAminoMsgUpdateSwapFee(msg: AminoMsg): msg is AminoMsgUpdateSwapFee {
  return msg.type === "swap/MsgUpdateSwapFee";
}

export interface MsgUpdateSwapFeeEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgUpdateSwapFee";
  readonly value: Partial<MsgUpdateSwapFee>;
}

export function isMsgUpdateSwapFeeEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateSwapFeeEncodeObject {
  return (encodeObject as MsgUpdateSwapFeeEncodeObject).typeUrl === "/shareledger.swap.MsgUpdateSwapFee";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.swap.MsgRequestIn": {
      aminoType: "swap/RequestIn",
      toAmino: ({creator, srcAddress, destAddress, network, amount, fee, txHashes}: MsgRequestIn): AminoMsgRequestIn["value"] => {
        assertDefinedAndNotNull(amount, "missing amount");
        assertDefinedAndNotNull(fee, "missing fee");
        return {
          creator,
          srcAddress,
          destAddress,
          network,
          amount,
          fee,
          txHashes: [...txHashes]
        };
      },
      fromAmino: ({creator, srcAddress, destAddress, network, amount, fee, txHashes}: AminoMsgRequestIn["value"]): MsgRequestIn => {
        return {
          creator,
          srcAddress,
          destAddress,
          network,
          amount,
          fee,
          txHashes: [...txHashes]
        };
      }
    },
    "/shareledger.swap.MsgRequestOut": {
      aminoType: "swap/RequestOut",
      toAmino: ({creator, srcAddress, destAddress, network, amount, fee}: MsgRequestOut): AminoMsgRequestOut["value"] => {
        assertDefinedAndNotNull(amount, "missing amount");
        assertDefinedAndNotNull(fee, "missing fee");
        return {
          creator,
          srcAddress,
          destAddress,
          network,
          amount,
          fee
        };
      },
      fromAmino: ({creator, srcAddress, destAddress, network, amount, fee}: AminoMsgRequestOut["value"]): MsgRequestOut => {
        return {
          creator,
          srcAddress,
          destAddress,
          network,
          amount,
          fee
        };
      }
    },
    "/shareledger.swap.MsgApproveIn": {
      aminoType: "swap/ApproveIn",
      toAmino: ({creator, ids}: MsgApproveIn): AminoMsgApproveIn["value"] => {
        return {
          creator,
          ids: [...ids]
        };
      },
      fromAmino: ({creator, ids}: AminoMsgApproveIn["value"]): MsgApproveIn => {
        return {
          creator,
          ids: [...ids]
        };
      }
    },
    "/shareledger.swap.MsgApproveOut": {
      aminoType: "swap/ApproveOut",
      toAmino: ({creator, ids, signature}: MsgApproveOut): AminoMsgApproveOut["value"] => {
        return {
          creator,
          ids: [...ids],
          signature
        };
      },
      fromAmino: ({creator, ids, signature}: AminoMsgApproveOut["value"]): MsgApproveOut => {
        return {
          creator,
          ids: [...ids],
          signature
        };
      }
    },
    "/shareledger.swap.MsgCancel": {
      aminoType: "swap/Cancel",
      toAmino: ({creator, ids}: MsgCancel): AminoMsgCancel["value"] => {
        return {
          creator,
          ids: [...ids]
        };
      },
      fromAmino: ({creator, ids}: AminoMsgCancel["value"]): MsgCancel => {
        return {
          creator,
          ids: [...ids]
        };
      }
    },
    "/shareledger.swap.MsgReject": {
      aminoType: "swap/Reject",
      toAmino: ({creator, ids}: MsgReject): AminoMsgReject["value"] => {
        return {
          creator,
          ids: [...ids]
        };
      },
      fromAmino: ({creator, ids}: AminoMsgReject["value"]): MsgReject => {
        return {
          creator,
          ids: [...ids]
        };
      }
    },
    "/shareledger.swap.MsgDeposit": {
      aminoType: "swap/Deposit",
      toAmino: ({creator, amount}: MsgDeposit): AminoMsgDeposit["value"] => {
        assertDefinedAndNotNull(amount, "missing amount");
        return {
          creator,
          amount
        };
      },
      fromAmino: ({creator, amount}: AminoMsgDeposit["value"]): MsgDeposit => {
        return {
          creator,
          amount
        };
      }
    },
    "/shareledger.swap.MsgWithdraw": {
      aminoType: "swap/Withdraw",
      toAmino: ({creator, receiver, amount}: MsgWithdraw): AminoMsgWithdraw["value"] => {
        assertDefinedAndNotNull(amount, "missing amount");
        return {
          creator,
          to: receiver,
          amount
        };
      },
      fromAmino: ({creator, to, amount}: AminoMsgWithdraw["value"]): MsgWithdraw => {
        return {
          creator,
          receiver: to,
          amount
        };
      }
    },
    "/shareledger.swap.MsgCreateSchema": {
      aminoType: "swap/CreateSchema",
      toAmino: ({creator, network, schema, contractExponent, ...msg}: MsgCreateSchema): AminoMsgCreateSchema["value"] => {
        return {
          creator,
          network,
          schema,
          exponent: contractExponent,
          fee: {
            in: msg.in,
            out: msg.out
          }
        };
      },
      fromAmino: ({creator, network, schema, exponent, fee}: AminoMsgCreateSchema["value"]): MsgCreateSchema => {
        return {
          creator,
          network,
          schema,
          contractExponent: exponent,
          in: fee?.in,
          out: fee?.out
        };
      }
    },
    "/shareledger.swap.MsgUpdateSchema": {
      aminoType: "swap/UpdateSchema",
      toAmino: ({creator, network, schema, contractExponent}: MsgUpdateSchema): AminoMsgUpdateSchema["value"] => {
        return {
          creator,
          network,
          schema,
          decimals: contractExponent
        };
      },
      fromAmino: ({creator, network, schema, decimals}: AminoMsgUpdateSchema["value"]): MsgUpdateSchema => {
        return {
          creator,
          network,
          schema,
          contractExponent: decimals
        };
      }
    },
    "/shareledger.swap.MsgDeleteSchema": {
      aminoType: "swap/DeleteSchema",
      toAmino: ({creator, network}: MsgDeleteSchema): AminoMsgDeleteSchema["value"] => {
        return {
          creator,
          network
        };
      },
      fromAmino: ({creator, network}: AminoMsgDeleteSchema["value"]): MsgDeleteSchema => {
        return {
          creator,
          network
        };
      }
    },
    "/shareledger.swap.MsgCompleteBatch": {
      aminoType: "swap/CompleteBatch",
      toAmino: ({batchId, creator}: MsgCompleteBatch): AminoMsgCompleteBatch["value"] => {
        return {
          batchId,
          creator
        };
      },
      fromAmino: ({batchId, creator}: AminoMsgCompleteBatch["value"]): MsgCompleteBatch => {
        return {
          batchId,
          creator
        };
      }
    },
    "/shareledger.swap.MsgCancelBatches": {
      aminoType: "swap/CancelBatches",
      toAmino: ({creator, ids}: MsgCancelBatches): AminoMsgCancelBatches["value"] => {
        return {
          creator,
          ids: [...ids]
        };
      },
      fromAmino: ({creator, ids}: AminoMsgCancelBatches["value"]): MsgCancelBatches => {
        return {
          creator,
          ids: [...ids]
        };
      }
    },
    "/shareledger.swap.MsgUpdateSwapFee": {
      aminoType: "swap/UpdateSwapFee",
      toAmino: ({creator, network, ...msg}: MsgUpdateSwapFee): AminoMsgUpdateSwapFee["value"] => {
        return {
          creator,
          network,
          fee: {
            in: msg.in,
            out: msg.out
          }
        };
      },
      fromAmino: ({creator, network, fee}: AminoMsgUpdateSwapFee["value"]): MsgUpdateSwapFee => {
        return {
          creator,
          network,
          in: fee?.in,
          out: fee?.out
        };
      }
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
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
