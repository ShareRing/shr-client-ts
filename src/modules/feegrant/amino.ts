/* eslint-disable @typescript-eslint/no-unused-vars */
import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino";
import {MsgGrantAllowance, MsgRevokeAllowance} from "../../codec/cosmos/feegrant/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";

export interface AminoMsgGrantAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/MsgGrantAllowance";
  readonly value: {
    readonly grantee: string;
    readonly granter: string;
    readonly allowance?: Any;
  };
}

export function isAminoMsgGrantAllowance(msg: AminoMsg): msg is AminoMsgGrantAllowance {
  return msg.type === "cosmos-sdk/MsgGrantAllowance";
}

export interface AminoMsgRevokeAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/MsgRevokeAllowance";
  readonly value: {
    readonly grantee: string;
    readonly granter: string;
  };
}

export function isAminoMsgRevokeAllowance(msg: AminoMsg): msg is AminoMsgRevokeAllowance {
  return msg.type === "cosmos-sdk/MsgRevokeAllowance";
}

export function createFeegrantAminoConverters(): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
      aminoType: "cosmos-sdk/MsgGrantAllowance",
      toAmino: ({grantee, granter, allowance}: MsgGrantAllowance): AminoMsgGrantAllowance["value"] => ({
        grantee,
        granter,
        allowance
      }),
      fromAmino: ({grantee, granter, allowance}: AminoMsgGrantAllowance["value"]): MsgGrantAllowance => ({
        grantee,
        granter,
        allowance
      })
    },
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
      aminoType: "cosmos-sdk/MsgRevokeAllowance",
      toAmino: ({grantee, granter}: MsgRevokeAllowance): AminoMsgRevokeAllowance["value"] => ({
        grantee,
        granter
      }),
      fromAmino: ({grantee, granter}: AminoMsgRevokeAllowance["value"]): MsgRevokeAllowance => ({
        grantee,
        granter
      })
    }
  };
}
