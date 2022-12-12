/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact, Rpc} from "../../helpers";
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
  return {
    creator: "",
    hash: new Uint8Array(),
    UUID: "",
    status: false,
    rate: Long.ZERO
  };
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateAssetResponse>, I>>(_: I): MsgCreateAssetResponse {
    const message = createBaseMsgCreateAssetResponse();
    return message;
  }
};

function createBaseMsgUpdateAsset(): MsgUpdateAsset {
  return {
    creator: "",
    hash: new Uint8Array(),
    UUID: "",
    status: false,
    rate: Long.ZERO
  };
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateAssetResponse>, I>>(_: I): MsgUpdateAssetResponse {
    const message = createBaseMsgUpdateAssetResponse();
    return message;
  }
};

function createBaseMsgDeleteAsset(): MsgDeleteAsset {
  return {
    owner: "",
    UUID: ""
  };
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

  fromPartial<I extends Exact<DeepPartial<MsgDeleteAssetResponse>, I>>(_: I): MsgDeleteAssetResponse {
    const message = createBaseMsgDeleteAssetResponse();
    return message;
  }
};
/** Msg defines the Msg service. */

export interface Msg {
  CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse>;
  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
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
