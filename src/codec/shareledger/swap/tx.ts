/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.swap";

export interface MsgRequestOut {
  creator: string;
  destAddress: string;
  network: string;
  amount?: DecCoin;
  fee?: DecCoin;
}

export interface MsgOutSwapResponse {
  id: Long;
}

export interface MsgApproveOut {
  creator: string;
  signature: string;
  ids: Long[];
}

export interface MsgApproveResponse {
  batchId: Long;
}

export interface MsgDeposit {
  creator: string;
  amount?: DecCoin;
}

export interface MsgDepositResponse {
  status: string;
}

export interface MsgWithdraw {
  creator: string;
  receiver: string;
  amount?: DecCoin;
}

export interface MsgWithdrawResponse {
  status: string;
}

export interface MsgCreateSignSchema {
  creator: string;
  network: string;
  schema: string;
}

export interface MsgCreateSignSchemaResponse {}

export interface MsgUpdateSignSchema {
  creator: string;
  network: string;
  schema: string;
}

export interface MsgUpdateSignSchemaResponse {}

export interface MsgDeleteSignSchema {
  creator: string;
  network: string;
}

export interface MsgDeleteSignSchemaResponse {}

export interface MsgCancel {
  creator: string;
  ids: Long[];
}

export interface MsgCancelResponse {}

export interface MsgReject {
  creator: string;
  ids: Long[];
}

export interface MsgRejectResponse {}

export interface MsgRequestIn {
  creator: string;
  srcAddress: string;
  destAddress: string;
  network: string;
  amount?: DecCoin;
  fee?: DecCoin;
}

export interface MsgSwapInResponse {
  id: Long;
}

export interface MsgApproveIn {
  creator: string;
  ids: Long[];
}

export interface MsgApproveInResponse {}

const baseMsgRequestOut: object = {creator: "", destAddress: "", network: ""};

export const MsgRequestOut = {
  encode(message: MsgRequestOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destAddress !== "") {
      writer.uint32(18).string(message.destAddress);
    }
    if (message.network !== "") {
      writer.uint32(26).string(message.network);
    }
    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRequestOut} as MsgRequestOut;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destAddress = reader.string();
          break;
        case 3:
          message.network = reader.string();
          break;
        case 4:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;
        case 5:
          message.fee = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestOut {
    const message = {...baseMsgRequestOut} as MsgRequestOut;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.destAddress = object.destAddress !== undefined && object.destAddress !== null ? String(object.destAddress) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromJSON(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromJSON(object.fee) : undefined;
    return message;
  },

  toJSON(message: MsgRequestOut): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.network !== undefined && (obj.network = message.network);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestOut>, I>>(object: I): MsgRequestOut {
    const message = {...baseMsgRequestOut} as MsgRequestOut;
    message.creator = object.creator ?? "";
    message.destAddress = object.destAddress ?? "";
    message.network = object.network ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    return message;
  }
};

const baseMsgOutSwapResponse: object = {id: Long.UZERO};

