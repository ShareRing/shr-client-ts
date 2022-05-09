/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface Batch {
  id: Long;
  signature: string;
  txIds: Long[];
  status: string;
  digest: string;
}

const baseBatch: object = {id: Long.UZERO, signature: "", txIds: Long.UZERO, status: "", digest: ""};

export const Batch = {
  encode(message: Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    writer.uint32(26).fork();
    for (const v of message.txIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.digest !== "") {
      writer.uint32(42).string(message.digest);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseBatch} as Batch;
    message.txIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        case 2:
          message.signature = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.txIds.push(reader.uint64() as Long);
            }
          } else {
            message.txIds.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.digest = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Batch {
    const message = {...baseBatch} as Batch;
    message.id = object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO;
    message.signature = object.signature !== undefined && object.signature !== null ? String(object.signature) : "";
    message.txIds = (object.txIds ?? []).map((e: any) => Long.fromString(e));
    message.status = object.status !== undefined && object.status !== null ? String(object.status) : "";
    message.digest = object.digest !== undefined && object.digest !== null ? String(object.digest) : "";
    return message;
  },

  toJSON(message: Batch): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.signature !== undefined && (obj.signature = message.signature);
    if (message.txIds) {
      obj.txIds = message.txIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.txIds = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.digest !== undefined && (obj.digest = message.digest);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Batch>, I>>(object: I): Batch {
    const message = {...baseBatch} as Batch;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.signature = object.signature ?? "";
    message.txIds = object.txIds?.map((e) => Long.fromValue(e)) || [];
    message.status = object.status ?? "";
    message.digest = object.digest ?? "";
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
