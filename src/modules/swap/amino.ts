/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {assertDefinedAndNotNull} from "@cosmjs/utils";
import {AminoConverter} from "../../amino/types";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {
  MsgApproveIn,
  MsgApproveOut,
  MsgCancel,
  MsgCreateSignSchema,
  MsgDeleteSignSchema,
  MsgDeposit,
  MsgReject,
  MsgRequestIn,
  MsgRequestOut,
  MsgUpdateSignSchema,
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

export interface AminoMsgCreateSignSchema extends AminoMsg {
  readonly type: "swap/CreateSignSchema";
  readonly value: {
    readonly creator: string;
    readonly network: string;
    readonly schema: string;
  };
}

export function isAminoMsgCreateSignSchema(msg: AminoMsg): msg is AminoMsgCreateSignSchema {
  return msg.type === "swap/MsgCreateSignSchema";
}

export interface MsgCreateSignSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgCreateSignSchema";
  readonly value: Partial<MsgCreateSignSchema>;
}

export function isMsgCreateSignSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateSignSchemaEncodeObject {
  return (encodeObject as MsgCreateSignSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgCreateSignSchema";
}

export interface AminoMsgUpdateSignSchema extends AminoMsg {
  readonly type: "swap/UpdateSignSchema";
  readonly value: {
    readonly creator: string;
    readonly network: string;
    readonly schema: string;
  };
}

export function isAminoMsgUpdateSignSchema(msg: AminoMsg): msg is AminoMsgUpdateSignSchema {
  return msg.type === "swap/MsgUpdateSignSchema";
}

export interface MsgUpdateSignSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgUpdateSignSchema";
  readonly value: Partial<MsgUpdateSignSchema>;
}

export function isMsgUpdateSignSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateSignSchemaEncodeObject {
  return (encodeObject as MsgUpdateSignSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgUpdateSignSchema";
}

export interface AminoMsgDeleteSignSchema extends AminoMsg {
  readonly type: "swap/DeleteSignSchema";
  readonly value: {
    readonly creator: string;
    readonly network: string;
  };
}

export function isAminoMsgDeleteSignSchema(msg: AminoMsg): msg is AminoMsgDeleteSignSchema {
  return msg.type === "swap/MsgDeleteSignSchema";
}

export interface MsgDeleteSignSchemaEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.swap.MsgDeleteSignSchema";
  readonly value: Partial<MsgDeleteSignSchema>;
}

export function isMsgDeleteSignSchemaEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDeleteSignSchemaEncodeObject {
  return (encodeObject as MsgDeleteSignSchemaEncodeObject).typeUrl === "/shareledger.swap.MsgDeleteSignSchema";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.swap.MsgRequestIn": {
      aminoType: "swap/RequestIn",
      toAmino: ({creator, srcAddress, destAddress, network, amount, fee}: MsgRequestIn): AminoMsgRequestIn["value"] => {
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
      fromAmino: ({creator, srcAddress, destAddress, network, amount, fee}: AminoMsgRequestIn["value"]): MsgRequestIn => {
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
    "/shareledger.swap.MsgRequestOut": {
      aminoType: "swap/RequestOut",
      toAmino: ({creator, destAddress, network, amount, fee}: MsgRequestOut): AminoMsgRequestOut["value"] => {
        assertDefinedAndNotNull(amount, "missing amount");
        assertDefinedAndNotNull(fee, "missing fee");
        return {
          creator,
          destAddress,
          network,
          amount,
          fee
        };
      },
      fromAmino: ({creator, destAddress, network, amount, fee}: AminoMsgRequestOut["value"]): MsgRequestOut => {
        return {
          creator,
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
    "/shareledger.swap.MsgCreateSignSchema": {
      aminoType: "swap/CreateSignSchema",
      toAmino: ({creator, network, schema}: MsgCreateSignSchema): AminoMsgCreateSignSchema["value"] => {
        return {
          creator,
          network,
          schema
        };
      },
      fromAmino: ({creator, network, schema}: AminoMsgCreateSignSchema["value"]): MsgCreateSignSchema => {
        return {
          creator,
          network,
          schema
        };
      }
    },
    "/shareledger.swap.MsgUpdateSignSchema": {
      aminoType: "swap/UpdateSignSchema",
      toAmino: ({creator, network, schema}: MsgUpdateSignSchema): AminoMsgUpdateSignSchema["value"] => {
        return {
          creator,
          network,
          schema
        };
      },
      fromAmino: ({creator, network, schema}: AminoMsgUpdateSignSchema["value"]): MsgUpdateSignSchema => {
        return {
          creator,
          network,
          schema
        };
      }
    },
    "/shareledger.swap.MsgDeleteSignSchema": {
      aminoType: "swap/DeleteSignSchema",
      toAmino: ({creator, network}: MsgDeleteSignSchema): AminoMsgDeleteSignSchema["value"] => {
        return {
          creator,
          network
        };
      },
      fromAmino: ({creator, network}: AminoMsgDeleteSignSchema["value"]): MsgDeleteSignSchema => {
        return {
          creator,
          network
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
    ["/shareledger.swap.MsgCreateSignSchema", MsgCreateSignSchema],
    ["/shareledger.swap.MsgUpdateSignSchema", MsgUpdateSignSchema],
    ["/shareledger.swap.MsgDeleteSignSchema", MsgDeleteSignSchema]
  ];
}
