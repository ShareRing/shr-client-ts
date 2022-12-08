/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {Coin} from "../../cosmos/base/v1beta1/coin";
import {Batch} from "./batch";
import {Params} from "./params";
import {PastTxEvent} from "./past_tx_event";
import {Request} from "./request";
import {Schema} from "./schema";

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

export interface QueryBatchesResponse {
  batches: Batch[];
  pagination?: PageResponse;
}

export interface QueryBalanceRequest {}

export interface QueryBalanceResponse {
  balance?: Coin;
}

export interface QuerySchemaRequest {
  network: string;
}

export interface QuerySchemaResponse {
  schema?: Schema;
}

export interface QuerySchemasRequest {
  pagination?: PageRequest;
}

export interface QuerySchemasResponse {
  schemas: Schema[];
  pagination?: PageResponse;
}

export interface QueryBatchesRequest {
  network: string;
  ids: Long[];
  pagination?: PageRequest;
}

export interface QueryPastTxEventRequest {
  txHash: string;
  logIndex: Long;
}

export interface QueryPastTxEventResponse {
  event?: PastTxEvent;
}

export interface QueryPastTxEventsByTxHashRequest {
  txHash: string;
}

export interface QueryPastTxEventsByTxHashResponse {
  events: PastTxEvent[];
}

export interface QueryPastTxEventsRequest {
  pagination?: PageRequest;
}

export interface QueryPastTxEventsResponse {
  events: PastTxEvent[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {params: undefined};
}

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
    const message = createBaseQueryParamsResponse();
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
    return {params: isSet(object.params) ? Params.fromJSON(object.params) : undefined};
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};

