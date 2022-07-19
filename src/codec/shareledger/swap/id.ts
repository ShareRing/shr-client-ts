/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface Id {
  IDType: string;
  value: Long;
}

const baseId: object = {IDType: "", value: Long.UZERO};

export const Id = {
  encode(message: Id, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.IDType !== "") {
      writer.uint32(10).string(message.IDType);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).uint64(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Id {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseId} as Id;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.IDType = reader.string();
          break;
        case 2:
          message.value = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Id {
    const message = {...baseId} as Id;
    message.IDType = object.IDType !== undefined && object.IDType !== null ? String(object.IDType) : "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromString(object.value) : Long.UZERO;
    return message;
  },

  toJSON(message: Id): unknown {
    const obj: any = {};
    message.IDType !== undefined && (obj.IDType = message.IDType);
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Id>, I>>(object: I): Id {
    const message = {...baseId} as Id;
    message.IDType = object.IDType ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
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
