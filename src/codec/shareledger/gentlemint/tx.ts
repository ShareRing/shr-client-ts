/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.gentlemint";

export interface MsgLoadShr {
  creator: string;
  address: string;
  amount: string;
}

export interface MsgLoadShrResponse {
  log: string;
}

export interface MsgLoadShrp {
  creator: string;
  address: string;
  amount: string;
}

export interface MsgLoadShrpResponse {
  log: string;
}

export interface MsgBuyShr {
  creator: string;
  amount: string;
}

export interface MsgBuyShrResponse {
  log: string;
}

export interface MsgSendShr {
  creator: string;
  address: string;
  amount: string;
}

export interface MsgSendShrResponse {
  log: string;
}

export interface MsgSendShrp {
  creator: string;
  address: string;
  amount: string;
}

export interface MsgSendShrpResponse {
  log: string;
}

export interface MsgBuyCent {
  creator: string;
  amount: string;
}

export interface MsgBuyCentResponse {
  log: string;
}

export interface MsgBurnShrp {
  creator: string;
  amount: string;
}

export interface MsgBurnShrpResponse {
  log: string;
}

export interface MsgBurnShr {
  creator: string;
  amount: string;
}

export interface MsgBurnShrResponse {
  log: string;
}

export interface MsgSetExchange {
  creator: string;
  rate: string;
}

export interface MsgSetExchangeResponse {}

export interface MsgSetLevelFee {
  creator: string;
  level: string;
  fee: string;
}

export interface MsgSetLevelFeeResponse {}

export interface MsgDeleteLevelFee {
  creator: string;
  level: string;
}

export interface MsgDeleteLevelFeeResponse {}

export interface MsgSetActionLevelFee {
  creator: string;
  action: string;
  level: string;
}

export interface MsgSetActionLevelFeeResponse {}

export interface MsgDeleteActionLevelFee {
  creator: string;
  action: string;
}

export interface MsgDeleteActionLevelFeeResponse {}

export interface MsgLoadFee {
  creator: string;
  shrp?: DecCoin;
}

export interface MsgLoadFeeResponse {}

const baseMsgLoadShr: object = {creator: "", address: "", amount: ""};

