/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {LevelFee} from "../gentlemint/level_fee";
import {ActionLevelFee} from "../gentlemint/action_level_fee";

export const protobufPackage = "shareledger.gentlemint";

export interface QueryExchangeRateRequest {}

export interface QueryExchangeRateResponse {
  rate: string;
}

export interface QueryLevelFeeRequest {
  level: string;
}

export interface QueryLevelFeeResponse {
  levelFee?: LevelFee;
}

export interface QueryLevelFeesRequest {}

export interface QueryLevelFeesResponse {
  levelFee: LevelFee[];
}

export interface QueryActionLevelFeeRequest {
  action: string;
}

export interface QueryActionLevelFeeResponse {
  action: string;
  level: string;
  fee: string;
}

export interface QueryActionLevelFeesRequest {}

export interface QueryActionLevelFeesResponse {
  actionLevelFee: ActionLevelFee[];
}

export interface QueryCheckFeesRequest {
  address: string;
  actions: string[];
}

export interface QueryCheckFeesResponse {
  shrFee: string;
  sufficientFee: boolean;
  sufficientFundForFee: boolean;
  shrpCostLoadingFee: string;
}

const baseQueryExchangeRateRequest: object = {};

export const QueryExchangeRateRequest = {
  encode(_: QueryExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryExchangeRateRequest} as QueryExchangeRateRequest;
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

  fromJSON(_: any): QueryExchangeRateRequest {
    const message = {...baseQueryExchangeRateRequest} as QueryExchangeRateRequest;
    return message;
  },

  toJSON(_: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(_: I): QueryExchangeRateRequest {
    const message = {...baseQueryExchangeRateRequest} as QueryExchangeRateRequest;
    return message;
  }
};

const baseQueryExchangeRateResponse: object = {rate: ""};

export const QueryExchangeRateResponse = {
  encode(message: QueryExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryExchangeRateResponse} as QueryExchangeRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateResponse {
    const message = {...baseQueryExchangeRateResponse} as QueryExchangeRateResponse;
    message.rate = object.rate !== undefined && object.rate !== null ? String(object.rate) : "";
    return message;
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(object: I): QueryExchangeRateResponse {
    const message = {...baseQueryExchangeRateResponse} as QueryExchangeRateResponse;
    message.rate = object.rate ?? "";
    return message;
  }
};

const baseQueryLevelFeeRequest: object = {level: ""};

export const QueryLevelFeeRequest = {
  encode(message: QueryLevelFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.level !== "") {
      writer.uint32(10).string(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLevelFeeRequest} as QueryLevelFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.level = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLevelFeeRequest {
    const message = {...baseQueryLevelFeeRequest} as QueryLevelFeeRequest;
    message.level = object.level !== undefined && object.level !== null ? String(object.level) : "";
    return message;
  },

  toJSON(message: QueryLevelFeeRequest): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeeRequest>, I>>(object: I): QueryLevelFeeRequest {
    const message = {...baseQueryLevelFeeRequest} as QueryLevelFeeRequest;
    message.level = object.level ?? "";
    return message;
  }
};

const baseQueryLevelFeeResponse: object = {};

export const QueryLevelFeeResponse = {
  encode(message: QueryLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.levelFee !== undefined) {
      LevelFee.encode(message.levelFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLevelFeeResponse} as QueryLevelFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelFee = LevelFee.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLevelFeeResponse {
    const message = {...baseQueryLevelFeeResponse} as QueryLevelFeeResponse;
    message.levelFee = object.levelFee !== undefined && object.levelFee !== null ? LevelFee.fromJSON(object.levelFee) : undefined;
    return message;
  },

  toJSON(message: QueryLevelFeeResponse): unknown {
    const obj: any = {};
    message.levelFee !== undefined && (obj.levelFee = message.levelFee ? LevelFee.toJSON(message.levelFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeeResponse>, I>>(object: I): QueryLevelFeeResponse {
    const message = {...baseQueryLevelFeeResponse} as QueryLevelFeeResponse;
    message.levelFee = object.levelFee !== undefined && object.levelFee !== null ? LevelFee.fromPartial(object.levelFee) : undefined;
    return message;
  }
};

const baseQueryLevelFeesRequest: object = {};

export const QueryLevelFeesRequest = {
  encode(_: QueryLevelFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLevelFeesRequest} as QueryLevelFeesRequest;
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

  fromJSON(_: any): QueryLevelFeesRequest {
    const message = {...baseQueryLevelFeesRequest} as QueryLevelFeesRequest;
    return message;
  },

  toJSON(_: QueryLevelFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeesRequest>, I>>(_: I): QueryLevelFeesRequest {
    const message = {...baseQueryLevelFeesRequest} as QueryLevelFeesRequest;
    return message;
  }
};

const baseQueryLevelFeesResponse: object = {};

export const QueryLevelFeesResponse = {
  encode(message: QueryLevelFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.levelFee) {
      LevelFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryLevelFeesResponse} as QueryLevelFeesResponse;
    message.levelFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelFee.push(LevelFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLevelFeesResponse {
    const message = {...baseQueryLevelFeesResponse} as QueryLevelFeesResponse;
    message.levelFee = (object.levelFee ?? []).map((e: any) => LevelFee.fromJSON(e));
    return message;
  },

  toJSON(message: QueryLevelFeesResponse): unknown {
    const obj: any = {};
    if (message.levelFee) {
      obj.levelFee = message.levelFee.map((e) => (e ? LevelFee.toJSON(e) : undefined));
    } else {
      obj.levelFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeesResponse>, I>>(object: I): QueryLevelFeesResponse {
    const message = {...baseQueryLevelFeesResponse} as QueryLevelFeesResponse;
    message.levelFee = object.levelFee?.map((e) => LevelFee.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryActionLevelFeeRequest: object = {action: ""};

export const QueryActionLevelFeeRequest = {
  encode(message: QueryActionLevelFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionLevelFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryActionLevelFeeRequest} as QueryActionLevelFeeRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActionLevelFeeRequest {
    const message = {...baseQueryActionLevelFeeRequest} as QueryActionLevelFeeRequest;
    message.action = object.action !== undefined && object.action !== null ? String(object.action) : "";
    return message;
  },

  toJSON(message: QueryActionLevelFeeRequest): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeeRequest>, I>>(object: I): QueryActionLevelFeeRequest {
    const message = {...baseQueryActionLevelFeeRequest} as QueryActionLevelFeeRequest;
    message.action = object.action ?? "";
    return message;
  }
};

const baseQueryActionLevelFeeResponse: object = {action: "", level: "", fee: ""};

export const QueryActionLevelFeeResponse = {
  encode(message: QueryActionLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }
    if (message.level !== "") {
      writer.uint32(18).string(message.level);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryActionLevelFeeResponse} as QueryActionLevelFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;
        case 2:
          message.level = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActionLevelFeeResponse {
    const message = {...baseQueryActionLevelFeeResponse} as QueryActionLevelFeeResponse;
    message.action = object.action !== undefined && object.action !== null ? String(object.action) : "";
    message.level = object.level !== undefined && object.level !== null ? String(object.level) : "";
    message.fee = object.fee !== undefined && object.fee !== null ? String(object.fee) : "";
    return message;
  },

  toJSON(message: QueryActionLevelFeeResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.level !== undefined && (obj.level = message.level);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeeResponse>, I>>(object: I): QueryActionLevelFeeResponse {
    const message = {...baseQueryActionLevelFeeResponse} as QueryActionLevelFeeResponse;
    message.action = object.action ?? "";
    message.level = object.level ?? "";
    message.fee = object.fee ?? "";
    return message;
  }
};

const baseQueryActionLevelFeesRequest: object = {};

export const QueryActionLevelFeesRequest = {
  encode(_: QueryActionLevelFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionLevelFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryActionLevelFeesRequest} as QueryActionLevelFeesRequest;
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

  fromJSON(_: any): QueryActionLevelFeesRequest {
    const message = {...baseQueryActionLevelFeesRequest} as QueryActionLevelFeesRequest;
    return message;
  },

  toJSON(_: QueryActionLevelFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeesRequest>, I>>(_: I): QueryActionLevelFeesRequest {
    const message = {...baseQueryActionLevelFeesRequest} as QueryActionLevelFeesRequest;
    return message;
  }
};

const baseQueryActionLevelFeesResponse: object = {};

export const QueryActionLevelFeesResponse = {
  encode(message: QueryActionLevelFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.actionLevelFee) {
      ActionLevelFee.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionLevelFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryActionLevelFeesResponse} as QueryActionLevelFeesResponse;
    message.actionLevelFee = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionLevelFee.push(ActionLevelFee.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActionLevelFeesResponse {
    const message = {...baseQueryActionLevelFeesResponse} as QueryActionLevelFeesResponse;
    message.actionLevelFee = (object.actionLevelFee ?? []).map((e: any) => ActionLevelFee.fromJSON(e));
    return message;
  },

  toJSON(message: QueryActionLevelFeesResponse): unknown {
    const obj: any = {};
    if (message.actionLevelFee) {
      obj.actionLevelFee = message.actionLevelFee.map((e) => (e ? ActionLevelFee.toJSON(e) : undefined));
    } else {
      obj.actionLevelFee = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeesResponse>, I>>(object: I): QueryActionLevelFeesResponse {
    const message = {...baseQueryActionLevelFeesResponse} as QueryActionLevelFeesResponse;
    message.actionLevelFee = object.actionLevelFee?.map((e) => ActionLevelFee.fromPartial(e)) || [];
    return message;
  }
};

const baseQueryCheckFeesRequest: object = {address: "", actions: ""};

export const QueryCheckFeesRequest = {
  encode(message: QueryCheckFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.actions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryCheckFeesRequest} as QueryCheckFeesRequest;
    message.actions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.actions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckFeesRequest {
    const message = {...baseQueryCheckFeesRequest} as QueryCheckFeesRequest;
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    message.actions = (object.actions ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: QueryCheckFeesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.actions) {
      obj.actions = message.actions.map((e) => e);
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckFeesRequest>, I>>(object: I): QueryCheckFeesRequest {
    const message = {...baseQueryCheckFeesRequest} as QueryCheckFeesRequest;
    message.address = object.address ?? "";
    message.actions = object.actions?.map((e) => e) || [];
    return message;
  }
};

const baseQueryCheckFeesResponse: object = {shrFee: "", sufficientFee: false, sufficientFundForFee: false, shrpCostLoadingFee: ""};

export const QueryCheckFeesResponse = {
  encode(message: QueryCheckFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.shrFee !== "") {
      writer.uint32(10).string(message.shrFee);
    }
    if (message.sufficientFee === true) {
      writer.uint32(16).bool(message.sufficientFee);
    }
    if (message.sufficientFundForFee === true) {
      writer.uint32(24).bool(message.sufficientFundForFee);
    }
    if (message.shrpCostLoadingFee !== "") {
      writer.uint32(34).string(message.shrpCostLoadingFee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryCheckFeesResponse} as QueryCheckFeesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shrFee = reader.string();
          break;
        case 2:
          message.sufficientFee = reader.bool();
          break;
        case 3:
          message.sufficientFundForFee = reader.bool();
          break;
        case 4:
          message.shrpCostLoadingFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckFeesResponse {
    const message = {...baseQueryCheckFeesResponse} as QueryCheckFeesResponse;
    message.shrFee = object.shrFee !== undefined && object.shrFee !== null ? String(object.shrFee) : "";
    message.sufficientFee = object.sufficientFee !== undefined && object.sufficientFee !== null ? Boolean(object.sufficientFee) : false;
    message.sufficientFundForFee =
      object.sufficientFundForFee !== undefined && object.sufficientFundForFee !== null ? Boolean(object.sufficientFundForFee) : false;
    message.shrpCostLoadingFee =
      object.shrpCostLoadingFee !== undefined && object.shrpCostLoadingFee !== null ? String(object.shrpCostLoadingFee) : "";
    return message;
  },

  toJSON(message: QueryCheckFeesResponse): unknown {
    const obj: any = {};
    message.shrFee !== undefined && (obj.shrFee = message.shrFee);
    message.sufficientFee !== undefined && (obj.sufficientFee = message.sufficientFee);
    message.sufficientFundForFee !== undefined && (obj.sufficientFundForFee = message.sufficientFundForFee);
    message.shrpCostLoadingFee !== undefined && (obj.shrpCostLoadingFee = message.shrpCostLoadingFee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckFeesResponse>, I>>(object: I): QueryCheckFeesResponse {
    const message = {...baseQueryCheckFeesResponse} as QueryCheckFeesResponse;
    message.shrFee = object.shrFee ?? "";
    message.sufficientFee = object.sufficientFee ?? false;
    message.sufficientFundForFee = object.sufficientFundForFee ?? false;
    message.shrpCostLoadingFee = object.shrpCostLoadingFee ?? "";
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a exchangeRate by index. */
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse>;
  /** Queries a levelFee by index. */
  LevelFee(request: QueryLevelFeeRequest): Promise<QueryLevelFeeResponse>;
  /** Queries a list of levelFee items. */
  LevelFees(request: QueryLevelFeesRequest): Promise<QueryLevelFeesResponse>;
  /** Queries a actionLevelFee by index. */
  ActionLevelFee(request: QueryActionLevelFeeRequest): Promise<QueryActionLevelFeeResponse>;
  /** Queries a list of actionLevelFee items. */
  ActionLevelFees(request: QueryActionLevelFeesRequest): Promise<QueryActionLevelFeesResponse>;
  /** Queries a list of checkFees items. */
  CheckFees(request: QueryCheckFeesRequest): Promise<QueryCheckFeesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ExchangeRate = this.ExchangeRate.bind(this);
    this.LevelFee = this.LevelFee.bind(this);
    this.LevelFees = this.LevelFees.bind(this);
    this.ActionLevelFee = this.ActionLevelFee.bind(this);
    this.ActionLevelFees = this.ActionLevelFees.bind(this);
    this.CheckFees = this.CheckFees.bind(this);
  }
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "ExchangeRate", data);
    return promise.then((data) => QueryExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  LevelFee(request: QueryLevelFeeRequest): Promise<QueryLevelFeeResponse> {
    const data = QueryLevelFeeRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "LevelFee", data);
    return promise.then((data) => QueryLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  LevelFees(request: QueryLevelFeesRequest): Promise<QueryLevelFeesResponse> {
    const data = QueryLevelFeesRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "LevelFees", data);
    return promise.then((data) => QueryLevelFeesResponse.decode(new _m0.Reader(data)));
  }

  ActionLevelFee(request: QueryActionLevelFeeRequest): Promise<QueryActionLevelFeeResponse> {
    const data = QueryActionLevelFeeRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "ActionLevelFee", data);
    return promise.then((data) => QueryActionLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  ActionLevelFees(request: QueryActionLevelFeesRequest): Promise<QueryActionLevelFeesResponse> {
    const data = QueryActionLevelFeesRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "ActionLevelFees", data);
    return promise.then((data) => QueryActionLevelFeesResponse.decode(new _m0.Reader(data)));
  }

  CheckFees(request: QueryCheckFeesRequest): Promise<QueryCheckFeesResponse> {
    const data = QueryCheckFeesRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "CheckFees", data);
    return promise.then((data) => QueryCheckFeesResponse.decode(new _m0.Reader(data)));
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
