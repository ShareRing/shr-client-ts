/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {AccState} from "../../shareledger/electoral/acc_state";
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "shareledger.electoral";

export interface QueryAccStateRequest {
  key: string;
}

export interface QueryAccStateResponse {
  accState?: AccState;
}

export interface QueryAccStatesRequest {
  pagination?: PageRequest;
}

export interface QueryAccStatesResponse {
  accState: AccState[];
  pagination?: PageResponse;
}

export interface QueryVoterRequest {
  address: string;
}

export interface QueryVoterResponse {
  voter?: AccState;
}

export interface QueryLoaderRequest {
  address: string;
}

export interface QueryLoaderResponse {
  accState?: AccState;
}

export interface QueryIdSignerRequest {
  address: string;
}

export interface QueryIdSignerResponse {
  accState?: AccState;
}

export interface QueryIdSignersRequest {}

export interface QueryIdSignersResponse {
  accStates: AccState[];
}

export interface QueryAccountOperatorRequest {
  address: string;
}

export interface QueryAccountOperatorResponse {
  accState?: AccState;
}

export interface QueryAccountOperatorsRequest {}

export interface QueryAccountOperatorsResponse {
  accStates: AccState[];
}

export interface QueryDocumentIssuerRequest {
  address: string;
}

export interface QueryDocumentIssuerResponse {
  accState?: AccState;
}

export interface QueryDocumentIssuersRequest {}

export interface QueryDocumentIssuersResponse {
  accStates: AccState[];
}

export interface QueryVotersRequest {}

export interface QueryVotersResponse {
  voters: AccState[];
}

export interface QueryLoadersRequest {}

export interface QueryLoadersResponse {
  loaders: AccState[];
}

const baseQueryAccStateRequest: object = {key: ""};

