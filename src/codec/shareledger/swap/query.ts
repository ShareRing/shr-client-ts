/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Params} from "../../shareledger/swap/params";
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {Batch} from "../../shareledger/swap/batch";
import {DecCoin} from "../../cosmos/base/v1beta1/coin";
import {SignSchema} from "../../shareledger/swap/sign_schema";
import {Request} from "../../shareledger/swap/request";

export const protobufPackage = "shareledger.swap";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QuerySwapRequest {
  status: string;
  ids: Long[];
  srcAddr: string;
  destAddr: string;
  srcNetwork: string;
  destNetwork: string;
  pagination?: PageRequest;
}

export interface QuerySwapResponse {
  swaps: Request[];
  pagination?: PageResponse;
}

export interface QueryBatchRequest {
  id: Long;
}

export interface QueryBatchResponse {
  batch?: Batch;
}

export interface QueryBalanceRequest {}

export interface QueryBalanceResponse {
  balance?: DecCoin;
}

export interface QueryGetSignSchemaRequest {
  network: string;
}

export interface QuerySignSchemaResponse {
  schema?: SignSchema;
}

export interface QueryAllSignSchemasRequest {
  pagination?: PageRequest;
}

export interface QueryAllSignSchemasResponse {
  schemas: SignSchema[];
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

const baseQuerySwapRequest: object = {status: "", ids: Long.UZERO, srcAddr: "", destAddr: "", srcNetwork: "", destNetwork: ""};

export const QuerySwapRequest = {
  encode(message: QuerySwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQuerySwapRequest} as QuerySwapRequest;
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

  fromJSON(object: any): QuerySwapRequest {
    const message = {...baseQuerySwapRequest} as QuerySwapRequest;
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

  toJSON(message: QuerySwapRequest): unknown {
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

  fromPartial<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(object: I): QuerySwapRequest {
    const message = {...baseQuerySwapRequest} as QuerySwapRequest;
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

const baseQuerySwapResponse: object = {};

export const QuerySwapResponse = {
  encode(message: QuerySwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.swaps) {
      Request.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQuerySwapResponse} as QuerySwapResponse;
    message.swaps = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(Request.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySwapResponse {
    const message = {...baseQuerySwapResponse} as QuerySwapResponse;
    message.swaps = (object.swaps ?? []).map((e: any) => Request.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QuerySwapResponse): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map((e) => (e ? Request.toJSON(e) : undefined));
    } else {
      obj.swaps = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(object: I): QuerySwapResponse {
    const message = {...baseQuerySwapResponse} as QuerySwapResponse;
    message.swaps = object.swaps?.map((e) => Request.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryBatchRequest: object = {id: Long.UZERO};

export const QueryBatchRequest = {
  encode(message: QueryBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryBatchRequest} as QueryBatchRequest;
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

  fromJSON(object: any): QueryBatchRequest {
    const message = {...baseQueryBatchRequest} as QueryBatchRequest;
    message.id = object.id !== undefined && object.id !== null ? Long.fromString(object.id) : Long.UZERO;
    return message;
  },

  toJSON(message: QueryBatchRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchRequest>, I>>(object: I): QueryBatchRequest {
    const message = {...baseQueryBatchRequest} as QueryBatchRequest;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

const baseQueryBatchResponse: object = {};

export const QueryBatchResponse = {
  encode(message: QueryBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      Batch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryBatchResponse} as QueryBatchResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = Batch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchResponse {
    const message = {...baseQueryBatchResponse} as QueryBatchResponse;
    message.batch = object.batch !== undefined && object.batch !== null ? Batch.fromJSON(object.batch) : undefined;
    return message;
  },

  toJSON(message: QueryBatchResponse): unknown {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? Batch.toJSON(message.batch) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchResponse>, I>>(object: I): QueryBatchResponse {
    const message = {...baseQueryBatchResponse} as QueryBatchResponse;
    message.batch = object.batch !== undefined && object.batch !== null ? Batch.fromPartial(object.batch) : undefined;
    return message;
  }
};

const baseQueryBalanceRequest: object = {};

export const QueryBalanceRequest = {
  encode(_: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryBalanceRequest} as QueryBalanceRequest;
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

  fromJSON(_: any): QueryBalanceRequest {
    const message = {...baseQueryBalanceRequest} as QueryBalanceRequest;
    return message;
  },

  toJSON(_: QueryBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(_: I): QueryBalanceRequest {
    const message = {...baseQueryBalanceRequest} as QueryBalanceRequest;
    return message;
  }
};

const baseQueryBalanceResponse: object = {};

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      DecCoin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryBalanceResponse} as QueryBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    const message = {...baseQueryBalanceResponse} as QueryBalanceResponse;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromJSON(object.balance) : undefined;
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? DecCoin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = {...baseQueryBalanceResponse} as QueryBalanceResponse;
    message.balance = object.balance !== undefined && object.balance !== null ? DecCoin.fromPartial(object.balance) : undefined;
    return message;
  }
};

const baseQueryGetSignSchemaRequest: object = {network: ""};

export const QueryGetSignSchemaRequest = {
  encode(message: QueryGetSignSchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSignSchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetSignSchemaRequest} as QueryGetSignSchemaRequest;
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

  fromJSON(object: any): QueryGetSignSchemaRequest {
    const message = {...baseQueryGetSignSchemaRequest} as QueryGetSignSchemaRequest;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: QueryGetSignSchemaRequest): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSignSchemaRequest>, I>>(object: I): QueryGetSignSchemaRequest {
    const message = {...baseQueryGetSignSchemaRequest} as QueryGetSignSchemaRequest;
    message.network = object.network ?? "";
    return message;
  }
};

const baseQuerySignSchemaResponse: object = {};

export const QuerySignSchemaResponse = {
  encode(message: QuerySignSchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== undefined) {
      SignSchema.encode(message.schema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySignSchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQuerySignSchemaResponse} as QuerySignSchemaResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema = SignSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySignSchemaResponse {
    const message = {...baseQuerySignSchemaResponse} as QuerySignSchemaResponse;
    message.schema = object.schema !== undefined && object.schema !== null ? SignSchema.fromJSON(object.schema) : undefined;
    return message;
  },

  toJSON(message: QuerySignSchemaResponse): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = message.schema ? SignSchema.toJSON(message.schema) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySignSchemaResponse>, I>>(object: I): QuerySignSchemaResponse {
    const message = {...baseQuerySignSchemaResponse} as QuerySignSchemaResponse;
    message.schema = object.schema !== undefined && object.schema !== null ? SignSchema.fromPartial(object.schema) : undefined;
    return message;
  }
};

const baseQueryAllSignSchemasRequest: object = {};

export const QueryAllSignSchemasRequest = {
  encode(message: QueryAllSignSchemasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSignSchemasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAllSignSchemasRequest} as QueryAllSignSchemasRequest;
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

  fromJSON(object: any): QueryAllSignSchemasRequest {
    const message = {...baseQueryAllSignSchemasRequest} as QueryAllSignSchemasRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAllSignSchemasRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSignSchemasRequest>, I>>(object: I): QueryAllSignSchemasRequest {
    const message = {...baseQueryAllSignSchemasRequest} as QueryAllSignSchemasRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryAllSignSchemasResponse: object = {};

export const QueryAllSignSchemasResponse = {
  encode(message: QueryAllSignSchemasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schemas) {
      SignSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSignSchemasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAllSignSchemasResponse} as QueryAllSignSchemasResponse;
    message.schemas = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemas.push(SignSchema.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllSignSchemasResponse {
    const message = {...baseQueryAllSignSchemasResponse} as QueryAllSignSchemasResponse;
    message.schemas = (object.schemas ?? []).map((e: any) => SignSchema.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAllSignSchemasResponse): unknown {
    const obj: any = {};
    if (message.schemas) {
      obj.schemas = message.schemas.map((e) => (e ? SignSchema.toJSON(e) : undefined));
    } else {
      obj.schemas = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllSignSchemasResponse>, I>>(object: I): QueryAllSignSchemasResponse {
    const message = {...baseQueryAllSignSchemasResponse} as QueryAllSignSchemasResponse;
    message.schemas = object.schemas?.map((e) => SignSchema.fromPartial(e)) || [];
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
  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  /** Queries a Batch by id. */
  Batch(request: QueryBatchRequest): Promise<QueryBatchResponse>;
  /** Queries a list of Fund items. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Queries a Format by index. */
  SignSchema(request: QueryGetSignSchemaRequest): Promise<QuerySignSchemaResponse>;
  /** Queries a list of Format items. */
  AllSignSchemas(request: QueryAllSignSchemasRequest): Promise<QueryAllSignSchemasResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Swap = this.Swap.bind(this);
    this.Batch = this.Batch.bind(this);
    this.Balance = this.Balance.bind(this);
    this.SignSchema = this.SignSchema.bind(this);
    this.AllSignSchemas = this.AllSignSchemas.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Swap", data);
    return promise.then((data) => QuerySwapResponse.decode(new _m0.Reader(data)));
  }

  Batch(request: QueryBatchRequest): Promise<QueryBatchResponse> {
    const data = QueryBatchRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Batch", data);
    return promise.then((data) => QueryBatchResponse.decode(new _m0.Reader(data)));
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  SignSchema(request: QueryGetSignSchemaRequest): Promise<QuerySignSchemaResponse> {
    const data = QueryGetSignSchemaRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "SignSchema", data);
    return promise.then((data) => QuerySignSchemaResponse.decode(new _m0.Reader(data)));
  }

  AllSignSchemas(request: QueryAllSignSchemasRequest): Promise<QueryAllSignSchemasResponse> {
    const data = QueryAllSignSchemasRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "AllSignSchemas", data);
    return promise.then((data) => QueryAllSignSchemasResponse.decode(new _m0.Reader(data)));
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
