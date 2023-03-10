/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {BaseID} from "../../shareledger/id/base_id";

export const protobufPackage = "shareledger.id";

export interface Id {
  id: string;
  data?: BaseID;
}

const baseId: object = {id: ""};

export const Id = {
  encode(message: Id, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.data !== undefined) {
      BaseID.encode(message.data, writer.uint32(18).fork()).ldelim();
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
          message.id = reader.string();
          break;
        case 2:
          message.data = BaseID.decode(reader, reader.uint32());
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
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.data = object.data !== undefined && object.data !== null ? BaseID.fromJSON(object.data) : undefined;
    return message;
  },

  toJSON(message: Id): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.data !== undefined && (obj.data = message.data ? BaseID.toJSON(message.data) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Id>, I>>(object: I): Id {
    const message = {...baseId} as Id;
    message.id = object.id ?? "";
    message.data = object.data !== undefined && object.data !== null ? BaseID.fromPartial(object.data) : undefined;
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
