/* eslint-disable */
import {Id} from "./id";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Rpc} from "../../helpers";
export const protobufPackage = "shareledger.id";
export interface QueryIdByAddressRequest {
  address: string;
}
export interface QueryIdByAddressResponse {
  id?: Id;
}
export interface QueryIdByIdRequest {
  id: string;
}
export interface QueryIdByIdResponse {
  id?: Id;
}

function createBaseQueryIdByAddressRequest(): QueryIdByAddressRequest {
  return {
    address: ""
  };
}

export const QueryIdByAddressRequest = {
  encode(message: QueryIdByAddressRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdByAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdByAddressRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByAddressRequest>, I>>(object: I): QueryIdByAddressRequest {
    const message = createBaseQueryIdByAddressRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryIdByAddressResponse(): QueryIdByAddressResponse {
  return {
    id: undefined
  };
}

export const QueryIdByAddressResponse = {
  encode(message: QueryIdByAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Id.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdByAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdByAddressResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = Id.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByAddressResponse>, I>>(object: I): QueryIdByAddressResponse {
    const message = createBaseQueryIdByAddressResponse();
    message.id = object.id !== undefined && object.id !== null ? Id.fromPartial(object.id) : undefined;
    return message;
  }
};

function createBaseQueryIdByIdRequest(): QueryIdByIdRequest {
  return {
    id: ""
  };
}

export const QueryIdByIdRequest = {
  encode(message: QueryIdByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdByIdRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByIdRequest>, I>>(object: I): QueryIdByIdRequest {
    const message = createBaseQueryIdByIdRequest();
    message.id = object.id ?? "";
    return message;
  }
};

function createBaseQueryIdByIdResponse(): QueryIdByIdResponse {
  return {
    id: undefined
  };
}

export const QueryIdByIdResponse = {
  encode(message: QueryIdByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      Id.encode(message.id, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdByIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = Id.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByIdResponse>, I>>(object: I): QueryIdByIdResponse {
    const message = createBaseQueryIdByIdResponse();
    message.id = object.id !== undefined && object.id !== null ? Id.fromPartial(object.id) : undefined;
    return message;
  }
};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Queries a list of idByAddress items. */
  IdByAddress(request: QueryIdByAddressRequest): Promise<QueryIdByAddressResponse>;
  /** Queries a list of idById items. */

  IdById(request: QueryIdByIdRequest): Promise<QueryIdByIdResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IdByAddress = this.IdByAddress.bind(this);
    this.IdById = this.IdById.bind(this);
  }

  IdByAddress(request: QueryIdByAddressRequest): Promise<QueryIdByAddressResponse> {
    const data = QueryIdByAddressRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.id.Query", "IdByAddress", data);
    return promise.then((data) => QueryIdByAddressResponse.decode(new _m0.Reader(data)));
  }

  IdById(request: QueryIdByIdRequest): Promise<QueryIdByIdResponse> {
    const data = QueryIdByIdRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.id.Query", "IdById", data);
    return promise.then((data) => QueryIdByIdResponse.decode(new _m0.Reader(data)));
  }
}
