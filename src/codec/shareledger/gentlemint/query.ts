/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Coin, DecCoin} from "../../cosmos/base/v1beta1/coin";
import {ActionLevelFee} from "./action_level_fee";
import {LevelFeeDetail} from "./level_fee";

export const protobufPackage = "shareledger.gentlemint";

export interface QueryExchangeRateRequest {}

export interface QueryExchangeRateResponse {
  rate: string;
}

export interface QueryLevelFeeRequest {
  level: string;
}

export interface QueryLevelFeeResponse {
  levelFee?: LevelFeeDetail;
}

export interface QueryLevelFeesRequest {}

export interface QueryLevelFeesResponse {
  levelFees: LevelFeeDetail[];
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
  convertedFee?: Coin;
  sufficientFee: boolean;
  sufficientFundForFee: boolean;
  costLoadingFee?: DecCoin;
}

export interface QueryBalancesRequest {
  address: string;
}

export interface QueryBalancesResponse {
  coins: DecCoin[];
}

function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {};
}

export const QueryExchangeRateRequest = {
  encode(_: QueryExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
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
    return {};
  },

  toJSON(_: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateRequest>, I>>(_: I): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    return message;
  }
};

function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {rate: ""};
}

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
    const message = createBaseQueryExchangeRateResponse();
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
    return {rate: isSet(object.rate) ? String(object.rate) : ""};
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryExchangeRateResponse>, I>>(object: I): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.rate = object.rate ?? "";
    return message;
  }
};

function createBaseQueryLevelFeeRequest(): QueryLevelFeeRequest {
  return {level: ""};
}

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
    const message = createBaseQueryLevelFeeRequest();
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
    return {level: isSet(object.level) ? String(object.level) : ""};
  },

  toJSON(message: QueryLevelFeeRequest): unknown {
    const obj: any = {};
    message.level !== undefined && (obj.level = message.level);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeeRequest>, I>>(object: I): QueryLevelFeeRequest {
    const message = createBaseQueryLevelFeeRequest();
    message.level = object.level ?? "";
    return message;
  }
};

function createBaseQueryLevelFeeResponse(): QueryLevelFeeResponse {
  return {levelFee: undefined};
}

