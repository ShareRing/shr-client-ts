/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Asset} from "../asset/asset";

export const protobufPackage = "shareledger.asset";

export interface QueryAssetByUUIDRequest {
  uuid: string;
}

export interface QueryAssetByUUIDResponse {
  asset?: Asset;
}

const baseQueryAssetByUUIDRequest: object = {uuid: ""};

export const QueryAssetByUUIDRequest = {
  encode(message: QueryAssetByUUIDRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uuid !== "") {
      writer.uint32(10).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetByUUIDRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAssetByUUIDRequest} as QueryAssetByUUIDRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetByUUIDRequest {
    const message = {...baseQueryAssetByUUIDRequest} as QueryAssetByUUIDRequest;
    message.uuid = object.uuid !== undefined && object.uuid !== null ? String(object.uuid) : "";
    return message;
  },

  toJSON(message: QueryAssetByUUIDRequest): unknown {
    const obj: any = {};
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetByUUIDRequest>, I>>(object: I): QueryAssetByUUIDRequest {
    const message = {...baseQueryAssetByUUIDRequest} as QueryAssetByUUIDRequest;
    message.uuid = object.uuid ?? "";
    return message;
  }
};

const baseQueryAssetByUUIDResponse: object = {};

export const QueryAssetByUUIDResponse = {
  encode(message: QueryAssetByUUIDResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAssetByUUIDResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseQueryAssetByUUIDResponse} as QueryAssetByUUIDResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAssetByUUIDResponse {
    const message = {...baseQueryAssetByUUIDResponse} as QueryAssetByUUIDResponse;
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromJSON(object.asset) : undefined;
    return message;
  },

  toJSON(message: QueryAssetByUUIDResponse): unknown {
    const obj: any = {};
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAssetByUUIDResponse>, I>>(object: I): QueryAssetByUUIDResponse {
    const message = {...baseQueryAssetByUUIDResponse} as QueryAssetByUUIDResponse;
    message.asset = object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of assetByUUID items. */
  AssetByUUID(request: QueryAssetByUUIDRequest): Promise<QueryAssetByUUIDResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AssetByUUID = this.AssetByUUID.bind(this);
  }
  AssetByUUID(request: QueryAssetByUUIDRequest): Promise<QueryAssetByUUIDResponse> {
    const data = QueryAssetByUUIDRequest.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Query", "AssetByUUID", data);
    return promise.then((data) => QueryAssetByUUIDResponse.decode(new _m0.Reader(data)));
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
