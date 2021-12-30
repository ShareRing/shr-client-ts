/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.gentlemint";

export interface QueryGetExchangeRateRequest {}

export interface QueryGetExchangeRateResponse {
  rate: number;
}

const baseQueryGetExchangeRateRequest: object = {};

export const QueryGetExchangeRateRequest = {
  encode(_: QueryGetExchangeRateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetExchangeRateRequest} as QueryGetExchangeRateRequest;
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

  fromJSON(_: any): QueryGetExchangeRateRequest {
    const message = {...baseQueryGetExchangeRateRequest} as QueryGetExchangeRateRequest;
    return message;
  },

  toJSON(_: QueryGetExchangeRateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRateRequest>, I>>(_: I): QueryGetExchangeRateRequest {
    const message = {...baseQueryGetExchangeRateRequest} as QueryGetExchangeRateRequest;
    return message;
  }
};

const baseQueryGetExchangeRateResponse: object = {rate: 0};

export const QueryGetExchangeRateResponse = {
  encode(message: QueryGetExchangeRateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== 0) {
      writer.uint32(9).double(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetExchangeRateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryGetExchangeRateResponse} as QueryGetExchangeRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rate = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetExchangeRateResponse {
    const message = {...baseQueryGetExchangeRateResponse} as QueryGetExchangeRateResponse;
    message.rate = object.rate !== undefined && object.rate !== null ? Number(object.rate) : 0;
    return message;
  },

  toJSON(message: QueryGetExchangeRateResponse): unknown {
    const obj: any = {};
    message.rate !== undefined && (obj.rate = message.rate);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetExchangeRateResponse>, I>>(object: I): QueryGetExchangeRateResponse {
    const message = {...baseQueryGetExchangeRateResponse} as QueryGetExchangeRateResponse;
    message.rate = object.rate ?? 0;
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a exchangeRate by index. */
  ExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ExchangeRate = this.ExchangeRate.bind(this);
  }
  ExchangeRate(request: QueryGetExchangeRateRequest): Promise<QueryGetExchangeRateResponse> {
    const data = QueryGetExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.gentlemint.Query", "ExchangeRate", data);
    return promise.then((data) => QueryGetExchangeRateResponse.decode(new _m0.Reader(data)));
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