export const MsgOutSwapResponse = {
  encode(message: MsgOutSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOutSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgOutSwapResponse} as MsgOutSwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOutSwapResponse {
    const message = {...baseMsgOutSwapResponse} as MsgOutSwapResponse;
    message.id = object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO;
    return message;
  },

  toJSON(message: MsgOutSwapResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOutSwapResponse>, I>>(object: I): MsgOutSwapResponse {
    const message = {...baseMsgOutSwapResponse} as MsgOutSwapResponse;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

const baseMsgApproveOut: object = {creator: "", signature: "", ids: Long.UZERO};

export const MsgApproveOut = {
  encode(message: MsgApproveOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    writer.uint32(26).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgApproveOut} as MsgApproveOut;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.signature = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveOut {
    const message = {...baseMsgApproveOut} as MsgApproveOut;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.signature = object.signature !== undefined && object.signature !== null ? String(object.signature) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MsgApproveOut): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.signature !== undefined && (obj.signature = message.signature);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveOut>, I>>(object: I): MsgApproveOut {
    const message = {...baseMsgApproveOut} as MsgApproveOut;
    message.creator = object.creator ?? "";
    message.signature = object.signature ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

const baseMsgApproveResponse: object = {batchId: Long.UZERO};

export const MsgApproveResponse = {
  encode(message: MsgApproveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchId.isZero()) {
      writer.uint32(8).uint64(message.batchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgApproveResponse} as MsgApproveResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveResponse {
    const message = {...baseMsgApproveResponse} as MsgApproveResponse;
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromString(object.batchId) : Long.UZERO;
    return message;
  },

  toJSON(message: MsgApproveResponse): unknown {
    const obj: any = {};
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveResponse>, I>>(object: I): MsgApproveResponse {
    const message = {...baseMsgApproveResponse} as MsgApproveResponse;
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    return message;
  }
};

const baseMsgDeposit: object = {creator: ""};

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeposit} as MsgDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeposit {
    const message = {...baseMsgDeposit} as MsgDeposit;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromJSON(object.amount) : undefined;
    return message;
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = {...baseMsgDeposit} as MsgDeposit;
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  }
};

const baseMsgDepositResponse: object = {status: ""};

export const MsgDepositResponse = {
  encode(message: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDepositResponse} as MsgDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositResponse {
    const message = {...baseMsgDepositResponse} as MsgDepositResponse;
    message.status = object.status !== undefined && object.status !== null ? String(object.status) : "";
    return message;
  },

  toJSON(message: MsgDepositResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse {
    const message = {...baseMsgDepositResponse} as MsgDepositResponse;
    message.status = object.status ?? "";
    return message;
  }
};

const baseMsgWithdraw: object = {creator: "", receiver: ""};

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgWithdraw} as MsgWithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdraw {
    const message = {...baseMsgWithdraw} as MsgWithdraw;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.receiver = object.receiver !== undefined && object.receiver !== null ? String(object.receiver) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromJSON(object.amount) : undefined;
    return message;
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
    const message = {...baseMsgWithdraw} as MsgWithdraw;
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  }
};

const baseMsgWithdrawResponse: object = {status: ""};

export const MsgWithdrawResponse = {
  encode(message: MsgWithdrawResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgWithdrawResponse} as MsgWithdrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawResponse {
    const message = {...baseMsgWithdrawResponse} as MsgWithdrawResponse;
    message.status = object.status !== undefined && object.status !== null ? String(object.status) : "";
    return message;
  },

  toJSON(message: MsgWithdrawResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(object: I): MsgWithdrawResponse {
    const message = {...baseMsgWithdrawResponse} as MsgWithdrawResponse;
    message.status = object.status ?? "";
    return message;
  }
};

const baseMsgCreateSignSchema: object = {creator: "", network: "", schema: ""};

export const MsgCreateSignSchema = {
  encode(message: MsgCreateSignSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSignSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateSignSchema} as MsgCreateSignSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.network = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSignSchema {
    const message = {...baseMsgCreateSignSchema} as MsgCreateSignSchema;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.schema = object.schema !== undefined && object.schema !== null ? String(object.schema) : "";
    return message;
  },

  toJSON(message: MsgCreateSignSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.schema !== undefined && (obj.schema = message.schema);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSignSchema>, I>>(object: I): MsgCreateSignSchema {
    const message = {...baseMsgCreateSignSchema} as MsgCreateSignSchema;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.schema = object.schema ?? "";
    return message;
  }
};

const baseMsgCreateSignSchemaResponse: object = {};

export const MsgCreateSignSchemaResponse = {
  encode(_: MsgCreateSignSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSignSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateSignSchemaResponse} as MsgCreateSignSchemaResponse;
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

  fromJSON(_: any): MsgCreateSignSchemaResponse {
    const message = {...baseMsgCreateSignSchemaResponse} as MsgCreateSignSchemaResponse;
    return message;
  },

  toJSON(_: MsgCreateSignSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSignSchemaResponse>, I>>(_: I): MsgCreateSignSchemaResponse {
    const message = {...baseMsgCreateSignSchemaResponse} as MsgCreateSignSchemaResponse;
    return message;
  }
};

const baseMsgUpdateSignSchema: object = {creator: "", network: "", schema: ""};

export const MsgUpdateSignSchema = {
  encode(message: MsgUpdateSignSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSignSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateSignSchema} as MsgUpdateSignSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.network = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSignSchema {
    const message = {...baseMsgUpdateSignSchema} as MsgUpdateSignSchema;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.schema = object.schema !== undefined && object.schema !== null ? String(object.schema) : "";
    return message;
  },

  toJSON(message: MsgUpdateSignSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.schema !== undefined && (obj.schema = message.schema);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSignSchema>, I>>(object: I): MsgUpdateSignSchema {
    const message = {...baseMsgUpdateSignSchema} as MsgUpdateSignSchema;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.schema = object.schema ?? "";
    return message;
  }
};

const baseMsgUpdateSignSchemaResponse: object = {};

export const MsgUpdateSignSchemaResponse = {
  encode(_: MsgUpdateSignSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSignSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateSignSchemaResponse} as MsgUpdateSignSchemaResponse;
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

  fromJSON(_: any): MsgUpdateSignSchemaResponse {
    const message = {...baseMsgUpdateSignSchemaResponse} as MsgUpdateSignSchemaResponse;
    return message;
  },

  toJSON(_: MsgUpdateSignSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSignSchemaResponse>, I>>(_: I): MsgUpdateSignSchemaResponse {
    const message = {...baseMsgUpdateSignSchemaResponse} as MsgUpdateSignSchemaResponse;
    return message;
  }
};

const baseMsgDeleteSignSchema: object = {creator: "", network: ""};

export const MsgDeleteSignSchema = {
  encode(message: MsgDeleteSignSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSignSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteSignSchema} as MsgDeleteSignSchema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.network = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSignSchema {
    const message = {...baseMsgDeleteSignSchema} as MsgDeleteSignSchema;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: MsgDeleteSignSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSignSchema>, I>>(object: I): MsgDeleteSignSchema {
    const message = {...baseMsgDeleteSignSchema} as MsgDeleteSignSchema;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    return message;
  }
};

const baseMsgDeleteSignSchemaResponse: object = {};

export const MsgDeleteSignSchemaResponse = {
  encode(_: MsgDeleteSignSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSignSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteSignSchemaResponse} as MsgDeleteSignSchemaResponse;
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

  fromJSON(_: any): MsgDeleteSignSchemaResponse {
    const message = {...baseMsgDeleteSignSchemaResponse} as MsgDeleteSignSchemaResponse;
    return message;
  },

  toJSON(_: MsgDeleteSignSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSignSchemaResponse>, I>>(_: I): MsgDeleteSignSchemaResponse {
    const message = {...baseMsgDeleteSignSchemaResponse} as MsgDeleteSignSchemaResponse;
    return message;
  }
};

const baseMsgCancel: object = {creator: "", ids: Long.UZERO};

export const MsgCancel = {
  encode(message: MsgCancel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCancel} as MsgCancel;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancel {
    const message = {...baseMsgCancel} as MsgCancel;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MsgCancel): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancel>, I>>(object: I): MsgCancel {
    const message = {...baseMsgCancel} as MsgCancel;
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

const baseMsgCancelResponse: object = {};

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCancelResponse} as MsgCancelResponse;
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

  fromJSON(_: any): MsgCancelResponse {
    const message = {...baseMsgCancelResponse} as MsgCancelResponse;
    return message;
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelResponse>, I>>(_: I): MsgCancelResponse {
    const message = {...baseMsgCancelResponse} as MsgCancelResponse;
    return message;
  }
};

const baseMsgReject: object = {creator: "", ids: Long.UZERO};

export const MsgReject = {
  encode(message: MsgReject, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReject {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgReject} as MsgReject;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReject {
    const message = {...baseMsgReject} as MsgReject;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MsgReject): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReject>, I>>(object: I): MsgReject {
    const message = {...baseMsgReject} as MsgReject;
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

const baseMsgRejectResponse: object = {};

export const MsgRejectResponse = {
  encode(_: MsgRejectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRejectResponse} as MsgRejectResponse;
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

  fromJSON(_: any): MsgRejectResponse {
    const message = {...baseMsgRejectResponse} as MsgRejectResponse;
    return message;
  },

  toJSON(_: MsgRejectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectResponse>, I>>(_: I): MsgRejectResponse {
    const message = {...baseMsgRejectResponse} as MsgRejectResponse;
    return message;
  }
};

const baseMsgRequestIn: object = {creator: "", srcAddress: "", destAddress: "", network: ""};

export const MsgRequestIn = {
  encode(message: MsgRequestIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.srcAddress !== "") {
      writer.uint32(18).string(message.srcAddress);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    if (message.network !== "") {
      writer.uint32(34).string(message.network);
    }
    if (message.amount !== undefined) {
      DecCoin.encode(message.amount, writer.uint32(42).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRequestIn} as MsgRequestIn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.srcAddress = reader.string();
          break;
        case 3:
          message.destAddress = reader.string();
          break;
        case 4:
          message.network = reader.string();
          break;
        case 5:
          message.amount = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.fee = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestIn {
    const message = {...baseMsgRequestIn} as MsgRequestIn;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.srcAddress = object.srcAddress !== undefined && object.srcAddress !== null ? String(object.srcAddress) : "";
    message.destAddress = object.destAddress !== undefined && object.destAddress !== null ? String(object.destAddress) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromJSON(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromJSON(object.fee) : undefined;
    return message;
  },

  toJSON(message: MsgRequestIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.srcAddress !== undefined && (obj.srcAddress = message.srcAddress);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.network !== undefined && (obj.network = message.network);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestIn>, I>>(object: I): MsgRequestIn {
    const message = {...baseMsgRequestIn} as MsgRequestIn;
    message.creator = object.creator ?? "";
    message.srcAddress = object.srcAddress ?? "";
    message.destAddress = object.destAddress ?? "";
    message.network = object.network ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    return message;
  }
};

const baseMsgSwapInResponse: object = {id: Long.UZERO};

export const MsgSwapInResponse = {
  encode(message: MsgSwapInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgSwapInResponse} as MsgSwapInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapInResponse {
    const message = {...baseMsgSwapInResponse} as MsgSwapInResponse;
    message.id = object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO;
    return message;
  },

  toJSON(message: MsgSwapInResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapInResponse>, I>>(object: I): MsgSwapInResponse {
    const message = {...baseMsgSwapInResponse} as MsgSwapInResponse;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

const baseMsgApproveIn: object = {creator: "", ids: Long.UZERO};

export const MsgApproveIn = {
  encode(message: MsgApproveIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgApproveIn} as MsgApproveIn;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveIn {
    const message = {...baseMsgApproveIn} as MsgApproveIn;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MsgApproveIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveIn>, I>>(object: I): MsgApproveIn {
    const message = {...baseMsgApproveIn} as MsgApproveIn;
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

const baseMsgApproveInResponse: object = {};

export const MsgApproveInResponse = {
  encode(_: MsgApproveInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgApproveInResponse} as MsgApproveInResponse;
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

  fromJSON(_: any): MsgApproveInResponse {
    const message = {...baseMsgApproveInResponse} as MsgApproveInResponse;
    return message;
  },

  toJSON(_: MsgApproveInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveInResponse>, I>>(_: I): MsgApproveInResponse {
    const message = {...baseMsgApproveInResponse} as MsgApproveInResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestOut(request: MsgRequestOut): Promise<MsgOutSwapResponse>;
  ApproveOut(request: MsgApproveOut): Promise<MsgApproveResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  CreateSignSchema(request: MsgCreateSignSchema): Promise<MsgCreateSignSchemaResponse>;
  UpdateSignSchema(request: MsgUpdateSignSchema): Promise<MsgUpdateSignSchemaResponse>;
  DeleteSignSchema(request: MsgDeleteSignSchema): Promise<MsgDeleteSignSchemaResponse>;
  Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
  Reject(request: MsgReject): Promise<MsgRejectResponse>;
  RequestIn(request: MsgRequestIn): Promise<MsgSwapInResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ApproveIn(request: MsgApproveIn): Promise<MsgApproveInResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestOut = this.RequestOut.bind(this);
    this.ApproveOut = this.ApproveOut.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.CreateSignSchema = this.CreateSignSchema.bind(this);
    this.UpdateSignSchema = this.UpdateSignSchema.bind(this);
    this.DeleteSignSchema = this.DeleteSignSchema.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.Reject = this.Reject.bind(this);
    this.RequestIn = this.RequestIn.bind(this);
    this.ApproveIn = this.ApproveIn.bind(this);
  }
  RequestOut(request: MsgRequestOut): Promise<MsgOutSwapResponse> {
    const data = MsgRequestOut.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "RequestOut", data);
    return promise.then((data) => MsgOutSwapResponse.decode(new _m0.Reader(data)));
  }

  ApproveOut(request: MsgApproveOut): Promise<MsgApproveResponse> {
    const data = MsgApproveOut.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "ApproveOut", data);
    return promise.then((data) => MsgApproveResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "Withdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  CreateSignSchema(request: MsgCreateSignSchema): Promise<MsgCreateSignSchemaResponse> {
    const data = MsgCreateSignSchema.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "CreateSignSchema", data);
    return promise.then((data) => MsgCreateSignSchemaResponse.decode(new _m0.Reader(data)));
  }

  UpdateSignSchema(request: MsgUpdateSignSchema): Promise<MsgUpdateSignSchemaResponse> {
    const data = MsgUpdateSignSchema.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "UpdateSignSchema", data);
    return promise.then((data) => MsgUpdateSignSchemaResponse.decode(new _m0.Reader(data)));
  }

  DeleteSignSchema(request: MsgDeleteSignSchema): Promise<MsgDeleteSignSchemaResponse> {
    const data = MsgDeleteSignSchema.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "DeleteSignSchema", data);
    return promise.then((data) => MsgDeleteSignSchemaResponse.decode(new _m0.Reader(data)));
  }

  Cancel(request: MsgCancel): Promise<MsgCancelResponse> {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "Cancel", data);
    return promise.then((data) => MsgCancelResponse.decode(new _m0.Reader(data)));
  }

  Reject(request: MsgReject): Promise<MsgRejectResponse> {
    const data = MsgReject.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "Reject", data);
    return promise.then((data) => MsgRejectResponse.decode(new _m0.Reader(data)));
  }

  RequestIn(request: MsgRequestIn): Promise<MsgSwapInResponse> {
    const data = MsgRequestIn.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "RequestIn", data);
    return promise.then((data) => MsgSwapInResponse.decode(new _m0.Reader(data)));
  }

  ApproveIn(request: MsgApproveIn): Promise<MsgApproveInResponse> {
    const data = MsgApproveIn.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "ApproveIn", data);
    return promise.then((data) => MsgApproveInResponse.decode(new _m0.Reader(data)));
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
