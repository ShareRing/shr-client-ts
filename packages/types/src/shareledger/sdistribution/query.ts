/* eslint-disable */
import {PageRequest, PageResponse} from "../../cosmos/base/query/v1beta1/pagination";
import {Params} from "./params";
import {Reward} from "./reward";
import {BuilderCount} from "./builder_count";
import {BuilderList} from "./builder_list";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Long, Rpc} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
/** QueryParamsRequest is request type for the Query/Params RPC method. */

export interface QueryParamsRequest {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */

export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}
export interface QueryGetRewardRequest {
  index: string;
}
export interface QueryGetRewardResponse {
  reward?: Reward;
}
export interface QueryAllRewardRequest {
  pagination?: PageRequest;
}
export interface QueryAllRewardResponse {
  reward: Reward[];
  pagination?: PageResponse;
}
export interface QueryGetBuilderCountRequest {
  index: string;
}
export interface QueryGetBuilderCountResponse {
  builderCount?: BuilderCount;
}
export interface QueryAllBuilderCountRequest {
  pagination?: PageRequest;
}
export interface QueryAllBuilderCountResponse {
  builderCount: BuilderCount[];
  pagination?: PageResponse;
}
export interface QueryGetBuilderListRequest {
  id: Long;
}
export interface QueryGetBuilderListResponse {
  BuilderList?: BuilderList;
}
export interface QueryAllBuilderListRequest {
  pagination?: PageRequest;
}
export interface QueryAllBuilderListResponse {
  BuilderList: BuilderList[];
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

function createBaseQueryGetRewardRequest(): QueryGetRewardRequest {
  return {
    index: ""
  };
}

export const QueryGetRewardRequest = {
  encode(message: QueryGetRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRewardRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRewardRequest>, I>>(object: I): QueryGetRewardRequest {
    const message = createBaseQueryGetRewardRequest();
    message.index = object.index ?? "";
    return message;
  }
};

function createBaseQueryGetRewardResponse(): QueryGetRewardResponse {
  return {
    reward: undefined
  };
}

export const QueryGetRewardResponse = {
  encode(message: QueryGetRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reward !== undefined) {
      Reward.encode(message.reward, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reward = Reward.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRewardResponse>, I>>(object: I): QueryGetRewardResponse {
    const message = createBaseQueryGetRewardResponse();
    message.reward = object.reward !== undefined && object.reward !== null ? Reward.fromPartial(object.reward) : undefined;
    return message;
  }
};

function createBaseQueryAllRewardRequest(): QueryAllRewardRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllRewardRequest = {
  encode(message: QueryAllRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRewardRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryAllRewardRequest>, I>>(object: I): QueryAllRewardRequest {
    const message = createBaseQueryAllRewardRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryAllRewardResponse(): QueryAllRewardResponse {
  return {
    reward: [],
    pagination: undefined
  };
}

export const QueryAllRewardResponse = {
  encode(message: QueryAllRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reward) {
      Reward.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.reward.push(Reward.decode(reader, reader.uint32()));
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

  fromPartial<I extends Exact<DeepPartial<QueryAllRewardResponse>, I>>(object: I): QueryAllRewardResponse {
    const message = createBaseQueryAllRewardResponse();
    message.reward = object.reward?.map((e) => Reward.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryGetBuilderCountRequest(): QueryGetBuilderCountRequest {
  return {
    index: ""
  };
}

export const QueryGetBuilderCountRequest = {
  encode(message: QueryGetBuilderCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBuilderCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBuilderCountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBuilderCountRequest>, I>>(object: I): QueryGetBuilderCountRequest {
    const message = createBaseQueryGetBuilderCountRequest();
    message.index = object.index ?? "";
    return message;
  }
};

function createBaseQueryGetBuilderCountResponse(): QueryGetBuilderCountResponse {
  return {
    builderCount: undefined
  };
}

export const QueryGetBuilderCountResponse = {
  encode(message: QueryGetBuilderCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.builderCount !== undefined) {
      BuilderCount.encode(message.builderCount, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBuilderCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBuilderCountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.builderCount = BuilderCount.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBuilderCountResponse>, I>>(object: I): QueryGetBuilderCountResponse {
    const message = createBaseQueryGetBuilderCountResponse();
    message.builderCount =
      object.builderCount !== undefined && object.builderCount !== null ? BuilderCount.fromPartial(object.builderCount) : undefined;
    return message;
  }
};

function createBaseQueryAllBuilderCountRequest(): QueryAllBuilderCountRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllBuilderCountRequest = {
  encode(message: QueryAllBuilderCountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBuilderCountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBuilderCountRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryAllBuilderCountRequest>, I>>(object: I): QueryAllBuilderCountRequest {
    const message = createBaseQueryAllBuilderCountRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryAllBuilderCountResponse(): QueryAllBuilderCountResponse {
  return {
    builderCount: [],
    pagination: undefined
  };
}

export const QueryAllBuilderCountResponse = {
  encode(message: QueryAllBuilderCountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.builderCount) {
      BuilderCount.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBuilderCountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBuilderCountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.builderCount.push(BuilderCount.decode(reader, reader.uint32()));
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

  fromPartial<I extends Exact<DeepPartial<QueryAllBuilderCountResponse>, I>>(object: I): QueryAllBuilderCountResponse {
    const message = createBaseQueryAllBuilderCountResponse();
    message.builderCount = object.builderCount?.map((e) => BuilderCount.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryGetBuilderListRequest(): QueryGetBuilderListRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryGetBuilderListRequest = {
  encode(message: QueryGetBuilderListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBuilderListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBuilderListRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryGetBuilderListRequest>, I>>(object: I): QueryGetBuilderListRequest {
    const message = createBaseQueryGetBuilderListRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};

function createBaseQueryGetBuilderListResponse(): QueryGetBuilderListResponse {
  return {
    BuilderList: undefined
  };
}

export const QueryGetBuilderListResponse = {
  encode(message: QueryGetBuilderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BuilderList !== undefined) {
      BuilderList.encode(message.BuilderList, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBuilderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBuilderListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.BuilderList = BuilderList.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetBuilderListResponse>, I>>(object: I): QueryGetBuilderListResponse {
    const message = createBaseQueryGetBuilderListResponse();
    message.BuilderList =
      object.BuilderList !== undefined && object.BuilderList !== null ? BuilderList.fromPartial(object.BuilderList) : undefined;
    return message;
  }
};

function createBaseQueryAllBuilderListRequest(): QueryAllBuilderListRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllBuilderListRequest = {
  encode(message: QueryAllBuilderListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBuilderListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBuilderListRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryAllBuilderListRequest>, I>>(object: I): QueryAllBuilderListRequest {
    const message = createBaseQueryAllBuilderListRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};

function createBaseQueryAllBuilderListResponse(): QueryAllBuilderListResponse {
  return {
    BuilderList: [],
    pagination: undefined
  };
}

export const QueryAllBuilderListResponse = {
  encode(message: QueryAllBuilderListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.BuilderList) {
      BuilderList.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBuilderListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBuilderListResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.BuilderList.push(BuilderList.decode(reader, reader.uint32()));
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

  fromPartial<I extends Exact<DeepPartial<QueryAllBuilderListResponse>, I>>(object: I): QueryAllBuilderListResponse {
    const message = createBaseQueryAllBuilderListResponse();
    message.BuilderList = object.BuilderList?.map((e) => BuilderList.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
/** Query defines the gRPC querier service. */

export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Reward by index. */

  Reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>;
  /** Queries a list of Reward items. */

  RewardAll(request?: QueryAllRewardRequest): Promise<QueryAllRewardResponse>;
  /** Queries a BuilderCount by index. */

  BuilderCount(request: QueryGetBuilderCountRequest): Promise<QueryGetBuilderCountResponse>;
  /** Queries a list of BuilderCount items. */

  BuilderCountAll(request?: QueryAllBuilderCountRequest): Promise<QueryAllBuilderCountResponse>;
  /** Queries a BuilderList by id. */

  BuilderList(request: QueryGetBuilderListRequest): Promise<QueryGetBuilderListResponse>;
  /** Queries a list of BuilderList items. */

  BuilderListAll(request?: QueryAllBuilderListRequest): Promise<QueryAllBuilderListResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Reward = this.Reward.bind(this);
    this.RewardAll = this.RewardAll.bind(this);
    this.BuilderCount = this.BuilderCount.bind(this);
    this.BuilderCountAll = this.BuilderCountAll.bind(this);
    this.BuilderList = this.BuilderList.bind(this);
    this.BuilderListAll = this.BuilderListAll.bind(this);
  }

  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Reward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse> {
    const data = QueryGetRewardRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "Reward", data);
    return promise.then((data) => QueryGetRewardResponse.decode(new _m0.Reader(data)));
  }

  RewardAll(
    request: QueryAllRewardRequest = {
      pagination: undefined
    }
  ): Promise<QueryAllRewardResponse> {
    const data = QueryAllRewardRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "RewardAll", data);
    return promise.then((data) => QueryAllRewardResponse.decode(new _m0.Reader(data)));
  }

  BuilderCount(request: QueryGetBuilderCountRequest): Promise<QueryGetBuilderCountResponse> {
    const data = QueryGetBuilderCountRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "BuilderCount", data);
    return promise.then((data) => QueryGetBuilderCountResponse.decode(new _m0.Reader(data)));
  }

  BuilderCountAll(
    request: QueryAllBuilderCountRequest = {
      pagination: undefined
    }
  ): Promise<QueryAllBuilderCountResponse> {
    const data = QueryAllBuilderCountRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "BuilderCountAll", data);
    return promise.then((data) => QueryAllBuilderCountResponse.decode(new _m0.Reader(data)));
  }

  BuilderList(request: QueryGetBuilderListRequest): Promise<QueryGetBuilderListResponse> {
    const data = QueryGetBuilderListRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "BuilderList", data);
    return promise.then((data) => QueryGetBuilderListResponse.decode(new _m0.Reader(data)));
  }

  BuilderListAll(
    request: QueryAllBuilderListRequest = {
      pagination: undefined
    }
  ): Promise<QueryAllBuilderListResponse> {
    const data = QueryAllBuilderListRequest.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Query", "BuilderListAll", data);
    return promise.then((data) => QueryAllBuilderListResponse.decode(new _m0.Reader(data)));
  }
}
