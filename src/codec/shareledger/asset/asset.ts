/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.asset";

export interface Asset {
  creator: string;
  hash: Uint8Array;
  UUID: string;
  status: boolean;
  rate: Long;
}

function createBaseAsset(): Asset {
  return {creator: "", hash: new Uint8Array(), UUID: "", status: false, rate: Long.ZERO};
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.UUID !== "") {
      writer.uint32(26).string(message.UUID);
    }
    if (message.status === true) {
      writer.uint32(32).bool(message.status);
    }
    if (!message.rate.isZero()) {
      writer.uint32(40).int64(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        case 3:
          message.UUID = reader.string();
          break;
        case 4:
          message.status = reader.bool();
          break;
        case 5:
          message.rate = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      UUID: isSet(object.UUID) ? String(object.UUID) : "",
      status: isSet(object.status) ? Boolean(object.status) : false,
      rate: isSet(object.rate) ? Long.fromValue(object.rate) : Long.ZERO
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.status !== undefined && (obj.status = message.status);
    message.rate !== undefined && (obj.rate = (message.rate || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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