function createBaseQuerySwapRequest(): QuerySwapRequest {
  return {status: "", ids: [], srcAddr: "", destAddr: "", srcNetwork: "", destNetwork: "", pagination: undefined};
}

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
    const message = createBaseQuerySwapRequest();
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
    return {
      status: isSet(object.status) ? String(object.status) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : [],
      srcAddr: isSet(object.srcAddr) ? String(object.srcAddr) : "",
      destAddr: isSet(object.destAddr) ? String(object.destAddr) : "",
      srcNetwork: isSet(object.srcNetwork) ? String(object.srcNetwork) : "",
      destNetwork: isSet(object.destNetwork) ? String(object.destNetwork) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
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
    const message = createBaseQuerySwapRequest();
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

function createBaseQuerySwapResponse(): QuerySwapResponse {
  return {swaps: [], pagination: undefined};
}

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
    const message = createBaseQuerySwapResponse();
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
    return {
      swaps: Array.isArray(object?.swaps) ? object.swaps.map((e: any) => Request.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
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
    const message = createBaseQuerySwapResponse();
    message.swaps = object.swaps?.map((e) => Request.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {batches: [], pagination: undefined};
}

export const QueryBatchesResponse = {
  encode(message: QueryBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      Batch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(Batch.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => Batch.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map((e) => (e ? Batch.toJSON(e) : undefined));
    } else {
      obj.batches = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesResponse>, I>>(object: I): QueryBatchesResponse {
    const message = createBaseQueryBatchesResponse();
    message.batches = object.batches?.map((e) => Batch.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {};
}

export const QueryBalanceRequest = {
  encode(_: QueryBalanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
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
    return {};
  },

  toJSON(_: QueryBalanceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(_: I): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    return message;
  }
};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {balance: undefined};
}

export const QueryBalanceResponse = {
  encode(message: QueryBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    return {balance: isSet(object.balance) ? Coin.fromJSON(object.balance) : undefined};
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};

function createBaseQuerySchemaRequest(): QuerySchemaRequest {
  return {network: ""};
}

export const QuerySchemaRequest = {
  encode(message: QuerySchemaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchemaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchemaRequest();
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

  fromJSON(object: any): QuerySchemaRequest {
    return {network: isSet(object.network) ? String(object.network) : ""};
  },

  toJSON(message: QuerySchemaRequest): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemaRequest>, I>>(object: I): QuerySchemaRequest {
    const message = createBaseQuerySchemaRequest();
    message.network = object.network ?? "";
    return message;
  }
};

function createBaseQuerySchemaResponse(): QuerySchemaResponse {
  return {schema: undefined};
}

export const QuerySchemaResponse = {
  encode(message: QuerySchemaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schema !== undefined) {
      Schema.encode(message.schema, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchemaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchemaResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schema = Schema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySchemaResponse {
    return {schema: isSet(object.schema) ? Schema.fromJSON(object.schema) : undefined};
  },

  toJSON(message: QuerySchemaResponse): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = message.schema ? Schema.toJSON(message.schema) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemaResponse>, I>>(object: I): QuerySchemaResponse {
    const message = createBaseQuerySchemaResponse();
    message.schema = object.schema !== undefined && object.schema !== null ? Schema.fromPartial(object.schema) : undefined;
    return message;
  }
};

function createBaseQuerySchemasRequest(): QuerySchemasRequest {
  return {pagination: undefined};
}

export const QuerySchemasRequest = {
  encode(message: QuerySchemasRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchemasRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchemasRequest();
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

  fromJSON(object: any): QuerySchemasRequest {
    return {pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined};
  },

  toJSON(message: QuerySchemasRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemasRequest>, I>>(object: I): QuerySchemasRequest {
    const message = createBaseQuerySchemasRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQuerySchemasResponse(): QuerySchemasResponse {
  return {schemas: [], pagination: undefined};
}

export const QuerySchemasResponse = {
  encode(message: QuerySchemasResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schemas) {
      Schema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchemasResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchemasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemas.push(Schema.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySchemasResponse {
    return {
      schemas: Array.isArray(object?.schemas) ? object.schemas.map((e: any) => Schema.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySchemasResponse): unknown {
    const obj: any = {};
    if (message.schemas) {
      obj.schemas = message.schemas.map((e) => (e ? Schema.toJSON(e) : undefined));
    } else {
      obj.schemas = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemasResponse>, I>>(object: I): QuerySchemasResponse {
    const message = createBaseQuerySchemasResponse();
    message.schemas = object.schemas?.map((e) => Schema.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {network: "", ids: [], pagination: undefined};
}

export const QueryBatchesRequest = {
  encode(message: QueryBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(18).string(message.network);
    }
    writer.uint32(26).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.network = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64() as Long);
            }
          } else {
            message.ids.push(reader.uint64() as Long);
          }
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchesRequest {
    return {
      network: isSet(object.network) ? String(object.network) : "",
      ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => Long.fromValue(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryBatchesRequest): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.ids = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchesRequest>, I>>(object: I): QueryBatchesRequest {
    const message = createBaseQueryBatchesRequest();
    message.network = object.network ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryPastTxEventRequest(): QueryPastTxEventRequest {
  return {txHash: "", logIndex: Long.UZERO};
}

export const QueryPastTxEventRequest = {
  encode(message: QueryPastTxEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }
    if (!message.logIndex.isZero()) {
      writer.uint32(16).uint64(message.logIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPastTxEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPastTxEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;
        case 2:
          message.logIndex = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPastTxEventRequest {
    return {
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      logIndex: isSet(object.logIndex) ? Long.fromValue(object.logIndex) : Long.UZERO
    };
  },

  toJSON(message: QueryPastTxEventRequest): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.logIndex !== undefined && (obj.logIndex = (message.logIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventRequest>, I>>(object: I): QueryPastTxEventRequest {
    const message = createBaseQueryPastTxEventRequest();
    message.txHash = object.txHash ?? "";
    message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? Long.fromValue(object.logIndex) : Long.UZERO;
    return message;
  }
};

function createBaseQueryPastTxEventResponse(): QueryPastTxEventResponse {
  return {event: undefined};
}

export const QueryPastTxEventResponse = {
  encode(message: QueryPastTxEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      PastTxEvent.encode(message.event, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPastTxEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPastTxEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = PastTxEvent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPastTxEventResponse {
    return {event: isSet(object.event) ? PastTxEvent.fromJSON(object.event) : undefined};
  },

  toJSON(message: QueryPastTxEventResponse): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? PastTxEvent.toJSON(message.event) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventResponse>, I>>(object: I): QueryPastTxEventResponse {
    const message = createBaseQueryPastTxEventResponse();
    message.event = object.event !== undefined && object.event !== null ? PastTxEvent.fromPartial(object.event) : undefined;
    return message;
  }
};

function createBaseQueryPastTxEventsByTxHashRequest(): QueryPastTxEventsByTxHashRequest {
  return {txHash: ""};
}

export const QueryPastTxEventsByTxHashRequest = {
  encode(message: QueryPastTxEventsByTxHashRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPastTxEventsByTxHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPastTxEventsByTxHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPastTxEventsByTxHashRequest {
    return {txHash: isSet(object.txHash) ? String(object.txHash) : ""};
  },

  toJSON(message: QueryPastTxEventsByTxHashRequest): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsByTxHashRequest>, I>>(object: I): QueryPastTxEventsByTxHashRequest {
    const message = createBaseQueryPastTxEventsByTxHashRequest();
    message.txHash = object.txHash ?? "";
    return message;
  }
};

function createBaseQueryPastTxEventsByTxHashResponse(): QueryPastTxEventsByTxHashResponse {
  return {events: []};
}

export const QueryPastTxEventsByTxHashResponse = {
  encode(message: QueryPastTxEventsByTxHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      PastTxEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPastTxEventsByTxHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPastTxEventsByTxHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(PastTxEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPastTxEventsByTxHashResponse {
    return {events: Array.isArray(object?.events) ? object.events.map((e: any) => PastTxEvent.fromJSON(e)) : []};
  },

  toJSON(message: QueryPastTxEventsByTxHashResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? PastTxEvent.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsByTxHashResponse>, I>>(object: I): QueryPastTxEventsByTxHashResponse {
    const message = createBaseQueryPastTxEventsByTxHashResponse();
    message.events = object.events?.map((e) => PastTxEvent.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryPastTxEventsRequest(): QueryPastTxEventsRequest {
  return {pagination: undefined};
}

export const QueryPastTxEventsRequest = {
  encode(message: QueryPastTxEventsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPastTxEventsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPastTxEventsRequest();
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

  fromJSON(object: any): QueryPastTxEventsRequest {
    return {pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined};
  },

  toJSON(message: QueryPastTxEventsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsRequest>, I>>(object: I): QueryPastTxEventsRequest {
    const message = createBaseQueryPastTxEventsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryPastTxEventsResponse(): QueryPastTxEventsResponse {
  return {events: [], pagination: undefined};
}

export const QueryPastTxEventsResponse = {
  encode(message: QueryPastTxEventsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.events) {
      PastTxEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPastTxEventsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPastTxEventsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(PastTxEvent.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryPastTxEventsResponse {
    return {
      events: Array.isArray(object?.events) ? object.events.map((e: any) => PastTxEvent.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryPastTxEventsResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) => (e ? PastTxEvent.toJSON(e) : undefined));
    } else {
      obj.events = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsResponse>, I>>(object: I): QueryPastTxEventsResponse {
    const message = createBaseQueryPastTxEventsResponse();
    message.events = object.events?.map((e) => PastTxEvent.fromPartial(e)) || [];
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
  /** Queries a list of Fund items. */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Queries a Format by index. */
  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse>;
  /** Queries a list of Format items. */
  Schemas(request: QuerySchemasRequest): Promise<QuerySchemasResponse>;
  /** Queries a list of SearchBatch items. */
  Batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
  /** Queries a list of PastTxEvent items. */
  PastTxEvent(request: QueryPastTxEventRequest): Promise<QueryPastTxEventResponse>;
  /** Queries a list of PastTxEvents by txHash items. */
  PastTxEventsByTxHash(request: QueryPastTxEventsByTxHashRequest): Promise<QueryPastTxEventsByTxHashResponse>;
  /** Queries all PastTxEvents */
  PastTxEvents(request: QueryPastTxEventsRequest): Promise<QueryPastTxEventsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.swap.Query";
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Swap = this.Swap.bind(this);
    this.Balance = this.Balance.bind(this);
    this.Schema = this.Schema.bind(this);
    this.Schemas = this.Schemas.bind(this);
    this.Batches = this.Batches.bind(this);
    this.PastTxEvent = this.PastTxEvent.bind(this);
    this.PastTxEventsByTxHash = this.PastTxEventsByTxHash.bind(this);
    this.PastTxEvents = this.PastTxEvents.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Swap", data);
    return promise.then((data) => QuerySwapResponse.decode(new _m0.Reader(data)));
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse> {
    const data = QuerySchemaRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Schema", data);
    return promise.then((data) => QuerySchemaResponse.decode(new _m0.Reader(data)));
  }

  Schemas(request: QuerySchemasRequest): Promise<QuerySchemasResponse> {
    const data = QuerySchemasRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Schemas", data);
    return promise.then((data) => QuerySchemasResponse.decode(new _m0.Reader(data)));
  }

  Batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
    const data = QueryBatchesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Batches", data);
    return promise.then((data) => QueryBatchesResponse.decode(new _m0.Reader(data)));
  }

  PastTxEvent(request: QueryPastTxEventRequest): Promise<QueryPastTxEventResponse> {
    const data = QueryPastTxEventRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PastTxEvent", data);
    return promise.then((data) => QueryPastTxEventResponse.decode(new _m0.Reader(data)));
  }

  PastTxEventsByTxHash(request: QueryPastTxEventsByTxHashRequest): Promise<QueryPastTxEventsByTxHashResponse> {
    const data = QueryPastTxEventsByTxHashRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PastTxEventsByTxHash", data);
    return promise.then((data) => QueryPastTxEventsByTxHashResponse.decode(new _m0.Reader(data)));
  }

  PastTxEvents(request: QueryPastTxEventsRequest): Promise<QueryPastTxEventsResponse> {
    const data = QueryPastTxEventsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PastTxEvents", data);
    return promise.then((data) => QueryPastTxEventsResponse.decode(new _m0.Reader(data)));
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
