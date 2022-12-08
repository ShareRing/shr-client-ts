/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.gentlemint";

export interface MsgBuyShr {
  creator: string;
  amount: string;
}

export interface MsgBuyShrResponse {
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
  fee?: DecCoin;
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

export interface MsgLoad {
  creator: string;
  address: string;
  coins: DecCoin[];
}

export interface MsgLoadResponse {}

export interface MsgSend {
  creator: string;
  address: string;
  coins: DecCoin[];
}

export interface MsgSendResponse {}

export interface MsgBurn {
  creator: string;
  coins: DecCoin[];
}

export interface MsgBurnResponse {}

function createBaseMsgBuyShr(): MsgBuyShr {
  return {creator: "", amount: ""};
}

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
    const message = createBaseMsgBuyShr();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgBuyShr): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyShr>, I>>(object: I): MsgBuyShr {
    const message = createBaseMsgBuyShr();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    return message;
  }
};

function createBaseMsgBuyShrResponse(): MsgBuyShrResponse {
  return {log: ""};
}

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
    const message = createBaseMsgBuyShrResponse();
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
    return {log: isSet(object.log) ? String(object.log) : ""};
  },

  toJSON(message: MsgBuyShrResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyShrResponse>, I>>(object: I): MsgBuyShrResponse {
    const message = createBaseMsgBuyShrResponse();
    message.log = object.log ?? "";
    return message;
  }
};

function createBaseMsgSetExchange(): MsgSetExchange {
  return {creator: "", rate: ""};
}

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
    const message = createBaseMsgSetExchange();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      rate: isSet(object.rate) ? String(object.rate) : ""
    };
  },

  toJSON(message: MsgSetExchange): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetExchange>, I>>(object: I): MsgSetExchange {
    const message = createBaseMsgSetExchange();
    message.creator = object.creator ?? "";
    message.rate = object.rate ?? "";
    return message;
  }
};

function createBaseMsgSetExchangeResponse(): MsgSetExchangeResponse {
  return {};
}

export const MsgSetExchangeResponse = {
  encode(_: MsgSetExchangeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetExchangeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetExchangeResponse();
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
    return {};
  },

  toJSON(_: MsgSetExchangeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetExchangeResponse>, I>>(_: I): MsgSetExchangeResponse {
    const message = createBaseMsgSetExchangeResponse();
    return message;
  }
};

function createBaseMsgSetLevelFee(): MsgSetLevelFee {
  return {creator: "", level: "", fee: undefined};
}

export const MsgSetLevelFee = {
  encode(message: MsgSetLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.level !== "") {
      writer.uint32(18).string(message.level);
    }
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLevelFee();
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
          message.fee = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetLevelFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      level: isSet(object.level) ? String(object.level) : "",
      fee: isSet(object.fee) ? DecCoin.fromJSON(object.fee) : undefined
    };
  },

  toJSON(message: MsgSetLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.level !== undefined && (obj.level = message.level);
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetLevelFee>, I>>(object: I): MsgSetLevelFee {
    const message = createBaseMsgSetLevelFee();
    message.creator = object.creator ?? "";
    message.level = object.level ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    return message;
  }
};

function createBaseMsgSetLevelFeeResponse(): MsgSetLevelFeeResponse {
  return {};
}

export const MsgSetLevelFeeResponse = {
  encode(_: MsgSetLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetLevelFeeResponse();
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
    return {};
  },

  toJSON(_: MsgSetLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetLevelFeeResponse>, I>>(_: I): MsgSetLevelFeeResponse {
    const message = createBaseMsgSetLevelFeeResponse();
    return message;
  }
};

function createBaseMsgDeleteLevelFee(): MsgDeleteLevelFee {
  return {creator: "", level: ""};
}

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
    const message = createBaseMsgDeleteLevelFee();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      level: isSet(object.level) ? String(object.level) : ""
    };
  },

  toJSON(message: MsgDeleteLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteLevelFee>, I>>(object: I): MsgDeleteLevelFee {
    const message = createBaseMsgDeleteLevelFee();
    message.creator = object.creator ?? "";
    message.level = object.level ?? "";
    return message;
  }
};

function createBaseMsgDeleteLevelFeeResponse(): MsgDeleteLevelFeeResponse {
  return {};
}

