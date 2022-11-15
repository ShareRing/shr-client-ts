/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.booking";

export interface Booking {
  bookID: string;
  booker: string;
  UUID: string;
  duration: Long;
  isCompleted: boolean;
}

function createBaseBooking(): Booking {
  return {bookID: "", booker: "", UUID: "", duration: Long.ZERO, isCompleted: false};
}

export const Booking = {
  encode(message: Booking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bookID !== "") {
      writer.uint32(10).string(message.bookID);
    }
    if (message.booker !== "") {
      writer.uint32(18).string(message.booker);
    }
    if (message.UUID !== "") {
      writer.uint32(26).string(message.UUID);
    }
    if (!message.duration.isZero()) {
      writer.uint32(32).int64(message.duration);
    }
    if (message.isCompleted === true) {
      writer.uint32(40).bool(message.isCompleted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Booking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBooking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookID = reader.string();
          break;
        case 2:
          message.booker = reader.string();
          break;
        case 3:
          message.UUID = reader.string();
          break;
        case 4:
          message.duration = reader.int64() as Long;
          break;
        case 5:
          message.isCompleted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Booking {
    return {
      bookID: isSet(object.bookID) ? String(object.bookID) : "",
      booker: isSet(object.booker) ? String(object.booker) : "",
      UUID: isSet(object.UUID) ? String(object.UUID) : "",
      duration: isSet(object.duration) ? Long.fromValue(object.duration) : Long.ZERO,
      isCompleted: isSet(object.isCompleted) ? Boolean(object.isCompleted) : false
    };
  },

  toJSON(message: Booking): unknown {
    const obj: any = {};
    message.bookID !== undefined && (obj.bookID = message.bookID);
    message.booker !== undefined && (obj.booker = message.booker);
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.duration !== undefined && (obj.duration = (message.duration || Long.ZERO).toString());
    message.isCompleted !== undefined && (obj.isCompleted = message.isCompleted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Booking>, I>>(object: I): Booking {
    const message = createBaseBooking();
    message.bookID = object.bookID ?? "";
    message.booker = object.booker ?? "";
    message.UUID = object.UUID ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.ZERO;
    message.isCompleted = object.isCompleted ?? false;
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
