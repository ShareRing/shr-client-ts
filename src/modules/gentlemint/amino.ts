/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {
  MsgBurn,
  MsgBuyShr,
  MsgLoad,
  MsgSend,
  MsgSetExchange
} from "../../codec/shareledger/gentlemint/tx";
import {EncodeObject, GeneratedType} from "../../signing";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";

export interface AminoMsgBurn extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/Burn";
  readonly value: {
    readonly coins: DecCoin[];
    readonly creator: string;
  };
}

export function isAminoMsgBurn(msg: AminoMsg): msg is AminoMsgBurn {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/Burn";
}

export interface MsgBurnEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBurn";
  readonly value: Partial<MsgBurn>;
}

export function isMsgBurnEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBurnEncodeObject {
  return (encodeObject as MsgBurnEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBurn";
}

export interface AminoMsgLoad extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/Load";
  readonly value: {
    readonly address: string;
    readonly coins: DecCoin[];
    readonly creator: string;
  };
}

export function isAminoMsgLoad(msg: AminoMsg): msg is AminoMsgLoad {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/Load";
}

export interface MsgLoadEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgLoad";
  readonly value: Partial<MsgLoad>;
}

export function isMsgLoadEncodeObject(encodeObject: EncodeObject): encodeObject is MsgLoadEncodeObject {
  return (encodeObject as MsgLoadEncodeObject).typeUrl === "/shareledger.gentlemint.MsgLoad";
}

export interface AminoMsgSend extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/Send";
  readonly value: {
    readonly address: string;
    readonly coins: DecCoin[];
    readonly creator: string;
  };
}

export function isAminoMsgSend(msg: AminoMsg): msg is AminoMsgSend {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/Send";
}

export interface MsgSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgSend";
  readonly value: Partial<MsgSend>;
}

export function isMsgSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendEncodeObject {
  return (encodeObject as MsgSendEncodeObject).typeUrl === "/shareledger.gentlemint.MsgSend";
}

export interface AminoMsgBuyShr extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/BuyShr";
  readonly value: {
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgBuyShr(msg: AminoMsg): msg is AminoMsgBuyShr {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/BuyShr";
}

export interface MsgBuyShrEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBuyShr";
  readonly value: Partial<MsgBuyShr>;
}

export function isMsgBuyShrEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBuyShrEncodeObject {
  return (encodeObject as MsgBuyShrEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBuyShr";
}

export interface AminoMsgSetExchange extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/SetExchange";
  readonly value: {
    readonly creator: string;
    readonly rate: string;
  };
}

export function isAminoMsgSetExchange(msg: AminoMsg): msg is AminoMsgSetExchange {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/SetExchange";
}

export interface MsgSetExchangeEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgSetExchange";
  readonly value: Partial<MsgSetExchange>;
}

export function isMsgSetExchangeEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSetExchangeEncodeObject {
  return (encodeObject as MsgSetExchangeEncodeObject).typeUrl === "/shareledger.gentlemint.MsgSetExchange";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.gentlemint.MsgBurn": {
      aminoType: "gentlemint/Burn",
      toAmino: ({coins, creator}: MsgBurn): AminoMsgBurn["value"] => ({
        coins,
        creator
      }),
      fromAmino: ({coins, creator}: AminoMsgBurn["value"]): MsgBurn => ({
        coins,
        creator
      })
    },
    "/shareledger.gentlemint.MsgLoad": {
      aminoType: "gentlemint/Load",
      toAmino: ({address, coins, creator}: MsgLoad): AminoMsgLoad["value"] => ({
        address,
        coins,
        creator
      }),
      fromAmino: ({address, coins, creator}: AminoMsgLoad["value"]): MsgLoad => ({
        address,
        coins,
        creator
      })
    },
    "/shareledger.gentlemint.MsgSend": {
      aminoType: "gentlemint/Send",
      toAmino: ({address, coins, creator}: MsgSend): AminoMsgSend["value"] => ({
        address,
        coins,
        creator
      }),
      fromAmino: ({address, coins, creator}: AminoMsgSend["value"]): MsgSend => ({
        address,
        coins,
        creator
      })
    },
    "/shareledger.gentlemint.MsgBuyShr": {
      aminoType: "gentlemint/BuyShr",
      toAmino: ({amount, creator}: MsgBuyShr): AminoMsgBuyShr["value"] => ({
        amount,
        creator
      }),
      fromAmino: ({amount, creator}: AminoMsgBuyShr["value"]): MsgBuyShr => ({
        amount,
        creator
      })
    },
    "/shareledger.gentlemint.MsgSetExchange": {
      aminoType: "gentlemint/SetExchange",
      toAmino: ({creator, rate}: MsgSetExchange): AminoMsgSetExchange["value"] => ({
        creator,
        rate
      }),
      fromAmino: ({creator, rate}: AminoMsgSetExchange["value"]): MsgSetExchange => ({
        creator,
        rate
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.gentlemint.MsgBurn", MsgBurn],
    ["/shareledger.gentlemint.MsgLoad", MsgLoad],
    ["/shareledger.gentlemint.MsgSend", MsgSend],
    ["/shareledger.gentlemint.MsgBuyShr", MsgBuyShr],
    ["/shareledger.gentlemint.MsgSetExchange", MsgSetExchange]
  ];
}
