/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.document";

export interface Document {
  holder: string;
  issuer: string;
  proof: string;
  data: string;
  version: number;
}

function createBaseDocument(): Document {
  return {holder: "", issuer: "", proof: "", data: "", version: 0};
}

export const Document = {
  encode(message: Document, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.version !== 0) {
      writer.uint32(40).int32(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.proof = reader.string();
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.version = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Document {
    return {
      holder: isSet(object.holder) ? String(object.holder) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
      data: isSet(object.data) ? String(object.data) : "",
      version: isSet(object.version) ? Number(object.version) : 0
    };
  },

  toJSON(message: Document): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.proof !== undefined && (obj.proof = message.proof);
    message.data !== undefined && (obj.data = message.data);
    message.version !== undefined && (obj.version = Math.round(message.version));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    message.data = object.data ?? "";
    message.version = object.version ?? 0;
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & {[K in Exclude<keyof I, KeysOfUnion<P>>]: never};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
