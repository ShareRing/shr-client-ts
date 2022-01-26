/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {
  MsgBurnShr,
  MsgBurnShrp,
  MsgBuyCent,
  MsgBuyShr,
  MsgLoadShr,
  MsgLoadShrp,
  MsgSendShr,
  MsgSendShrp,
  MsgSetExchange
} from "../../codec/shareledger/gentlemint/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgBurnShr extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/BurnShr";
  readonly value: {
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgBurnShr(msg: AminoMsg): msg is AminoMsgBurnShr {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/BurnShr";
}

export interface MsgBurnShrEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBurnShr";
  readonly value: Partial<MsgBurnShr>;
}

export function isMsgBurnShrEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBurnShrEncodeObject {
  return (encodeObject as MsgBurnShrEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBurnShr";
}

export interface AminoMsgBurnShrp extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/BurnShrp";
  readonly value: {
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgBurnShrp(msg: AminoMsg): msg is AminoMsgBurnShrp {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/BurnShrp";
}

export interface MsgBurnShrpEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBurnShrp";
  readonly value: Partial<MsgBurnShrp>;
}

export function isMsgBurnShrpEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBurnShrpEncodeObject {
  return (encodeObject as MsgBurnShrpEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBurnShrp";
}

export interface AminoMsgLoadShr extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/LoadShr";
  readonly value: {
    readonly address: string;
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgLoadShr(msg: AminoMsg): msg is AminoMsgLoadShr {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/LoadShr";
}

export interface MsgLoadShrEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgLoadShr";
  readonly value: Partial<MsgLoadShr>;
}

export function isMsgLoadShrEncodeObject(encodeObject: EncodeObject): encodeObject is MsgLoadShrEncodeObject {
  return (encodeObject as MsgLoadShrEncodeObject).typeUrl === "/shareledger.gentlemint.MsgLoadShr";
}

export interface AminoMsgLoadShrp extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/LoadShrp";
  readonly value: {
    readonly address: string;
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgLoadShrp(msg: AminoMsg): msg is AminoMsgLoadShrp {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/LoadShrp";
}

export interface MsgLoadShrpEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgLoadShrp";
  readonly value: Partial<MsgLoadShrp>;
}

export function isMsgLoadShrpEncodeObject(encodeObject: EncodeObject): encodeObject is MsgLoadShrpEncodeObject {
  return (encodeObject as MsgLoadShrpEncodeObject).typeUrl === "/shareledger.gentlemint.MsgLoadShrp";
}

export interface AminoMsgSendShr extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/SendShr";
  readonly value: {
    readonly address: string;
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgSendShr(msg: AminoMsg): msg is AminoMsgSendShr {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/SendShr";
}

export interface MsgSendShrEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgSendShr";
  readonly value: Partial<MsgSendShr>;
}

export function isMsgSendShrEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendShrEncodeObject {
  return (encodeObject as MsgSendShrEncodeObject).typeUrl === "/shareledger.gentlemint.MsgSendShr";
}

export interface AminoMsgSendShrp extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/SendShrp";
  readonly value: {
    readonly address: string;
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgSendShrp(msg: AminoMsg): msg is AminoMsgSendShrp {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/SendShrp";
}

export interface MsgSendShrpEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgSendShrp";
  readonly value: Partial<MsgSendShrp>;
}

export function isMsgSendShrpEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendShrpEncodeObject {
  return (encodeObject as MsgSendShrpEncodeObject).typeUrl === "/shareledger.gentlemint.MsgSendShrp";
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

export interface AminoMsgBuyCent extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "gentlemint/BuyCent";
  readonly value: {
    readonly amount: string;
    readonly creator: string;
  };
}

export function isAminoMsgBuyCent(msg: AminoMsg): msg is AminoMsgBuyCent {
  // NOTE: Type string and names diverge here!
  return msg.type === "gentlemint/BuyCent";
}

export interface MsgBuyCentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBuyCent";
  readonly value: Partial<MsgBuyCent>;
}

export function isMsgBuyCentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBuyCentEncodeObject {
  return (encodeObject as MsgBuyCentEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBuyCent";
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
    "/shareledger.gentlemint.MsgBurnShr": {
      aminoType: "gentlemint/BurnShr",
      toAmino: ({amount, creator}: MsgBurnShr): AminoMsgBurnShr["value"] => ({
        amount,
        creator
      }),
      fromAmino: ({amount, creator}: AminoMsgBurnShr["value"]): MsgBurnShr => ({
        amount,
        creator
      })
    },
    "/shareledger.gentlemint.MsgBurnShrp": {
      aminoType: "gentlemint/BurnShrp",
      toAmino: ({amount, creator}: MsgBurnShrp): AminoMsgBurnShrp["value"] => ({
        amount,
        creator
      }),
      fromAmino: ({amount, creator}: AminoMsgBurnShrp["value"]): MsgBurnShrp => ({
        amount,
        creator
      })
    },
    "/shareledger.gentlemint.MsgLoadShr": {
      aminoType: "gentlemint/LoadShr",
      toAmino: ({address, amount, creator}: MsgLoadShr): AminoMsgLoadShr["value"] => ({
        address,
        amount,
        creator
      }),
      fromAmino: ({address, amount, creator}: AminoMsgLoadShr["value"]): MsgLoadShr => ({
        address,
        amount,
        creator
      })
    },
    "/shareledger.gentlemint.MsgLoadShrp": {
      aminoType: "gentlemint/LoadShrp",
      toAmino: ({address, amount, creator}: MsgLoadShrp): AminoMsgLoadShrp["value"] => ({
        address,
        amount,
        creator
      }),
      fromAmino: ({address, amount, creator}: AminoMsgLoadShrp["value"]): MsgLoadShrp => ({
        address,
        amount,
        creator
      })
    },
    "/shareledger.gentlemint.MsgSendShr": {
      aminoType: "gentlemint/SendShr",
      toAmino: ({address, amount, creator}: MsgSendShr): AminoMsgSendShr["value"] => ({
        address,
        amount,
        creator
      }),
      fromAmino: ({address, amount, creator}: AminoMsgSendShr["value"]): MsgSendShr => ({
        address,
        amount,
        creator
      })
    },
    "/shareledger.gentlemint.MsgSendShrp": {
      aminoType: "gentlemint/SendShrp",
      toAmino: ({address, amount, creator}: MsgSendShrp): AminoMsgSendShrp["value"] => ({
        address,
        amount,
        creator
      }),
      fromAmino: ({address, amount, creator}: AminoMsgSendShrp["value"]): MsgSendShrp => ({
        address,
        amount,
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
    "/shareledger.gentlemint.MsgBuyCent": {
      aminoType: "gentlemint/BuyCent",
      toAmino: ({amount, creator}: MsgBuyCent): AminoMsgBuyCent["value"] => ({
        amount,
        creator
      }),
      fromAmino: ({amount, creator}: AminoMsgBuyCent["value"]): MsgBuyCent => ({
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
    ["/shareledger.gentlemint.MsgBurnShr", MsgBurnShr],
    ["/shareledger.gentlemint.MsgBurnShrp", MsgBurnShrp],
    ["/shareledger.gentlemint.MsgLoadShr", MsgLoadShr],
    ["/shareledger.gentlemint.MsgLoadShrp", MsgLoadShrp],
    ["/shareledger.gentlemint.MsgSendShr", MsgSendShr],
    ["/shareledger.gentlemint.MsgSendShrp", MsgSendShrp],
    ["/shareledger.gentlemint.MsgBuyShr", MsgBuyShr],
    ["/shareledger.gentlemint.MsgBuyCent", MsgBuyCent],
    ["/shareledger.gentlemint.MsgSetExchange", MsgSetExchange]
  ];
}
