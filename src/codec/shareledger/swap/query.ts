/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Params} from "../../shareledger/swap/params";
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {Batch} from "../../shareledger/swap/batch";
import {Format} from "../../shareledger/swap/format";
import {Request} from "../../shareledger/swap/request";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "shareledger.swap";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QuerySearchRequest {
  status: string;
  ids: Long[];
  srcAddr: string;
  destAddr: string;
  srcNetwork: string;
  destNetwork: string;
  pagination?: PageRequest;
}

export interface QuerySearchResponse {
  Request: Request[];
  pagination?: PageResponse;
}

export interface QueryGetBatchRequest {
  id: Long;
}

export interface QueryGetBatchResponse {
  Batch?: Batch;
}

export interface QueryFundRequest {}

export interface QueryFundResponse {
  available: DecCoin[];
}

export interface QueryGetFormatRequest {
  network: string;
}

export interface QueryGetFormatResponse {
  format?: Format;
}

export interface QueryAllFormatRequest {
  pagination?: PageRequest;
}

export interface QueryAllFormatResponse {
  format: Format[];
  pagination?: PageResponse;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryParamsRequest} as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = {...baseQueryParamsRequest} as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = {...baseQueryParamsRequest} as QueryParamsRequest;
    return message;
  }
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryParamsResponse} as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = {...baseQueryParamsResponse} as QueryParamsResponse;
    message.params = object.params !== undefined && object.params !== null ? Params.fromJSON(object.params) : undefined;
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = {...baseQueryParamsResponse} as QueryParamsResponse;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};

const baseQuerySearchRequest: object = {status: "", ids: Long.UZERO, srcAddr: "", destAddr: "", srcNetwork: "", destNetwork: ""};