export const MsgLoadShr = {
  encode(message: MsgLoadShr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadShr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgLoadShr} as MsgLoadShr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadShr {
    const message = {...baseMsgLoadShr} as MsgLoadShr;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgLoadShr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadShr>, I>>(object: I): MsgLoadShr {
    const message = {...baseMsgLoadShr} as MsgLoadShr;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgLoadShrResponse: object = {log: ""};

export const MsgLoadShrResponse = {
  encode(message: MsgLoadShrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadShrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgLoadShrResponse} as MsgLoadShrResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadShrResponse {
    const message = {...baseMsgLoadShrResponse} as MsgLoadShrResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgLoadShrResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadShrResponse>, I>>(object: I): MsgLoadShrResponse {
    const message = {...baseMsgLoadShrResponse} as MsgLoadShrResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgLoadShrp: object = {creator: "", address: "", amount: ""};

export const MsgLoadShrp = {
  encode(message: MsgLoadShrp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadShrp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgLoadShrp} as MsgLoadShrp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadShrp {
    const message = {...baseMsgLoadShrp} as MsgLoadShrp;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgLoadShrp): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadShrp>, I>>(object: I): MsgLoadShrp {
    const message = {...baseMsgLoadShrp} as MsgLoadShrp;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgLoadShrpResponse: object = {log: ""};

export const MsgLoadShrpResponse = {
  encode(message: MsgLoadShrpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadShrpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgLoadShrpResponse} as MsgLoadShrpResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadShrpResponse {
    const message = {...baseMsgLoadShrpResponse} as MsgLoadShrpResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgLoadShrpResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadShrpResponse>, I>>(object: I): MsgLoadShrpResponse {
    const message = {...baseMsgLoadShrpResponse} as MsgLoadShrpResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgBuyShr: object = {creator: "", amount: ""};

export const MsgBuyShr = {
  encode(message: MsgBuyShr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyShr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBuyShr} as MsgBuyShr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyShr {
    const message = {...baseMsgBuyShr} as MsgBuyShr;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgBuyShr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyShr>, I>>(object: I): MsgBuyShr {
    const message = {...baseMsgBuyShr} as MsgBuyShr;
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgBuyShrResponse: object = {log: ""};

export const MsgBuyShrResponse = {
  encode(message: MsgBuyShrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyShrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBuyShrResponse} as MsgBuyShrResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyShrResponse {
    const message = {...baseMsgBuyShrResponse} as MsgBuyShrResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgBuyShrResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyShrResponse>, I>>(object: I): MsgBuyShrResponse {
    const message = {...baseMsgBuyShrResponse} as MsgBuyShrResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgSendShr: object = {creator: "", address: "", amount: ""};

export const MsgSendShr = {
  encode(message: MsgSendShr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendShr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSendShr} as MsgSendShr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendShr {
    const message = {...baseMsgSendShr} as MsgSendShr;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgSendShr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendShr>, I>>(object: I): MsgSendShr {
    const message = {...baseMsgSendShr} as MsgSendShr;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgSendShrResponse: object = {log: ""};

export const MsgSendShrResponse = {
  encode(message: MsgSendShrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendShrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSendShrResponse} as MsgSendShrResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendShrResponse {
    const message = {...baseMsgSendShrResponse} as MsgSendShrResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgSendShrResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendShrResponse>, I>>(object: I): MsgSendShrResponse {
    const message = {...baseMsgSendShrResponse} as MsgSendShrResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgSendShrp: object = {creator: "", address: "", amount: ""};

export const MsgSendShrp = {
  encode(message: MsgSendShrp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendShrp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSendShrp} as MsgSendShrp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendShrp {
    const message = {...baseMsgSendShrp} as MsgSendShrp;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgSendShrp): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendShrp>, I>>(object: I): MsgSendShrp {
    const message = {...baseMsgSendShrp} as MsgSendShrp;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgSendShrpResponse: object = {log: ""};

export const MsgSendShrpResponse = {
  encode(message: MsgSendShrpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendShrpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSendShrpResponse} as MsgSendShrpResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendShrpResponse {
    const message = {...baseMsgSendShrpResponse} as MsgSendShrpResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgSendShrpResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendShrpResponse>, I>>(object: I): MsgSendShrpResponse {
    const message = {...baseMsgSendShrpResponse} as MsgSendShrpResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgBuyCent: object = {creator: "", amount: ""};

export const MsgBuyCent = {
  encode(message: MsgBuyCent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBuyCent} as MsgBuyCent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCent {
    const message = {...baseMsgBuyCent} as MsgBuyCent;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgBuyCent): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCent>, I>>(object: I): MsgBuyCent {
    const message = {...baseMsgBuyCent} as MsgBuyCent;
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgBuyCentResponse: object = {log: ""};

export const MsgBuyCentResponse = {
  encode(message: MsgBuyCentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBuyCentResponse} as MsgBuyCentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCentResponse {
    const message = {...baseMsgBuyCentResponse} as MsgBuyCentResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgBuyCentResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCentResponse>, I>>(object: I): MsgBuyCentResponse {
    const message = {...baseMsgBuyCentResponse} as MsgBuyCentResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgBurnShrp: object = {creator: "", amount: ""};

export const MsgBurnShrp = {
  encode(message: MsgBurnShrp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnShrp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBurnShrp} as MsgBurnShrp;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnShrp {
    const message = {...baseMsgBurnShrp} as MsgBurnShrp;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgBurnShrp): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnShrp>, I>>(object: I): MsgBurnShrp {
    const message = {...baseMsgBurnShrp} as MsgBurnShrp;
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgBurnShrpResponse: object = {log: ""};

export const MsgBurnShrpResponse = {
  encode(message: MsgBurnShrpResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnShrpResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBurnShrpResponse} as MsgBurnShrpResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnShrpResponse {
    const message = {...baseMsgBurnShrpResponse} as MsgBurnShrpResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgBurnShrpResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnShrpResponse>, I>>(object: I): MsgBurnShrpResponse {
    const message = {...baseMsgBurnShrpResponse} as MsgBurnShrpResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgBurnShr: object = {creator: "", amount: ""};

export const MsgBurnShr = {
  encode(message: MsgBurnShr, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnShr {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBurnShr} as MsgBurnShr;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnShr {
    const message = {...baseMsgBurnShr} as MsgBurnShr;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? String(object.amount) : "";
    return message;
  },

  toJSON(message: MsgBurnShr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnShr>, I>>(object: I): MsgBurnShr {
    const message = {...baseMsgBurnShr} as MsgBurnShr;
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

const baseMsgBurnShrResponse: object = {log: ""};

export const MsgBurnShrResponse = {
  encode(message: MsgBurnShrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnShrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBurnShrResponse} as MsgBurnShrResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnShrResponse {
    const message = {...baseMsgBurnShrResponse} as MsgBurnShrResponse;
    message.log = object.log !== undefined && object.log !== null ? String(object.log) : "";
    return message;
  },

  toJSON(message: MsgBurnShrResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnShrResponse>, I>>(object: I): MsgBurnShrResponse {
    const message = {...baseMsgBurnShrResponse} as MsgBurnShrResponse;
    message.log = object.log ?? "";
    return message;
  }
};

const baseMsgSetExchange: object = {creator: "", rate: ""};

export const MsgSetExchange = {
  encode(message: MsgSetExchange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.rate !== "") {
      writer.uint32(18).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetExchange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSetExchange} as MsgSetExchange;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetExchange {
    const message = {...baseMsgSetExchange} as MsgSetExchange;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.rate = object.rate !== undefined && object.rate !== null ? String(object.rate) : "";
    return message;
  },

  toJSON(message: MsgSetExchange): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetExchange>, I>>(object: I): MsgSetExchange {
    const message = {...baseMsgSetExchange} as MsgSetExchange;
    message.creator = object.creator ?? "";
    message.rate = object.rate ?? "";
    return message;
  }
};

const baseMsgSetExchangeResponse: object = {};

export const MsgSetExchangeResponse = {
  encode(_: MsgSetExchangeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetExchangeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSetExchangeResponse} as MsgSetExchangeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetExchangeResponse {
    const message = {...baseMsgSetExchangeResponse} as MsgSetExchangeResponse;
    return message;
  },

  toJSON(_: MsgSetExchangeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetExchangeResponse>, I>>(_: I): MsgSetExchangeResponse {
    const message = {...baseMsgSetExchangeResponse} as MsgSetExchangeResponse;
    return message;
  }
};

const baseMsgSetLevelFee: object = {creator: "", level: "", fee: ""};

export const MsgSetLevelFee = {
  encode(message: MsgSetLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.level !== "") {
      writer.uint32(18).string(message.level);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSetLevelFee} as MsgSetLevelFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.level = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetLevelFee {
    const message = {...baseMsgSetLevelFee} as MsgSetLevelFee;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.level = object.level !== undefined && object.level !== null ? String(object.level) : "";
    message.fee = object.fee !== undefined && object.fee !== null ? String(object.fee) : "";
    return message;
  },

  toJSON(message: MsgSetLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.level !== undefined && (obj.level = message.level);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetLevelFee>, I>>(object: I): MsgSetLevelFee {
    const message = {...baseMsgSetLevelFee} as MsgSetLevelFee;
    message.creator = object.creator ?? "";
    message.level = object.level ?? "";
    message.fee = object.fee ?? "";
    return message;
  }
};

const baseMsgSetLevelFeeResponse: object = {};

export const MsgSetLevelFeeResponse = {
  encode(_: MsgSetLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSetLevelFeeResponse} as MsgSetLevelFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetLevelFeeResponse {
    const message = {...baseMsgSetLevelFeeResponse} as MsgSetLevelFeeResponse;
    return message;
  },

  toJSON(_: MsgSetLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetLevelFeeResponse>, I>>(_: I): MsgSetLevelFeeResponse {
    const message = {...baseMsgSetLevelFeeResponse} as MsgSetLevelFeeResponse;
    return message;
  }
};

const baseMsgDeleteLevelFee: object = {creator: "", level: ""};

export const MsgDeleteLevelFee = {
  encode(message: MsgDeleteLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.level !== "") {
      writer.uint32(18).string(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteLevelFee} as MsgDeleteLevelFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.level = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteLevelFee {
    const message = {...baseMsgDeleteLevelFee} as MsgDeleteLevelFee;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.level = object.level !== undefined && object.level !== null ? String(object.level) : "";
    return message;
  },

  toJSON(message: MsgDeleteLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteLevelFee>, I>>(object: I): MsgDeleteLevelFee {
    const message = {...baseMsgDeleteLevelFee} as MsgDeleteLevelFee;
    message.creator = object.creator ?? "";
    message.level = object.level ?? "";
    return message;
  }
};

const baseMsgDeleteLevelFeeResponse: object = {};

export const MsgDeleteLevelFeeResponse = {
  encode(_: MsgDeleteLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteLevelFeeResponse} as MsgDeleteLevelFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteLevelFeeResponse {
    const message = {...baseMsgDeleteLevelFeeResponse} as MsgDeleteLevelFeeResponse;
    return message;
  },

  toJSON(_: MsgDeleteLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteLevelFeeResponse>, I>>(_: I): MsgDeleteLevelFeeResponse {
    const message = {...baseMsgDeleteLevelFeeResponse} as MsgDeleteLevelFeeResponse;
    return message;
  }
};

const baseMsgSetActionLevelFee: object = {creator: "", action: "", level: ""};

export const MsgSetActionLevelFee = {
  encode(message: MsgSetActionLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.level !== "") {
      writer.uint32(26).string(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActionLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSetActionLevelFee} as MsgSetActionLevelFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        case 3:
          message.level = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetActionLevelFee {
    const message = {...baseMsgSetActionLevelFee} as MsgSetActionLevelFee;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.action = object.action !== undefined && object.action !== null ? String(object.action) : "";
    message.level = object.level !== undefined && object.level !== null ? String(object.level) : "";
    return message;
  },

  toJSON(message: MsgSetActionLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.action !== undefined && (obj.action = message.action);
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetActionLevelFee>, I>>(object: I): MsgSetActionLevelFee {
    const message = {...baseMsgSetActionLevelFee} as MsgSetActionLevelFee;
    message.creator = object.creator ?? "";
    message.action = object.action ?? "";
    message.level = object.level ?? "";
    return message;
  }
};

const baseMsgSetActionLevelFeeResponse: object = {};

export const MsgSetActionLevelFeeResponse = {
  encode(_: MsgSetActionLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActionLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSetActionLevelFeeResponse} as MsgSetActionLevelFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetActionLevelFeeResponse {
    const message = {...baseMsgSetActionLevelFeeResponse} as MsgSetActionLevelFeeResponse;
    return message;
  },

  toJSON(_: MsgSetActionLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetActionLevelFeeResponse>, I>>(_: I): MsgSetActionLevelFeeResponse {
    const message = {...baseMsgSetActionLevelFeeResponse} as MsgSetActionLevelFeeResponse;
    return message;
  }
};

const baseMsgDeleteActionLevelFee: object = {creator: "", action: ""};

export const MsgDeleteActionLevelFee = {
  encode(message: MsgDeleteActionLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteActionLevelFee} as MsgDeleteActionLevelFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteActionLevelFee {
    const message = {...baseMsgDeleteActionLevelFee} as MsgDeleteActionLevelFee;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.action = object.action !== undefined && object.action !== null ? String(object.action) : "";
    return message;
  },

  toJSON(message: MsgDeleteActionLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteActionLevelFee>, I>>(object: I): MsgDeleteActionLevelFee {
    const message = {...baseMsgDeleteActionLevelFee} as MsgDeleteActionLevelFee;
    message.creator = object.creator ?? "";
    message.action = object.action ?? "";
    return message;
  }
};

const baseMsgDeleteActionLevelFeeResponse: object = {};

export const MsgDeleteActionLevelFeeResponse = {
  encode(_: MsgDeleteActionLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteActionLevelFeeResponse} as MsgDeleteActionLevelFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteActionLevelFeeResponse {
    const message = {...baseMsgDeleteActionLevelFeeResponse} as MsgDeleteActionLevelFeeResponse;
    return message;
  },

  toJSON(_: MsgDeleteActionLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteActionLevelFeeResponse>, I>>(_: I): MsgDeleteActionLevelFeeResponse {
    const message = {...baseMsgDeleteActionLevelFeeResponse} as MsgDeleteActionLevelFeeResponse;
    return message;
  }
};

const baseMsgLoadFee: object = {creator: ""};

export const MsgLoadFee = {
  encode(message: MsgLoadFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.shrp !== undefined) {
      DecCoin.encode(message.shrp, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgLoadFee} as MsgLoadFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.shrp = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoadFee {
    const message = {...baseMsgLoadFee} as MsgLoadFee;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.shrp = object.shrp !== undefined && object.shrp !== null ? DecCoin.fromJSON(object.shrp) : undefined;
    return message;
  },

  toJSON(message: MsgLoadFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.shrp !== undefined && (obj.shrp = message.shrp ? DecCoin.toJSON(message.shrp) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadFee>, I>>(object: I): MsgLoadFee {
    const message = {...baseMsgLoadFee} as MsgLoadFee;
    message.creator = object.creator ?? "";
    message.shrp = object.shrp !== undefined && object.shrp !== null ? DecCoin.fromPartial(object.shrp) : undefined;
    return message;
  }
};

const baseMsgLoadFeeResponse: object = {};

export const MsgLoadFeeResponse = {
  encode(_: MsgLoadFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgLoadFeeResponse} as MsgLoadFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLoadFeeResponse {
    const message = {...baseMsgLoadFeeResponse} as MsgLoadFeeResponse;
    return message;
  },

  toJSON(_: MsgLoadFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadFeeResponse>, I>>(_: I): MsgLoadFeeResponse {
    const message = {...baseMsgLoadFeeResponse} as MsgLoadFeeResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  LoadShr(request: MsgLoadShr): Promise<MsgLoadShrResponse>;
  LoadShrp(request: MsgLoadShrp): Promise<MsgLoadShrpResponse>;
  BuyShr(request: MsgBuyShr): Promise<MsgBuyShrResponse>;
  SendShr(request: MsgSendShr): Promise<MsgSendShrResponse>;
  BuyCent(request: MsgBuyCent): Promise<MsgBuyCentResponse>;
  BurnShrp(request: MsgBurnShrp): Promise<MsgBurnShrpResponse>;
  SendShrp(request: MsgSendShrp): Promise<MsgSendShrpResponse>;
  BurnShr(request: MsgBurnShr): Promise<MsgBurnShrResponse>;
  SetExchange(request: MsgSetExchange): Promise<MsgSetExchangeResponse>;
  SetLevelFee(request: MsgSetLevelFee): Promise<MsgSetLevelFeeResponse>;
  DeleteLevelFee(request: MsgDeleteLevelFee): Promise<MsgDeleteLevelFeeResponse>;
  SetActionLevelFee(request: MsgSetActionLevelFee): Promise<MsgSetActionLevelFeeResponse>;
  DeleteActionLevelFee(request: MsgDeleteActionLevelFee): Promise<MsgDeleteActionLevelFeeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  LoadFee(request: MsgLoadFee): Promise<MsgLoadFeeResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.LoadShr = this.LoadShr.bind(this);
    this.LoadShrp = this.LoadShrp.bind(this);
    this.BuyShr = this.BuyShr.bind(this);
    this.SendShr = this.SendShr.bind(this);
    this.BuyCent = this.BuyCent.bind(this);
    this.BurnShrp = this.BurnShrp.bind(this);
    this.SendShrp = this.SendShrp.bind(this);
    this.BurnShr = this.BurnShr.bind(this);
    this.SetExchange = this.SetExchange.bind(this);
    this.SetLevelFee = this.SetLevelFee.bind(this);
    this.DeleteLevelFee = this.DeleteLevelFee.bind(this);
    this.SetActionLevelFee = this.SetActionLevelFee.bind(this);
    this.DeleteActionLevelFee = this.DeleteActionLevelFee.bind(this);
    this.LoadFee = this.LoadFee.bind(this);
  }
  LoadShr(request: MsgLoadShr): Promise<MsgLoadShrResponse> {
    const data = MsgLoadShr.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "LoadShr", data);
    return promise.then((data) => MsgLoadShrResponse.decode(new _m0.Reader(data)));
  }

  LoadShrp(request: MsgLoadShrp): Promise<MsgLoadShrpResponse> {
    const data = MsgLoadShrp.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "LoadShrp", data);
    return promise.then((data) => MsgLoadShrpResponse.decode(new _m0.Reader(data)));
  }

  BuyShr(request: MsgBuyShr): Promise<MsgBuyShrResponse> {
    const data = MsgBuyShr.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "BuyShr", data);
    return promise.then((data) => MsgBuyShrResponse.decode(new _m0.Reader(data)));
  }

  SendShr(request: MsgSendShr): Promise<MsgSendShrResponse> {
    const data = MsgSendShr.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "SendShr", data);
    return promise.then((data) => MsgSendShrResponse.decode(new _m0.Reader(data)));
  }

  BuyCent(request: MsgBuyCent): Promise<MsgBuyCentResponse> {
    const data = MsgBuyCent.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "BuyCent", data);
    return promise.then((data) => MsgBuyCentResponse.decode(new _m0.Reader(data)));
  }

  BurnShrp(request: MsgBurnShrp): Promise<MsgBurnShrpResponse> {
    const data = MsgBurnShrp.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "BurnShrp", data);
    return promise.then((data) => MsgBurnShrpResponse.decode(new _m0.Reader(data)));
  }

  SendShrp(request: MsgSendShrp): Promise<MsgSendShrpResponse> {
    const data = MsgSendShrp.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "SendShrp", data);
    return promise.then((data) => MsgSendShrpResponse.decode(new _m0.Reader(data)));
  }

  BurnShr(request: MsgBurnShr): Promise<MsgBurnShrResponse> {
    const data = MsgBurnShr.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "BurnShr", data);
    return promise.then((data) => MsgBurnShrResponse.decode(new _m0.Reader(data)));
  }

  SetExchange(request: MsgSetExchange): Promise<MsgSetExchangeResponse> {
    const data = MsgSetExchange.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "SetExchange", data);
    return promise.then((data) => MsgSetExchangeResponse.decode(new _m0.Reader(data)));
  }

  SetLevelFee(request: MsgSetLevelFee): Promise<MsgSetLevelFeeResponse> {
    const data = MsgSetLevelFee.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "SetLevelFee", data);
    return promise.then((data) => MsgSetLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  DeleteLevelFee(request: MsgDeleteLevelFee): Promise<MsgDeleteLevelFeeResponse> {
    const data = MsgDeleteLevelFee.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "DeleteLevelFee", data);
    return promise.then((data) => MsgDeleteLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  SetActionLevelFee(request: MsgSetActionLevelFee): Promise<MsgSetActionLevelFeeResponse> {
    const data = MsgSetActionLevelFee.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "SetActionLevelFee", data);
    return promise.then((data) => MsgSetActionLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  DeleteActionLevelFee(request: MsgDeleteActionLevelFee): Promise<MsgDeleteActionLevelFeeResponse> {
    const data = MsgDeleteActionLevelFee.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "DeleteActionLevelFee", data);
    return promise.then((data) => MsgDeleteActionLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  LoadFee(request: MsgLoadFee): Promise<MsgLoadFeeResponse> {
    const data = MsgLoadFee.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Msg", "LoadFee", data);
    return promise.then((data) => MsgLoadFeeResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {[K in keyof T]?: DeepPartial<T[K]>}
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