export const QueryAccStateRequest = {
  encode(message: QueryAccStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccStateRequest} as QueryAccStateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccStateRequest {
    const message = {...baseQueryAccStateRequest} as QueryAccStateRequest;
    message.key = object.key !== undefined && object.key !== null ? String(object.key) : "";
    return message;
  },

  toJSON(message: QueryAccStateRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStateRequest>, I>>(object: I): QueryAccStateRequest {
    const message = {...baseQueryAccStateRequest} as QueryAccStateRequest;
    message.key = object.key ?? "";
    return message;
  }
};

const baseQueryAccStateResponse: object = {};

export const QueryAccStateResponse = {
  encode(message: QueryAccStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccStateResponse} as QueryAccStateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accState = AccState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccStateResponse {
    const message = {...baseQueryAccStateResponse} as QueryAccStateResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryAccStateResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStateResponse>, I>>(object: I): QueryAccStateResponse {
    const message = {...baseQueryAccStateResponse} as QueryAccStateResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

const baseQueryAccStatesRequest: object = {};

export const QueryAccStatesRequest = {
  encode(message: QueryAccStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccStatesRequest} as QueryAccStatesRequest;
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

  fromJSON(object: any): QueryAccStatesRequest {
    const message = {...baseQueryAccStatesRequest} as QueryAccStatesRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAccStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStatesRequest>, I>>(object: I): QueryAccStatesRequest {
    const message = {...baseQueryAccStatesRequest} as QueryAccStatesRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryAccStatesResponse: object = {};

export const QueryAccStatesResponse = {
  encode(message: QueryAccStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accState) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccStatesResponse} as QueryAccStatesResponse;
    message.accState = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accState.push(AccState.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAccStatesResponse {
    const message = {...baseQueryAccStatesResponse} as QueryAccStatesResponse;
    message.accState = (object.accState ?? []).map((e: any) => AccState.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAccStatesResponse): unknown {
    const obj: any = {};
    if (message.accState) {
      obj.accState = message.accState.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.accState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStatesResponse>, I>>(object: I): QueryAccStatesResponse {
    const message = {...baseQueryAccStatesResponse} as QueryAccStatesResponse;
    message.accState = object.accState?.map((e) => AccState.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryVoterRequest: object = {address: ""};

export const QueryVoterRequest = {
  encode(message: QueryVoterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryVoterRequest} as QueryVoterRequest;
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

  fromJSON(object: any): QueryVoterRequest {
    const message = {...baseQueryVoterRequest} as QueryVoterRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryVoterRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoterRequest>, I>>(object: I): QueryVoterRequest {
    const message = {...baseQueryVoterRequest} as QueryVoterRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryVoterResponse: object = {};

export const QueryVoterResponse = {
  encode(message: QueryVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== undefined) {
      AccState.encode(message.voter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryVoterResponse} as QueryVoterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voter = AccState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoterResponse {
    const message = {...baseQueryVoterResponse} as QueryVoterResponse;
    message.voter = object.voter !== undefined && object.voter !== null ? AccState.fromJSON(object.voter) : undefined;
    return message;
  },

  toJSON(message: QueryVoterResponse): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter ? AccState.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoterResponse>, I>>(object: I): QueryVoterResponse {
    const message = {...baseQueryVoterResponse} as QueryVoterResponse;
    message.voter = object.voter !== undefined && object.voter !== null ? AccState.fromPartial(object.voter) : undefined;
    return message;
  }
};

const baseQueryLoaderRequest: object = {address: ""};

export const QueryLoaderRequest = {
  encode(message: QueryLoaderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoaderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLoaderRequest} as QueryLoaderRequest;
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

  fromJSON(object: any): QueryLoaderRequest {
    const message = {...baseQueryLoaderRequest} as QueryLoaderRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryLoaderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoaderRequest>, I>>(object: I): QueryLoaderRequest {
    const message = {...baseQueryLoaderRequest} as QueryLoaderRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryLoaderResponse: object = {};

export const QueryLoaderResponse = {
  encode(message: QueryLoaderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoaderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLoaderResponse} as QueryLoaderResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accState = AccState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLoaderResponse {
    const message = {...baseQueryLoaderResponse} as QueryLoaderResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryLoaderResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoaderResponse>, I>>(object: I): QueryLoaderResponse {
    const message = {...baseQueryLoaderResponse} as QueryLoaderResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

const baseQueryIdSignerRequest: object = {address: ""};

export const QueryIdSignerRequest = {
  encode(message: QueryIdSignerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdSignerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryIdSignerRequest} as QueryIdSignerRequest;
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

  fromJSON(object: any): QueryIdSignerRequest {
    const message = {...baseQueryIdSignerRequest} as QueryIdSignerRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryIdSignerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignerRequest>, I>>(object: I): QueryIdSignerRequest {
    const message = {...baseQueryIdSignerRequest} as QueryIdSignerRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryIdSignerResponse: object = {};

export const QueryIdSignerResponse = {
  encode(message: QueryIdSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryIdSignerResponse} as QueryIdSignerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accState = AccState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIdSignerResponse {
    const message = {...baseQueryIdSignerResponse} as QueryIdSignerResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryIdSignerResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignerResponse>, I>>(object: I): QueryIdSignerResponse {
    const message = {...baseQueryIdSignerResponse} as QueryIdSignerResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

const baseQueryIdSignersRequest: object = {};

export const QueryIdSignersRequest = {
  encode(_: QueryIdSignersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdSignersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryIdSignersRequest} as QueryIdSignersRequest;
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

  fromJSON(_: any): QueryIdSignersRequest {
    const message = {...baseQueryIdSignersRequest} as QueryIdSignersRequest;
    return message;
  },

  toJSON(_: QueryIdSignersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignersRequest>, I>>(_: I): QueryIdSignersRequest {
    const message = {...baseQueryIdSignersRequest} as QueryIdSignersRequest;
    return message;
  }
};

const baseQueryIdSignersResponse: object = {};

export const QueryIdSignersResponse = {
  encode(message: QueryIdSignersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accStates) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdSignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryIdSignersResponse} as QueryIdSignersResponse;
    message.accStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accStates.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryIdSignersResponse {
    const message = {...baseQueryIdSignersResponse} as QueryIdSignersResponse;
    message.accStates = (object.accStates ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryIdSignersResponse): unknown {
    const obj: any = {};
    if (message.accStates) {
      obj.accStates = message.accStates.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.accStates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignersResponse>, I>>(object: I): QueryIdSignersResponse {
    const message = {...baseQueryIdSignersResponse} as QueryIdSignersResponse;
    message.accStates = object.accStates?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryAccountOperatorRequest: object = {address: ""};

export const QueryAccountOperatorRequest = {
  encode(message: QueryAccountOperatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOperatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccountOperatorRequest} as QueryAccountOperatorRequest;
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

  fromJSON(object: any): QueryAccountOperatorRequest {
    const message = {...baseQueryAccountOperatorRequest} as QueryAccountOperatorRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryAccountOperatorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorRequest>, I>>(object: I): QueryAccountOperatorRequest {
    const message = {...baseQueryAccountOperatorRequest} as QueryAccountOperatorRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryAccountOperatorResponse: object = {};

export const QueryAccountOperatorResponse = {
  encode(message: QueryAccountOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccountOperatorResponse} as QueryAccountOperatorResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accState = AccState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountOperatorResponse {
    const message = {...baseQueryAccountOperatorResponse} as QueryAccountOperatorResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryAccountOperatorResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorResponse>, I>>(object: I): QueryAccountOperatorResponse {
    const message = {...baseQueryAccountOperatorResponse} as QueryAccountOperatorResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

const baseQueryAccountOperatorsRequest: object = {};

export const QueryAccountOperatorsRequest = {
  encode(_: QueryAccountOperatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOperatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccountOperatorsRequest} as QueryAccountOperatorsRequest;
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

  fromJSON(_: any): QueryAccountOperatorsRequest {
    const message = {...baseQueryAccountOperatorsRequest} as QueryAccountOperatorsRequest;
    return message;
  },

  toJSON(_: QueryAccountOperatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorsRequest>, I>>(_: I): QueryAccountOperatorsRequest {
    const message = {...baseQueryAccountOperatorsRequest} as QueryAccountOperatorsRequest;
    return message;
  }
};

const baseQueryAccountOperatorsResponse: object = {};

export const QueryAccountOperatorsResponse = {
  encode(message: QueryAccountOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accStates) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAccountOperatorsResponse} as QueryAccountOperatorsResponse;
    message.accStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accStates.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountOperatorsResponse {
    const message = {...baseQueryAccountOperatorsResponse} as QueryAccountOperatorsResponse;
    message.accStates = (object.accStates ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryAccountOperatorsResponse): unknown {
    const obj: any = {};
    if (message.accStates) {
      obj.accStates = message.accStates.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.accStates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorsResponse>, I>>(object: I): QueryAccountOperatorsResponse {
    const message = {...baseQueryAccountOperatorsResponse} as QueryAccountOperatorsResponse;
    message.accStates = object.accStates?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryDocumentIssuerRequest: object = {address: ""};

export const QueryDocumentIssuerRequest = {
  encode(message: QueryDocumentIssuerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentIssuerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryDocumentIssuerRequest} as QueryDocumentIssuerRequest;
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

  fromJSON(object: any): QueryDocumentIssuerRequest {
    const message = {...baseQueryDocumentIssuerRequest} as QueryDocumentIssuerRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryDocumentIssuerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuerRequest>, I>>(object: I): QueryDocumentIssuerRequest {
    const message = {...baseQueryDocumentIssuerRequest} as QueryDocumentIssuerRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryDocumentIssuerResponse: object = {};

export const QueryDocumentIssuerResponse = {
  encode(message: QueryDocumentIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryDocumentIssuerResponse} as QueryDocumentIssuerResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accState = AccState.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentIssuerResponse {
    const message = {...baseQueryDocumentIssuerResponse} as QueryDocumentIssuerResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryDocumentIssuerResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuerResponse>, I>>(object: I): QueryDocumentIssuerResponse {
    const message = {...baseQueryDocumentIssuerResponse} as QueryDocumentIssuerResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

const baseQueryDocumentIssuersRequest: object = {};

export const QueryDocumentIssuersRequest = {
  encode(_: QueryDocumentIssuersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentIssuersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryDocumentIssuersRequest} as QueryDocumentIssuersRequest;
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

  fromJSON(_: any): QueryDocumentIssuersRequest {
    const message = {...baseQueryDocumentIssuersRequest} as QueryDocumentIssuersRequest;
    return message;
  },

  toJSON(_: QueryDocumentIssuersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuersRequest>, I>>(_: I): QueryDocumentIssuersRequest {
    const message = {...baseQueryDocumentIssuersRequest} as QueryDocumentIssuersRequest;
    return message;
  }
};

const baseQueryDocumentIssuersResponse: object = {};

export const QueryDocumentIssuersResponse = {
  encode(message: QueryDocumentIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accStates) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryDocumentIssuersResponse} as QueryDocumentIssuersResponse;
    message.accStates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accStates.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentIssuersResponse {
    const message = {...baseQueryDocumentIssuersResponse} as QueryDocumentIssuersResponse;
    message.accStates = (object.accStates ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryDocumentIssuersResponse): unknown {
    const obj: any = {};
    if (message.accStates) {
      obj.accStates = message.accStates.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.accStates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuersResponse>, I>>(object: I): QueryDocumentIssuersResponse {
    const message = {...baseQueryDocumentIssuersResponse} as QueryDocumentIssuersResponse;
    message.accStates = object.accStates?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryVotersRequest: object = {};

export const QueryVotersRequest = {
  encode(_: QueryVotersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryVotersRequest} as QueryVotersRequest;
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

  fromJSON(_: any): QueryVotersRequest {
    const message = {...baseQueryVotersRequest} as QueryVotersRequest;
    return message;
  },

  toJSON(_: QueryVotersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotersRequest>, I>>(_: I): QueryVotersRequest {
    const message = {...baseQueryVotersRequest} as QueryVotersRequest;
    return message;
  }
};

const baseQueryVotersResponse: object = {};

export const QueryVotersResponse = {
  encode(message: QueryVotersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voters) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryVotersResponse} as QueryVotersResponse;
    message.voters = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voters.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVotersResponse {
    const message = {...baseQueryVotersResponse} as QueryVotersResponse;
    message.voters = (object.voters ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryVotersResponse): unknown {
    const obj: any = {};
    if (message.voters) {
      obj.voters = message.voters.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.voters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotersResponse>, I>>(object: I): QueryVotersResponse {
    const message = {...baseQueryVotersResponse} as QueryVotersResponse;
    message.voters = object.voters?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryLoadersRequest: object = {};

export const QueryLoadersRequest = {
  encode(_: QueryLoadersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLoadersRequest} as QueryLoadersRequest;
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

  fromJSON(_: any): QueryLoadersRequest {
    const message = {...baseQueryLoadersRequest} as QueryLoadersRequest;
    return message;
  },

  toJSON(_: QueryLoadersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoadersRequest>, I>>(_: I): QueryLoadersRequest {
    const message = {...baseQueryLoadersRequest} as QueryLoadersRequest;
    return message;
  }
};

const baseQueryLoadersResponse: object = {};

export const QueryLoadersResponse = {
  encode(message: QueryLoadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.loaders) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLoadersResponse} as QueryLoadersResponse;
    message.loaders = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loaders.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLoadersResponse {
    const message = {...baseQueryLoadersResponse} as QueryLoadersResponse;
    message.loaders = (object.loaders ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryLoadersResponse): unknown {
    const obj: any = {};
    if (message.loaders) {
      obj.loaders = message.loaders.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.loaders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoadersResponse>, I>>(object: I): QueryLoadersResponse {
    const message = {...baseQueryLoadersResponse} as QueryLoadersResponse;
    message.loaders = object.loaders?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a accState by index. */
  AccState(request: QueryAccStateRequest): Promise<QueryAccStateResponse>;
  /** Queries a list of accState items. */
  AccStates(request: QueryAccStatesRequest): Promise<QueryAccStatesResponse>;
  /** Queries a list of Voter items. */
  Voter(request: QueryVoterRequest): Promise<QueryVoterResponse>;
  /** Queries a list of Loader items. */
  Loader(request: QueryLoaderRequest): Promise<QueryLoaderResponse>;
  /** Queries a list of idSigner items. */
  IdSigner(request: QueryIdSignerRequest): Promise<QueryIdSignerResponse>;
  /** Queries a list of idSigners items. */
  IdSigners(request: QueryIdSignersRequest): Promise<QueryIdSignersResponse>;
  /** Queries a list of accountOperator items. */
  AccountOperator(request: QueryAccountOperatorRequest): Promise<QueryAccountOperatorResponse>;
  /** Queries a list of accountOperators items. */
  AccountOperators(request: QueryAccountOperatorsRequest): Promise<QueryAccountOperatorsResponse>;
  /** Queries a list of documentIssuer items. */
  DocumentIssuer(request: QueryDocumentIssuerRequest): Promise<QueryDocumentIssuerResponse>;
  /** Queries a list of documentIssuers items. */
  DocumentIssuers(request: QueryDocumentIssuersRequest): Promise<QueryDocumentIssuersResponse>;
  /** Queries a list of Voters items. */
  Voters(request: QueryVotersRequest): Promise<QueryVotersResponse>;
  /** Queries a list of Loaders items. */
  Loaders(request: QueryLoadersRequest): Promise<QueryLoadersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AccState = this.AccState.bind(this);
    this.AccStates = this.AccStates.bind(this);
    this.Voter = this.Voter.bind(this);
    this.Loader = this.Loader.bind(this);
    this.IdSigner = this.IdSigner.bind(this);
    this.IdSigners = this.IdSigners.bind(this);
    this.AccountOperator = this.AccountOperator.bind(this);
    this.AccountOperators = this.AccountOperators.bind(this);
    this.DocumentIssuer = this.DocumentIssuer.bind(this);
    this.DocumentIssuers = this.DocumentIssuers.bind(this);
    this.Voters = this.Voters.bind(this);
    this.Loaders = this.Loaders.bind(this);
  }
  AccState(request: QueryAccStateRequest): Promise<QueryAccStateResponse> {
    const data = QueryAccStateRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "AccState", data);
    return promise.then((data) => QueryAccStateResponse.decode(new _m0.Reader(data)));
  }

  AccStates(request: QueryAccStatesRequest): Promise<QueryAccStatesResponse> {
    const data = QueryAccStatesRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "AccStates", data);
    return promise.then((data) => QueryAccStatesResponse.decode(new _m0.Reader(data)));
  }

  Voter(request: QueryVoterRequest): Promise<QueryVoterResponse> {
    const data = QueryVoterRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "Voter", data);
    return promise.then((data) => QueryVoterResponse.decode(new _m0.Reader(data)));
  }

  Loader(request: QueryLoaderRequest): Promise<QueryLoaderResponse> {
    const data = QueryLoaderRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "Loader", data);
    return promise.then((data) => QueryLoaderResponse.decode(new _m0.Reader(data)));
  }

  IdSigner(request: QueryIdSignerRequest): Promise<QueryIdSignerResponse> {
    const data = QueryIdSignerRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "IdSigner", data);
    return promise.then((data) => QueryIdSignerResponse.decode(new _m0.Reader(data)));
  }

  IdSigners(request: QueryIdSignersRequest): Promise<QueryIdSignersResponse> {
    const data = QueryIdSignersRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "IdSigners", data);
    return promise.then((data) => QueryIdSignersResponse.decode(new _m0.Reader(data)));
  }

  AccountOperator(request: QueryAccountOperatorRequest): Promise<QueryAccountOperatorResponse> {
    const data = QueryAccountOperatorRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "AccountOperator", data);
    return promise.then((data) => QueryAccountOperatorResponse.decode(new _m0.Reader(data)));
  }

  AccountOperators(request: QueryAccountOperatorsRequest): Promise<QueryAccountOperatorsResponse> {
    const data = QueryAccountOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "AccountOperators", data);
    return promise.then((data) => QueryAccountOperatorsResponse.decode(new _m0.Reader(data)));
  }

  DocumentIssuer(request: QueryDocumentIssuerRequest): Promise<QueryDocumentIssuerResponse> {
    const data = QueryDocumentIssuerRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "DocumentIssuer", data);
    return promise.then((data) => QueryDocumentIssuerResponse.decode(new _m0.Reader(data)));
  }

  DocumentIssuers(request: QueryDocumentIssuersRequest): Promise<QueryDocumentIssuersResponse> {
    const data = QueryDocumentIssuersRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "DocumentIssuers", data);
    return promise.then((data) => QueryDocumentIssuersResponse.decode(new _m0.Reader(data)));
  }

  Voters(request: QueryVotersRequest): Promise<QueryVotersResponse> {
    const data = QueryVotersRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "Voters", data);
    return promise.then((data) => QueryVotersResponse.decode(new _m0.Reader(data)));
  }

  Loaders(request: QueryLoadersRequest): Promise<QueryLoadersResponse> {
    const data = QueryLoadersRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "Loaders", data);
    return promise.then((data) => QueryLoadersResponse.decode(new _m0.Reader(data)));
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
