/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface RequestedIn {
  address: string;
  txHashes: string[];
}

const baseRequestedIn: object = {address: "", txHashes: ""};

export const RequestedIn = {
  encode(message: RequestedIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.txHashes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestedIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseRequestedIn} as RequestedIn;
    message.txHashes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.txHashes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestedIn {
    const message = {...baseRequestedIn} as RequestedIn;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.txHashes = (object.txHashes ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: RequestedIn): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.txHashes) {
      obj.txHashes = message.txHashes.map((e) => e);
    } else {
      obj.txHashes = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestedIn>, I>>(object: I): RequestedIn {
    const message = {...baseRequestedIn} as RequestedIn;
    message.address = object.address ?? "";
    message.txHashes = object.txHashes?.map((e) => e) || [];
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
