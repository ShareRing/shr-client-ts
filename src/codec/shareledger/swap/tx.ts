/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.swap";

export interface MsgOut {
  creator: string;
  destAddr: string;
  network: string;
  amount?: DecCoin;
  fee?: DecCoin;
}

export interface MsgOutResponse {
  rid: Long;
}

export interface MsgApprove {
  creator: string;
  signedHash: string;
  txs: Long[];
}

export interface MsgApproveResponse {
  batchID: Long;
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

export interface MsgCreateFormat {
  creator: string;
  network: string;
  dataTypeFormat: string;
}

export interface MsgCreateFormatResponse {}

export interface MsgUpdateFormat {
  creator: string;
  network: string;
  dataTypeFormat: string;
}

export interface MsgUpdateFormatResponse {}

export interface MsgDeleteFormat {
  creator: string;
  network: string;
}

export interface MsgDeleteFormatResponse {}

const baseMsgOut: object = {creator: "", destAddr: "", network: ""};

export const MsgOut = {
  encode(message: MsgOut, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.destAddr !== "") {
      writer.uint32(18).string(message.destAddr);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOut {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgOut} as MsgOut;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.destAddr = reader.string();
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

  fromJSON(object: any): MsgOut {
    const message = {...baseMsgOut} as MsgOut;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.destAddr = object.destAddr !== undefined && object.destAddr !== null ? String(object.destAddr) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromJSON(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromJSON(object.fee) : undefined;
    return message;
  },

  toJSON(message: MsgOut): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.destAddr !== undefined && (obj.destAddr = message.destAddr);
    message.network !== undefined && (obj.network = message.network);
    message.amount !== undefined && (obj.amount = message.amount ? DecCoin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOut>, I>>(object: I): MsgOut {
    const message = {...baseMsgOut} as MsgOut;
    message.creator = object.creator ?? "";
    message.destAddr = object.destAddr ?? "";
    message.network = object.network ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? DecCoin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    return message;
  }
};

const baseMsgOutResponse: object = {rid: Long.UZERO};

export const MsgOutResponse = {
  encode(message: MsgOutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.rid.isZero()) {
      writer.uint32(8).uint64(message.rid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgOutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgOutResponse} as MsgOutResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rid = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgOutResponse {
    const message = {...baseMsgOutResponse} as MsgOutResponse;
    message.rid = object.rid !== undefined && object.rid !== null ? Long.fromString(object.rid) : Long.UZERO;
    return message;
  },

  toJSON(message: MsgOutResponse): unknown {
    const obj: any = {};
    message.rid !== undefined && (obj.rid = (message.rid || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgOutResponse>, I>>(object: I): MsgOutResponse {
    const message = {...baseMsgOutResponse} as MsgOutResponse;
    message.rid = object.rid !== undefined && object.rid !== null ? Long.fromValue(object.rid) : Long.UZERO;
    return message;
  }
};

const baseMsgApprove: object = {creator: "", signedHash: "", txs: Long.UZERO};

export const MsgApprove = {
  encode(message: MsgApprove, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.signedHash !== "") {
      writer.uint32(18).string(message.signedHash);
    }
    writer.uint32(26).fork();
    for (const v of message.txs) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApprove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgApprove} as MsgApprove;
    message.txs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.signedHash = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.txs.push(reader.uint64() as Long);
            }
          } else {
            message.txs.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApprove {
    const message = {...baseMsgApprove} as MsgApprove;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.signedHash = object.signedHash !== undefined && object.signedHash !== null ? String(object.signedHash) : "";
    message.txs = (object.txs ?? []).map((e: any) => Long.fromString(e));
    return message;
  },

  toJSON(message: MsgApprove): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.signedHash !== undefined && (obj.signedHash = message.signedHash);
    if (message.txs) {
      obj.txs = message.txs.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.txs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApprove>, I>>(object: I): MsgApprove {
    const message = {...baseMsgApprove} as MsgApprove;
    message.creator = object.creator ?? "";
    message.signedHash = object.signedHash ?? "";
    message.txs = object.txs?.map((e) => Long.fromValue(e)) || [];
    return message;
  }
};

const baseMsgApproveResponse: object = {batchID: Long.UZERO};

export const MsgApproveResponse = {
  encode(message: MsgApproveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchID.isZero()) {
      writer.uint32(8).uint64(message.batchID);
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
          message.batchID = reader.uint64() as Long;
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
    message.batchID = object.batchID !== undefined && object.batchID !== null ? Long.fromString(object.batchID) : Long.UZERO;
    return message;
  },

  toJSON(message: MsgApproveResponse): unknown {
    const obj: any = {};
    message.batchID !== undefined && (obj.batchID = (message.batchID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveResponse>, I>>(object: I): MsgApproveResponse {
    const message = {...baseMsgApproveResponse} as MsgApproveResponse;
    message.batchID = object.batchID !== undefined && object.batchID !== null ? Long.fromValue(object.batchID) : Long.UZERO;
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

const baseMsgCreateFormat: object = {creator: "", network: "", dataTypeFormat: ""};

export const MsgCreateFormat = {
  encode(message: MsgCreateFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.dataTypeFormat !== "") {
      writer.uint32(26).string(message.dataTypeFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateFormat} as MsgCreateFormat;
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
          message.dataTypeFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateFormat {
    const message = {...baseMsgCreateFormat} as MsgCreateFormat;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.dataTypeFormat = object.dataTypeFormat !== undefined && object.dataTypeFormat !== null ? String(object.dataTypeFormat) : "";
    return message;
  },

  toJSON(message: MsgCreateFormat): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.dataTypeFormat !== undefined && (obj.dataTypeFormat = message.dataTypeFormat);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFormat>, I>>(object: I): MsgCreateFormat {
    const message = {...baseMsgCreateFormat} as MsgCreateFormat;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.dataTypeFormat = object.dataTypeFormat ?? "";
    return message;
  }
};

const baseMsgCreateFormatResponse: object = {};

export const MsgCreateFormatResponse = {
  encode(_: MsgCreateFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateFormatResponse} as MsgCreateFormatResponse;
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

  fromJSON(_: any): MsgCreateFormatResponse {
    const message = {...baseMsgCreateFormatResponse} as MsgCreateFormatResponse;
    return message;
  },

  toJSON(_: MsgCreateFormatResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateFormatResponse>, I>>(_: I): MsgCreateFormatResponse {
    const message = {...baseMsgCreateFormatResponse} as MsgCreateFormatResponse;
    return message;
  }
};

const baseMsgUpdateFormat: object = {creator: "", network: "", dataTypeFormat: ""};

export const MsgUpdateFormat = {
  encode(message: MsgUpdateFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    if (message.dataTypeFormat !== "") {
      writer.uint32(26).string(message.dataTypeFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateFormat} as MsgUpdateFormat;
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
          message.dataTypeFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateFormat {
    const message = {...baseMsgUpdateFormat} as MsgUpdateFormat;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.dataTypeFormat = object.dataTypeFormat !== undefined && object.dataTypeFormat !== null ? String(object.dataTypeFormat) : "";
    return message;
  },

  toJSON(message: MsgUpdateFormat): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    message.dataTypeFormat !== undefined && (obj.dataTypeFormat = message.dataTypeFormat);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFormat>, I>>(object: I): MsgUpdateFormat {
    const message = {...baseMsgUpdateFormat} as MsgUpdateFormat;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    message.dataTypeFormat = object.dataTypeFormat ?? "";
    return message;
  }
};

const baseMsgUpdateFormatResponse: object = {};

export const MsgUpdateFormatResponse = {
  encode(_: MsgUpdateFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateFormatResponse} as MsgUpdateFormatResponse;
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

  fromJSON(_: any): MsgUpdateFormatResponse {
    const message = {...baseMsgUpdateFormatResponse} as MsgUpdateFormatResponse;
    return message;
  },

  toJSON(_: MsgUpdateFormatResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateFormatResponse>, I>>(_: I): MsgUpdateFormatResponse {
    const message = {...baseMsgUpdateFormatResponse} as MsgUpdateFormatResponse;
    return message;
  }
};

const baseMsgDeleteFormat: object = {creator: "", network: ""};

export const MsgDeleteFormat = {
  encode(message: MsgDeleteFormat, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFormat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteFormat} as MsgDeleteFormat;
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

  fromJSON(object: any): MsgDeleteFormat {
    const message = {...baseMsgDeleteFormat} as MsgDeleteFormat;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: MsgDeleteFormat): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteFormat>, I>>(object: I): MsgDeleteFormat {
    const message = {...baseMsgDeleteFormat} as MsgDeleteFormat;
    message.creator = object.creator ?? "";
    message.network = object.network ?? "";
    return message;
  }
};

const baseMsgDeleteFormatResponse: object = {};

export const MsgDeleteFormatResponse = {
  encode(_: MsgDeleteFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteFormatResponse} as MsgDeleteFormatResponse;
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

  fromJSON(_: any): MsgDeleteFormatResponse {
    const message = {...baseMsgDeleteFormatResponse} as MsgDeleteFormatResponse;
    return message;
  },

  toJSON(_: MsgDeleteFormatResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteFormatResponse>, I>>(_: I): MsgDeleteFormatResponse {
    const message = {...baseMsgDeleteFormatResponse} as MsgDeleteFormatResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  Out(request: MsgOut): Promise<MsgOutResponse>;
  Approve(request: MsgApprove): Promise<MsgApproveResponse>;
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
  CreateFormat(request: MsgCreateFormat): Promise<MsgCreateFormatResponse>;
  UpdateFormat(request: MsgUpdateFormat): Promise<MsgUpdateFormatResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteFormat(request: MsgDeleteFormat): Promise<MsgDeleteFormatResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Out = this.Out.bind(this);
    this.Approve = this.Approve.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Withdraw = this.Withdraw.bind(this);
    this.CreateFormat = this.CreateFormat.bind(this);
    this.UpdateFormat = this.UpdateFormat.bind(this);
    this.DeleteFormat = this.DeleteFormat.bind(this);
  }
  Out(request: MsgOut): Promise<MsgOutResponse> {
    const data = MsgOut.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "Out", data);
    return promise.then((data) => MsgOutResponse.decode(new _m0.Reader(data)));
  }

  Approve(request: MsgApprove): Promise<MsgApproveResponse> {
    const data = MsgApprove.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "Approve", data);
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

  CreateFormat(request: MsgCreateFormat): Promise<MsgCreateFormatResponse> {
    const data = MsgCreateFormat.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "CreateFormat", data);
    return promise.then((data) => MsgCreateFormatResponse.decode(new _m0.Reader(data)));
  }

  UpdateFormat(request: MsgUpdateFormat): Promise<MsgUpdateFormatResponse> {
    const data = MsgUpdateFormat.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "UpdateFormat", data);
    return promise.then((data) => MsgUpdateFormatResponse.decode(new _m0.Reader(data)));
  }

  DeleteFormat(request: MsgDeleteFormat): Promise<MsgDeleteFormatResponse> {
    const data = MsgDeleteFormat.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Msg", "DeleteFormat", data);
    return promise.then((data) => MsgDeleteFormatResponse.decode(new _m0.Reader(data)));
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
