/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.asset";

export interface MsgCreateAsset {
  creator: string;
  hash: Uint8Array;
  UUID: string;
  status: boolean;
  rate: Long;
}

export interface MsgCreateAssetResponse {}

export interface MsgUpdateAsset {
  creator: string;
  hash: Uint8Array;
  UUID: string;
  status: boolean;
  rate: Long;
}

export interface MsgUpdateAssetResponse {}

export interface MsgDeleteAsset {
  owner: string;
  UUID: string;
}

export interface MsgDeleteAssetResponse {}

const baseMsgCreateAsset: object = {creator: "", UUID: "", status: false, rate: Long.ZERO};

export const MsgCreateAsset = {
  encode(message: MsgCreateAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.UUID !== "") {
      writer.uint32(26).string(message.UUID);
    }
    if (message.status === true) {
      writer.uint32(32).bool(message.status);
    }
    if (!message.rate.isZero()) {
      writer.uint32(40).int64(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateAsset} as MsgCreateAsset;
    message.hash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        case 3:
          message.UUID = reader.string();
          break;
        case 4:
          message.status = reader.bool();
          break;
        case 5:
          message.rate = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAsset {
    const message = {...baseMsgCreateAsset} as MsgCreateAsset;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.hash = object.hash !== undefined && object.hash !== null ? bytesFromBase64(object.hash) : new Uint8Array();
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    message.status = object.status !== undefined && object.status !== null ? Boolean(object.status) : false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromString(object.rate) : Long.ZERO;
    return message;
  },

  toJSON(message: MsgCreateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.status !== undefined && (obj.status = message.status);
    message.rate !== undefined && (obj.rate = (message.rate || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAsset>, I>>(object: I): MsgCreateAsset {
    const message = {...baseMsgCreateAsset} as MsgCreateAsset;
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

const baseMsgCreateAssetResponse: object = {};

export const MsgCreateAssetResponse = {
  encode(_: MsgCreateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateAssetResponse} as MsgCreateAssetResponse;
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

  fromJSON(_: any): MsgCreateAssetResponse {
    const message = {...baseMsgCreateAssetResponse} as MsgCreateAssetResponse;
    return message;
  },

  toJSON(_: MsgCreateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAssetResponse>, I>>(_: I): MsgCreateAssetResponse {
    const message = {...baseMsgCreateAssetResponse} as MsgCreateAssetResponse;
    return message;
  }
};

const baseMsgUpdateAsset: object = {creator: "", UUID: "", status: false, rate: Long.ZERO};

export const MsgUpdateAsset = {
  encode(message: MsgUpdateAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    if (message.UUID !== "") {
      writer.uint32(26).string(message.UUID);
    }
    if (message.status === true) {
      writer.uint32(32).bool(message.status);
    }
    if (!message.rate.isZero()) {
      writer.uint32(40).int64(message.rate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateAsset} as MsgUpdateAsset;
    message.hash = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        case 3:
          message.UUID = reader.string();
          break;
        case 4:
          message.status = reader.bool();
          break;
        case 5:
          message.rate = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateAsset {
    const message = {...baseMsgUpdateAsset} as MsgUpdateAsset;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.hash = object.hash !== undefined && object.hash !== null ? bytesFromBase64(object.hash) : new Uint8Array();
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    message.status = object.status !== undefined && object.status !== null ? Boolean(object.status) : false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromString(object.rate) : Long.ZERO;
    return message;
  },

  toJSON(message: MsgUpdateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.status !== undefined && (obj.status = message.status);
    message.rate !== undefined && (obj.rate = (message.rate || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAsset>, I>>(object: I): MsgUpdateAsset {
    const message = {...baseMsgUpdateAsset} as MsgUpdateAsset;
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

const baseMsgUpdateAssetResponse: object = {};

export const MsgUpdateAssetResponse = {
  encode(_: MsgUpdateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateAssetResponse} as MsgUpdateAssetResponse;
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

  fromJSON(_: any): MsgUpdateAssetResponse {
    const message = {...baseMsgUpdateAssetResponse} as MsgUpdateAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAssetResponse>, I>>(_: I): MsgUpdateAssetResponse {
    const message = {...baseMsgUpdateAssetResponse} as MsgUpdateAssetResponse;
    return message;
  }
};

const baseMsgDeleteAsset: object = {owner: "", UUID: ""};

export const MsgDeleteAsset = {
  encode(message: MsgDeleteAsset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.UUID !== "") {
      writer.uint32(18).string(message.UUID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAsset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteAsset} as MsgDeleteAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.UUID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAsset {
    const message = {...baseMsgDeleteAsset} as MsgDeleteAsset;
    message.owner = object.owner !== undefined && object.owner !== null ? String(object.owner) : "";
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    return message;
  },

  toJSON(message: MsgDeleteAsset): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.UUID !== undefined && (obj.UUID = message.UUID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAsset>, I>>(object: I): MsgDeleteAsset {
    const message = {...baseMsgDeleteAsset} as MsgDeleteAsset;
    message.owner = object.owner ?? "";
    message.UUID = object.UUID ?? "";
    return message;
  }
};

const baseMsgDeleteAssetResponse: object = {};

export const MsgDeleteAssetResponse = {
  encode(_: MsgDeleteAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteAssetResponse} as MsgDeleteAssetResponse;
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

  fromJSON(_: any): MsgDeleteAssetResponse {
    const message = {...baseMsgDeleteAssetResponse} as MsgDeleteAssetResponse;
    return message;
  },

  toJSON(_: MsgDeleteAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAssetResponse>, I>>(_: I): MsgDeleteAssetResponse {
    const message = {...baseMsgDeleteAssetResponse} as MsgDeleteAssetResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse>;
  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAsset = this.CreateAsset.bind(this);
    this.UpdateAsset = this.UpdateAsset.bind(this);
    this.DeleteAsset = this.DeleteAsset.bind(this);
  }
  CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse> {
    const data = MsgCreateAsset.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Msg", "CreateAsset", data);
    return promise.then((data) => MsgCreateAssetResponse.decode(new _m0.Reader(data)));
  }

  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAsset.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Msg", "UpdateAsset", data);
    return promise.then((data) => MsgUpdateAssetResponse.decode(new _m0.Reader(data)));
  }

  DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse> {
    const data = MsgDeleteAsset.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Msg", "DeleteAsset", data);
    return promise.then((data) => MsgDeleteAssetResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
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
