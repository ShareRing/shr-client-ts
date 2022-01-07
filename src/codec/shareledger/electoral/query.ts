/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {AccState} from "../electoral/acc_state";
import {PageRequest, PageResponse} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "shareledger.electoral";

export interface QueryGetAccStateRequest {
  key: string;
}

export interface QueryGetAccStateResponse {
  accState?: AccState;
}

export interface QueryAllAccStateRequest {
  pagination?: PageRequest;
}

export interface QueryAllAccStateResponse {
  accState: AccState[];
  pagination?: PageResponse;
}

export interface QueryGetVoterRequest {
  address: string;
}

export interface QueryGetVoterResponse {
  voter?: AccState;
}

export interface QueryGetLoaderRequest {
  address: string;
}

export interface QueryGetLoaderResponse {
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

export interface QueryGetVotersRequest {}

export interface QueryGetVotersResponse {
  voters: AccState[];
}

export interface QueryGetLoadersRequest {}

export interface QueryGetLoadersResponse {
  loaders: AccState[];
}

const baseQueryGetAccStateRequest: object = {key: ""};

export const QueryGetAccStateRequest = {
  encode(message: QueryGetAccStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetAccStateRequest} as QueryGetAccStateRequest;
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

  fromJSON(object: any): QueryGetAccStateRequest {
    const message = {...baseQueryGetAccStateRequest} as QueryGetAccStateRequest;
    message.key = object.key !== undefined && object.key !== null ? String(object.key) : "";
    return message;
  },

  toJSON(message: QueryGetAccStateRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAccStateRequest>, I>>(object: I): QueryGetAccStateRequest {
    const message = {...baseQueryGetAccStateRequest} as QueryGetAccStateRequest;
    message.key = object.key ?? "";
    return message;
  }
};

const baseQueryGetAccStateResponse: object = {};

export const QueryGetAccStateResponse = {
  encode(message: QueryGetAccStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAccStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetAccStateResponse} as QueryGetAccStateResponse;
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

  fromJSON(object: any): QueryGetAccStateResponse {
    const message = {...baseQueryGetAccStateResponse} as QueryGetAccStateResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryGetAccStateResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAccStateResponse>, I>>(object: I): QueryGetAccStateResponse {
    const message = {...baseQueryGetAccStateResponse} as QueryGetAccStateResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromPartial(object.accState) : undefined;
    return message;
  }
};

const baseQueryAllAccStateRequest: object = {};

export const QueryAllAccStateRequest = {
  encode(message: QueryAllAccStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAllAccStateRequest} as QueryAllAccStateRequest;
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

  fromJSON(object: any): QueryAllAccStateRequest {
    const message = {...baseQueryAllAccStateRequest} as QueryAllAccStateRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAllAccStateRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAccStateRequest>, I>>(object: I): QueryAllAccStateRequest {
    const message = {...baseQueryAllAccStateRequest} as QueryAllAccStateRequest;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryAllAccStateResponse: object = {};

export const QueryAllAccStateResponse = {
  encode(message: QueryAllAccStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accState) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAccStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAllAccStateResponse} as QueryAllAccStateResponse;
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

  fromJSON(object: any): QueryAllAccStateResponse {
    const message = {...baseQueryAllAccStateResponse} as QueryAllAccStateResponse;
    message.accState = (object.accState ?? []).map((e: any) => AccState.fromJSON(e));
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromJSON(object.pagination) : undefined;
    return message;
  },

  toJSON(message: QueryAllAccStateResponse): unknown {
    const obj: any = {};
    if (message.accState) {
      obj.accState = message.accState.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.accState = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAccStateResponse>, I>>(object: I): QueryAllAccStateResponse {
    const message = {...baseQueryAllAccStateResponse} as QueryAllAccStateResponse;
    message.accState = object.accState?.map((e) => AccState.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

const baseQueryGetVoterRequest: object = {address: ""};

export const QueryGetVoterRequest = {
  encode(message: QueryGetVoterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVoterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetVoterRequest} as QueryGetVoterRequest;
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

  fromJSON(object: any): QueryGetVoterRequest {
    const message = {...baseQueryGetVoterRequest} as QueryGetVoterRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryGetVoterRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVoterRequest>, I>>(object: I): QueryGetVoterRequest {
    const message = {...baseQueryGetVoterRequest} as QueryGetVoterRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryGetVoterResponse: object = {};

export const QueryGetVoterResponse = {
  encode(message: QueryGetVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voter !== undefined) {
      AccState.encode(message.voter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetVoterResponse} as QueryGetVoterResponse;
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

  fromJSON(object: any): QueryGetVoterResponse {
    const message = {...baseQueryGetVoterResponse} as QueryGetVoterResponse;
    message.voter = object.voter !== undefined && object.voter !== null ? AccState.fromJSON(object.voter) : undefined;
    return message;
  },

  toJSON(message: QueryGetVoterResponse): unknown {
    const obj: any = {};
    message.voter !== undefined && (obj.voter = message.voter ? AccState.toJSON(message.voter) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVoterResponse>, I>>(object: I): QueryGetVoterResponse {
    const message = {...baseQueryGetVoterResponse} as QueryGetVoterResponse;
    message.voter = object.voter !== undefined && object.voter !== null ? AccState.fromPartial(object.voter) : undefined;
    return message;
  }
};

const baseQueryGetLoaderRequest: object = {address: ""};

export const QueryGetLoaderRequest = {
  encode(message: QueryGetLoaderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoaderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetLoaderRequest} as QueryGetLoaderRequest;
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

  fromJSON(object: any): QueryGetLoaderRequest {
    const message = {...baseQueryGetLoaderRequest} as QueryGetLoaderRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: QueryGetLoaderRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLoaderRequest>, I>>(object: I): QueryGetLoaderRequest {
    const message = {...baseQueryGetLoaderRequest} as QueryGetLoaderRequest;
    message.address = object.address ?? "";
    return message;
  }
};

const baseQueryGetLoaderResponse: object = {};

export const QueryGetLoaderResponse = {
  encode(message: QueryGetLoaderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accState !== undefined) {
      AccState.encode(message.accState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoaderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetLoaderResponse} as QueryGetLoaderResponse;
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

  fromJSON(object: any): QueryGetLoaderResponse {
    const message = {...baseQueryGetLoaderResponse} as QueryGetLoaderResponse;
    message.accState = object.accState !== undefined && object.accState !== null ? AccState.fromJSON(object.accState) : undefined;
    return message;
  },

  toJSON(message: QueryGetLoaderResponse): unknown {
    const obj: any = {};
    message.accState !== undefined && (obj.accState = message.accState ? AccState.toJSON(message.accState) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLoaderResponse>, I>>(object: I): QueryGetLoaderResponse {
    const message = {...baseQueryGetLoaderResponse} as QueryGetLoaderResponse;
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

const baseQueryGetVotersRequest: object = {};

export const QueryGetVotersRequest = {
  encode(_: QueryGetVotersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVotersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetVotersRequest} as QueryGetVotersRequest;
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

  fromJSON(_: any): QueryGetVotersRequest {
    const message = {...baseQueryGetVotersRequest} as QueryGetVotersRequest;
    return message;
  },

  toJSON(_: QueryGetVotersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVotersRequest>, I>>(_: I): QueryGetVotersRequest {
    const message = {...baseQueryGetVotersRequest} as QueryGetVotersRequest;
    return message;
  }
};

const baseQueryGetVotersResponse: object = {};

export const QueryGetVotersResponse = {
  encode(message: QueryGetVotersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.voters) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetVotersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetVotersResponse} as QueryGetVotersResponse;
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

  fromJSON(object: any): QueryGetVotersResponse {
    const message = {...baseQueryGetVotersResponse} as QueryGetVotersResponse;
    message.voters = (object.voters ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryGetVotersResponse): unknown {
    const obj: any = {};
    if (message.voters) {
      obj.voters = message.voters.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.voters = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetVotersResponse>, I>>(object: I): QueryGetVotersResponse {
    const message = {...baseQueryGetVotersResponse} as QueryGetVotersResponse;
    message.voters = object.voters?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryGetLoadersRequest: object = {};

export const QueryGetLoadersRequest = {
  encode(_: QueryGetLoadersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoadersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetLoadersRequest} as QueryGetLoadersRequest;
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

  fromJSON(_: any): QueryGetLoadersRequest {
    const message = {...baseQueryGetLoadersRequest} as QueryGetLoadersRequest;
    return message;
  },

  toJSON(_: QueryGetLoadersRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLoadersRequest>, I>>(_: I): QueryGetLoadersRequest {
    const message = {...baseQueryGetLoadersRequest} as QueryGetLoadersRequest;
    return message;
  }
};

const baseQueryGetLoadersResponse: object = {};

export const QueryGetLoadersResponse = {
  encode(message: QueryGetLoadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.loaders) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetLoadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetLoadersResponse} as QueryGetLoadersResponse;
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

  fromJSON(object: any): QueryGetLoadersResponse {
    const message = {...baseQueryGetLoadersResponse} as QueryGetLoadersResponse;
    message.loaders = (object.loaders ?? []).map((e: any) => AccState.fromJSON(e));
    return message;
  },

  toJSON(message: QueryGetLoadersResponse): unknown {
    const obj: any = {};
    if (message.loaders) {
      obj.loaders = message.loaders.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.loaders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetLoadersResponse>, I>>(object: I): QueryGetLoadersResponse {
    const message = {...baseQueryGetLoadersResponse} as QueryGetLoadersResponse;
    message.loaders = object.loaders?.map((e) => AccState.fromPartial(e)) || [];
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a accState by index. */
  AccState(request: QueryGetAccStateRequest): Promise<QueryGetAccStateResponse>;
  /** Queries a list of accState items. */
  AccStateAll(request: QueryAllAccStateRequest): Promise<QueryAllAccStateResponse>;
  /** Queries a list of getVoter items. */
  GetVoter(request: QueryGetVoterRequest): Promise<QueryGetVoterResponse>;
  /** Queries a list of getLoader items. */
  GetLoader(request: QueryGetLoaderRequest): Promise<QueryGetLoaderResponse>;
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
  /** Queries a list of getVoters items. */
  GetVoters(request: QueryGetVotersRequest): Promise<QueryGetVotersResponse>;
  /** Queries a list of getLoaders items. */
  GetLoaders(request: QueryGetLoadersRequest): Promise<QueryGetLoadersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AccState = this.AccState.bind(this);
    this.AccStateAll = this.AccStateAll.bind(this);
    this.GetVoter = this.GetVoter.bind(this);
    this.GetLoader = this.GetLoader.bind(this);
    this.IdSigner = this.IdSigner.bind(this);
    this.IdSigners = this.IdSigners.bind(this);
    this.AccountOperator = this.AccountOperator.bind(this);
    this.AccountOperators = this.AccountOperators.bind(this);
    this.DocumentIssuer = this.DocumentIssuer.bind(this);
    this.DocumentIssuers = this.DocumentIssuers.bind(this);
    this.GetVoters = this.GetVoters.bind(this);
    this.GetLoaders = this.GetLoaders.bind(this);
  }
  AccState(request: QueryGetAccStateRequest): Promise<QueryGetAccStateResponse> {
    const data = QueryGetAccStateRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "AccState", data);
    return promise.then((data) => QueryGetAccStateResponse.decode(new _m0.Reader(data)));
  }

  AccStateAll(request: QueryAllAccStateRequest): Promise<QueryAllAccStateResponse> {
    const data = QueryAllAccStateRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "AccStateAll", data);
    return promise.then((data) => QueryAllAccStateResponse.decode(new _m0.Reader(data)));
  }

  GetVoter(request: QueryGetVoterRequest): Promise<QueryGetVoterResponse> {
    const data = QueryGetVoterRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "GetVoter", data);
    return promise.then((data) => QueryGetVoterResponse.decode(new _m0.Reader(data)));
  }

  GetLoader(request: QueryGetLoaderRequest): Promise<QueryGetLoaderResponse> {
    const data = QueryGetLoaderRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "GetLoader", data);
    return promise.then((data) => QueryGetLoaderResponse.decode(new _m0.Reader(data)));
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

  GetVoters(request: QueryGetVotersRequest): Promise<QueryGetVotersResponse> {
    const data = QueryGetVotersRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "GetVoters", data);
    return promise.then((data) => QueryGetVotersResponse.decode(new _m0.Reader(data)));
  }

  GetLoaders(request: QueryGetLoadersRequest): Promise<QueryGetLoadersResponse> {
    const data = QueryGetLoadersRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Query", "GetLoaders", data);
    return promise.then((data) => QueryGetLoadersResponse.decode(new _m0.Reader(data)));
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
