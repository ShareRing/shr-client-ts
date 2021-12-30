/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.asset";

export interface MsgCreate {
  creator: string;
  hash: Uint8Array;
  UUID: string;
  status: boolean;
  rate: Long;
}

export interface MsgCreateResponse {}

export interface MsgUpdate {
  creator: string;
  hash: Uint8Array;
  UUID: string;
  status: boolean;
  rate: Long;
}

export interface MsgUpdateResponse {}

export interface MsgDelete {
  owner: string;
  UUID: string;
}

export interface MsgDeleteResponse {}

const baseMsgCreate: object = {creator: "", UUID: "", status: false, rate: Long.ZERO};

export const MsgCreate = {
  encode(message: MsgCreate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreate} as MsgCreate;
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

  fromJSON(object: any): MsgCreate {
    const message = {...baseMsgCreate} as MsgCreate;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.hash = object.hash !== undefined && object.hash !== null ? bytesFromBase64(object.hash) : new Uint8Array();
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    message.status = object.status !== undefined && object.status !== null ? Boolean(object.status) : false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromString(object.rate) : Long.ZERO;
    return message;
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.status !== undefined && (obj.status = message.status);
    message.rate !== undefined && (obj.rate = (message.rate || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreate>, I>>(object: I): MsgCreate {
    const message = {...baseMsgCreate} as MsgCreate;
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

const baseMsgCreateResponse: object = {};

export const MsgCreateResponse = {
  encode(_: MsgCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateResponse} as MsgCreateResponse;
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

  fromJSON(_: any): MsgCreateResponse {
    const message = {...baseMsgCreateResponse} as MsgCreateResponse;
    return message;
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResponse>, I>>(_: I): MsgCreateResponse {
    const message = {...baseMsgCreateResponse} as MsgCreateResponse;
    return message;
  }
};

const baseMsgUpdate: object = {creator: "", UUID: "", status: false, rate: Long.ZERO};

export const MsgUpdate = {
  encode(message: MsgUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdate} as MsgUpdate;
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

  fromJSON(object: any): MsgUpdate {
    const message = {...baseMsgUpdate} as MsgUpdate;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.hash = object.hash !== undefined && object.hash !== null ? bytesFromBase64(object.hash) : new Uint8Array();
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    message.status = object.status !== undefined && object.status !== null ? Boolean(object.status) : false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromString(object.rate) : Long.ZERO;
    return message;
  },

  toJSON(message: MsgUpdate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.UUID !== undefined && (obj.UUID = message.UUID);
    message.status !== undefined && (obj.status = message.status);
    message.rate !== undefined && (obj.rate = (message.rate || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdate>, I>>(object: I): MsgUpdate {
    const message = {...baseMsgUpdate} as MsgUpdate;
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};

const baseMsgUpdateResponse: object = {};

export const MsgUpdateResponse = {
  encode(_: MsgUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateResponse} as MsgUpdateResponse;
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

  fromJSON(_: any): MsgUpdateResponse {
    const message = {...baseMsgUpdateResponse} as MsgUpdateResponse;
    return message;
  },

  toJSON(_: MsgUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateResponse>, I>>(_: I): MsgUpdateResponse {
    const message = {...baseMsgUpdateResponse} as MsgUpdateResponse;
    return message;
  }
};

const baseMsgDelete: object = {owner: "", UUID: ""};

export const MsgDelete = {
  encode(message: MsgDelete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.UUID !== "") {
      writer.uint32(18).string(message.UUID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDelete} as MsgDelete;
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

  fromJSON(object: any): MsgDelete {
    const message = {...baseMsgDelete} as MsgDelete;
    message.owner = object.owner !== undefined && object.owner !== null ? String(object.owner) : "";
    message.UUID = object.UUID !== undefined && object.UUID !== null ? String(object.UUID) : "";
    return message;
  },

  toJSON(message: MsgDelete): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.UUID !== undefined && (obj.UUID = message.UUID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelete>, I>>(object: I): MsgDelete {
    const message = {...baseMsgDelete} as MsgDelete;
    message.owner = object.owner ?? "";
    message.UUID = object.UUID ?? "";
    return message;
  }
};

const baseMsgDeleteResponse: object = {};

export const MsgDeleteResponse = {
  encode(_: MsgDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgDeleteResponse} as MsgDeleteResponse;
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

  fromJSON(_: any): MsgDeleteResponse {
    const message = {...baseMsgDeleteResponse} as MsgDeleteResponse;
    return message;
  },

  toJSON(_: MsgDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteResponse>, I>>(_: I): MsgDeleteResponse {
    const message = {...baseMsgDeleteResponse} as MsgDeleteResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  Update(request: MsgUpdate): Promise<MsgUpdateResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  Delete(request: MsgDelete): Promise<MsgDeleteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Update = this.Update.bind(this);
    this.Delete = this.Delete.bind(this);
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Msg", "Create", data);
    return promise.then((data) => MsgCreateResponse.decode(new _m0.Reader(data)));
  }

  Update(request: MsgUpdate): Promise<MsgUpdateResponse> {
    const data = MsgUpdate.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Msg", "Update", data);
    return promise.then((data) => MsgUpdateResponse.decode(new _m0.Reader(data)));
  }

  Delete(request: MsgDelete): Promise<MsgDeleteResponse> {
    const data = MsgDelete.encode(request).finish();
    const promise = this.rpc.request("shareledger.asset.Msg", "Delete", data);
    return promise.then((data) => MsgDeleteResponse.decode(new _m0.Reader(data)));
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
