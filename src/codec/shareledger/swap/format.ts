/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface Format {
  network: string;
  creator: string;
  dataFormat: string;
}

const baseFormat: object = {network: "", creator: "", dataFormat: ""};

export const Format = {
  encode(message: Format, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.dataFormat !== "") {
      writer.uint32(26).string(message.dataFormat);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Format {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseFormat} as Format;
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
          message.dataFormat = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Format {
    const message = {...baseFormat} as Format;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.dataFormat = object.dataFormat !== undefined && object.dataFormat !== null ? String(object.dataFormat) : "";
    return message;
  },

  toJSON(message: Format): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    message.creator !== undefined && (obj.creator = message.creator);
    message.dataFormat !== undefined && (obj.dataFormat = message.dataFormat);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Format>, I>>(object: I): Format {
    const message = {...baseFormat} as Format;
    message.network = object.network ?? "";
    message.creator = object.creator ?? "";
    message.dataFormat = object.dataFormat ?? "";
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
