/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {AccState} from "./acc_state";

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

export interface QueryApproverRequest {
  address: string;
}

export interface QueryApproverResponse {
  accState?: AccState;
}

export interface QueryRelayerRequest {
  address: string;
}

export interface QueryRelayerResponse {
  accState?: AccState;
}

export interface QueryRelayersRequest {}

export interface QueryRelayersResponse {
  relayers: AccState[];
}

export interface QueryApproversRequest {}

export interface QueryApproversResponse {
  approvers: AccState[];
}

function createBaseQueryAccStateRequest(): QueryAccStateRequest {
  return {key: ""};
}

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
    const message = createBaseQueryAccStateRequest();
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
    return {key: isSet(object.key) ? String(object.key) : ""};
  },

  toJSON(message: QueryAccStateRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStateRequest>, I>>(object: I): QueryAccStateRequest {
    const message = createBaseQueryAccStateRequest();
    message.key = object.key ?? "";
    return message;
  }
};

function createBaseQueryAccStateResponse(): QueryAccStateResponse {
  return {accState: undefined};
}

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
    const message = createBaseQueryAccStateResponse();
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
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryAccStateResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStateResponse>, I>>(object: I): QueryAccStateResponse {
    const message = createBaseQueryAccStateResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryAccStatesRequest(): QueryAccStatesRequest {
  return {pagination: undefined};
}

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
    const message = createBaseQueryAccStatesRequest();
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
    return {pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined};
  },

  toJSON(message: QueryAccStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccStatesRequest>, I>>(object: I): QueryAccStatesRequest {
    const message = createBaseQueryAccStatesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryAccStatesResponse(): QueryAccStatesResponse {
  return {accState: [], pagination: undefined};
}

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
    const message = createBaseQueryAccStatesResponse();
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
    return {
      accState: Array.isArray(object?.accState) ? object.accState.map((e: any) => AccState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
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
    const message = createBaseQueryAccStatesResponse();
    message.accState = object.accState?.map((e) => AccState.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryVoterRequest(): QueryVoterRequest {
  return {address: ""};
}

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
    const message = createBaseQueryVoterRequest();
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
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryVoterRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoterRequest>, I>>(object: I): QueryVoterRequest {
    const message = createBaseQueryVoterRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryVoterResponse(): QueryVoterResponse {
  return {voter: undefined};
}

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
    const message = createBaseQueryVoterResponse();
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
    return {voter: isSet(object.voter) ? AccState.fromJSON(object.voter) : undefined};
  },

  toJSON(message: QueryVoterResponse): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter ? AccState.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVoterResponse>, I>>(object: I): QueryVoterResponse {
    const message = createBaseQueryVoterResponse();
    message.voter = object.voter !== undefined && object.voter !== null ? AccState.fromPartial(object.voter) : undefined;
    return message;
  }
};

function createBaseQueryLoaderRequest(): QueryLoaderRequest {
  return {address: ""};
}

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
    const message = createBaseQueryLoaderRequest();
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
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryLoaderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoaderRequest>, I>>(object: I): QueryLoaderRequest {
    const message = createBaseQueryLoaderRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryLoaderResponse(): QueryLoaderResponse {
  return {accState: undefined};
}

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
    const message = createBaseQueryLoaderResponse();
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
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryLoaderResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoaderResponse>, I>>(object: I): QueryLoaderResponse {
    const message = createBaseQueryLoaderResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryIdSignerRequest(): QueryIdSignerRequest {
  return {address: ""};
}

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
    const message = createBaseQueryIdSignerRequest();
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
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryIdSignerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignerRequest>, I>>(object: I): QueryIdSignerRequest {
    const message = createBaseQueryIdSignerRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryIdSignerResponse(): QueryIdSignerResponse {
  return {accState: undefined};
}

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
    const message = createBaseQueryIdSignerResponse();
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
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryIdSignerResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignerResponse>, I>>(object: I): QueryIdSignerResponse {
    const message = createBaseQueryIdSignerResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryIdSignersRequest(): QueryIdSignersRequest {
  return {};
}

export const QueryIdSignersRequest = {
  encode(_: QueryIdSignersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIdSignersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIdSignersRequest();
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
    return {};
  },

  toJSON(_: QueryIdSignersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryIdSignersRequest>, I>>(_: I): QueryIdSignersRequest {
    const message = createBaseQueryIdSignersRequest();
    return message;
  }
};

function createBaseQueryIdSignersResponse(): QueryIdSignersResponse {
  return {accStates: []};
}

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
    const message = createBaseQueryIdSignersResponse();
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
    return {
      accStates: Array.isArray(object?.accStates) ? object.accStates.map((e: any) => AccState.fromJSON(e)) : []
    };
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
    const message = createBaseQueryIdSignersResponse();
    message.accStates = object.accStates?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryAccountOperatorRequest(): QueryAccountOperatorRequest {
  return {address: ""};
}

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
    const message = createBaseQueryAccountOperatorRequest();
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
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryAccountOperatorRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorRequest>, I>>(object: I): QueryAccountOperatorRequest {
    const message = createBaseQueryAccountOperatorRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryAccountOperatorResponse(): QueryAccountOperatorResponse {
  return {accState: undefined};
}

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
    const message = createBaseQueryAccountOperatorResponse();
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
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryAccountOperatorResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorResponse>, I>>(object: I): QueryAccountOperatorResponse {
    const message = createBaseQueryAccountOperatorResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryAccountOperatorsRequest(): QueryAccountOperatorsRequest {
  return {};
}

export const QueryAccountOperatorsRequest = {
  encode(_: QueryAccountOperatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountOperatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountOperatorsRequest();
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
    return {};
  },

  toJSON(_: QueryAccountOperatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountOperatorsRequest>, I>>(_: I): QueryAccountOperatorsRequest {
    const message = createBaseQueryAccountOperatorsRequest();
    return message;
  }
};

function createBaseQueryAccountOperatorsResponse(): QueryAccountOperatorsResponse {
  return {accStates: []};
}

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
    const message = createBaseQueryAccountOperatorsResponse();
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
    return {
      accStates: Array.isArray(object?.accStates) ? object.accStates.map((e: any) => AccState.fromJSON(e)) : []
    };
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
    const message = createBaseQueryAccountOperatorsResponse();
    message.accStates = object.accStates?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryDocumentIssuerRequest(): QueryDocumentIssuerRequest {
  return {address: ""};
}

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
    const message = createBaseQueryDocumentIssuerRequest();
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
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryDocumentIssuerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuerRequest>, I>>(object: I): QueryDocumentIssuerRequest {
    const message = createBaseQueryDocumentIssuerRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryDocumentIssuerResponse(): QueryDocumentIssuerResponse {
  return {accState: undefined};
}

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
    const message = createBaseQueryDocumentIssuerResponse();
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
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryDocumentIssuerResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuerResponse>, I>>(object: I): QueryDocumentIssuerResponse {
    const message = createBaseQueryDocumentIssuerResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryDocumentIssuersRequest(): QueryDocumentIssuersRequest {
  return {};
}

export const QueryDocumentIssuersRequest = {
  encode(_: QueryDocumentIssuersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentIssuersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentIssuersRequest();
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
    return {};
  },

  toJSON(_: QueryDocumentIssuersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentIssuersRequest>, I>>(_: I): QueryDocumentIssuersRequest {
    const message = createBaseQueryDocumentIssuersRequest();
    return message;
  }
};

function createBaseQueryDocumentIssuersResponse(): QueryDocumentIssuersResponse {
  return {accStates: []};
}

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
    const message = createBaseQueryDocumentIssuersResponse();
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
    return {
      accStates: Array.isArray(object?.accStates) ? object.accStates.map((e: any) => AccState.fromJSON(e)) : []
    };
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
    const message = createBaseQueryDocumentIssuersResponse();
    message.accStates = object.accStates?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryVotersRequest(): QueryVotersRequest {
  return {};
}

export const QueryVotersRequest = {
  encode(_: QueryVotersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotersRequest();
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
    return {};
  },

  toJSON(_: QueryVotersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryVotersRequest>, I>>(_: I): QueryVotersRequest {
    const message = createBaseQueryVotersRequest();
    return message;
  }
};

function createBaseQueryVotersResponse(): QueryVotersResponse {
  return {voters: []};
}

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
    const message = createBaseQueryVotersResponse();
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
    return {voters: Array.isArray(object?.voters) ? object.voters.map((e: any) => AccState.fromJSON(e)) : []};
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
    const message = createBaseQueryVotersResponse();
    message.voters = object.voters?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryLoadersRequest(): QueryLoadersRequest {
  return {};
}

export const QueryLoadersRequest = {
  encode(_: QueryLoadersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLoadersRequest();
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
    return {};
  },

  toJSON(_: QueryLoadersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLoadersRequest>, I>>(_: I): QueryLoadersRequest {
    const message = createBaseQueryLoadersRequest();
    return message;
  }
};

function createBaseQueryLoadersResponse(): QueryLoadersResponse {
  return {loaders: []};
}

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
    const message = createBaseQueryLoadersResponse();
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
    return {loaders: Array.isArray(object?.loaders) ? object.loaders.map((e: any) => AccState.fromJSON(e)) : []};
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
    const message = createBaseQueryLoadersResponse();
    message.loaders = object.loaders?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryApproverRequest(): QueryApproverRequest {
  return {address: ""};
}

export const QueryApproverRequest = {
  encode(message: QueryApproverRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApproverRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproverRequest();
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

  fromJSON(object: any): QueryApproverRequest {
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryApproverRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproverRequest>, I>>(object: I): QueryApproverRequest {
    const message = createBaseQueryApproverRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryApproverResponse(): QueryApproverResponse {
  return {accState: undefined};
}

export const QueryApproverResponse = {
  encode(message: QueryApproverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApproverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproverResponse();
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

  fromJSON(object: any): QueryApproverResponse {
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryApproverResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproverResponse>, I>>(object: I): QueryApproverResponse {
    const message = createBaseQueryApproverResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryRelayerRequest(): QueryRelayerRequest {
  return {address: ""};
}

export const QueryRelayerRequest = {
  encode(message: QueryRelayerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayerRequest();
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

  fromJSON(object: any): QueryRelayerRequest {
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryRelayerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRelayerRequest>, I>>(object: I): QueryRelayerRequest {
    const message = createBaseQueryRelayerRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryRelayerResponse(): QueryRelayerResponse {
  return {accState: undefined};
}

export const QueryRelayerResponse = {
  encode(message: QueryRelayerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayerResponse();
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

  fromJSON(object: any): QueryRelayerResponse {
    return {accState: isSet(object.accState) ? AccState.fromJSON(object.accState) : undefined};
  },

  toJSON(message: QueryRelayerResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRelayerResponse>, I>>(object: I): QueryRelayerResponse {
    const message = createBaseQueryRelayerResponse();
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

function createBaseQueryRelayersRequest(): QueryRelayersRequest {
  return {};
}

export const QueryRelayersRequest = {
  encode(_: QueryRelayersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayersRequest();
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

  fromJSON(_: any): QueryRelayersRequest {
    return {};
  },

  toJSON(_: QueryRelayersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRelayersRequest>, I>>(_: I): QueryRelayersRequest {
    const message = createBaseQueryRelayersRequest();
    return message;
  }
};

function createBaseQueryRelayersResponse(): QueryRelayersResponse {
  return {relayers: []};
}

export const QueryRelayersResponse = {
  encode(message: QueryRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.relayers) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRelayersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.relayers.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRelayersResponse {
    return {relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => AccState.fromJSON(e)) : []};
  },

  toJSON(message: QueryRelayersResponse): unknown {
    const obj: any = {};
    if (message.relayers) {
      obj.relayers = message.relayers.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.relayers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRelayersResponse>, I>>(object: I): QueryRelayersResponse {
    const message = createBaseQueryRelayersResponse();
    message.relayers = object.relayers?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryApproversRequest(): QueryApproversRequest {
  return {};
}

export const QueryApproversRequest = {
  encode(_: QueryApproversRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApproversRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproversRequest();
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

  fromJSON(_: any): QueryApproversRequest {
    return {};
  },

  toJSON(_: QueryApproversRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproversRequest>, I>>(_: I): QueryApproversRequest {
    const message = createBaseQueryApproversRequest();
    return message;
  }
};

function createBaseQueryApproversResponse(): QueryApproversResponse {
  return {approvers: []};
}

export const QueryApproversResponse = {
  encode(message: QueryApproversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.approvers) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryApproversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryApproversResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.approvers.push(AccState.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryApproversResponse {
    return {
      approvers: Array.isArray(object?.approvers) ? object.approvers.map((e: any) => AccState.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryApproversResponse): unknown {
    const obj: any = {};
    if (message.approvers) {
      obj.approvers = message.approvers.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.approvers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryApproversResponse>, I>>(object: I): QueryApproversResponse {
    const message = createBaseQueryApproversResponse();
    message.approvers = object.approvers?.map((e) => AccState.fromPartial(e)) || [];
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
  /** Queries a list of Approver items. */
  Approver(request: QueryApproverRequest): Promise<QueryApproverResponse>;
  /** Queries a list of Relayer items. */
  Relayer(request: QueryRelayerRequest): Promise<QueryRelayerResponse>;
  /** Queries a list of Relayers items. */
  Relayers(request: QueryRelayersRequest): Promise<QueryRelayersResponse>;
  /** Queries a list of Approves items. */
  Approvers(request: QueryApproversRequest): Promise<QueryApproversResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.electoral.Query";
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
    this.Approver = this.Approver.bind(this);
    this.Relayer = this.Relayer.bind(this);
    this.Relayers = this.Relayers.bind(this);
    this.Approvers = this.Approvers.bind(this);
  }
  AccState(request: QueryAccStateRequest): Promise<QueryAccStateResponse> {
    const data = QueryAccStateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccState", data);
    return promise.then((data) => QueryAccStateResponse.decode(new _m0.Reader(data)));
  }

  AccStates(request: QueryAccStatesRequest): Promise<QueryAccStatesResponse> {
    const data = QueryAccStatesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccStates", data);
    return promise.then((data) => QueryAccStatesResponse.decode(new _m0.Reader(data)));
  }

  Voter(request: QueryVoterRequest): Promise<QueryVoterResponse> {
    const data = QueryVoterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Voter", data);
    return promise.then((data) => QueryVoterResponse.decode(new _m0.Reader(data)));
  }

  Loader(request: QueryLoaderRequest): Promise<QueryLoaderResponse> {
    const data = QueryLoaderRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Loader", data);
    return promise.then((data) => QueryLoaderResponse.decode(new _m0.Reader(data)));
  }

  IdSigner(request: QueryIdSignerRequest): Promise<QueryIdSignerResponse> {
    const data = QueryIdSignerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IdSigner", data);
    return promise.then((data) => QueryIdSignerResponse.decode(new _m0.Reader(data)));
  }

  IdSigners(request: QueryIdSignersRequest): Promise<QueryIdSignersResponse> {
    const data = QueryIdSignersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IdSigners", data);
    return promise.then((data) => QueryIdSignersResponse.decode(new _m0.Reader(data)));
  }

  AccountOperator(request: QueryAccountOperatorRequest): Promise<QueryAccountOperatorResponse> {
    const data = QueryAccountOperatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountOperator", data);
    return promise.then((data) => QueryAccountOperatorResponse.decode(new _m0.Reader(data)));
  }

  AccountOperators(request: QueryAccountOperatorsRequest): Promise<QueryAccountOperatorsResponse> {
    const data = QueryAccountOperatorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AccountOperators", data);
    return promise.then((data) => QueryAccountOperatorsResponse.decode(new _m0.Reader(data)));
  }

  DocumentIssuer(request: QueryDocumentIssuerRequest): Promise<QueryDocumentIssuerResponse> {
    const data = QueryDocumentIssuerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DocumentIssuer", data);
    return promise.then((data) => QueryDocumentIssuerResponse.decode(new _m0.Reader(data)));
  }

  DocumentIssuers(request: QueryDocumentIssuersRequest): Promise<QueryDocumentIssuersResponse> {
    const data = QueryDocumentIssuersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DocumentIssuers", data);
    return promise.then((data) => QueryDocumentIssuersResponse.decode(new _m0.Reader(data)));
  }

  Voters(request: QueryVotersRequest): Promise<QueryVotersResponse> {
    const data = QueryVotersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Voters", data);
    return promise.then((data) => QueryVotersResponse.decode(new _m0.Reader(data)));
  }

  Loaders(request: QueryLoadersRequest): Promise<QueryLoadersResponse> {
    const data = QueryLoadersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Loaders", data);
    return promise.then((data) => QueryLoadersResponse.decode(new _m0.Reader(data)));
  }

  Approver(request: QueryApproverRequest): Promise<QueryApproverResponse> {
    const data = QueryApproverRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Approver", data);
    return promise.then((data) => QueryApproverResponse.decode(new _m0.Reader(data)));
  }

  Relayer(request: QueryRelayerRequest): Promise<QueryRelayerResponse> {
    const data = QueryRelayerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Relayer", data);
    return promise.then((data) => QueryRelayerResponse.decode(new _m0.Reader(data)));
  }

  Relayers(request: QueryRelayersRequest): Promise<QueryRelayersResponse> {
    const data = QueryRelayersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Relayers", data);
    return promise.then((data) => QueryRelayersResponse.decode(new _m0.Reader(data)));
  }

  Approvers(request: QueryApproversRequest): Promise<QueryApproversResponse> {
    const data = QueryApproversRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Approvers", data);
    return promise.then((data) => QueryApproversResponse.decode(new _m0.Reader(data)));
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
