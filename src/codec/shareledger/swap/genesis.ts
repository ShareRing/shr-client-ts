/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Params} from "../../shareledger/swap/params";
import {Id} from "../../shareledger/swap/id";
import {Request} from "../../shareledger/swap/request";
import {Batch} from "../../shareledger/swap/batch";
import {Format} from "../../shareledger/swap/format";

export const protobufPackage = "shareledger.swap";

/** GenesisState defines the swap module's genesis state. */
export interface GenesisState {
  params?: Params;
  idList: Id[];
  requestList: Request[];
  requestCount: Long;
  batchList: Batch[];
  batchCount: Long;
  /** this line is used by starport scaffolding # genesis/proto/state */
  formatList: Format[];
}

const baseGenesisState: object = {requestCount: Long.UZERO, batchCount: Long.UZERO};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.idList) {
      Id.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.requestList) {
      Request.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.requestCount.isZero()) {
      writer.uint32(32).uint64(message.requestCount);
    }
    for (const v of message.batchList) {
      Batch.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (!message.batchCount.isZero()) {
      writer.uint32(48).uint64(message.batchCount);
    }
    for (const v of message.formatList) {
      Format.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseGenesisState} as GenesisState;
    message.idList = [];
    message.requestList = [];
    message.batchList = [];
    message.formatList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.idList.push(Id.decode(reader, reader.uint32()));
          break;
        case 3:
          message.requestList.push(Request.decode(reader, reader.uint32()));
          break;
        case 4:
          message.requestCount = reader.uint64() as Long;
          break;
        case 5:
          message.batchList.push(Batch.decode(reader, reader.uint32()));
          break;
        case 6:
          message.batchCount = reader.uint64() as Long;
          break;
        case 7:
          message.formatList.push(Format.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = {...baseGenesisState} as GenesisState;
    message.params = object.params !== undefined && object.params !== null ? Params.fromJSON(object.params) : undefined;
    message.idList = (object.idList ?? []).map((e: any) => Id.fromJSON(e));
    message.requestList = (object.requestList ?? []).map((e: any) => Request.fromJSON(e));
    message.requestCount =
      object.requestCount !== undefined && object.requestCount !== null ? Long.fromString(object.requestCount) : Long.UZERO;
    message.batchList = (object.batchList ?? []).map((e: any) => Batch.fromJSON(e));
    message.batchCount = object.batchCount !== undefined && object.batchCount !== null ? Long.fromString(object.batchCount) : Long.UZERO;
    message.formatList = (object.formatList ?? []).map((e: any) => Format.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.idList) {
      obj.idList = message.idList.map((e) => (e ? Id.toJSON(e) : undefined));
    } else {
      obj.idList = [];
    }
    if (message.requestList) {
      obj.requestList = message.requestList.map((e) => (e ? Request.toJSON(e) : undefined));
    } else {
      obj.requestList = [];
    }
    message.requestCount !== undefined && (obj.requestCount = (message.requestCount || Long.UZERO).toString());
    if (message.batchList) {
      obj.batchList = message.batchList.map((e) => (e ? Batch.toJSON(e) : undefined));
    } else {
      obj.batchList = [];
    }
    message.batchCount !== undefined && (obj.batchCount = (message.batchCount || Long.UZERO).toString());
    if (message.formatList) {
      obj.formatList = message.formatList.map((e) => (e ? Format.toJSON(e) : undefined));
    } else {
      obj.formatList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = {...baseGenesisState} as GenesisState;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.idList = object.idList?.map((e) => Id.fromPartial(e)) || [];
    message.requestList = object.requestList?.map((e) => Request.fromPartial(e)) || [];
    message.requestCount =
      object.requestCount !== undefined && object.requestCount !== null ? Long.fromValue(object.requestCount) : Long.UZERO;
    message.batchList = object.batchList?.map((e) => Batch.fromPartial(e)) || [];
    message.batchCount = object.batchCount !== undefined && object.batchCount !== null ? Long.fromValue(object.batchCount) : Long.UZERO;
    message.formatList = object.formatList?.map((e) => Format.fromPartial(e)) || [];
    return message;
  }
};

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
