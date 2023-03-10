/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.gentlemint";

export interface ActionLevelFee {
  action: string;
  level: string;
  creator: string;
}

const baseActionLevelFee: object = {action: "", level: "", creator: ""};

export const ActionLevelFee = {
  encode(message: ActionLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.level !== "") {
      writer.uint32(18).string(message.level);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseActionLevelFee} as ActionLevelFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        case 2:
          message.level = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionLevelFee {
    const message = {...baseActionLevelFee} as ActionLevelFee;
    message.action = object.action !== undefined && object.action !== null ? String(object.action) : "";
    message.level = object.level !== undefined && object.level !== null ? String(object.level) : "";
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    return message;
  },

  toJSON(message: ActionLevelFee): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.level !== undefined && (obj.level = message.level);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionLevelFee>, I>>(object: I): ActionLevelFee {
    const message = {...baseActionLevelFee} as ActionLevelFee;
    message.action = object.action ?? "";
    message.level = object.level ?? "";
    message.creator = object.creator ?? "";
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
