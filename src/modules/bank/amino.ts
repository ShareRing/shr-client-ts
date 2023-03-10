/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {Input, Output} from "../../codec/cosmos/bank/v1beta1/bank";
import {MsgMultiSend, MsgSend} from "../../codec/cosmos/bank/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgSend extends AminoMsg {
  readonly type: "cosmos-sdk/MsgSend";
  readonly value: {
    /** Bech32 account address */
    readonly from_address: string;
    /** Bech32 account address */
    readonly to_address: string;
    readonly amount: readonly Coin[];
  };
}

export function isAminoMsgSend(msg: AminoMsg): msg is AminoMsgSend {
  return msg.type === "cosmos-sdk/MsgSend";
}

export interface MsgSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.bank.v1beta1.MsgSend";
  readonly value: Partial<MsgSend>;
}

export function isMsgSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendEncodeObject {
  return (encodeObject as MsgSendEncodeObject).typeUrl === "/cosmos.bank.v1beta1.MsgSend";
}

/** A high level transaction of the coin module */
export interface AminoMsgMultiSend extends AminoMsg {
  readonly type: "cosmos-sdk/MsgMultiSend";
  readonly value: {
    readonly inputs: readonly Input[];
    readonly outputs: readonly Output[];
  };
}

export function isAminoMsgMultiSend(msg: AminoMsg): msg is AminoMsgMultiSend {
  return msg.type === "cosmos-sdk/MsgMultiSend";
}

export interface MsgMultiSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.bank.v1beta1.MsgMuliSend";
  readonly value: Partial<MsgMultiSend>;
}

export function isMsgMultiSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgMultiSendEncodeObject {
  return (encodeObject as MsgMultiSendEncodeObject).typeUrl === "/cosmos.bank.v1beta1.MsgMuliSend";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/cosmos.bank.v1beta1.MsgSend": {
      aminoType: "cosmos-sdk/MsgSend",
      toAmino: ({fromAddress, toAddress, amount}: MsgSend): AminoMsgSend["value"] => ({
        from_address: fromAddress,
        to_address: toAddress,
        amount: [...amount]
      }),
      fromAmino: ({from_address, to_address, amount}: AminoMsgSend["value"]): MsgSend => ({
        fromAddress: from_address,
        toAddress: to_address,
        amount: [...amount]
      })
    },
    "/cosmos.bank.v1beta1.MsgMultiSend": {
      aminoType: "cosmos-sdk/MsgMultiSend",
      toAmino: ({inputs, outputs}: MsgMultiSend): AminoMsgMultiSend["value"] => ({
        inputs: inputs.map((input) => ({
          address: input.address,
          coins: [...input.coins]
        })),
        outputs: outputs.map((output) => ({
          address: output.address,
          coins: [...output.coins]
        }))
      }),
      fromAmino: ({inputs, outputs}: AminoMsgMultiSend["value"]): MsgMultiSend => ({
        inputs: inputs.map((input) => ({
          address: input.address,
          coins: [...input.coins]
        })),
        outputs: outputs.map((output) => ({
          address: output.address,
          coins: [...output.coins]
        }))
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.base.v1beta1.Coin", Coin],
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]
  ];
}
