/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Params} from "../../shareledger/swap/params";
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {Coin} from "../../cosmos/base/v1beta1/coin";
import {Schema} from "../../shareledger/swap/schema";
import {PastTxEvent} from "../../shareledger/swap/past_tx_event";
import {Request} from "../../shareledger/swap/request";
import {Batch} from "../../shareledger/swap/batch";

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

const baseQueryBatchesResponse: object = {};

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
    const message = {...baseQueryBatchesResponse} as QueryBatchesResponse;
    message.batches = [];
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
    const message = {...baseQueryBatchesResponse} as QueryBatchesResponse;
    message.batches = (object.batches ?? []).map((e: any) => Batch.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
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
    const message = {...baseQueryBatchesResponse} as QueryBatchesResponse;
    message.batches = object.batches?.map((e) => Batch.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
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
      Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
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
    const message = {...baseQueryBalanceResponse} as QueryBalanceResponse;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromJSON(object.balance) : undefined;
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = {...baseQueryBalanceResponse} as QueryBalanceResponse;
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};

const baseQuerySchemaRequest: object = {network: ""};

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
    const message = {...baseQuerySchemaRequest} as QuerySchemaRequest;
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
    const message = {...baseQuerySchemaRequest} as QuerySchemaRequest;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    return message;
  },

  toJSON(message: QuerySchemaRequest): unknown {
    const obj: any = {};
    message.network !== undefined && (obj.network = message.network);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemaRequest>, I>>(object: I): QuerySchemaRequest {
    const message = {...baseQuerySchemaRequest} as QuerySchemaRequest;
    message.network = object.network ?? "";
    return message;
  }
};

