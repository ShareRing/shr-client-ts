/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

export interface RequestedIn {
  slp3Address: string;
  erc20Address: string;
}

const baseRequestedIn: object = {slp3Address: "", erc20Address: ""};

export const RequestedIn = {
  encode(message: RequestedIn, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slp3Address !== "") {
      writer.uint32(10).string(message.slp3Address);
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestedIn {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseRequestedIn} as RequestedIn;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slp3Address = reader.string();
          break;
        case 2:
          message.erc20Address = reader.string();
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
    message.slp3Address = object.slp3Address !== undefined && object.slp3Address !== null ? String(object.slp3Address) : "";
    message.erc20Address = object.erc20Address !== undefined && object.erc20Address !== null ? String(object.erc20Address) : "";
    return message;
  },

  toJSON(message: RequestedIn): unknown {
    const obj: any = {};
    message.slp3Address !== undefined && (obj.slp3Address = message.slp3Address);
    message.erc20Address !== undefined && (obj.erc20Address = message.erc20Address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestedIn>, I>>(object: I): RequestedIn {
    const message = {...baseRequestedIn} as RequestedIn;
    message.slp3Address = object.slp3Address ?? "";
    message.erc20Address = object.erc20Address ?? "";
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
