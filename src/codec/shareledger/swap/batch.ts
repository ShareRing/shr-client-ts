/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface Batch {
  id: Long;
  signature: string;
  requestIds: Long[];
  status: string;
  network: string;
}

const baseBatch: object = {id: Long.UZERO, signature: "", requestIds: Long.UZERO, status: "", network: ""};

export const Batch = {
  encode(message: Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    writer.uint32(26).fork();
    for (const v of message.requestIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }
    if (message.network !== "") {
      writer.uint32(42).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseBatch} as Batch;
    message.requestIds = [];
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
              message.requestIds.push(reader.uint64() as Long);
            }
          } else {
            message.requestIds.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.status = reader.string();
          break;
        case 5:
          message.network = reader.string();
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
    message.requestIds = (object.requestIds ?? []).map((e: any) => Long.fromString(e));
    message.status = object.status !== undefined && object.status !== null ? String(object.status) : "";
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: Batch): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.signature !== undefined && (obj.signature = message.signature);
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.requestIds = [];
    }
    message.status !== undefined && (obj.status = message.status);
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Batch>, I>>(object: I): Batch {
    const message = {...baseBatch} as Batch;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.signature = object.signature ?? "";
    message.requestIds = object.requestIds?.map((e) => Long.fromValue(e)) || [];
    message.status = object.status ?? "";
    message.network = object.network ?? "";
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
