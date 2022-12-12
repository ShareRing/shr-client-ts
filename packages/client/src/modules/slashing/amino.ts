/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "@shareledgerjs/amino";
import {MsgUnjail} from "@shareledgerjs/types/cosmos/slashing/v1beta1/tx";

export interface AminoMsgUnjail extends AminoMsg {
  readonly type: "cosmos-sdk/MsgUnjail";
  readonly value: {
    validatorAddr: string;
  };
}

export function isAminoMsgUnjail(msg: AminoMsg): msg is AminoMsgUnjail {
  return msg.type === "cosmos-sdk/MsgUnjail";
}

export function createSlashingAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
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