const baseQuerySchemaResponse: object = {};

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
    const message = {...baseQuerySchemaResponse} as QuerySchemaResponse;
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
    const message = {...baseQuerySchemaResponse} as QuerySchemaResponse;
    message.schema = object.schema !== undefined && object.schema !== null ? Schema.fromJSON(object.schema) : undefined;
    return message;
  },

  toJSON(message: QuerySchemaResponse): unknown {
    const obj: any = {};
    message.schema !== undefined && (obj.schema = message.schema ? Schema.toJSON(message.schema) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemaResponse>, I>>(object: I): QuerySchemaResponse {
    const message = {...baseQuerySchemaResponse} as QuerySchemaResponse;
    message.schema = object.schema !== undefined && object.schema !== null ? Schema.fromPartial(object.schema) : undefined;
    return message;
  }
};

const baseQuerySchemasRequest: object = {};

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
    const message = {...baseQuerySchemasRequest} as QuerySchemasRequest;
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
    const message = {...baseQuerySchemasRequest} as QuerySchemasRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QuerySchemasRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySchemasRequest>, I>>(object: I): QuerySchemasRequest {
    const message = {...baseQuerySchemasRequest} as QuerySchemasRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQuerySchemasResponse: object = {};

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
    const message = {...baseQuerySchemasResponse} as QuerySchemasResponse;
    message.schemas = [];
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
    const message = {...baseQuerySchemasResponse} as QuerySchemasResponse;
    message.schemas = (object.schemas ?? []).map((e: any) => Schema.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
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
    const message = {...baseQuerySchemasResponse} as QuerySchemasResponse;
    message.schemas = object.schemas?.map((e) => Schema.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryBatchesRequest: object = {network: "", ids: Long.UZERO};

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
    const message = {...baseQueryBatchesRequest} as QueryBatchesRequest;
    message.ids = [];
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
    const message = {...baseQueryBatchesRequest} as QueryBatchesRequest;
    message.network = object.network !== undefined && object.network !== null ? String(object.network) : "";
    message.ids = (object.ids ?? []).map((e: any) => Long.fromString(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
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
    const message = {...baseQueryBatchesRequest} as QueryBatchesRequest;
    message.network = object.network ?? "";
    message.ids = object.ids?.map((e) => Long.fromValue(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryPastTxEventRequest: object = {txHash: "", logIndex: Long.UZERO};

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
    const message = {...baseQueryPastTxEventRequest} as QueryPastTxEventRequest;
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
    const message = {...baseQueryPastTxEventRequest} as QueryPastTxEventRequest;
    message.txHash = object.txHash !== undefined && object.txHash !== null ? String(object.txHash) : "";
    message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? Long.fromString(object.logIndex) : Long.UZERO;
    return message;
  },

  toJSON(message: QueryPastTxEventRequest): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.logIndex !== undefined && (obj.logIndex = (message.logIndex || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventRequest>, I>>(object: I): QueryPastTxEventRequest {
    const message = {...baseQueryPastTxEventRequest} as QueryPastTxEventRequest;
    message.txHash = object.txHash ?? "";
    message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? Long.fromValue(object.logIndex) : Long.UZERO;
    return message;
  }
};

const baseQueryPastTxEventResponse: object = {};

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
    const message = {...baseQueryPastTxEventResponse} as QueryPastTxEventResponse;
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
    const message = {...baseQueryPastTxEventResponse} as QueryPastTxEventResponse;
    message.event = object.event !== undefined && object.event !== null ? PastTxEvent.fromJSON(object.event) : undefined;
    return message;
  },

  toJSON(message: QueryPastTxEventResponse): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event ? PastTxEvent.toJSON(message.event) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventResponse>, I>>(object: I): QueryPastTxEventResponse {
    const message = {...baseQueryPastTxEventResponse} as QueryPastTxEventResponse;
    message.event = object.event !== undefined && object.event !== null ? PastTxEvent.fromPartial(object.event) : undefined;
    return message;
  }
};

const baseQueryPastTxEventsByTxHashRequest: object = {txHash: ""};

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
    const message = {...baseQueryPastTxEventsByTxHashRequest} as QueryPastTxEventsByTxHashRequest;
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
    const message = {...baseQueryPastTxEventsByTxHashRequest} as QueryPastTxEventsByTxHashRequest;
    message.txHash = object.txHash !== undefined && object.txHash !== null ? String(object.txHash) : "";
    return message;
  },

  toJSON(message: QueryPastTxEventsByTxHashRequest): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsByTxHashRequest>, I>>(object: I): QueryPastTxEventsByTxHashRequest {
    const message = {...baseQueryPastTxEventsByTxHashRequest} as QueryPastTxEventsByTxHashRequest;
    message.txHash = object.txHash ?? "";
    return message;
  }
};

const baseQueryPastTxEventsByTxHashResponse: object = {};

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
    const message = {...baseQueryPastTxEventsByTxHashResponse} as QueryPastTxEventsByTxHashResponse;
    message.events = [];
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
    const message = {...baseQueryPastTxEventsByTxHashResponse} as QueryPastTxEventsByTxHashResponse;
    message.events = (object.events ?? []).map((e: any) => PastTxEvent.fromJSON(e));
    return message;
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
    const message = {...baseQueryPastTxEventsByTxHashResponse} as QueryPastTxEventsByTxHashResponse;
    message.events = object.events?.map((e) => PastTxEvent.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryPastTxEventsRequest: object = {};

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
    const message = {...baseQueryPastTxEventsRequest} as QueryPastTxEventsRequest;
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
    const message = {...baseQueryPastTxEventsRequest} as QueryPastTxEventsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryPastTxEventsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsRequest>, I>>(object: I): QueryPastTxEventsRequest {
    const message = {...baseQueryPastTxEventsRequest} as QueryPastTxEventsRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryPastTxEventsResponse: object = {};

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
    const message = {...baseQueryPastTxEventsResponse} as QueryPastTxEventsResponse;
    message.events = [];
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
    const message = {...baseQueryPastTxEventsResponse} as QueryPastTxEventsResponse;
    message.events = (object.events ?? []).map((e: any) => PastTxEvent.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
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
    const message = {...baseQueryPastTxEventsResponse} as QueryPastTxEventsResponse;
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
  constructor(rpc: Rpc) {
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
    const promise = this.rpc.request("shareledger.swap.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Swap", data);
    return promise.then((data) => QuerySwapResponse.decode(new _m0.Reader(data)));
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse> {
    const data = QuerySchemaRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Schema", data);
    return promise.then((data) => QuerySchemaResponse.decode(new _m0.Reader(data)));
  }

  Schemas(request: QuerySchemasRequest): Promise<QuerySchemasResponse> {
    const data = QuerySchemasRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Schemas", data);
    return promise.then((data) => QuerySchemasResponse.decode(new _m0.Reader(data)));
  }

  Batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
    const data = QueryBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Batches", data);
    return promise.then((data) => QueryBatchesResponse.decode(new _m0.Reader(data)));
  }

  PastTxEvent(request: QueryPastTxEventRequest): Promise<QueryPastTxEventResponse> {
    const data = QueryPastTxEventRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "PastTxEvent", data);
    return promise.then((data) => QueryPastTxEventResponse.decode(new _m0.Reader(data)));
  }

  PastTxEventsByTxHash(request: QueryPastTxEventsByTxHashRequest): Promise<QueryPastTxEventsByTxHashResponse> {
    const data = QueryPastTxEventsByTxHashRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "PastTxEventsByTxHash", data);
    return promise.then((data) => QueryPastTxEventsByTxHashResponse.decode(new _m0.Reader(data)));
  }

  PastTxEvents(request: QueryPastTxEventsRequest): Promise<QueryPastTxEventsResponse> {
    const data = QueryPastTxEventsRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "PastTxEvents", data);
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
