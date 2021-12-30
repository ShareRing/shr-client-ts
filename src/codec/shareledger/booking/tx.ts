/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.booking";

export interface MsgBook {
  booker: string;
  UUID: string;
  duration: Long;
}

export interface MsgBookResponse {}

export interface MsgComplete {
  booker: string;
  bookID: string;
}

export interface MsgCompleteResponse {}

const baseMsgBook: object = {booker: "", UUID: "", duration: Long.ZERO};

export const MsgBook = {
  encode(message: MsgBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBook} as MsgBook;
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

  fromJSON(object: any): MsgBook {
    const message = {...baseMsgBook} as MsgBook;
    message.booker = object.booker !== undefined && object.booker !== null ? String(object.booker) : "";
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromString(object.duration) : Long.ZERO;
    return message;
  },

  toJSON(message: MsgBook): unknown {
    const obj: any = {};
    message.booker !== undefined && (obj.booker = message.booker);
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.duration !== undefined && (obj.duration = (message.duration || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBook>, I>>(object: I): MsgBook {
    const message = {...baseMsgBook} as MsgBook;
    message.booker = object.booker ?? "";
    message.UUID = object.UUID ?? "";
    message.duration = object.duration !== undefined && object.duration !== null ? Long.fromValue(object.duration) : Long.ZERO;
    return message;
  }
};

const baseMsgBookResponse: object = {};

export const MsgBookResponse = {
  encode(_: MsgBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgBookResponse} as MsgBookResponse;
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

  fromJSON(_: any): MsgBookResponse {
    const message = {...baseMsgBookResponse} as MsgBookResponse;
    return message;
  },

  toJSON(_: MsgBookResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBookResponse>, I>>(_: I): MsgBookResponse {
    const message = {...baseMsgBookResponse} as MsgBookResponse;
    return message;
  }
};

const baseMsgComplete: object = {booker: "", bookID: ""};

export const MsgComplete = {
  encode(message: MsgComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.booker !== "") {
      writer.uint32(10).string(message.booker);
    }
    if (message.bookID !== "") {
      writer.uint32(18).string(message.bookID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgComplete} as MsgComplete;
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

  fromJSON(object: any): MsgComplete {
    const message = {...baseMsgComplete} as MsgComplete;
    message.booker = object.booker !== undefined && object.booker !== null ? String(object.booker) : "";
    message.bookID = object.bookID !== undefined && object.bookID !== null ? String(object.bookID) : "";
    return message;
  },

  toJSON(message: MsgComplete): unknown {
    const obj: any = {};
    message.booker !== undefined && (obj.booker = message.booker);
    message.bookID !== undefined && (obj.bookID = message.bookID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgComplete>, I>>(object: I): MsgComplete {
    const message = {...baseMsgComplete} as MsgComplete;
    message.booker = object.booker ?? "";
    message.bookID = object.bookID ?? "";
    return message;
  }
};

const baseMsgCompleteResponse: object = {};

export const MsgCompleteResponse = {
  encode(_: MsgCompleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCompleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCompleteResponse} as MsgCompleteResponse;
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

  fromJSON(_: any): MsgCompleteResponse {
    const message = {...baseMsgCompleteResponse} as MsgCompleteResponse;
    return message;
  },

  toJSON(_: MsgCompleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCompleteResponse>, I>>(_: I): MsgCompleteResponse {
    const message = {...baseMsgCompleteResponse} as MsgCompleteResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  Book(request: MsgBook): Promise<MsgBookResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Complete(request: MsgComplete): Promise<MsgCompleteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Book = this.Book.bind(this);
    this.Complete = this.Complete.bind(this);
  }
  Book(request: MsgBook): Promise<MsgBookResponse> {
    const data = MsgBook.encode(request).finish();
    const promise = this.rpc.request("shareledger.booking.Msg", "Book", data);
    return promise.then((data) => MsgBookResponse.decode(new _m0.Reader(data)));
  }

  Complete(request: MsgComplete): Promise<MsgCompleteResponse> {
    const data = MsgComplete.encode(request).finish();
    const promise = this.rpc.request("shareledger.booking.Msg", "Complete", data);
    return promise.then((data) => MsgCompleteResponse.decode(new _m0.Reader(data)));
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
