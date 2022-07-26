/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.swap";

export interface MsgRequestOut {
  creator: string;
  srcAddress: string;
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
  fee?: DecCoin;
  txHashes: string[];
}

export interface MsgSwapInResponse {
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

const baseMsgRequestOut: object = {creator: "", srcAddress: "", destAddress: "", network: ""};

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
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(50).fork()).ldelim();
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

  fromJSON(object: any): MsgRequestOut {
    const message = {...baseMsgRequestOut} as MsgRequestOut;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.srcAddress = object.srcAddress !== undefined && object.srcAddress !== null ? String(object.srcAddress) : "";
    message.destAddress = object.destAddress !== undefined && object.destAddress !== null ? String(object.destAddress) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromJSON(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromJSON(object.fee) : undefined;
    return message;
  },

  toJSON(message: MsgRequestOut): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.srcAddress !== undefined && (obj.srcAddress = message.srcAddress);
    message.destAddress !== undefined && (obj.destAddress = message.destAddress);
    message.network !== undefined && (obj.network = message.network);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestOut>, I>>(object: I): MsgRequestOut {
    const message = {...baseMsgRequestOut} as MsgRequestOut;
    message.creator = object.creator ?? "";
    message.srcAddress = object.srcAddress ?? "";
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

const baseMsgCreateSchema: object = {creator: "", network: "", schema: "", contractExponent: 0};

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
    const message = {...baseMsgCreateSchema} as MsgCreateSchema;
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
    const message = {...baseMsgCreateSchema} as MsgCreateSchema;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.schema = object.schema !== undefined && object.schema !== null ? String(object.schema) : "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromJSON(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromJSON(object.out) : undefined;
    message.contractExponent =
      object.contractExponent !== undefined && object.contractExponent !== null ? Number(object.contractExponent) : 0;
    return message;
  },

  toJSON(message: MsgCreateSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.schema !== undefined && (obj.schema = message.schema);
    message.in !== undefined && (obj.in = message.in ? DecCoin.toJSON(message.in) : undefined);
    message.out !== undefined && (obj.out = message.out ? DecCoin.toJSON(message.out) : undefined);
    message.contractExponent !== undefined && (obj.contractExponent = message.contractExponent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSchema>, I>>(object: I): MsgCreateSchema {
    const message = {...baseMsgCreateSchema} as MsgCreateSchema;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.schema = object.schema ?? "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromPartial(object.out) : undefined;
    message.contractExponent = object.contractExponent ?? 0;
    return message;
  }
};

const baseMsgCreateSchemaResponse: object = {};

export const MsgCreateSchemaResponse = {
  encode(_: MsgCreateSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateSchemaResponse} as MsgCreateSchemaResponse;
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
    const message = {...baseMsgCreateSchemaResponse} as MsgCreateSchemaResponse;
    return message;
  },

  toJSON(_: MsgCreateSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateSchemaResponse>, I>>(_: I): MsgCreateSchemaResponse {
    const message = {...baseMsgCreateSchemaResponse} as MsgCreateSchemaResponse;
    return message;
  }
};

const baseMsgUpdateSchema: object = {creator: "", network: "", schema: "", contractExponent: 0};

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
    const message = {...baseMsgUpdateSchema} as MsgUpdateSchema;
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
    const message = {...baseMsgUpdateSchema} as MsgUpdateSchema;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.schema = object.schema !== undefined && object.schema !== null ? String(object.schema) : "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromJSON(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromJSON(object.out) : undefined;
    message.contractExponent =
      object.contractExponent !== undefined && object.contractExponent !== null ? Number(object.contractExponent) : 0;
    return message;
  },

  toJSON(message: MsgUpdateSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.schema !== undefined && (obj.schema = message.schema);
    message.in !== undefined && (obj.in = message.in ? DecCoin.toJSON(message.in) : undefined);
    message.out !== undefined && (obj.out = message.out ? DecCoin.toJSON(message.out) : undefined);
    message.contractExponent !== undefined && (obj.contractExponent = message.contractExponent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSchema>, I>>(object: I): MsgUpdateSchema {
    const message = {...baseMsgUpdateSchema} as MsgUpdateSchema;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.schema = object.schema ?? "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromPartial(object.out) : undefined;
    message.contractExponent = object.contractExponent ?? 0;
    return message;
  }
};

const baseMsgUpdateSchemaResponse: object = {};

export const MsgUpdateSchemaResponse = {
  encode(_: MsgUpdateSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateSchemaResponse} as MsgUpdateSchemaResponse;
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
    const message = {...baseMsgUpdateSchemaResponse} as MsgUpdateSchemaResponse;
    return message;
  },

  toJSON(_: MsgUpdateSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSchemaResponse>, I>>(_: I): MsgUpdateSchemaResponse {
    const message = {...baseMsgUpdateSchemaResponse} as MsgUpdateSchemaResponse;
    return message;
  }
};

const baseMsgDeleteSchema: object = {creator: "", network: ""};

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
    const message = {...baseMsgDeleteSchema} as MsgDeleteSchema;
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
    const message = {...baseMsgDeleteSchema} as MsgDeleteSchema;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: MsgDeleteSchema): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSchema>, I>>(object: I): MsgDeleteSchema {
    const message = {...baseMsgDeleteSchema} as MsgDeleteSchema;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    return message;
  }
};

