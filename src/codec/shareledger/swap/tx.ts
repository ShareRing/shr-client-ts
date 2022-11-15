/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";
import {TxEvent} from "./request";

export const protobufPackage = "shareledger.swap";

export interface MsgRequestOut {
  creator: string;
  srcAddress: string;
  destAddress: string;
  network: string;
  amount?: DecCoin;
}

export interface MsgRequestOutResponse {
  id: Long;
}

export interface MsgApproveOut {
  creator: string;
  signature: string;
  ids: Long[];
}

export interface MsgApproveOutResponse {
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

export interface MsgCreateSchema {
  creator: string;
  network: string;
  schema: string;
  in?: DecCoin;
  out?: DecCoin;
  contractExponent: number;
}

export interface MsgCreateSchemaResponse {}

export interface MsgUpdateSchema {
  creator: string;
  network: string;
  schema: string;
  in?: DecCoin;
  out?: DecCoin;
  contractExponent: number;
}

export interface MsgUpdateSchemaResponse {}

export interface MsgDeleteSchema {
  creator: string;
  network: string;
}

export interface MsgDeleteSchemaResponse {}

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
  txEvents: TxEvent[];
}

export interface MsgRequestInResponse {
  id: Long;
}

export interface MsgApproveIn {
  creator: string;
  ids: Long[];
}

export interface MsgApproveInResponse {}

export interface MsgCompleteBatch {
  creator: string;
  batchId: Long;
}

export interface MsgCompleteBatchResponse {}

export interface MsgUpdateSwapFee {
  creator: string;
  network: string;
  in?: DecCoin;
  out?: DecCoin;
}

export interface MsgUpdateSwapFeeResponse {}

export interface MsgCancelBatches {
  creator: string;
  ids: Long[];
}

export interface MsgCancelBatchesResponse {}

function createBaseMsgRequestOut(): MsgRequestOut {
  return {creator: "", srcAddress: "", destAddress: "", network: "", amount: undefined};
}

