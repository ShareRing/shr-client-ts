/* eslint-disable */
import {Params} from "./params";
import {Request} from "./request";
import {Batch} from "./batch";
import {Schema} from "./schema";
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.swap";
/** GenesisState defines the swap module's genesis state. */

export interface GenesisState {
  params?: Params;
  requests: Request[];
  requestCount: Long;
  batches: Batch[];
  batchCount: Long;
  schemas: Schema[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    requests: [],
    requestCount: Long.UZERO,
    batches: [],
    batchCount: Long.UZERO,
    schemas: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.requests) {
      Request.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (!message.requestCount.isZero()) {
      writer.uint32(24).uint64(message.requestCount);
    }

    for (const v of message.batches) {
      Batch.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.batchCount.isZero()) {
      writer.uint32(40).uint64(message.batchCount);
    }

    for (const v of message.schemas) {
      Schema.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.requests.push(Request.decode(reader, reader.uint32()));
          break;

        case 3:
          message.requestCount = reader.uint64() as Long;
          break;

        case 4:
          message.batches.push(Batch.decode(reader, reader.uint32()));
          break;

        case 5:
          message.batchCount = reader.uint64() as Long;
          break;

        case 6:
          message.schemas.push(Schema.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.requests = object.requests?.map((e) => Request.fromPartial(e)) || [];
    message.requestCount =
      object.requestCount !== undefined && object.requestCount !== null ? Long.fromValue(object.requestCount) : Long.UZERO;
    message.batches = object.batches?.map((e) => Batch.fromPartial(e)) || [];
    message.batchCount = object.batchCount !== undefined && object.batchCount !== null ? Long.fromValue(object.batchCount) : Long.UZERO;
    message.schemas = object.schemas?.map((e) => Schema.fromPartial(e)) || [];
    return message;
  }
};
