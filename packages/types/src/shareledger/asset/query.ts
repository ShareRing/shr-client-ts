/* eslint-disable */
import {Asset} from "./asset";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Rpc} from "../../helpers";
export const protobufPackage = "shareledger.asset";
export interface QueryAssetByUUIDRequest {
  uuid: string;
}
export interface QueryAssetByUUIDResponse {
  asset?: Asset;
}

function createBaseQueryAssetByUUIDRequest(): QueryAssetByUUIDRequest {
  return {
    uuid: ""
  };
}

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
    const message = createBaseQueryAssetByUUIDRequest();

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

  fromPartial<I extends Exact<DeepPartial<QueryAssetByUUIDRequest>, I>>(object: I): QueryAssetByUUIDRequest {
    const message = createBaseQueryAssetByUUIDRequest();
    message.uuid = object.uuid ?? "";
    return message;
  }
};

function createBaseQueryAssetByUUIDResponse(): QueryAssetByUUIDResponse {
  return {
    asset: undefined
  };
}

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
    const message = createBaseQueryAssetByUUIDResponse();

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

  fromPartial<I extends Exact<DeepPartial<QueryAssetByUUIDResponse>, I>>(object: I): QueryAssetByUUIDResponse {
    const message = createBaseQueryAssetByUUIDResponse();
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
