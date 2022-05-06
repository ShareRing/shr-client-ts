/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface SignSchema {
  network: string;
  creator: string;
  schema: string;
}

const baseSignSchema: object = {network: "", creator: "", schema: ""};

export const SignSchema = {
  encode(message: SignSchema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseSignSchema} as SignSchema;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignSchema {
    const message = {...baseSignSchema} as SignSchema;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.schema = object.schema !== undefined && object.schema !== null ? String(object.schema) : "";
    return message;
  },

  toJSON(message: SignSchema): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    message.creator !== undefined && (obj.creator = message.creator);
    message.schema !== undefined && (obj.schema = message.schema);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignSchema>, I>>(object: I): SignSchema {
    const message = {...baseSignSchema} as SignSchema;
    message.network = object.network ?? "";
    message.creator = object.creator ?? "";
    message.schema = object.schema ?? "";
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
