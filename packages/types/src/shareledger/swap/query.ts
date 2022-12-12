/* eslint-disable */
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {Params} from "./params";
import {Request} from "./request";
import {Batch} from "./batch";
import {Coin} from "../../cosmos/base/v1beta1/coin";
import {Schema} from "./schema";
import {PastTxEvent} from "./past_tx_event";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Long, Rpc} from "../../helpers";
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
export interface QueryNextRequestIdRequest {}
export interface QueryNextRequestIdResponse {
  nextCount: Long;
}
export interface QueryNextBatchIdRequest {}
export interface QueryNextBatchIdResponse {
  nextCount: Long;
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};

function createBaseQuerySwapRequest(): QuerySwapRequest {
  return {
    status: "",
    ids: [],
    srcAddr: "",
    destAddr: "",
    srcNetwork: "",
    destNetwork: "",
    pagination: undefined
  };
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
  return {
    swaps: [],
    pagination: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(object: I): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.swaps = object.swaps?.map((e) => Request.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryBatchesResponse(): QueryBatchesResponse {
  return {
    batches: [],
    pagination: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(_: I): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    return message;
  }
};

function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance !== undefined && object.balance !== null ? Coin.fromPartial(object.balance) : undefined;
    return message;
  }
};

function createBaseQuerySchemaRequest(): QuerySchemaRequest {
  return {
    network: ""
  };
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

  fromPartial<I extends Exact<DeepPartial<QuerySchemaRequest>, I>>(object: I): QuerySchemaRequest {
    const message = createBaseQuerySchemaRequest();
    message.network = object.network ?? "";
    return message;
  }
};

function createBaseQuerySchemaResponse(): QuerySchemaResponse {
  return {
    schema: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QuerySchemaResponse>, I>>(object: I): QuerySchemaResponse {
    const message = createBaseQuerySchemaResponse();
    message.schema = object.schema !== undefined && object.schema !== null ? Schema.fromPartial(object.schema) : undefined;
    return message;
  }
};

function createBaseQuerySchemasRequest(): QuerySchemasRequest {
  return {
    pagination: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QuerySchemasRequest>, I>>(object: I): QuerySchemasRequest {
    const message = createBaseQuerySchemasRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQuerySchemasResponse(): QuerySchemasResponse {
  return {
    schemas: [],
    pagination: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QuerySchemasResponse>, I>>(object: I): QuerySchemasResponse {
    const message = createBaseQuerySchemasResponse();
    message.schemas = object.schemas?.map((e) => Schema.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryBatchesRequest(): QueryBatchesRequest {
  return {
    network: "",
    ids: [],
    pagination: undefined
  };
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
  return {
    txHash: "",
    logIndex: Long.UZERO
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventRequest>, I>>(object: I): QueryPastTxEventRequest {
    const message = createBaseQueryPastTxEventRequest();
    message.txHash = object.txHash ?? "";
    message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? Long.fromValue(object.logIndex) : Long.UZERO;
    return message;
  }
};

function createBaseQueryPastTxEventResponse(): QueryPastTxEventResponse {
  return {
    event: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventResponse>, I>>(object: I): QueryPastTxEventResponse {
    const message = createBaseQueryPastTxEventResponse();
    message.event = object.event !== undefined && object.event !== null ? PastTxEvent.fromPartial(object.event) : undefined;
    return message;
  }
};

function createBaseQueryPastTxEventsByTxHashRequest(): QueryPastTxEventsByTxHashRequest {
  return {
    txHash: ""
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsByTxHashRequest>, I>>(object: I): QueryPastTxEventsByTxHashRequest {
    const message = createBaseQueryPastTxEventsByTxHashRequest();
    message.txHash = object.txHash ?? "";
    return message;
  }
};

function createBaseQueryPastTxEventsByTxHashResponse(): QueryPastTxEventsByTxHashResponse {
  return {
    events: []
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsByTxHashResponse>, I>>(object: I): QueryPastTxEventsByTxHashResponse {
    const message = createBaseQueryPastTxEventsByTxHashResponse();
    message.events = object.events?.map((e) => PastTxEvent.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryPastTxEventsRequest(): QueryPastTxEventsRequest {
  return {
    pagination: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsRequest>, I>>(object: I): QueryPastTxEventsRequest {
    const message = createBaseQueryPastTxEventsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryPastTxEventsResponse(): QueryPastTxEventsResponse {
  return {
    events: [],
    pagination: undefined
  };
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

  fromPartial<I extends Exact<DeepPartial<QueryPastTxEventsResponse>, I>>(object: I): QueryPastTxEventsResponse {
    const message = createBaseQueryPastTxEventsResponse();
    message.events = object.events?.map((e) => PastTxEvent.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryNextRequestIdRequest(): QueryNextRequestIdRequest {
  return {};
}

export const QueryNextRequestIdRequest = {
  encode(_: QueryNextRequestIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextRequestIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextRequestIdRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryNextRequestIdRequest>, I>>(_: I): QueryNextRequestIdRequest {
    const message = createBaseQueryNextRequestIdRequest();
    return message;
  }
};

function createBaseQueryNextRequestIdResponse(): QueryNextRequestIdResponse {
  return {
    nextCount: Long.UZERO
  };
}

export const QueryNextRequestIdResponse = {
  encode(message: QueryNextRequestIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextCount.isZero()) {
      writer.uint32(8).uint64(message.nextCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextRequestIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextRequestIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextCount = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNextRequestIdResponse>, I>>(object: I): QueryNextRequestIdResponse {
    const message = createBaseQueryNextRequestIdResponse();
    message.nextCount = object.nextCount !== undefined && object.nextCount !== null ? Long.fromValue(object.nextCount) : Long.UZERO;
    return message;
  }
};

function createBaseQueryNextBatchIdRequest(): QueryNextBatchIdRequest {
  return {};
}

export const QueryNextBatchIdRequest = {
  encode(_: QueryNextBatchIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextBatchIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextBatchIdRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryNextBatchIdRequest>, I>>(_: I): QueryNextBatchIdRequest {
    const message = createBaseQueryNextBatchIdRequest();
    return message;
  }
};

function createBaseQueryNextBatchIdResponse(): QueryNextBatchIdResponse {
  return {
    nextCount: Long.UZERO
  };
}

export const QueryNextBatchIdResponse = {
  encode(message: QueryNextBatchIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextCount.isZero()) {
      writer.uint32(8).uint64(message.nextCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNextBatchIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNextBatchIdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextCount = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNextBatchIdResponse>, I>>(object: I): QueryNextBatchIdResponse {
    const message = createBaseQueryNextBatchIdResponse();
    message.nextCount = object.nextCount !== undefined && object.nextCount !== null ? Long.fromValue(object.nextCount) : Long.UZERO;
    return message;
  }
};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Search items. */

  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  /** Queries a list of Fund items. */

  Balance(request?: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Queries a Format by index. */

  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse>;
  /** Queries a list of Format items. */

  Schemas(request?: QuerySchemasRequest): Promise<QuerySchemasResponse>;
  /** Queries a list of SearchBatch items. */

  Batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
  /** Queries a list of PastTxEvent items. */

  PastTxEvent(request: QueryPastTxEventRequest): Promise<QueryPastTxEventResponse>;
  /** Queries a list of PastTxEvents by txHash items. */

  PastTxEventsByTxHash(request: QueryPastTxEventsByTxHashRequest): Promise<QueryPastTxEventsByTxHashResponse>;
  /** Queries all PastTxEvents */

  PastTxEvents(request?: QueryPastTxEventsRequest): Promise<QueryPastTxEventsResponse>;
  /** Queries a list of NextRequestId items. */

  NextRequestId(request?: QueryNextRequestIdRequest): Promise<QueryNextRequestIdResponse>;
  /** Queries a list of NextBatchId items. */

  NextBatchId(request?: QueryNextBatchIdRequest): Promise<QueryNextBatchIdResponse>;
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
    this.NextRequestId = this.NextRequestId.bind(this);
    this.NextBatchId = this.NextBatchId.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Swap", data);
    return promise.then((data) => QuerySwapResponse.decode(new _m0.Reader(data)));
  }

  Balance(request: QueryBalanceRequest = {}): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Balance", data);
    return promise.then((data) => QueryBalanceResponse.decode(new _m0.Reader(data)));
  }

  Schema(request: QuerySchemaRequest): Promise<QuerySchemaResponse> {
    const data = QuerySchemaRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "Schema", data);
    return promise.then((data) => QuerySchemaResponse.decode(new _m0.Reader(data)));
  }

  Schemas(
    request: QuerySchemasRequest = {
      pagination: undefined
    }
  ): Promise<QuerySchemasResponse> {
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

  PastTxEvents(
    request: QueryPastTxEventsRequest = {
      pagination: undefined
    }
  ): Promise<QueryPastTxEventsResponse> {
    const data = QueryPastTxEventsRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "PastTxEvents", data);
    return promise.then((data) => QueryPastTxEventsResponse.decode(new _m0.Reader(data)));
  }

  NextRequestId(request: QueryNextRequestIdRequest = {}): Promise<QueryNextRequestIdResponse> {
    const data = QueryNextRequestIdRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "NextRequestId", data);
    return promise.then((data) => QueryNextRequestIdResponse.decode(new _m0.Reader(data)));
  }

  NextBatchId(request: QueryNextBatchIdRequest = {}): Promise<QueryNextBatchIdResponse> {
    const data = QueryNextBatchIdRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.swap.Query", "NextBatchId", data);
    return promise.then((data) => QueryNextBatchIdResponse.decode(new _m0.Reader(data)));
  }
}