const baseMsgDeleteSchemaResponse: object = {};

export const MsgDeleteSchemaResponse = {
  encode(_: MsgDeleteSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteSchemaResponse} as MsgDeleteSchemaResponse;
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
    const message = {...baseMsgDeleteSchemaResponse} as MsgDeleteSchemaResponse;
    return message;
  },

  toJSON(_: MsgDeleteSchemaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteSchemaResponse>, I>>(_: I): MsgDeleteSchemaResponse {
    const message = {...baseMsgDeleteSchemaResponse} as MsgDeleteSchemaResponse;
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

const baseMsgRequestIn: object = {creator: "", srcAddress: "", destAddress: "", network: "", txHashes: ""};

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
    for (const v of message.txHashes) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRequestIn} as MsgRequestIn;
    message.txHashes = [];
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
        case 7:
          message.txHashes.push(reader.string());
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
    message.txHashes = (object.txHashes ?? []).map((e: any) => String(e));
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
    if (message.txHashes) {
      obj.txHashes = message.txHashes.map((e) => e);
    } else {
      obj.txHashes = [];
    }
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
    message.txHashes = object.txHashes?.map((e) => e) || [];
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

const baseMsgCompleteBatch: object = {creator: "", batchId: Long.UZERO};

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
    const message = {...baseMsgCompleteBatch} as MsgCompleteBatch;
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
    const message = {...baseMsgCompleteBatch} as MsgCompleteBatch;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromString(object.batchId) : Long.UZERO;
    return message;
  },

  toJSON(message: MsgCompleteBatch): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBatch>, I>>(object: I): MsgCompleteBatch {
    const message = {...baseMsgCompleteBatch} as MsgCompleteBatch;
    message.creator = object.creator ?? "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    return message;
  }
};

const baseMsgCompleteBatchResponse: object = {};

export const MsgCompleteBatchResponse = {
  encode(_: MsgCompleteBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCompleteBatchResponse} as MsgCompleteBatchResponse;
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
    const message = {...baseMsgCompleteBatchResponse} as MsgCompleteBatchResponse;
    return message;
  },

  toJSON(_: MsgCompleteBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBatchResponse>, I>>(_: I): MsgCompleteBatchResponse {
    const message = {...baseMsgCompleteBatchResponse} as MsgCompleteBatchResponse;
    return message;
  }
};

const baseMsgUpdateSwapFee: object = {creator: "", network: ""};

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
    const message = {...baseMsgUpdateSwapFee} as MsgUpdateSwapFee;
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
    const message = {...baseMsgUpdateSwapFee} as MsgUpdateSwapFee;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromJSON(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromJSON(object.out) : undefined;
    return message;
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
    const message = {...baseMsgUpdateSwapFee} as MsgUpdateSwapFee;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.in = object.in !== undefined && object.in !== null ? DecCoin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? DecCoin.fromPartial(object.out) : undefined;
    return message;
  }
};

const baseMsgUpdateSwapFeeResponse: object = {};

