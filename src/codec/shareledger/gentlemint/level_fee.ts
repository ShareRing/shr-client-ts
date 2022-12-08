/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Coin, DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.gentlemint";

export interface LevelFee {
  level: string;
  fee?: DecCoin;
  creator: string;
}

export interface LevelFeeDetail {
  level: string;
  creator: string;
  originalFee?: DecCoin;
  convertedFee?: Coin;
}

function createBaseLevelFee(): LevelFee {
  return {level: "", fee: undefined, creator: ""};
}

export const LevelFee = {
  encode(message: LevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== "") {
      writer.uint32(10).string(message.level);
    }
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.string();
          break;
        case 2:
          message.fee = DecCoin.decode(reader, reader.uint32());
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

  fromJSON(object: any): LevelFee {
    return {
      level: isSet(object.level) ? String(object.level) : "",
      fee: isSet(object.fee) ? DecCoin.fromJSON(object.fee) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: LevelFee): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    message.fee !== undefined && (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LevelFee>, I>>(object: I): LevelFee {
    const message = createBaseLevelFee();
    message.level = object.level ?? "";
    message.fee = object.fee !== undefined && object.fee !== null ? DecCoin.fromPartial(object.fee) : undefined;
    message.creator = object.creator ?? "";
    return message;
  }
};

function createBaseLevelFeeDetail(): LevelFeeDetail {
  return {level: "", creator: "", originalFee: undefined, convertedFee: undefined};
}

export const LevelFeeDetail = {
  encode(message: LevelFeeDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== "") {
      writer.uint32(10).string(message.level);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.originalFee !== undefined) {
      DecCoin.encode(message.originalFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.convertedFee !== undefined) {
      Coin.encode(message.convertedFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LevelFeeDetail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelFeeDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 2:
          message.originalFee = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.convertedFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LevelFeeDetail {
    return {
      level: isSet(object.level) ? String(object.level) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      originalFee: isSet(object.originalFee) ? DecCoin.fromJSON(object.originalFee) : undefined,
      convertedFee: isSet(object.convertedFee) ? Coin.fromJSON(object.convertedFee) : undefined
    };
  },

  toJSON(message: LevelFeeDetail): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    message.creator !== undefined && (obj.creator = message.creator);
    message.originalFee !== undefined && (obj.originalFee = message.originalFee ? DecCoin.toJSON(message.originalFee) : undefined);
    message.convertedFee !== undefined && (obj.convertedFee = message.convertedFee ? Coin.toJSON(message.convertedFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LevelFeeDetail>, I>>(object: I): LevelFeeDetail {
    const message = createBaseLevelFeeDetail();
    message.level = object.level ?? "";
    message.creator = object.creator ?? "";
    message.originalFee =
      object.originalFee !== undefined && object.originalFee !== null ? DecCoin.fromPartial(object.originalFee) : undefined;
    message.convertedFee =
      object.convertedFee !== undefined && object.convertedFee !== null ? Coin.fromPartial(object.convertedFee) : undefined;
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