export const QuerySearchRequest = {
  encode(message: QuerySearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    writer.uint32(18).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.srcAddr !== "") {
      writer.uint32(26).string(message.srcAddr);
    }
    if (message.destAddr !== "") {
      writer.uint32(34).string(message.destAddr);
    }
    if (message.srcNetwork !== "") {
      writer.uint32(42).string(message.srcNetwork);
    }
    if (message.destNetwork !== "") {
      writer.uint32(50).string(message.destNetwork);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQuerySearchRequest} as QuerySearchRequest;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        case 3:
          message.srcAddr = reader.string();
          break;
        case 4:
          message.destAddr = reader.string();
          break;
        case 5:
          message.srcNetwork = reader.string();
          break;
        case 6:
          message.destNetwork = reader.string();
          break;
        case 7:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchRequest {
    const message = {...baseQuerySearchRequest} as QuerySearchRequest;
    message.status = object.status !== undefined && object.status !== null ? String(object.status) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    message.srcAddr = object.srcAddr !== undefined && object.srcAddr !== null ? String(object.srcAddr) : "";
    message.destAddr = object.destAddr !== undefined && object.destAddr !== null ? String(object.destAddr) : "";
    message.srcNetwork = object.srcNetwork !== undefined && object.srcNetwork !== null ? String(object.srcNetwork) : "";
    message.destNetwork = object.destNetwork !== undefined && object.destNetwork !== null ? String(object.destNetwork) : "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QuerySearchRequest): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    message.srcAddr !== undefined && (obj.srcAddr = message.srcAddr);
    message.destAddr !== undefined && (obj.destAddr = message.destAddr);
    message.srcNetwork !== undefined && (obj.srcNetwork = message.srcNetwork);
    message.destNetwork !== undefined && (obj.destNetwork = message.destNetwork);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySearchRequest>, I>>(object: I): QuerySearchRequest {
    const message = {...baseQuerySearchRequest} as QuerySearchRequest;
    message.status = object.status ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    message.srcAddr = object.srcAddr ?? "";
    message.destAddr = object.destAddr ?? "";
    message.srcNetwork = object.srcNetwork ?? "";
    message.destNetwork = object.destNetwork ?? "";
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQuerySearchResponse: object = {};

export const QuerySearchResponse = {
  encode(message: QuerySearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Request) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySearchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQuerySearchResponse} as QuerySearchResponse;
    message.Request = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Request.push(Request.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchResponse {
    const message = {...baseQuerySearchResponse} as QuerySearchResponse;
    message.Request = (object.Request ?? []).map((e: any) => Request.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QuerySearchResponse): unknown {
    const obj: any = {};
    if (message.Request) {
      obj.Request = message.Request.map((e) => (e ? Request.toJSON(e) : undefined));
    } else {
      obj.Request = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySearchResponse>, I>>(object: I): QuerySearchResponse {
    const message = {...baseQuerySearchResponse} as QuerySearchResponse;
    message.Request = object.Request?.map((e) => Request.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryGetBatchRequest: object = {id: Long.UZERO};

export const QueryGetBatchRequest = {
  encode(message: QueryGetBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetBatchRequest} as QueryGetBatchRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBatchRequest {
    const message = {...baseQueryGetBatchRequest} as QueryGetBatchRequest;
    message.id = object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO;
    return message;
  },

  toJSON(message: QueryGetBatchRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBatchRequest>, I>>(object: I): QueryGetBatchRequest {
    const message = {...baseQueryGetBatchRequest} as QueryGetBatchRequest;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

const baseQueryGetBatchResponse: object = {};

export const QueryGetBatchResponse = {
  encode(message: QueryGetBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Batch !== undefined) {
      Batch.encode(message.Batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetBatchResponse} as QueryGetBatchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Batch = Batch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetBatchResponse {
    const message = {...baseQueryGetBatchResponse} as QueryGetBatchResponse;
    message.Batch = object.Batch !== undefined && object.Batch !== null ? Batch.fromJSON(object.Batch) : undefined;
    return message;
  },

  toJSON(message: QueryGetBatchResponse): unknown {
    const obj: any = {};
    message.Batch !== undefined && (obj.Batch = message.Batch ? Batch.toJSON(message.Batch) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBatchResponse>, I>>(object: I): QueryGetBatchResponse {
    const message = {...baseQueryGetBatchResponse} as QueryGetBatchResponse;
    message.Batch = object.Batch !== undefined && object.Batch !== null ? Batch.fromPartial(object.Batch) : undefined;
    return message;
  }
};

const baseQueryFundRequest: object = {};

export const QueryFundRequest = {
  encode(_: QueryFundRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryFundRequest} as QueryFundRequest;
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

  fromJSON(_: any): QueryFundRequest {
    const message = {...baseQueryFundRequest} as QueryFundRequest;
    return message;
  },

  toJSON(_: QueryFundRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFundRequest>, I>>(_: I): QueryFundRequest {
    const message = {...baseQueryFundRequest} as QueryFundRequest;
    return message;
  }
};

const baseQueryFundResponse: object = {};

export const QueryFundResponse = {
  encode(message: QueryFundResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.available) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryFundResponse} as QueryFundResponse;
    message.available = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.available.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundResponse {
    const message = {...baseQueryFundResponse} as QueryFundResponse;
    message.available = (object.available ?? []).map((e: any) => DecCoin.fromJSON(e));
    return message;
  },

  toJSON(message: QueryFundResponse): unknown {
    const obj: any = {};
    if (message.available) {
      obj.available = message.available.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.available = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFundResponse>, I>>(object: I): QueryFundResponse {
    const message = {...baseQueryFundResponse} as QueryFundResponse;
    message.available = object.available?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryGetFormatRequest: object = {network: ""};

export const QueryGetFormatRequest = {
  encode(message: QueryGetFormatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFormatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetFormatRequest} as QueryGetFormatRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.network = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFormatRequest {
    const message = {...baseQueryGetFormatRequest} as QueryGetFormatRequest;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: QueryGetFormatRequest): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFormatRequest>, I>>(object: I): QueryGetFormatRequest {
    const message = {...baseQueryGetFormatRequest} as QueryGetFormatRequest;
    message.network = object.network ?? "";
    return message;
  }
};

const baseQueryGetFormatResponse: object = {};

export const QueryGetFormatResponse = {
  encode(message: QueryGetFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.format !== undefined) {
      Format.encode(message.format, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetFormatResponse} as QueryGetFormatResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format = Format.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetFormatResponse {
    const message = {...baseQueryGetFormatResponse} as QueryGetFormatResponse;
    message.format = object.format !== undefined && object.format !== null ? Format.fromJSON(object.format) : undefined;
    return message;
  },

  toJSON(message: QueryGetFormatResponse): unknown {
    const obj: any = {};
    message.format !== undefined && (obj.format = message.format ? Format.toJSON(message.format) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetFormatResponse>, I>>(object: I): QueryGetFormatResponse {
    const message = {...baseQueryGetFormatResponse} as QueryGetFormatResponse;
    message.format = object.format !== undefined && object.format !== null ? Format.fromPartial(object.format) : undefined;
    return message;
  }
};

const baseQueryAllFormatRequest: object = {};

export const QueryAllFormatRequest = {
  encode(message: QueryAllFormatRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFormatRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAllFormatRequest} as QueryAllFormatRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFormatRequest {
    const message = {...baseQueryAllFormatRequest} as QueryAllFormatRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAllFormatRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFormatRequest>, I>>(object: I): QueryAllFormatRequest {
    const message = {...baseQueryAllFormatRequest} as QueryAllFormatRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryAllFormatResponse: object = {};

export const QueryAllFormatResponse = {
  encode(message: QueryAllFormatResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.format) {
      Format.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllFormatResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAllFormatResponse} as QueryAllFormatResponse;
    message.format = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.format.push(Format.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllFormatResponse {
    const message = {...baseQueryAllFormatResponse} as QueryAllFormatResponse;
    message.format = (object.format ?? []).map((e: any) => Format.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAllFormatResponse): unknown {
    const obj: any = {};
    if (message.format) {
      obj.format = message.format.map((e) => (e ? Format.toJSON(e) : undefined));
    } else {
      obj.format = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllFormatResponse>, I>>(object: I): QueryAllFormatResponse {
    const message = {...baseQueryAllFormatResponse} as QueryAllFormatResponse;
    message.format = object.format?.map((e) => Format.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Search items. */
  Search(request: QuerySearchRequest): Promise<QuerySearchResponse>;
  /** Queries a Batch by id. */
  Batch(request: QueryGetBatchRequest): Promise<QueryGetBatchResponse>;
  /** Queries a list of Fund items. */
  Fund(request: QueryFundRequest): Promise<QueryFundResponse>;
  /** Queries a Format by index. */
  Format(request: QueryGetFormatRequest): Promise<QueryGetFormatResponse>;
  /** Queries a list of Format items. */
  FormatAll(request: QueryAllFormatRequest): Promise<QueryAllFormatResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Search = this.Search.bind(this);
    this.Batch = this.Batch.bind(this);
    this.Fund = this.Fund.bind(this);
    this.Format = this.Format.bind(this);
    this.FormatAll = this.FormatAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Search(request: QuerySearchRequest): Promise<QuerySearchResponse> {
    const data = QuerySearchRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Search", data);
    return promise.then((data) => QuerySearchResponse.decode(new _m0.Reader(data)));
  }

  Batch(request: QueryGetBatchRequest): Promise<QueryGetBatchResponse> {
    const data = QueryGetBatchRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Batch", data);
    return promise.then((data) => QueryGetBatchResponse.decode(new _m0.Reader(data)));
  }

  Fund(request: QueryFundRequest): Promise<QueryFundResponse> {
    const data = QueryFundRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Fund", data);
    return promise.then((data) => QueryFundResponse.decode(new _m0.Reader(data)));
  }

  Format(request: QueryGetFormatRequest): Promise<QueryGetFormatResponse> {
    const data = QueryGetFormatRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Format", data);
    return promise.then((data) => QueryGetFormatResponse.decode(new _m0.Reader(data)));
  }

  FormatAll(request: QueryAllFormatRequest): Promise<QueryAllFormatResponse> {
    const data = QueryAllFormatRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "FormatAll", data);
    return promise.then((data) => QueryAllFormatResponse.decode(new _m0.Reader(data)));
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
