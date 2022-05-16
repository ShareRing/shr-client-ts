/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Coin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.swap";

export interface Request {
  id: Long;
  srcAddr: string;
  destAddr: string;
  srcNetwork: string;
  destNetwork: string;
  amount?: Coin;
  fee?: Coin;
  status: string;
  batchId: Long;
  createdAt: Long;
}

const baseRequest: object = {
  id: Long.UZERO,
  srcAddr: "",
  destAddr: "",
  srcNetwork: "",
  destNetwork: "",
  status: "",
  batchId: Long.UZERO,
  createdAt: Long.UZERO
};

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.srcAddr !== "") {
      writer.uint32(18).string(message.srcAddr);
    }
    if (message.destAddr !== "") {
      writer.uint32(26).string(message.destAddr);
    }
    if (message.srcNetwork !== "") {
      writer.uint32(34).string(message.srcNetwork);
    }
    if (message.destNetwork !== "") {
      writer.uint32(42).string(message.destNetwork);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }
    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }
    if (!message.batchId.isZero()) {
      writer.uint32(72).uint64(message.batchId);
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(80).uint64(message.createdAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseRequest} as Request;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.srcAddr = reader.string();
          break;
        case 3:
          message.destAddr = reader.string();
          break;
        case 4:
          message.srcNetwork = reader.string();
          break;
        case 5:
          message.destNetwork = reader.string();
          break;
        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 8:
          message.status = reader.string();
          break;
        case 9:
          message.batchId = reader.uint64() as Long;
          break;
        case 10:
          message.createdAt = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    const message = {...baseRequest} as Request;
    message.id = object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO;
    message.srcAddr = object.srcAddr !== undefined && object.srcAddr !== null ? String(object.srcAddr) : "";
    message.destAddr = object.destAddr !== undefined && object.destAddr !== null ? String(object.destAddr) : "";
    message.srcNetwork = object.srcNetwork !== undefined && object.srcNetwork !== null ? String(object.srcNetwork) : "";
    message.destNetwork = object.destNetwork !== undefined && object.destNetwork !== null ? String(object.destNetwork) : "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromJSON(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromJSON(object.fee) : undefined;
    message.status = object.status !== undefined && object.status !== null ? String(object.status) : "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromString(object.batchId) : Long.UZERO;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromString(object.createdAt) : Long.UZERO;
    return message;
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.srcAddr !== undefined && (obj.srcAddr = message.srcAddr);
    message.destAddr !== undefined && (obj.destAddr = message.destAddr);
    message.srcNetwork !== undefined && (obj.srcNetwork = message.srcNetwork);
    message.destNetwork !== undefined && (obj.destNetwork = message.destNetwork);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.status !== undefined && (obj.status = message.status);
    message.batchId !== undefined && (obj.batchId = (message.batchId || Long.UZERO).toString());
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = {...baseRequest} as Request;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.srcAddr = object.srcAddr ?? "";
    message.destAddr = object.destAddr ?? "";
    message.srcNetwork = object.srcNetwork ?? "";
    message.destNetwork = object.destNetwork ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.status = object.status ?? "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.UZERO;
    return message;
  }
};

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
