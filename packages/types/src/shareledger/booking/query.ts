/* eslint-disable */
import {Booking} from "./booking";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Rpc} from "../../helpers";
export const protobufPackage = "shareledger.booking";
export interface QueryBookingRequest {
  bookID: string;
}
export interface QueryBookingResponse {
  booking?: Booking;
}

function createBaseQueryBookingRequest(): QueryBookingRequest {
  return {
    bookID: ""
  };
}

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
    const message = createBaseQueryBookingRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryBookingRequest>, I>>(object: I): QueryBookingRequest {
    const message = createBaseQueryBookingRequest();
    message.bookID = object.bookID ?? "";
    return message;
  }
};

function createBaseQueryBookingResponse(): QueryBookingResponse {
  return {
    booking: undefined
  };
}

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
    const message = createBaseQueryBookingResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryBookingResponse>, I>>(object: I): QueryBookingResponse {
    const message = createBaseQueryBookingResponse();
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