export const MsgRequestOut = {
  encode(message: MsgRequestOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestOut();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestOut {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      srcAddress: isSet(object.srcAddress) ? String(object.srcAddress) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      network: isSet(object.network) ? String(object.network) : "",
      amount: isSet(object.amount) ? DecCoin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgRequestOut): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.srcAddress !== undefined && (obj.srcAddress = message.srcAddress);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.network !== undefined && (obj.network = message.network);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestOut>, I>>(object: I): MsgRequestOut {
    const message = createBaseMsgRequestOut();
    message.creator = object.creator ?? "";
    message.srcAddress = object.srcAddress ?? "";
    message.destAddress = object.destAddress ?? "";
    message.network = object.network ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgRequestOutResponse(): MsgRequestOutResponse {
  return {id: Long.UZERO};
}

export const MsgRequestOutResponse = {
  encode(message: MsgRequestOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestOutResponse();
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

  fromJSON(object: any): MsgRequestOutResponse {
    return {id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO};
  },

  toJSON(message: MsgRequestOutResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestOutResponse>, I>>(object: I): MsgRequestOutResponse {
    const message = createBaseMsgRequestOutResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

function createBaseMsgApproveOut(): MsgApproveOut {
  return {creator: "", signature: "", ids: []};
}

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
    const message = createBaseMsgApproveOut();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
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
    const message = createBaseMsgApproveOut();
    message.creator = object.creator ?? "";
    message.signature = object.signature ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseMsgApproveOutResponse(): MsgApproveOutResponse {
  return {batchId: Long.UZERO};
}

export const MsgApproveOutResponse = {
  encode(message: MsgApproveOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchId.isZero()) {
      writer.uint32(8).uint64(message.batchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveOutResponse();
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

  fromJSON(object: any): MsgApproveOutResponse {
    return {batchId: isSet(object.batchId) ? Long.fromValue(object.batchId) : Long.UZERO};
  },

  toJSON(message: MsgApproveOutResponse): unknown {
    const obj: any = {};
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveOutResponse>, I>>(object: I): MsgApproveOutResponse {
    const message = createBaseMsgApproveOutResponse();
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    return message;
  }
};

function createBaseMsgDeposit(): MsgDeposit {
  return {creator: "", amount: undefined};
}

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
    const message = createBaseMsgDeposit();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? DecCoin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeposit>, I>>(object: I): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {status: ""};
}

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
    const message = createBaseMsgDepositResponse();
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
    return {status: isSet(object.status) ? String(object.status) : ""};
  },

  toJSON(message: MsgDepositResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDepositResponse>, I>>(object: I): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    message.status = object.status ?? "";
    return message;
  }
};

function createBaseMsgWithdraw(): MsgWithdraw {
  return {creator: "", receiver: "", amount: undefined};
}

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
    const message = createBaseMsgWithdraw();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? DecCoin.fromJSON(object.amount) : undefined
    };
  },

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdraw>, I>>(object: I): MsgWithdraw {
    const message = createBaseMsgWithdraw();
    message.creator = object.creator ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    return message;
  }
};

function createBaseMsgWithdrawResponse(): MsgWithdrawResponse {
  return {status: ""};
}

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
    const message = createBaseMsgWithdrawResponse();
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
    return {status: isSet(object.status) ? String(object.status) : ""};
  },

  toJSON(message: MsgWithdrawResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawResponse>, I>>(object: I): MsgWithdrawResponse {
    const message = createBaseMsgWithdrawResponse();
    message.status = object.status ?? "";
    return message;
  }
};

function createBaseMsgCreateSchema(): MsgCreateSchema {
  return {creator: "", network: "", schema: "", in: undefined, out: undefined, contractExponent: 0};
}

export const MsgCreateSchema = {
  encode(message: MsgCreateSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.in !== undefined) {
      DecCoin.encode(message.in, writer.uint32(34).fork()).ldelim();
    }
    if (message.out !== undefined) {
      DecCoin.encode(message.out, writer.uint32(42).fork()).ldelim();
    }
    if (message.contractExponent !== 0) {
      writer.uint32(48).int32(message.contractExponent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSchema();
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
        case 4:
          message.in = DecCoin.decode(reader, reader.uint32());
          break;
        case 5:
          message.out = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.contractExponent = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSchema {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      network: isSet(object.network) ? String(object.network) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      in: isSet(object.in) ? DecCoin.fromJSON(object.in) : undefined,
      out: isSet(object.out) ? DecCoin.fromJSON(object.out) : undefined,
      contractExponent: isSet(object.contractExponent) ? Number(object.contractExponent) : 0
    };
  },

  toJSON(message: MsgCreateSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.schema !== undefined && (obj.schema = message.schema);
    message.in !== undefined && (obj.in = message.in ? DecCoin.toJSON(message.in) : undefined);
    message.out !== undefined && (obj.out = message.out ? DecCoin.toJSON(message.out) : undefined);
    message.contractExponent !== undefined && (obj.contractExponent = Math.round(message.contractExponent));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSchema>, I>>(object: I): MsgCreateSchema {
    const message = createBaseMsgCreateSchema();
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.schema = object.schema ?? "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromPartial(object.out) : undefined;
    message.contractExponent = object.contractExponent ?? 0;
    return message;
  }
};

function createBaseMsgCreateSchemaResponse(): MsgCreateSchemaResponse {
  return {};
}

export const MsgCreateSchemaResponse = {
  encode(_: MsgCreateSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSchemaResponse();
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

  fromJSON(_: any): MsgCreateSchemaResponse {
    return {};
  },

  toJSON(_: MsgCreateSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSchemaResponse>, I>>(_: I): MsgCreateSchemaResponse {
    const message = createBaseMsgCreateSchemaResponse();
    return message;
  }
};

function createBaseMsgUpdateSchema(): MsgUpdateSchema {
  return {creator: "", network: "", schema: "", in: undefined, out: undefined, contractExponent: 0};
}

export const MsgUpdateSchema = {
  encode(message: MsgUpdateSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.in !== undefined) {
      DecCoin.encode(message.in, writer.uint32(34).fork()).ldelim();
    }
    if (message.out !== undefined) {
      DecCoin.encode(message.out, writer.uint32(42).fork()).ldelim();
    }
    if (message.contractExponent !== 0) {
      writer.uint32(48).int32(message.contractExponent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSchema();
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
        case 4:
          message.in = DecCoin.decode(reader, reader.uint32());
          break;
        case 5:
          message.out = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.contractExponent = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSchema {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      network: isSet(object.network) ? String(object.network) : "",
      schema: isSet(object.schema) ? String(object.schema) : "",
      in: isSet(object.in) ? DecCoin.fromJSON(object.in) : undefined,
      out: isSet(object.out) ? DecCoin.fromJSON(object.out) : undefined,
      contractExponent: isSet(object.contractExponent) ? Number(object.contractExponent) : 0
    };
  },

  toJSON(message: MsgUpdateSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.schema !== undefined && (obj.schema = message.schema);
    message.in !== undefined && (obj.in = message.in ? DecCoin.toJSON(message.in) : undefined);
    message.out !== undefined && (obj.out = message.out ? DecCoin.toJSON(message.out) : undefined);
    message.contractExponent !== undefined && (obj.contractExponent = Math.round(message.contractExponent));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSchema>, I>>(object: I): MsgUpdateSchema {
    const message = createBaseMsgUpdateSchema();
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.schema = object.schema ?? "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromPartial(object.out) : undefined;
    message.contractExponent = object.contractExponent ?? 0;
    return message;
  }
};

function createBaseMsgUpdateSchemaResponse(): MsgUpdateSchemaResponse {
  return {};
}

export const MsgUpdateSchemaResponse = {
  encode(_: MsgUpdateSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSchemaResponse();
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

  fromJSON(_: any): MsgUpdateSchemaResponse {
    return {};
  },

  toJSON(_: MsgUpdateSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSchemaResponse>, I>>(_: I): MsgUpdateSchemaResponse {
    const message = createBaseMsgUpdateSchemaResponse();
    return message;
  }
};

function createBaseMsgDeleteSchema(): MsgDeleteSchema {
  return {creator: "", network: ""};
}

export const MsgDeleteSchema = {
  encode(message: MsgDeleteSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSchema();
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

  fromJSON(object: any): MsgDeleteSchema {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      network: isSet(object.network) ? String(object.network) : ""
    };
  },

  toJSON(message: MsgDeleteSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSchema>, I>>(object: I): MsgDeleteSchema {
    const message = createBaseMsgDeleteSchema();
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    return message;
  }
};

function createBaseMsgDeleteSchemaResponse(): MsgDeleteSchemaResponse {
  return {};
}

export const MsgDeleteSchemaResponse = {
  encode(_: MsgDeleteSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSchemaResponse();
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

  fromJSON(_: any): MsgDeleteSchemaResponse {
    return {};
  },

  toJSON(_: MsgDeleteSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSchemaResponse>, I>>(_: I): MsgDeleteSchemaResponse {
    const message = createBaseMsgDeleteSchemaResponse();
    return message;
  }
};

function createBaseMsgCancel(): MsgCancel {
  return {creator: "", ids: []};
}

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
    const message = createBaseMsgCancel();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
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
    const message = createBaseMsgCancel();
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();
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
    return {};
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelResponse>, I>>(_: I): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  }
};

function createBaseMsgReject(): MsgReject {
  return {creator: "", ids: []};
}

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
    const message = createBaseMsgReject();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
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
    const message = createBaseMsgReject();
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseMsgRejectResponse(): MsgRejectResponse {
  return {};
}

export const MsgRejectResponse = {
  encode(_: MsgRejectResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRejectResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRejectResponse();
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
    return {};
  },

  toJSON(_: MsgRejectResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRejectResponse>, I>>(_: I): MsgRejectResponse {
    const message = createBaseMsgRejectResponse();
    return message;
  }
};

function createBaseMsgRequestIn(): MsgRequestIn {
  return {creator: "", srcAddress: "", destAddress: "", network: "", amount: undefined, txEvents: []};
}

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
    for (const v of message.txEvents) {
      TxEvent.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestIn();
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
          message.txEvents.push(TxEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestIn {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      srcAddress: isSet(object.srcAddress) ? String(object.srcAddress) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      network: isSet(object.network) ? String(object.network) : "",
      amount: isSet(object.amount) ? DecCoin.fromJSON(object.amount) : undefined,
      txEvents: Array.isArray(object?.txEvents) ? object.txEvents.map((e: any) => TxEvent.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgRequestIn): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.srcAddress !== undefined && (obj.srcAddress = message.srcAddress);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.network !== undefined && (obj.network = message.network);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    if (message.txEvents) {
      obj.txEvents = message.txEvents.map((e) => (e ? TxEvent.toJSON(e) : undefined));
    } else {
      obj.txEvents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestIn>, I>>(object: I): MsgRequestIn {
    const message = createBaseMsgRequestIn();
    message.creator = object.creator ?? "";
    message.srcAddress = object.srcAddress ?? "";
    message.destAddress = object.destAddress ?? "";
    message.network = object.network ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    message.txEvents = object.txEvents?.map((e) => TxEvent.fromPartial(e)) || [];
    return message;
  }
};

function createBaseMsgRequestInResponse(): MsgRequestInResponse {
  return {id: Long.UZERO};
}

export const MsgRequestInResponse = {
  encode(message: MsgRequestInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestInResponse();
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

  fromJSON(object: any): MsgRequestInResponse {
    return {id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO};
  },

  toJSON(message: MsgRequestInResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestInResponse>, I>>(object: I): MsgRequestInResponse {
    const message = createBaseMsgRequestInResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

function createBaseMsgApproveIn(): MsgApproveIn {
  return {creator: "", ids: []};
}

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
    const message = createBaseMsgApproveIn();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
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
    const message = createBaseMsgApproveIn();
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseMsgApproveInResponse(): MsgApproveInResponse {
  return {};
}

export const MsgApproveInResponse = {
  encode(_: MsgApproveInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveInResponse();
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
    return {};
  },

  toJSON(_: MsgApproveInResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveInResponse>, I>>(_: I): MsgApproveInResponse {
    const message = createBaseMsgApproveInResponse();
    return message;
  }
};

function createBaseMsgCompleteBatch(): MsgCompleteBatch {
  return {creator: "", batchId: Long.UZERO};
}

export const MsgCompleteBatch = {
  encode(message: MsgCompleteBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (!message.batchId.isZero()) {
      writer.uint32(16).uint64(message.batchId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.batchId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCompleteBatch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      batchId: isSet(object.batchId) ? Long.fromValue(object.batchId) : Long.UZERO
    };
  },

  toJSON(message: MsgCompleteBatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBatch>, I>>(object: I): MsgCompleteBatch {
    const message = createBaseMsgCompleteBatch();
    message.creator = object.creator ?? "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    return message;
  }
};

function createBaseMsgCompleteBatchResponse(): MsgCompleteBatchResponse {
  return {};
}

export const MsgCompleteBatchResponse = {
  encode(_: MsgCompleteBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteBatchResponse();
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

  fromJSON(_: any): MsgCompleteBatchResponse {
    return {};
  },

  toJSON(_: MsgCompleteBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBatchResponse>, I>>(_: I): MsgCompleteBatchResponse {
    const message = createBaseMsgCompleteBatchResponse();
    return message;
  }
};

function createBaseMsgUpdateSwapFee(): MsgUpdateSwapFee {
  return {creator: "", network: "", in: undefined, out: undefined};
}

export const MsgUpdateSwapFee = {
  encode(message: MsgUpdateSwapFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.in !== undefined) {
      DecCoin.encode(message.in, writer.uint32(26).fork()).ldelim();
    }
    if (message.out !== undefined) {
      DecCoin.encode(message.out, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFee();
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
          message.in = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.out = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSwapFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      network: isSet(object.network) ? String(object.network) : "",
      in: isSet(object.in) ? DecCoin.fromJSON(object.in) : undefined,
      out: isSet(object.out) ? DecCoin.fromJSON(object.out) : undefined
    };
  },

  toJSON(message: MsgUpdateSwapFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.in !== undefined && (obj.in = message.in ? DecCoin.toJSON(message.in) : undefined);
    message.out !== undefined && (obj.out = message.out ? DecCoin.toJSON(message.out) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapFee>, I>>(object: I): MsgUpdateSwapFee {
    const message = createBaseMsgUpdateSwapFee();
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromPartial(object.out) : undefined;
    return message;
  }
};

function createBaseMsgUpdateSwapFeeResponse(): MsgUpdateSwapFeeResponse {
  return {};
}

export const MsgUpdateSwapFeeResponse = {
  encode(_: MsgUpdateSwapFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapFeeResponse();
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

  fromJSON(_: any): MsgUpdateSwapFeeResponse {
    return {};
  },

  toJSON(_: MsgUpdateSwapFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapFeeResponse>, I>>(_: I): MsgUpdateSwapFeeResponse {
    const message = createBaseMsgUpdateSwapFeeResponse();
    return message;
  }
};

function createBaseMsgCancelBatches(): MsgCancelBatches {
  return {creator: "", ids: []};
}

export const MsgCancelBatches = {
  encode(message: MsgCancelBatches, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBatches {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBatches();
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

  fromJSON(object: any): MsgCancelBatches {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : []
    };
  },

  toJSON(message: MsgCancelBatches): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBatches>, I>>(object: I): MsgCancelBatches {
    const message = createBaseMsgCancelBatches();
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

function createBaseMsgCancelBatchesResponse(): MsgCancelBatchesResponse {
  return {};
}

export const MsgCancelBatchesResponse = {
  encode(_: MsgCancelBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelBatchesResponse();
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

  fromJSON(_: any): MsgCancelBatchesResponse {
    return {};
  },

  toJSON(_: MsgCancelBatchesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBatchesResponse>, I>>(_: I): MsgCancelBatchesResponse {
    const message = createBaseMsgCancelBatchesResponse();
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestOut(request: MsgRequestOut): Promise<MsgRequestOutResponse>;
  ApproveOut(request: MsgApproveOut): Promise<MsgApproveOutResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  CreateSchema(request: MsgCreateSchema): Promise<MsgCreateSchemaResponse>;
  UpdateSchema(request: MsgUpdateSchema): Promise<MsgUpdateSchemaResponse>;
  DeleteSchema(request: MsgDeleteSchema): Promise<MsgDeleteSchemaResponse>;
  Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
  Reject(request: MsgReject): Promise<MsgRejectResponse>;
  RequestIn(request: MsgRequestIn): Promise<MsgRequestInResponse>;
  ApproveIn(request: MsgApproveIn): Promise<MsgApproveInResponse>;
  CompleteBatch(request: MsgCompleteBatch): Promise<MsgCompleteBatchResponse>;
  UpdateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CancelBatches(request: MsgCancelBatches): Promise<MsgCancelBatchesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.swap.Msg";
    this.rpc = rpc;
    this.RequestOut = this.RequestOut.bind(this);
    this.ApproveOut = this.ApproveOut.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.CreateSchema = this.CreateSchema.bind(this);
    this.UpdateSchema = this.UpdateSchema.bind(this);
    this.DeleteSchema = this.DeleteSchema.bind(this);
    this.Cancel = this.Cancel.bind(this);
    this.Reject = this.Reject.bind(this);
    this.RequestIn = this.RequestIn.bind(this);
    this.ApproveIn = this.ApproveIn.bind(this);
    this.CompleteBatch = this.CompleteBatch.bind(this);
    this.UpdateSwapFee = this.UpdateSwapFee.bind(this);
    this.CancelBatches = this.CancelBatches.bind(this);
  }
  RequestOut(request: MsgRequestOut): Promise<MsgRequestOutResponse> {
    const data = MsgRequestOut.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestOut", data);
    return promise.then((data) => MsgRequestOutResponse.decode(new _m0.Reader(data)));
  }

  ApproveOut(request: MsgApproveOut): Promise<MsgApproveOutResponse> {
    const data = MsgApproveOut.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApproveOut", data);
    return promise.then((data) => MsgApproveOutResponse.decode(new _m0.Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request(this.service, "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new _m0.Reader(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request(this.service, "Withdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(new _m0.Reader(data)));
  }

  CreateSchema(request: MsgCreateSchema): Promise<MsgCreateSchemaResponse> {
    const data = MsgCreateSchema.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateSchema", data);
    return promise.then((data) => MsgCreateSchemaResponse.decode(new _m0.Reader(data)));
  }

  UpdateSchema(request: MsgUpdateSchema): Promise<MsgUpdateSchemaResponse> {
    const data = MsgUpdateSchema.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateSchema", data);
    return promise.then((data) => MsgUpdateSchemaResponse.decode(new _m0.Reader(data)));
  }

  DeleteSchema(request: MsgDeleteSchema): Promise<MsgDeleteSchemaResponse> {
    const data = MsgDeleteSchema.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteSchema", data);
    return promise.then((data) => MsgDeleteSchemaResponse.decode(new _m0.Reader(data)));
  }

  Cancel(request: MsgCancel): Promise<MsgCancelResponse> {
    const data = MsgCancel.encode(request).finish();
    const promise = this.rpc.request(this.service, "Cancel", data);
    return promise.then((data) => MsgCancelResponse.decode(new _m0.Reader(data)));
  }

  Reject(request: MsgReject): Promise<MsgRejectResponse> {
    const data = MsgReject.encode(request).finish();
    const promise = this.rpc.request(this.service, "Reject", data);
    return promise.then((data) => MsgRejectResponse.decode(new _m0.Reader(data)));
  }

  RequestIn(request: MsgRequestIn): Promise<MsgRequestInResponse> {
    const data = MsgRequestIn.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestIn", data);
    return promise.then((data) => MsgRequestInResponse.decode(new _m0.Reader(data)));
  }

  ApproveIn(request: MsgApproveIn): Promise<MsgApproveInResponse> {
    const data = MsgApproveIn.encode(request).finish();
    const promise = this.rpc.request(this.service, "ApproveIn", data);
    return promise.then((data) => MsgApproveInResponse.decode(new _m0.Reader(data)));
  }

  CompleteBatch(request: MsgCompleteBatch): Promise<MsgCompleteBatchResponse> {
    const data = MsgCompleteBatch.encode(request).finish();
    const promise = this.rpc.request(this.service, "CompleteBatch", data);
    return promise.then((data) => MsgCompleteBatchResponse.decode(new _m0.Reader(data)));
  }

  UpdateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse> {
    const data = MsgUpdateSwapFee.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateSwapFee", data);
    return promise.then((data) => MsgUpdateSwapFeeResponse.decode(new _m0.Reader(data)));
  }

  CancelBatches(request: MsgCancelBatches): Promise<MsgCancelBatchesResponse> {
    const data = MsgCancelBatches.encode(request).finish();
    const promise = this.rpc.request(this.service, "CancelBatches", data);
    return promise.then((data) => MsgCancelBatchesResponse.decode(new _m0.Reader(data)));
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
