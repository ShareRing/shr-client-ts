/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.id";

export interface MsgCreateId {
  issuerAddress: string;
  backupAddress: string;
  extraData: string;
  id: string;
  ownerAddress: string;
}

export interface MsgCreateIdResponse {}

export interface MsgCreateIds {
  issuerAddress: string;
  backupAddress: string[];
  extraData: string[];
  id: string[];
  ownerAddress: string[];
}

export interface MsgCreateIdsResponse {}

export interface MsgUpdateId {
  issuerAddress: string;
  id: string;
  extraData: string;
}

export interface MsgUpdateIdResponse {}

export interface MsgReplaceIdOwner {
  backupAddress: string;
  id: string;
  ownerAddress: string;
}

export interface MsgReplaceIdOwnerResponse {}

const baseMsgCreateId: object = {issuerAddress: "", backupAddress: "", extraData: "", id: "", ownerAddress: ""};

export const MsgCreateId = {
  encode(message: MsgCreateId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerAddress !== "") {
      writer.uint32(10).string(message.issuerAddress);
    }
    if (message.backupAddress !== "") {
      writer.uint32(18).string(message.backupAddress);
    }
    if (message.extraData !== "") {
      writer.uint32(26).string(message.extraData);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(42).string(message.ownerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateId} as MsgCreateId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerAddress = reader.string();
          break;
        case 2:
          message.backupAddress = reader.string();
          break;
        case 3:
          message.extraData = reader.string();
          break;
        case 4:
          message.id = reader.string();
          break;
        case 5:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateId {
    const message = {...baseMsgCreateId} as MsgCreateId;
    message.issuerAddress = object.issuerAddress !== undefined && object.issuerAddress !== null ? String(object.issuerAddress) : "";
    message.backupAddress = object.backupAddress !== undefined && object.backupAddress !== null ? String(object.backupAddress) : "";
    message.extraData = object.extraData !== undefined && object.extraData !== null ? String(object.extraData) : "";
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.ownerAddress = object.ownerAddress !== undefined && object.ownerAddress !== null ? String(object.ownerAddress) : "";
    return message;
  },

  toJSON(message: MsgCreateId): unknown {
    const obj: any = {};
    message.issuerAddress !== undefined && (obj.issuerAddress = message.issuerAddress);
    message.backupAddress !== undefined && (obj.backupAddress = message.backupAddress);
    message.extraData !== undefined && (obj.extraData = message.extraData);
    message.id !== undefined && (obj.id = message.id);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateId>, I>>(object: I): MsgCreateId {
    const message = {...baseMsgCreateId} as MsgCreateId;
    message.issuerAddress = object.issuerAddress ?? "";
    message.backupAddress = object.backupAddress ?? "";
    message.extraData = object.extraData ?? "";
    message.id = object.id ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }
};

const baseMsgCreateIdResponse: object = {};

export const MsgCreateIdResponse = {
  encode(_: MsgCreateIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateIdResponse} as MsgCreateIdResponse;
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

  fromJSON(_: any): MsgCreateIdResponse {
    const message = {...baseMsgCreateIdResponse} as MsgCreateIdResponse;
    return message;
  },

  toJSON(_: MsgCreateIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIdResponse>, I>>(_: I): MsgCreateIdResponse {
    const message = {...baseMsgCreateIdResponse} as MsgCreateIdResponse;
    return message;
  }
};

const baseMsgCreateIds: object = {issuerAddress: "", backupAddress: "", extraData: "", id: "", ownerAddress: ""};

export const MsgCreateIds = {
  encode(message: MsgCreateIds, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerAddress !== "") {
      writer.uint32(10).string(message.issuerAddress);
    }
    for (const v of message.backupAddress) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.extraData) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.id) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.ownerAddress) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIds {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateIds} as MsgCreateIds;
    message.backupAddress = [];
    message.extraData = [];
    message.id = [];
    message.ownerAddress = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerAddress = reader.string();
          break;
        case 2:
          message.backupAddress.push(reader.string());
          break;
        case 3:
          message.extraData.push(reader.string());
          break;
        case 4:
          message.id.push(reader.string());
          break;
        case 5:
          message.ownerAddress.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateIds {
    const message = {...baseMsgCreateIds} as MsgCreateIds;
    message.issuerAddress = object.issuerAddress !== undefined && object.issuerAddress !== null ? String(object.issuerAddress) : "";
    message.backupAddress = (object.backupAddress ?? []).map((e: any) => String(e));
    message.extraData = (object.extraData ?? []).map((e: any) => String(e));
    message.id = (object.id ?? []).map((e: any) => String(e));
    message.ownerAddress = (object.ownerAddress ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgCreateIds): unknown {
    const obj: any = {};
    message.issuerAddress !== undefined && (obj.issuerAddress = message.issuerAddress);
    if (message.backupAddress) {
      obj.backupAddress = message.backupAddress.map((e) => e);
    } else {
      obj.backupAddress = [];
    }
    if (message.extraData) {
      obj.extraData = message.extraData.map((e) => e);
    } else {
      obj.extraData = [];
    }
    if (message.id) {
      obj.id = message.id.map((e) => e);
    } else {
      obj.id = [];
    }
    if (message.ownerAddress) {
      obj.ownerAddress = message.ownerAddress.map((e) => e);
    } else {
      obj.ownerAddress = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIds>, I>>(object: I): MsgCreateIds {
    const message = {...baseMsgCreateIds} as MsgCreateIds;
    message.issuerAddress = object.issuerAddress ?? "";
    message.backupAddress = object.backupAddress?.map((e) => e) || [];
    message.extraData = object.extraData?.map((e) => e) || [];
    message.id = object.id?.map((e) => e) || [];
    message.ownerAddress = object.ownerAddress?.map((e) => e) || [];
    return message;
  }
};

const baseMsgCreateIdsResponse: object = {};

export const MsgCreateIdsResponse = {
  encode(_: MsgCreateIdsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateIdsResponse} as MsgCreateIdsResponse;
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

  fromJSON(_: any): MsgCreateIdsResponse {
    const message = {...baseMsgCreateIdsResponse} as MsgCreateIdsResponse;
    return message;
  },

  toJSON(_: MsgCreateIdsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateIdsResponse>, I>>(_: I): MsgCreateIdsResponse {
    const message = {...baseMsgCreateIdsResponse} as MsgCreateIdsResponse;
    return message;
  }
};

const baseMsgUpdateId: object = {issuerAddress: "", id: "", extraData: ""};

export const MsgUpdateId = {
  encode(message: MsgUpdateId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerAddress !== "") {
      writer.uint32(10).string(message.issuerAddress);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.extraData !== "") {
      writer.uint32(26).string(message.extraData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateId {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateId} as MsgUpdateId;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerAddress = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.extraData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateId {
    const message = {...baseMsgUpdateId} as MsgUpdateId;
    message.issuerAddress = object.issuerAddress !== undefined && object.issuerAddress !== null ? String(object.issuerAddress) : "";
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.extraData = object.extraData !== undefined && object.extraData !== null ? String(object.extraData) : "";
    return message;
  },

  toJSON(message: MsgUpdateId): unknown {
    const obj: any = {};
    message.issuerAddress !== undefined && (obj.issuerAddress = message.issuerAddress);
    message.id !== undefined && (obj.id = message.id);
    message.extraData !== undefined && (obj.extraData = message.extraData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateId>, I>>(object: I): MsgUpdateId {
    const message = {...baseMsgUpdateId} as MsgUpdateId;
    message.issuerAddress = object.issuerAddress ?? "";
    message.id = object.id ?? "";
    message.extraData = object.extraData ?? "";
    return message;
  }
};

const baseMsgUpdateIdResponse: object = {};

export const MsgUpdateIdResponse = {
  encode(_: MsgUpdateIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateIdResponse} as MsgUpdateIdResponse;
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

  fromJSON(_: any): MsgUpdateIdResponse {
    const message = {...baseMsgUpdateIdResponse} as MsgUpdateIdResponse;
    return message;
  },

  toJSON(_: MsgUpdateIdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateIdResponse>, I>>(_: I): MsgUpdateIdResponse {
    const message = {...baseMsgUpdateIdResponse} as MsgUpdateIdResponse;
    return message;
  }
};

const baseMsgReplaceIdOwner: object = {backupAddress: "", id: "", ownerAddress: ""};

export const MsgReplaceIdOwner = {
  encode(message: MsgReplaceIdOwner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backupAddress !== "") {
      writer.uint32(10).string(message.backupAddress);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceIdOwner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgReplaceIdOwner} as MsgReplaceIdOwner;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backupAddress = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReplaceIdOwner {
    const message = {...baseMsgReplaceIdOwner} as MsgReplaceIdOwner;
    message.backupAddress = object.backupAddress !== undefined && object.backupAddress !== null ? String(object.backupAddress) : "";
    message.id = object.id !== undefined && object.id !== null ? String(object.id) : "";
    message.ownerAddress = object.ownerAddress !== undefined && object.ownerAddress !== null ? String(object.ownerAddress) : "";
    return message;
  },

  toJSON(message: MsgReplaceIdOwner): unknown {
    const obj: any = {};
    message.backupAddress !== undefined && (obj.backupAddress = message.backupAddress);
    message.id !== undefined && (obj.id = message.id);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReplaceIdOwner>, I>>(object: I): MsgReplaceIdOwner {
    const message = {...baseMsgReplaceIdOwner} as MsgReplaceIdOwner;
    message.backupAddress = object.backupAddress ?? "";
    message.id = object.id ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }
};

const baseMsgReplaceIdOwnerResponse: object = {};

export const MsgReplaceIdOwnerResponse = {
  encode(_: MsgReplaceIdOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceIdOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgReplaceIdOwnerResponse} as MsgReplaceIdOwnerResponse;
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

  fromJSON(_: any): MsgReplaceIdOwnerResponse {
    const message = {...baseMsgReplaceIdOwnerResponse} as MsgReplaceIdOwnerResponse;
    return message;
  },

  toJSON(_: MsgReplaceIdOwnerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReplaceIdOwnerResponse>, I>>(_: I): MsgReplaceIdOwnerResponse {
    const message = {...baseMsgReplaceIdOwnerResponse} as MsgReplaceIdOwnerResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateId(request: MsgCreateId): Promise<MsgCreateIdResponse>;
  CreateIds(request: MsgCreateIds): Promise<MsgCreateIdsResponse>;
  UpdateId(request: MsgUpdateId): Promise<MsgUpdateIdResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ReplaceIdOwner(request: MsgReplaceIdOwner): Promise<MsgReplaceIdOwnerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateId = this.CreateId.bind(this);
    this.CreateIds = this.CreateIds.bind(this);
    this.UpdateId = this.UpdateId.bind(this);
    this.ReplaceIdOwner = this.ReplaceIdOwner.bind(this);
  }
  CreateId(request: MsgCreateId): Promise<MsgCreateIdResponse> {
    const data = MsgCreateId.encode(request).finish();
    const promise = this.rpc.request("shareledger.id.Msg", "CreateId", data);
    return promise.then((data) => MsgCreateIdResponse.decode(new _m0.Reader(data)));
  }

  CreateIds(request: MsgCreateIds): Promise<MsgCreateIdsResponse> {
    const data = MsgCreateIds.encode(request).finish();
    const promise = this.rpc.request("shareledger.id.Msg", "CreateIds", data);
    return promise.then((data) => MsgCreateIdsResponse.decode(new _m0.Reader(data)));
  }

  UpdateId(request: MsgUpdateId): Promise<MsgUpdateIdResponse> {
    const data = MsgUpdateId.encode(request).finish();
    const promise = this.rpc.request("shareledger.id.Msg", "UpdateId", data);
    return promise.then((data) => MsgUpdateIdResponse.decode(new _m0.Reader(data)));
  }

  ReplaceIdOwner(request: MsgReplaceIdOwner): Promise<MsgReplaceIdOwnerResponse> {
    const data = MsgReplaceIdOwner.encode(request).finish();
    const promise = this.rpc.request("shareledger.id.Msg", "ReplaceIdOwner", data);
    return promise.then((data) => MsgReplaceIdOwnerResponse.decode(new _m0.Reader(data)));
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