export const MsgUpdateSwapFeeResponse = {
  encode(_: MsgUpdateSwapFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateSwapFeeResponse} as MsgUpdateSwapFeeResponse;
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
    const message = {...baseMsgUpdateSwapFeeResponse} as MsgUpdateSwapFeeResponse;
    return message;
  },

  toJSON(_: MsgUpdateSwapFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapFeeResponse>, I>>(_: I): MsgUpdateSwapFeeResponse {
    const message = {...baseMsgUpdateSwapFeeResponse} as MsgUpdateSwapFeeResponse;
    return message;
  }
};

const baseMsgCancelBatches: object = {creator: "", ids: Long.UZERO};

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
    const message = {...baseMsgCancelBatches} as MsgCancelBatches;
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

  fromJSON(object: any): MsgCancelBatches {
    const message = {...baseMsgCancelBatches} as MsgCancelBatches;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    return message;
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
    const message = {...baseMsgCancelBatches} as MsgCancelBatches;
    message.creator = object.creator ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

const baseMsgCancelBatchesResponse: object = {};

export const MsgCancelBatchesResponse = {
  encode(_: MsgCancelBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCancelBatchesResponse} as MsgCancelBatchesResponse;
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
    const message = {...baseMsgCancelBatchesResponse} as MsgCancelBatchesResponse;
    return message;
  },

  toJSON(_: MsgCancelBatchesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelBatchesResponse>, I>>(_: I): MsgCancelBatchesResponse {
    const message = {...baseMsgCancelBatchesResponse} as MsgCancelBatchesResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestOut(request: MsgRequestOut): Promise<MsgOutSwapResponse>;
  ApproveOut(request: MsgApproveOut): Promise<MsgApproveResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  CreateSchema(request: MsgCreateSchema): Promise<MsgCreateSchemaResponse>;
  UpdateSchema(request: MsgUpdateSchema): Promise<MsgUpdateSchemaResponse>;
  DeleteSchema(request: MsgDeleteSchema): Promise<MsgDeleteSchemaResponse>;
  Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
  Reject(request: MsgReject): Promise<MsgRejectResponse>;
  RequestIn(request: MsgRequestIn): Promise<MsgSwapInResponse>;
  ApproveIn(request: MsgApproveIn): Promise<MsgApproveInResponse>;
  CompleteBatch(request: MsgCompleteBatch): Promise<MsgCompleteBatchResponse>;
  UpdateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CancelBatches(request: MsgCancelBatches): Promise<MsgCancelBatchesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
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

  CreateSchema(request: MsgCreateSchema): Promise<MsgCreateSchemaResponse> {
    const data = MsgCreateSchema.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "CreateSchema", data);
    return promise.then((data) => MsgCreateSchemaResponse.decode(new _m0.Reader(data)));
  }

  UpdateSchema(request: MsgUpdateSchema): Promise<MsgUpdateSchemaResponse> {
    const data = MsgUpdateSchema.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "UpdateSchema", data);
    return promise.then((data) => MsgUpdateSchemaResponse.decode(new _m0.Reader(data)));
  }

  DeleteSchema(request: MsgDeleteSchema): Promise<MsgDeleteSchemaResponse> {
    const data = MsgDeleteSchema.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "DeleteSchema", data);
    return promise.then((data) => MsgDeleteSchemaResponse.decode(new _m0.Reader(data)));
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

  CompleteBatch(request: MsgCompleteBatch): Promise<MsgCompleteBatchResponse> {
    const data = MsgCompleteBatch.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "CompleteBatch", data);
    return promise.then((data) => MsgCompleteBatchResponse.decode(new _m0.Reader(data)));
  }

  UpdateSwapFee(request: MsgUpdateSwapFee): Promise<MsgUpdateSwapFeeResponse> {
    const data = MsgUpdateSwapFee.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "UpdateSwapFee", data);
    return promise.then((data) => MsgUpdateSwapFeeResponse.decode(new _m0.Reader(data)));
  }

  CancelBatches(request: MsgCancelBatches): Promise<MsgCancelBatchesResponse> {
    const data = MsgCancelBatches.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "CancelBatches", data);
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
