/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.booking";
export interface Booking {
  bookID: string;
  booker: string;
  UUID: string;
  duration: Long;
  isCompleted: boolean;
}

function createBaseBooking(): Booking {
  return {
    bookID: "",
    booker: "",
    UUID: "",
    duration: Long.ZERO,
    isCompleted: false
  };
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
