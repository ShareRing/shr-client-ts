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

function createBaseMsgCreateAsset(): MsgCreateAsset {
  return {creator: "", hash: new Uint8Array(), UUID: "", status: false, rate: Long.ZERO};
}

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
    const message = createBaseMsgCreateAsset();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      UUID: isSet(object.UUID) ? String(object.UUID) : "",
      status: isSet(object.status) ? Boolean(object.status) : false,
      rate: isSet(object.rate) ? Long.fromValue(object.rate) : Long.ZERO
    };
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
    const message = createBaseMsgCreateAsset();
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

function createBaseMsgCreateAssetResponse(): MsgCreateAssetResponse {
  return {};
}

export const MsgCreateAssetResponse = {
  encode(_: MsgCreateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAssetResponse();
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
    return {};
  },

  toJSON(_: MsgCreateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAssetResponse>, I>>(_: I): MsgCreateAssetResponse {
    const message = createBaseMsgCreateAssetResponse();
    return message;
  }
};

function createBaseMsgUpdateAsset(): MsgUpdateAsset {
  return {creator: "", hash: new Uint8Array(), UUID: "", status: false, rate: Long.ZERO};
}

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
    const message = createBaseMsgUpdateAsset();
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
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      UUID: isSet(object.UUID) ? String(object.UUID) : "",
      status: isSet(object.status) ? Boolean(object.status) : false,
      rate: isSet(object.rate) ? Long.fromValue(object.rate) : Long.ZERO
    };
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
    const message = createBaseMsgUpdateAsset();
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

function createBaseMsgUpdateAssetResponse(): MsgUpdateAssetResponse {
  return {};
}

export const MsgUpdateAssetResponse = {
  encode(_: MsgUpdateAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateAssetResponse();
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
    return {};
  },

  toJSON(_: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAssetResponse>, I>>(_: I): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  }
};

function createBaseMsgDeleteAsset(): MsgDeleteAsset {
  return {owner: "", UUID: ""};
}

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
    const message = createBaseMsgDeleteAsset();
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
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      UUID: isSet(object.UUID) ? String(object.UUID) : ""
    };
  },

  toJSON(message: MsgDeleteAsset): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.UUID !== undefined && (obj.UUID = message.UUID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAsset>, I>>(object: I): MsgDeleteAsset {
    const message = createBaseMsgDeleteAsset();
    message.owner = object.owner ?? "";
    message.UUID = object.UUID ?? "";
    return message;
  }
};

function createBaseMsgDeleteAssetResponse(): MsgDeleteAssetResponse {
  return {};
}

export const MsgDeleteAssetResponse = {
  encode(_: MsgDeleteAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteAssetResponse();
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
    return {};
  },

  toJSON(_: MsgDeleteAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAssetResponse>, I>>(_: I): MsgDeleteAssetResponse {
    const message = createBaseMsgDeleteAssetResponse();
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
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.asset.Msg";
    this.rpc = rpc;
    this.CreateAsset = this.CreateAsset.bind(this);
    this.UpdateAsset = this.UpdateAsset.bind(this);
    this.DeleteAsset = this.DeleteAsset.bind(this);
  }
  CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse> {
    const data = MsgCreateAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateAsset", data);
    return promise.then((data) => MsgCreateAssetResponse.decode(new _m0.Reader(data)));
  }

  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateAsset", data);
    return promise.then((data) => MsgUpdateAssetResponse.decode(new _m0.Reader(data)));
  }

  DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse> {
    const data = MsgDeleteAsset.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeleteAsset", data);
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
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
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
