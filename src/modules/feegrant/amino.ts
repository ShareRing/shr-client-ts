/* eslint-disable @typescript-eslint/no-unused-vars */
import { AminoMsg } from "@cosmjs/amino";
import { AminoConverter } from "../../amino/types";
import { MsgGrantAllowance, MsgRevokeAllowance } from "../../codec/cosmos/feegrant/v1beta1/tx";
import { Any } from "../../codec/google/protobuf/any";
import { EncodeObject, GeneratedType } from "../../signing";

export interface AminoMsgGrantAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/MsgGrantAllowance";
  readonly value: {
    readonly grantee: string;
    readonly granter: string;
    readonly allowance?: Any;
  };
}

export interface MsgGrantAllowanceEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
  readonly value: Partial<MsgGrantAllowance>;
}

export interface AminoMsgRevokeAllowance extends AminoMsg {
  readonly type: "cosmos-sdk/MsgRevokeAllowance";
  readonly value: {
    readonly grantee: string;
    readonly granter: string;
  };
}

export interface MsgRevokeAllowanceEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
  readonly value: Partial<MsgRevokeAllowance>;
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/cosmos.gov.v1beta1.MsgGrantAllowance": {
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
    "/cosmos.gov.v1beta1.MsgRevokeAllowance": {
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

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance]
  ];
}
