/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Id} from "./id";

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
  return {address: ""};
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

  fromJSON(object: any): QueryIdByAddressRequest {
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryIdByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByAddressRequest>, I>>(object: I): QueryIdByAddressRequest {
    const message = createBaseQueryIdByAddressRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryIdByAddressResponse(): QueryIdByAddressResponse {
  return {id: undefined};
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

  fromJSON(object: any): QueryIdByAddressResponse {
    return {id: isSet(object.id) ? Id.fromJSON(object.id) : undefined};
  },

  toJSON(message: QueryIdByAddressResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Id.toJSON(message.id) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByAddressResponse>, I>>(object: I): QueryIdByAddressResponse {
    const message = createBaseQueryIdByAddressResponse();
    message.id = object.id !== undefined && object.id !== null ? Id.fromPartial(object.id) : undefined;
    return message;
  }
};

function createBaseQueryIdByIdRequest(): QueryIdByIdRequest {
  return {id: ""};
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

  fromJSON(object: any): QueryIdByIdRequest {
    return {id: isSet(object.id) ? String(object.id) : ""};
  },

  toJSON(message: QueryIdByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdByIdRequest>, I>>(object: I): QueryIdByIdRequest {
    const message = createBaseQueryIdByIdRequest();
    message.id = object.id ?? "";
    return message;
  }
};

function createBaseQueryIdByIdResponse(): QueryIdByIdResponse {
  return {id: undefined};
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

  fromJSON(object: any): QueryIdByIdResponse {
    return {id: isSet(object.id) ? Id.fromJSON(object.id) : undefined};
  },

  toJSON(message: QueryIdByIdResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id ? Id.toJSON(message.id) : undefined);
    return obj;
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.id.Query";
    this.rpc = rpc;
    this.IdByAddress = this.IdByAddress.bind(this);
    this.IdById = this.IdById.bind(this);
  }
  IdByAddress(request: QueryIdByAddressRequest): Promise<QueryIdByAddressResponse> {
    const data = QueryIdByAddressRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IdByAddress", data);
    return promise.then((data) => QueryIdByAddressResponse.decode(new _m0.Reader(data)));
  }

  IdById(request: QueryIdByIdRequest): Promise<QueryIdByIdResponse> {
    const data = QueryIdByIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IdById", data);
    return promise.then((data) => QueryIdByIdResponse.decode(new _m0.Reader(data)));
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & {[K in Exclude<keyof I, KeysOfUnion<P>>]: never};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