export const MsgDeleteLevelFeeResponse = {
  encode(_: MsgDeleteLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteLevelFeeResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteLevelFeeResponse>, I>>(_: I): MsgDeleteLevelFeeResponse {
    const message = createBaseMsgDeleteLevelFeeResponse();
    return message;
  }
};

function createBaseMsgSetActionLevelFee(): MsgSetActionLevelFee {
  return {creator: "", action: "", level: ""};
}

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
    const message = createBaseMsgSetActionLevelFee();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      action: isSet(object.action) ? String(object.action) : "",
      level: isSet(object.level) ? String(object.level) : ""
    };
  },

  toJSON(message: MsgSetActionLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.action !== undefined && (obj.action = message.action);
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetActionLevelFee>, I>>(object: I): MsgSetActionLevelFee {
    const message = createBaseMsgSetActionLevelFee();
    message.creator = object.creator ?? "";
    message.action = object.action ?? "";
    message.level = object.level ?? "";
    return message;
  }
};

function createBaseMsgSetActionLevelFeeResponse(): MsgSetActionLevelFeeResponse {
  return {};
}

export const MsgSetActionLevelFeeResponse = {
  encode(_: MsgSetActionLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetActionLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetActionLevelFeeResponse();
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
    return {};
  },

  toJSON(_: MsgSetActionLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetActionLevelFeeResponse>, I>>(_: I): MsgSetActionLevelFeeResponse {
    const message = createBaseMsgSetActionLevelFeeResponse();
    return message;
  }
};

function createBaseMsgDeleteActionLevelFee(): MsgDeleteActionLevelFee {
  return {creator: "", action: ""};
}

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
    const message = createBaseMsgDeleteActionLevelFee();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      action: isSet(object.action) ? String(object.action) : ""
    };
  },

  toJSON(message: MsgDeleteActionLevelFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteActionLevelFee>, I>>(object: I): MsgDeleteActionLevelFee {
    const message = createBaseMsgDeleteActionLevelFee();
    message.creator = object.creator ?? "";
    message.action = object.action ?? "";
    return message;
  }
};

function createBaseMsgDeleteActionLevelFeeResponse(): MsgDeleteActionLevelFeeResponse {
  return {};
}

export const MsgDeleteActionLevelFeeResponse = {
  encode(_: MsgDeleteActionLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteActionLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteActionLevelFeeResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteActionLevelFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteActionLevelFeeResponse>, I>>(_: I): MsgDeleteActionLevelFeeResponse {
    const message = createBaseMsgDeleteActionLevelFeeResponse();
    return message;
  }
};

function createBaseMsgLoadFee(): MsgLoadFee {
  return {creator: "", shrp: undefined};
}

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
    const message = createBaseMsgLoadFee();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      shrp: isSet(object.shrp) ? DecCoin.fromJSON(object.shrp) : undefined
    };
  },

  toJSON(message: MsgLoadFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.shrp !== undefined && (obj.shrp = message.shrp ? DecCoin.toJSON(message.shrp) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadFee>, I>>(object: I): MsgLoadFee {
    const message = createBaseMsgLoadFee();
    message.creator = object.creator ?? "";
    message.shrp = object.shrp !== undefined && object.shrp !== null ? DecCoin.fromPartial(object.shrp) : undefined;
    return message;
  }
};

function createBaseMsgLoadFeeResponse(): MsgLoadFeeResponse {
  return {};
}

export const MsgLoadFeeResponse = {
  encode(_: MsgLoadFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoadFeeResponse();
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
    return {};
  },

  toJSON(_: MsgLoadFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadFeeResponse>, I>>(_: I): MsgLoadFeeResponse {
    const message = createBaseMsgLoadFeeResponse();
    return message;
  }
};

function createBaseMsgLoad(): MsgLoad {
  return {creator: "", address: "", coins: []};
}

export const MsgLoad = {
  encode(message: MsgLoad, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.coins) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoad();
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
          message.coins.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLoad {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgLoad): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoad>, I>>(object: I): MsgLoad {
    const message = createBaseMsgLoad();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  }
};

function createBaseMsgLoadResponse(): MsgLoadResponse {
  return {};
}

export const MsgLoadResponse = {
  encode(_: MsgLoadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLoadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLoadResponse();
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

  fromJSON(_: any): MsgLoadResponse {
    return {};
  },

  toJSON(_: MsgLoadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLoadResponse>, I>>(_: I): MsgLoadResponse {
    const message = createBaseMsgLoadResponse();
    return message;
  }
};

function createBaseMsgSend(): MsgSend {
  return {creator: "", address: "", coins: []};
}

export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    for (const v of message.coins) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSend();
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
          message.coins.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSend {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgSend): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
    const message = createBaseMsgSend();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  }
};

function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}

export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendResponse();
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

  fromJSON(_: any): MsgSendResponse {
    return {};
  },

  toJSON(_: MsgSendResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(_: I): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  }
};

function createBaseMsgBurn(): MsgBurn {
  return {creator: "", coins: []};
}

export const MsgBurn = {
  encode(message: MsgBurn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.coins) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.coins.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgBurn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurn>, I>>(object: I): MsgBurn {
    const message = createBaseMsgBurn();
    message.creator = object.creator ?? "";
    message.coins = object.coins?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  }
};