export const QueryLevelFeeResponse = {
  encode(message: QueryLevelFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.levelFee !== undefined) {
      LevelFeeDetail.encode(message.levelFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLevelFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelFee = LevelFeeDetail.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLevelFeeResponse {
    return {levelFee: isSet(object.levelFee) ? LevelFeeDetail.fromJSON(object.levelFee) : undefined};
  },

  toJSON(message: QueryLevelFeeResponse): unknown {
    const obj: any = {};
    message.levelFee !== undefined && (obj.levelFee = message.levelFee ? LevelFeeDetail.toJSON(message.levelFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeeResponse>, I>>(object: I): QueryLevelFeeResponse {
    const message = createBaseQueryLevelFeeResponse();
    message.levelFee = object.levelFee !== undefined && object.levelFee !== null ? LevelFeeDetail.fromPartial(object.levelFee) : undefined;
    return message;
  }
};

function createBaseQueryLevelFeesRequest(): QueryLevelFeesRequest {
  return {};
}

export const QueryLevelFeesRequest = {
  encode(_: QueryLevelFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLevelFeesRequest();
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
    return {};
  },

  toJSON(_: QueryLevelFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeesRequest>, I>>(_: I): QueryLevelFeesRequest {
    const message = createBaseQueryLevelFeesRequest();
    return message;
  }
};

function createBaseQueryLevelFeesResponse(): QueryLevelFeesResponse {
  return {levelFees: []};
}

export const QueryLevelFeesResponse = {
  encode(message: QueryLevelFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.levelFees) {
      LevelFeeDetail.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLevelFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLevelFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelFees.push(LevelFeeDetail.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLevelFeesResponse {
    return {
      levelFees: Array.isArray(object?.levelFees) ? object.levelFees.map((e: any) => LevelFeeDetail.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryLevelFeesResponse): unknown {
    const obj: any = {};
    if (message.levelFees) {
      obj.levelFees = message.levelFees.map((e) => (e ? LevelFeeDetail.toJSON(e) : undefined));
    } else {
      obj.levelFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLevelFeesResponse>, I>>(object: I): QueryLevelFeesResponse {
    const message = createBaseQueryLevelFeesResponse();
    message.levelFees = object.levelFees?.map((e) => LevelFeeDetail.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryActionLevelFeeRequest(): QueryActionLevelFeeRequest {
  return {action: ""};
}

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
    const message = createBaseQueryActionLevelFeeRequest();
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
    return {action: isSet(object.action) ? String(object.action) : ""};
  },

  toJSON(message: QueryActionLevelFeeRequest): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeeRequest>, I>>(object: I): QueryActionLevelFeeRequest {
    const message = createBaseQueryActionLevelFeeRequest();
    message.action = object.action ?? "";
    return message;
  }
};

function createBaseQueryActionLevelFeeResponse(): QueryActionLevelFeeResponse {
  return {action: "", level: "", fee: ""};
}

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
    const message = createBaseQueryActionLevelFeeResponse();
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
    return {
      action: isSet(object.action) ? String(object.action) : "",
      level: isSet(object.level) ? String(object.level) : "",
      fee: isSet(object.fee) ? String(object.fee) : ""
    };
  },

  toJSON(message: QueryActionLevelFeeResponse): unknown {
    const obj: any = {};
    message.action !== undefined && (obj.action = message.action);
    message.level !== undefined && (obj.level = message.level);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeeResponse>, I>>(object: I): QueryActionLevelFeeResponse {
    const message = createBaseQueryActionLevelFeeResponse();
    message.action = object.action ?? "";
    message.level = object.level ?? "";
    message.fee = object.fee ?? "";
    return message;
  }
};

function createBaseQueryActionLevelFeesRequest(): QueryActionLevelFeesRequest {
  return {};
}

export const QueryActionLevelFeesRequest = {
  encode(_: QueryActionLevelFeesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionLevelFeesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActionLevelFeesRequest();
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
    return {};
  },

  toJSON(_: QueryActionLevelFeesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActionLevelFeesRequest>, I>>(_: I): QueryActionLevelFeesRequest {
    const message = createBaseQueryActionLevelFeesRequest();
    return message;
  }
};

function createBaseQueryActionLevelFeesResponse(): QueryActionLevelFeesResponse {
  return {actionLevelFee: []};
}

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
    const message = createBaseQueryActionLevelFeesResponse();
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
    return {
      actionLevelFee: Array.isArray(object?.actionLevelFee) ? object.actionLevelFee.map((e: any) => ActionLevelFee.fromJSON(e)) : []
    };
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
    const message = createBaseQueryActionLevelFeesResponse();
    message.actionLevelFee = object.actionLevelFee?.map((e) => ActionLevelFee.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryCheckFeesRequest(): QueryCheckFeesRequest {
  return {address: "", actions: []};
}

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
    const message = createBaseQueryCheckFeesRequest();
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
    return {
      address: isSet(object.address) ? String(object.address) : "",
      actions: Array.isArray(object?.actions) ? object.actions.map((e: any) => String(e)) : []
    };
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
    const message = createBaseQueryCheckFeesRequest();
    message.address = object.address ?? "";
    message.actions = object.actions?.map((e) => e) || [];
    return message;
  }
};

function createBaseQueryCheckFeesResponse(): QueryCheckFeesResponse {
  return {convertedFee: undefined, sufficientFee: false, sufficientFundForFee: false, costLoadingFee: undefined};
}

export const QueryCheckFeesResponse = {
  encode(message: QueryCheckFeesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.convertedFee !== undefined) {
      Coin.encode(message.convertedFee, writer.uint32(10).fork()).ldelim();
    }
    if (message.sufficientFee === true) {
      writer.uint32(16).bool(message.sufficientFee);
    }
    if (message.sufficientFundForFee === true) {
      writer.uint32(24).bool(message.sufficientFundForFee);
    }
    if (message.costLoadingFee !== undefined) {
      DecCoin.encode(message.costLoadingFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckFeesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.convertedFee = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sufficientFee = reader.bool();
          break;
        case 3:
          message.sufficientFundForFee = reader.bool();
          break;
        case 4:
          message.costLoadingFee = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckFeesResponse {
    return {
      convertedFee: isSet(object.convertedFee) ? Coin.fromJSON(object.convertedFee) : undefined,
      sufficientFee: isSet(object.sufficientFee) ? Boolean(object.sufficientFee) : false,
      sufficientFundForFee: isSet(object.sufficientFundForFee) ? Boolean(object.sufficientFundForFee) : false,
      costLoadingFee: isSet(object.costLoadingFee) ? DecCoin.fromJSON(object.costLoadingFee) : undefined
    };
  },

  toJSON(message: QueryCheckFeesResponse): unknown {
    const obj: any = {};
    message.convertedFee !== undefined && (obj.convertedFee = message.convertedFee ? Coin.toJSON(message.convertedFee) : undefined);
    message.sufficientFee !== undefined && (obj.sufficientFee = message.sufficientFee);
    message.sufficientFundForFee !== undefined && (obj.sufficientFundForFee = message.sufficientFundForFee);
    message.costLoadingFee !== undefined &&
      (obj.costLoadingFee = message.costLoadingFee ? DecCoin.toJSON(message.costLoadingFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckFeesResponse>, I>>(object: I): QueryCheckFeesResponse {
    const message = createBaseQueryCheckFeesResponse();
    message.convertedFee =
      object.convertedFee !== undefined && object.convertedFee !== null ? Coin.fromPartial(object.convertedFee) : undefined;
    message.sufficientFee = object.sufficientFee ?? false;
    message.sufficientFundForFee = object.sufficientFundForFee ?? false;
    message.costLoadingFee =
      object.costLoadingFee !== undefined && object.costLoadingFee !== null ? DecCoin.fromPartial(object.costLoadingFee) : undefined;
    return message;
  }
};

function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {address: ""};
}

export const QueryBalancesRequest = {
  encode(message: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();
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

  fromJSON(object: any): QueryBalancesRequest {
    return {address: isSet(object.address) ? String(object.address) : ""};
  },

  toJSON(message: QueryBalancesRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalancesRequest>, I>>(object: I): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {coins: []};
}

export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.coins) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coins.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalancesResponse {
    return {coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => DecCoin.fromJSON(e)) : []};
  },

  toJSON(message: QueryBalancesResponse): unknown {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBalancesResponse>, I>>(object: I): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.coins = object.coins?.map((e) => DecCoin.fromPartial(e)) || [];
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
  /** Queries a list of balances items. */
  Balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.gentlemint.Query";
    this.rpc = rpc;
    this.ExchangeRate = this.ExchangeRate.bind(this);
    this.LevelFee = this.LevelFee.bind(this);
    this.LevelFees = this.LevelFees.bind(this);
    this.ActionLevelFee = this.ActionLevelFee.bind(this);
    this.ActionLevelFees = this.ActionLevelFees.bind(this);
    this.CheckFees = this.CheckFees.bind(this);
    this.Balances = this.Balances.bind(this);
  }
  ExchangeRate(request: QueryExchangeRateRequest): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ExchangeRate", data);
    return promise.then((data) => QueryExchangeRateResponse.decode(new _m0.Reader(data)));
  }

  LevelFee(request: QueryLevelFeeRequest): Promise<QueryLevelFeeResponse> {
    const data = QueryLevelFeeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LevelFee", data);
    return promise.then((data) => QueryLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  LevelFees(request: QueryLevelFeesRequest): Promise<QueryLevelFeesResponse> {
    const data = QueryLevelFeesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "LevelFees", data);
    return promise.then((data) => QueryLevelFeesResponse.decode(new _m0.Reader(data)));
  }

  ActionLevelFee(request: QueryActionLevelFeeRequest): Promise<QueryActionLevelFeeResponse> {
    const data = QueryActionLevelFeeRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ActionLevelFee", data);
    return promise.then((data) => QueryActionLevelFeeResponse.decode(new _m0.Reader(data)));
  }

  ActionLevelFees(request: QueryActionLevelFeesRequest): Promise<QueryActionLevelFeesResponse> {
    const data = QueryActionLevelFeesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ActionLevelFees", data);
    return promise.then((data) => QueryActionLevelFeesResponse.decode(new _m0.Reader(data)));
  }

  CheckFees(request: QueryCheckFeesRequest): Promise<QueryCheckFeesResponse> {
    const data = QueryCheckFeesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CheckFees", data);
    return promise.then((data) => QueryCheckFeesResponse.decode(new _m0.Reader(data)));
  }

  Balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Balances", data);
    return promise.then((data) => QueryBalancesResponse.decode(new _m0.Reader(data)));
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
