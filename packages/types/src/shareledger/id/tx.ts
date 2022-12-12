/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Rpc} from "../../helpers";
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

function createBaseMsgCreateId(): MsgCreateId {
  return {
    issuerAddress: "",
    backupAddress: "",
    extraData: "",
    id: "",
    ownerAddress: ""
  };
}

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
    const message = createBaseMsgCreateId();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateId>, I>>(object: I): MsgCreateId {
    const message = createBaseMsgCreateId();
    message.issuerAddress = object.issuerAddress ?? "";
    message.backupAddress = object.backupAddress ?? "";
    message.extraData = object.extraData ?? "";
    message.id = object.id ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }
};

function createBaseMsgCreateIdResponse(): MsgCreateIdResponse {
  return {};
}

export const MsgCreateIdResponse = {
  encode(_: MsgCreateIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIdResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateIdResponse>, I>>(_: I): MsgCreateIdResponse {
    const message = createBaseMsgCreateIdResponse();
    return message;
  }
};

function createBaseMsgCreateIds(): MsgCreateIds {
  return {
    issuerAddress: "",
    backupAddress: [],
    extraData: [],
    id: [],
    ownerAddress: []
  };
}

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
    const message = createBaseMsgCreateIds();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateIds>, I>>(object: I): MsgCreateIds {
    const message = createBaseMsgCreateIds();
    message.issuerAddress = object.issuerAddress ?? "";
    message.backupAddress = object.backupAddress?.map((e) => e) || [];
    message.extraData = object.extraData?.map((e) => e) || [];
    message.id = object.id?.map((e) => e) || [];
    message.ownerAddress = object.ownerAddress?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgCreateIdsResponse(): MsgCreateIdsResponse {
  return {};
}

export const MsgCreateIdsResponse = {
  encode(_: MsgCreateIdsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateIdsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateIdsResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateIdsResponse>, I>>(_: I): MsgCreateIdsResponse {
    const message = createBaseMsgCreateIdsResponse();
    return message;
  }
};

function createBaseMsgUpdateId(): MsgUpdateId {
  return {
    issuerAddress: "",
    id: "",
    extraData: ""
  };
}

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
    const message = createBaseMsgUpdateId();

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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateId>, I>>(object: I): MsgUpdateId {
    const message = createBaseMsgUpdateId();
    message.issuerAddress = object.issuerAddress ?? "";
    message.id = object.id ?? "";
    message.extraData = object.extraData ?? "";
    return message;
  }
};

function createBaseMsgUpdateIdResponse(): MsgUpdateIdResponse {
  return {};
}

export const MsgUpdateIdResponse = {
  encode(_: MsgUpdateIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateIdResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateIdResponse>, I>>(_: I): MsgUpdateIdResponse {
    const message = createBaseMsgUpdateIdResponse();
    return message;
  }
};

function createBaseMsgReplaceIdOwner(): MsgReplaceIdOwner {
  return {
    backupAddress: "",
    id: "",
    ownerAddress: ""
  };
}

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
    const message = createBaseMsgReplaceIdOwner();

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

  fromPartial<I extends Exact<DeepPartial<MsgReplaceIdOwner>, I>>(object: I): MsgReplaceIdOwner {
    const message = createBaseMsgReplaceIdOwner();
    message.backupAddress = object.backupAddress ?? "";
    message.id = object.id ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    return message;
  }
};

function createBaseMsgReplaceIdOwnerResponse(): MsgReplaceIdOwnerResponse {
  return {};
}

export const MsgReplaceIdOwnerResponse = {
  encode(_: MsgReplaceIdOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReplaceIdOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReplaceIdOwnerResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgReplaceIdOwnerResponse>, I>>(_: I): MsgReplaceIdOwnerResponse {
    const message = createBaseMsgReplaceIdOwnerResponse();
    return message;
  }
};
/** Msg defines the Msg service. */

export interface Msg {
  CreateId(request: MsgCreateId): Promise<MsgCreateIdResponse>;
  CreateIds(request: MsgCreateIds): Promise<MsgCreateIdsResponse>;
  UpdateId(request: MsgUpdateId): Promise<MsgUpdateIdResponse>;
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
