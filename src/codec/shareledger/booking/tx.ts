/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

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

const baseMsgCreateBooking: object = {booker: "", UUID: "", duration: Long.ZERO};

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
    const message = {...baseMsgCreateBooking} as MsgCreateBooking;
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

  fromJSON(object: any): MsgCreateBooking {
    const message = {...baseMsgCreateBooking} as MsgCreateBooking;
    message.booker = object.booker !== undefined && object.booker !== null ? String(object.booker) : "";
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromString(object.duration) : Long.ZERO;
    return message;
  },

  toJSON(message: MsgCreateBooking): unknown {
    const obj: any = {};
    message.booker !== undefined && (obj.booker = message.booker);
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.duration !== undefined && (obj.duration = (message.duration || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBooking>, I>>(object: I): MsgCreateBooking {
    const message = {...baseMsgCreateBooking} as MsgCreateBooking;
    message.booker = object.booker ?? "";
    message.UUID = object.UUID ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.ZERO;
    return message;
  }
};

const baseMsgCreateBookingResponse: object = {};

export const MsgCreateBookingResponse = {
  encode(_: MsgCreateBookingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBookingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateBookingResponse} as MsgCreateBookingResponse;
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

  fromJSON(_: any): MsgCreateBookingResponse {
    const message = {...baseMsgCreateBookingResponse} as MsgCreateBookingResponse;
    return message;
  },

  toJSON(_: MsgCreateBookingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBookingResponse>, I>>(_: I): MsgCreateBookingResponse {
    const message = {...baseMsgCreateBookingResponse} as MsgCreateBookingResponse;
    return message;
  }
};

const baseMsgCompleteBooking: object = {booker: "", bookID: ""};

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
    const message = {...baseMsgCompleteBooking} as MsgCompleteBooking;
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

  fromJSON(object: any): MsgCompleteBooking {
    const message = {...baseMsgCompleteBooking} as MsgCompleteBooking;
    message.booker = object.booker !== undefined && object.booker !== null ? String(object.booker) : "";
    message.bookID = object.bookID !== undefined && object.bookID !== null ? String(object.bookID) : "";
    return message;
  },

  toJSON(message: MsgCompleteBooking): unknown {
    const obj: any = {};
    message.booker !== undefined && (obj.booker = message.booker);
    message.bookID !== undefined && (obj.bookID = message.bookID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBooking>, I>>(object: I): MsgCompleteBooking {
    const message = {...baseMsgCompleteBooking} as MsgCompleteBooking;
    message.booker = object.booker ?? "";
    message.bookID = object.bookID ?? "";
    return message;
  }
};

const baseMsgCompleteBookingResponse: object = {};

export const MsgCompleteBookingResponse = {
  encode(_: MsgCompleteBookingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteBookingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCompleteBookingResponse} as MsgCompleteBookingResponse;
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

  fromJSON(_: any): MsgCompleteBookingResponse {
    const message = {...baseMsgCompleteBookingResponse} as MsgCompleteBookingResponse;
    return message;
  },

  toJSON(_: MsgCompleteBookingResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteBookingResponse>, I>>(_: I): MsgCompleteBookingResponse {
    const message = {...baseMsgCompleteBookingResponse} as MsgCompleteBookingResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBooking(request: MsgCreateBooking): Promise<MsgCreateBookingResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
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

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
