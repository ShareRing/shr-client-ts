/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Coin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.swap";

export interface Schema {
  network: string;
  creator: string;
  schema: string;
  contractExponent: number;
  fee?: Fee;
}

export interface Fee {
  in?: Coin;
  out?: Coin;
}

const baseSchema: object = {network: "", creator: "", schema: "", contractExponent: 0};

export const Schema = {
  encode(message: Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    if (message.contractExponent !== 0) {
      writer.uint32(32).int32(message.contractExponent);
    }
    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseSchema} as Schema;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.string();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.schema = reader.string();
          break;
        case 4:
          message.contractExponent = reader.int32();
          break;
        case 5:
          message.fee = Fee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Schema {
    const message = {...baseSchema} as Schema;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.schema = object.schema !== undefined && object.schema !== null ? String(object.schema) : "";
    message.contractExponent =
      object.contractExponent !== undefined && object.contractExponent !== null ? Number(object.contractExponent) : 0;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromJSON(object.fee) : undefined;
    return message;
  },

  toJSON(message: Schema): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    message.creator !== undefined && (obj.creator = message.creator);
    message.schema !== undefined && (obj.schema = message.schema);
    message.contractExponent !== undefined && (obj.contractExponent = message.contractExponent);
    message.fee !== undefined && (obj.fee = message.fee ? Fee.toJSON(message.fee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Schema>, I>>(object: I): Schema {
    const message = {...baseSchema} as Schema;
    message.network = object.network ?? "";
    message.creator = object.creator ?? "";
    message.schema = object.schema ?? "";
    message.contractExponent = object.contractExponent ?? 0;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};

const baseFee: object = {};

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.in !== undefined) {
      Coin.encode(message.in, writer.uint32(10).fork()).ldelim();
    }
    if (message.out !== undefined) {
      Coin.encode(message.out, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseFee} as Fee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.in = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.out = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fee {
    const message = {...baseFee} as Fee;
    message.in = object.in !== undefined && object.in !== null ? Coin.fromJSON(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? Coin.fromJSON(object.out) : undefined;
    return message;
  },

  toJSON(message: Fee): unknown {
    const obj: any = {};
    message.in !== undefined && (obj.in = message.in ? Coin.toJSON(message.in) : undefined);
    message.out !== undefined && (obj.out = message.out ? Coin.toJSON(message.out) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = {...baseFee} as Fee;
    message.in = object.in !== undefined && object.in !== null ? Coin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? Coin.fromPartial(object.out) : undefined;
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
