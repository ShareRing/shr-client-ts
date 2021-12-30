/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SetExchange(request: MsgSetExchange): Promise<MsgSetExchangeResponse>;
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
