/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {MsgUnjail} from "../../codec/cosmos/slashing/v1beta1/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgUnjail extends AminoMsg {
  readonly type: "cosmos-sdk/MsgUnjail";
  readonly value: {
    validatorAddr: string;
  };
}

export function isAminoMsgUnjail(msg: AminoMsg): msg is AminoMsgUnjail {
  return msg.type === "cosmos-sdk/MsgUnjail";
}

export interface MsgUnjailEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
  readonly value: Partial<MsgUnjail>;
}

export function isMsgUnjailEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUnjailEncodeObject {
  return (encodeObject as MsgUnjailEncodeObject).typeUrl === "/cosmos.slashing.v1beta1.MsgUnjail";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/cosmos.slashing.v1beta1.MsgUnjail": {
      aminoType: "cosmos-sdk/MsgUnjail",
      toAmino: ({validatorAddr}: MsgUnjail): AminoMsgUnjail["value"] => ({
        validatorAddr
      }),
      fromAmino: ({validatorAddr}: AminoMsgUnjail["value"]): MsgUnjail => ({
        validatorAddr
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];
}
