/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Booking} from "../../shareledger/booking/booking";

export const protobufPackage = "shareledger.booking";

export interface QueryBookingRequest {
  bookID: string;
}

export interface QueryBookingResponse {
  booking?: Booking;
}

const baseQueryBookingRequest: object = {bookID: ""};

export const QueryBookingRequest = {
  encode(message: QueryBookingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bookID !== "") {
      writer.uint32(10).string(message.bookID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryBookingRequest} as QueryBookingRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bookID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBookingRequest {
    const message = {...baseQueryBookingRequest} as QueryBookingRequest;
    message.bookID = object.bookID !== undefined && object.bookID !== null ? String(object.bookID) : "";
    return message;
  },

  toJSON(message: QueryBookingRequest): unknown {
    const obj: any = {};
    message.bookID !== undefined && (obj.bookID = message.bookID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBookingRequest>, I>>(object: I): QueryBookingRequest {
    const message = {...baseQueryBookingRequest} as QueryBookingRequest;
    message.bookID = object.bookID ?? "";
    return message;
  }
};

const baseQueryBookingResponse: object = {};

export const QueryBookingResponse = {
  encode(message: QueryBookingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.booking !== undefined) {
      Booking.encode(message.booking, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBookingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryBookingResponse} as QueryBookingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.booking = Booking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBookingResponse {
    const message = {...baseQueryBookingResponse} as QueryBookingResponse;
    message.booking = object.booking !== undefined && object.booking !== null ? Booking.fromJSON(object.booking) : undefined;
    return message;
  },

  toJSON(message: QueryBookingResponse): unknown {
    const obj: any = {};
    message.booking !== undefined && (obj.booking = message.booking ? Booking.toJSON(message.booking) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBookingResponse>, I>>(object: I): QueryBookingResponse {
    const message = {...baseQueryBookingResponse} as QueryBookingResponse;
    message.booking = object.booking !== undefined && object.booking !== null ? Booking.fromPartial(object.booking) : undefined;
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of booking items. */
  Booking(request: QueryBookingRequest): Promise<QueryBookingResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Booking = this.Booking.bind(this);
  }
  Booking(request: QueryBookingRequest): Promise<QueryBookingResponse> {
    const data = QueryBookingRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.booking.Query", "Booking", data);
    return promise.then((data) => QueryBookingResponse.decode(new _m0.Reader(data)));
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
