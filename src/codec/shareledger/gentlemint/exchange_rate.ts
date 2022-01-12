/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.gentlemint";

export interface ExchangeRate {
  rate: string;
}

const baseExchangeRate: object = {rate: ""};

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseExchangeRate} as ExchangeRate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRate {
    const message = {...baseExchangeRate} as ExchangeRate;
    message.rate = object.rate !== undefined && object.rate !== null ? String(object.rate) : "";
    return message;
  },

  toJSON(message: ExchangeRate): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRate>, I>>(object: I): ExchangeRate {
    const message = {...baseExchangeRate} as ExchangeRate;
    message.rate = object.rate ?? "";
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