function createBaseMsgBurnResponse(): MsgBurnResponse {
  return {};
}

export const MsgBurnResponse = {
  encode(_: MsgBurnResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnResponse();
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

  fromJSON(_: any): MsgBurnResponse {
    return {};
  },

  toJSON(_: MsgBurnResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnResponse>, I>>(_: I): MsgBurnResponse {
    const message = createBaseMsgBurnResponse();
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  BuyShr(request: MsgBuyShr): Promise<MsgBuyShrResponse>;
  SetExchange(request: MsgSetExchange): Promise<MsgSetExchangeResponse>;
  SetLevelFee(request: MsgSetLevelFee): Promise<MsgSetLevelFeeResponse>;
  DeleteLevelFee(request: MsgDeleteLevelFee): Promise<MsgDeleteLevelFeeResponse>;
  SetActionLevelFee(request: MsgSetActionLevelFee): Promise<MsgSetActionLevelFeeResponse>;
  DeleteActionLevelFee(request: MsgDeleteActionLevelFee): Promise<MsgDeleteActionLevelFeeResponse>;
  LoadFee(request: MsgLoadFee): Promise<MsgLoadFeeResponse>;
  Load(request: MsgLoad): Promise<MsgLoadResponse>;
  Send(request: MsgSend): Promise<MsgSendResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Burn(request: MsgBurn): Promise<MsgBurnResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.gentlemint.Msg";
    this.rpc = rpc;
    this.BuyShr = this.BuyShr.bind(this);
    this.SetExchange = this.SetExchange.bind(this);
    this.SetLevelFee = this.SetLevelFee.bind(this);
    this.DeleteLevelFee = this.DeleteLevelFee.bind(this);
    this.SetActionLevelFee = this.SetActionLevelFee.bind(this);
    this.DeleteActionLevelFee = this.DeleteActionLevelFee.bind(this);
    this.LoadFee = this.LoadFee.bind(this);
    this.Load = this.Load.bind(this);
    this.Send = this.Send.bind(this);
    this.Burn = this.Burn.bind(this);
  }
  BuyShr(request: MsgBuyShr): Promise<MsgBuyShrResponse> {
    const data = MsgBuyShr.encode(request).finish();
    const promise = this.rpc.request(this.service, "BuyShr", data);
    return promise.then((data) => MsgBuyShrResponse.decode(new _m0.Reader(data)));
  }

  SetExchange(request: MsgSetExchange): Promise<MsgSetExchangeResponse> {
    const data = MsgSetExchange.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetExchange", data);
    return promise.then((data) => MsgSetExchangeResponse.decode(new _m0.Reader(data)));
  }

  SetLevelFee(request: MsgSetLevelFee): Promise<MsgSetLevelFeeResponse> {
    const data = MsgSetLevelFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetLevelFee", data);
    return promise.then((data) => MsgSetLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  DeleteLevelFee(request: MsgDeleteLevelFee): Promise<MsgDeleteLevelFeeResponse> {
    const data = MsgDeleteLevelFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteLevelFee", data);
    return promise.then((data) => MsgDeleteLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  SetActionLevelFee(request: MsgSetActionLevelFee): Promise<MsgSetActionLevelFeeResponse> {
    const data = MsgSetActionLevelFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "SetActionLevelFee", data);
    return promise.then((data) => MsgSetActionLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  DeleteActionLevelFee(request: MsgDeleteActionLevelFee): Promise<MsgDeleteActionLevelFeeResponse> {
    const data = MsgDeleteActionLevelFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteActionLevelFee", data);
    return promise.then((data) => MsgDeleteActionLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  LoadFee(request: MsgLoadFee): Promise<MsgLoadFeeResponse> {
    const data = MsgLoadFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "LoadFee", data);
    return promise.then((data) => MsgLoadFeeResponse.decode(new _m0.Reader(data)));
  }

  Load(request: MsgLoad): Promise<MsgLoadResponse> {
    const data = MsgLoad.encode(request).finish();
    const promise = this.rpc.request(this.service, "Load", data);
    return promise.then((data) => MsgLoadResponse.decode(new _m0.Reader(data)));
  }

  Send(request: MsgSend): Promise<MsgSendResponse> {
    const data = MsgSend.encode(request).finish();
    const promise = this.rpc.request(this.service, "Send", data);
    return promise.then((data) => MsgSendResponse.decode(new _m0.Reader(data)));
  }

  Burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request(this.service, "Burn", data);
    return promise.then((data) => MsgBurnResponse.decode(new _m0.Reader(data)));
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & {[K in Exclude<keyof I, KeysOfUnion<P>>]: never};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
