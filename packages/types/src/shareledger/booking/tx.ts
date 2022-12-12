/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact, Rpc} from "../../helpers";
export const protobufPackage = "shareledger.booking";
export interface MsgCreateBooking {
  booker: string;
  UUID: string;
  duration: Long;
}
export interface MsgCreateBookingResponse {}
export interface MsgCompleteBooking {
  booker: string;
  bookID: string;
}
export interface MsgCompleteBookingResponse {}

function createBaseMsgCreateBooking(): MsgCreateBooking {
  return {
    booker: "",
    UUID: "",
    duration: Long.ZERO
  };
}

export const MsgCreateBooking = {
  encode(message: MsgCreateBooking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.booker !== "") {
      writer.uint32(10).string(message.booker);
    }

    if (message.UUID !== "") {
      writer.uint32(18).string(message.UUID);
    }

    if (!message.duration.isZero()) {
      writer.uint32(24).int64(message.duration);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBooking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBooking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.booker = reader.string();
          break;

        case 2:
          message.UUID = reader.string();
          break;

        case 3:
          message.duration = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBooking>, I>>(object: I): MsgCreateBooking {
    const message = createBaseMsgCreateBooking();
    message.booker = object.booker ?? "";
    message.UUID = object.UUID ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.ZERO;
    return message;
  }
};

function createBaseMsgCreateBookingResponse(): MsgCreateBookingResponse {
  return {};
}

export const MsgCreateBookingResponse = {
  encode(_: MsgCreateBookingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBookingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBookingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBookingResponse>, I>>(_: I): MsgCreateBookingResponse {
    const message = createBaseMsgCreateBookingResponse();
    return message;
  }
};

function createBaseMsgCompleteBooking(): MsgCompleteBooking {
  return {
    booker: "",
    bookID: ""
  };
}

export const MsgCompleteBooking = {
  encode(message: MsgCompleteBooking, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.booker !== "") {
      writer.uint32(10).string(message.booker);
    }

    if (message.bookID !== "") {
      writer.uint32(18).string(message.bookID);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteBooking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteBooking();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.booker = reader.string();
          break;

        case 2:
          message.bookID = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBooking>, I>>(object: I): MsgCompleteBooking {
    const message = createBaseMsgCompleteBooking();
    message.booker = object.booker ?? "";
    message.bookID = object.bookID ?? "";
    return message;
  }
};

function createBaseMsgCompleteBookingResponse(): MsgCompleteBookingResponse {
  return {};
}

export const MsgCompleteBookingResponse = {
  encode(_: MsgCompleteBookingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteBookingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCompleteBookingResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBookingResponse>, I>>(_: I): MsgCompleteBookingResponse {
    const message = createBaseMsgCompleteBookingResponse();
    return message;
  }
};
/** Msg defines the Msg service. */

export interface Msg {
  CreateBooking(request: MsgCreateBooking): Promise<MsgCreateBookingResponse>;
  CompleteBooking(request: MsgCompleteBooking): Promise<MsgCompleteBookingResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBooking = this.CreateBooking.bind(this);
    this.CompleteBooking = this.CompleteBooking.bind(this);
  }

  CreateBooking(request: MsgCreateBooking): Promise<MsgCreateBookingResponse> {
    const data = MsgCreateBooking.encode(request).finish();
    const promise = this.rpc.request("shareledger.booking.Msg", "CreateBooking", data);
    return promise.then((data) => MsgCreateBookingResponse.decode(new _m0.Reader(data)));
  }

  CompleteBooking(request: MsgCompleteBooking): Promise<MsgCompleteBookingResponse> {
    const data = MsgCompleteBooking.encode(request).finish();
    const promise = this.rpc.request("shareledger.booking.Msg", "CompleteBooking", data);
    return promise.then((data) => MsgCompleteBookingResponse.decode(new _m0.Reader(data)));
  }
}
