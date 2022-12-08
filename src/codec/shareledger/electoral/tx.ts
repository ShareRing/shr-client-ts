/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.electoral";

export interface MsgEnrollVoter {
  creator: string;
  address: string;
}

export interface MsgEnrollVoterResponse {}

export interface MsgRevokeVoter {
  creator: string;
  address: string;
}

export interface MsgRevokeVoterResponse {}

export interface MsgEnrollLoaders {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollLoadersResponse {}

export interface MsgRevokeLoaders {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeLoadersResponse {}

export interface MsgEnrollIdSigners {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollIdSignersResponse {}

export interface MsgRevokeIdSigners {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeIdSignersResponse {}

export interface MsgEnrollDocIssuers {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollDocIssuersResponse {}

export interface MsgRevokeDocIssuers {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeDocIssuersResponse {}

export interface MsgEnrollAccountOperators {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollAccountOperatorsResponse {}

export interface MsgRevokeAccountOperators {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeAccountOperatorsResponse {}

export interface MsgEnrollRelayers {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollRelayersResponse {}

export interface MsgRevokeRelayers {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeRelayersResponse {}

export interface MsgEnrollApprovers {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollApproversResponse {}

export interface MsgRevokeApprovers {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeApproversResponse {}

export interface MsgEnrollSwapManagers {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollSwapManagersResponse {}

export interface MsgRevokeSwapManagers {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeSwapManagersResponse {}

function createBaseMsgEnrollVoter(): MsgEnrollVoter {
  return {creator: "", address: ""};
}

export const MsgEnrollVoter = {
  encode(message: MsgEnrollVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollVoter {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgEnrollVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollVoter>, I>>(object: I): MsgEnrollVoter {
    const message = createBaseMsgEnrollVoter();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseMsgEnrollVoterResponse(): MsgEnrollVoterResponse {
  return {};
}

export const MsgEnrollVoterResponse = {
  encode(_: MsgEnrollVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollVoterResponse();
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

  fromJSON(_: any): MsgEnrollVoterResponse {
    return {};
  },

  toJSON(_: MsgEnrollVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollVoterResponse>, I>>(_: I): MsgEnrollVoterResponse {
    const message = createBaseMsgEnrollVoterResponse();
    return message;
  }
};

function createBaseMsgRevokeVoter(): MsgRevokeVoter {
  return {creator: "", address: ""};
}

export const MsgRevokeVoter = {
  encode(message: MsgRevokeVoter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVoter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeVoter {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgRevokeVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeVoter>, I>>(object: I): MsgRevokeVoter {
    const message = createBaseMsgRevokeVoter();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  }
};

function createBaseMsgRevokeVoterResponse(): MsgRevokeVoterResponse {
  return {};
}

export const MsgRevokeVoterResponse = {
  encode(_: MsgRevokeVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeVoterResponse();
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

  fromJSON(_: any): MsgRevokeVoterResponse {
    return {};
  },

  toJSON(_: MsgRevokeVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeVoterResponse>, I>>(_: I): MsgRevokeVoterResponse {
    const message = createBaseMsgRevokeVoterResponse();
    return message;
  }
};

function createBaseMsgEnrollLoaders(): MsgEnrollLoaders {
  return {creator: "", addresses: []};
}

export const MsgEnrollLoaders = {
  encode(message: MsgEnrollLoaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollLoaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollLoaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollLoaders {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollLoaders): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollLoaders>, I>>(object: I): MsgEnrollLoaders {
    const message = createBaseMsgEnrollLoaders();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollLoadersResponse(): MsgEnrollLoadersResponse {
  return {};
}

export const MsgEnrollLoadersResponse = {
  encode(_: MsgEnrollLoadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollLoadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollLoadersResponse();
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

  fromJSON(_: any): MsgEnrollLoadersResponse {
    return {};
  },

  toJSON(_: MsgEnrollLoadersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollLoadersResponse>, I>>(_: I): MsgEnrollLoadersResponse {
    const message = createBaseMsgEnrollLoadersResponse();
    return message;
  }
};

function createBaseMsgRevokeLoaders(): MsgRevokeLoaders {
  return {creator: "", addresses: []};
}

export const MsgRevokeLoaders = {
  encode(message: MsgRevokeLoaders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeLoaders {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeLoaders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeLoaders {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeLoaders): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeLoaders>, I>>(object: I): MsgRevokeLoaders {
    const message = createBaseMsgRevokeLoaders();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeLoadersResponse(): MsgRevokeLoadersResponse {
  return {};
}

export const MsgRevokeLoadersResponse = {
  encode(_: MsgRevokeLoadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeLoadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeLoadersResponse();
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

  fromJSON(_: any): MsgRevokeLoadersResponse {
    return {};
  },

  toJSON(_: MsgRevokeLoadersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeLoadersResponse>, I>>(_: I): MsgRevokeLoadersResponse {
    const message = createBaseMsgRevokeLoadersResponse();
    return message;
  }
};

function createBaseMsgEnrollIdSigners(): MsgEnrollIdSigners {
  return {creator: "", addresses: []};
}

export const MsgEnrollIdSigners = {
  encode(message: MsgEnrollIdSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollIdSigners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollIdSigners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollIdSigners {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollIdSigners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollIdSigners>, I>>(object: I): MsgEnrollIdSigners {
    const message = createBaseMsgEnrollIdSigners();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollIdSignersResponse(): MsgEnrollIdSignersResponse {
  return {};
}

export const MsgEnrollIdSignersResponse = {
  encode(_: MsgEnrollIdSignersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollIdSignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollIdSignersResponse();
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

  fromJSON(_: any): MsgEnrollIdSignersResponse {
    return {};
  },

  toJSON(_: MsgEnrollIdSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollIdSignersResponse>, I>>(_: I): MsgEnrollIdSignersResponse {
    const message = createBaseMsgEnrollIdSignersResponse();
    return message;
  }
};

function createBaseMsgRevokeIdSigners(): MsgRevokeIdSigners {
  return {creator: "", addresses: []};
}

export const MsgRevokeIdSigners = {
  encode(message: MsgRevokeIdSigners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeIdSigners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeIdSigners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeIdSigners {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeIdSigners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeIdSigners>, I>>(object: I): MsgRevokeIdSigners {
    const message = createBaseMsgRevokeIdSigners();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeIdSignersResponse(): MsgRevokeIdSignersResponse {
  return {};
}

export const MsgRevokeIdSignersResponse = {
  encode(_: MsgRevokeIdSignersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeIdSignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeIdSignersResponse();
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

  fromJSON(_: any): MsgRevokeIdSignersResponse {
    return {};
  },

  toJSON(_: MsgRevokeIdSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeIdSignersResponse>, I>>(_: I): MsgRevokeIdSignersResponse {
    const message = createBaseMsgRevokeIdSignersResponse();
    return message;
  }
};

function createBaseMsgEnrollDocIssuers(): MsgEnrollDocIssuers {
  return {creator: "", addresses: []};
}

export const MsgEnrollDocIssuers = {
  encode(message: MsgEnrollDocIssuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollDocIssuers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollDocIssuers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollDocIssuers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollDocIssuers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollDocIssuers>, I>>(object: I): MsgEnrollDocIssuers {
    const message = createBaseMsgEnrollDocIssuers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollDocIssuersResponse(): MsgEnrollDocIssuersResponse {
  return {};
}

export const MsgEnrollDocIssuersResponse = {
  encode(_: MsgEnrollDocIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollDocIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollDocIssuersResponse();
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

  fromJSON(_: any): MsgEnrollDocIssuersResponse {
    return {};
  },

  toJSON(_: MsgEnrollDocIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollDocIssuersResponse>, I>>(_: I): MsgEnrollDocIssuersResponse {
    const message = createBaseMsgEnrollDocIssuersResponse();
    return message;
  }
};

function createBaseMsgRevokeDocIssuers(): MsgRevokeDocIssuers {
  return {creator: "", addresses: []};
}

export const MsgRevokeDocIssuers = {
  encode(message: MsgRevokeDocIssuers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocIssuers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDocIssuers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeDocIssuers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeDocIssuers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocIssuers>, I>>(object: I): MsgRevokeDocIssuers {
    const message = createBaseMsgRevokeDocIssuers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeDocIssuersResponse(): MsgRevokeDocIssuersResponse {
  return {};
}

export const MsgRevokeDocIssuersResponse = {
  encode(_: MsgRevokeDocIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDocIssuersResponse();
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

  fromJSON(_: any): MsgRevokeDocIssuersResponse {
    return {};
  },

  toJSON(_: MsgRevokeDocIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocIssuersResponse>, I>>(_: I): MsgRevokeDocIssuersResponse {
    const message = createBaseMsgRevokeDocIssuersResponse();
    return message;
  }
};

function createBaseMsgEnrollAccountOperators(): MsgEnrollAccountOperators {
  return {creator: "", addresses: []};
}

export const MsgEnrollAccountOperators = {
  encode(message: MsgEnrollAccountOperators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollAccountOperators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollAccountOperators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollAccountOperators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollAccountOperators): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollAccountOperators>, I>>(object: I): MsgEnrollAccountOperators {
    const message = createBaseMsgEnrollAccountOperators();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollAccountOperatorsResponse(): MsgEnrollAccountOperatorsResponse {
  return {};
}

export const MsgEnrollAccountOperatorsResponse = {
  encode(_: MsgEnrollAccountOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollAccountOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollAccountOperatorsResponse();
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

  fromJSON(_: any): MsgEnrollAccountOperatorsResponse {
    return {};
  },

  toJSON(_: MsgEnrollAccountOperatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollAccountOperatorsResponse>, I>>(_: I): MsgEnrollAccountOperatorsResponse {
    const message = createBaseMsgEnrollAccountOperatorsResponse();
    return message;
  }
};

function createBaseMsgRevokeAccountOperators(): MsgRevokeAccountOperators {
  return {creator: "", addresses: []};
}

export const MsgRevokeAccountOperators = {
  encode(message: MsgRevokeAccountOperators, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAccountOperators {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAccountOperators();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeAccountOperators {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeAccountOperators): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAccountOperators>, I>>(object: I): MsgRevokeAccountOperators {
    const message = createBaseMsgRevokeAccountOperators();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeAccountOperatorsResponse(): MsgRevokeAccountOperatorsResponse {
  return {};
}

export const MsgRevokeAccountOperatorsResponse = {
  encode(_: MsgRevokeAccountOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAccountOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeAccountOperatorsResponse();
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

  fromJSON(_: any): MsgRevokeAccountOperatorsResponse {
    return {};
  },

  toJSON(_: MsgRevokeAccountOperatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAccountOperatorsResponse>, I>>(_: I): MsgRevokeAccountOperatorsResponse {
    const message = createBaseMsgRevokeAccountOperatorsResponse();
    return message;
  }
};

function createBaseMsgEnrollRelayers(): MsgEnrollRelayers {
  return {creator: "", addresses: []};
}

export const MsgEnrollRelayers = {
  encode(message: MsgEnrollRelayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollRelayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollRelayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollRelayers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollRelayers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollRelayers>, I>>(object: I): MsgEnrollRelayers {
    const message = createBaseMsgEnrollRelayers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollRelayersResponse(): MsgEnrollRelayersResponse {
  return {};
}

export const MsgEnrollRelayersResponse = {
  encode(_: MsgEnrollRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollRelayersResponse();
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

  fromJSON(_: any): MsgEnrollRelayersResponse {
    return {};
  },

  toJSON(_: MsgEnrollRelayersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollRelayersResponse>, I>>(_: I): MsgEnrollRelayersResponse {
    const message = createBaseMsgEnrollRelayersResponse();
    return message;
  }
};

function createBaseMsgRevokeRelayers(): MsgRevokeRelayers {
  return {creator: "", addresses: []};
}

export const MsgRevokeRelayers = {
  encode(message: MsgRevokeRelayers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeRelayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeRelayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeRelayers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeRelayers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeRelayers>, I>>(object: I): MsgRevokeRelayers {
    const message = createBaseMsgRevokeRelayers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeRelayersResponse(): MsgRevokeRelayersResponse {
  return {};
}

export const MsgRevokeRelayersResponse = {
  encode(_: MsgRevokeRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeRelayersResponse();
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

  fromJSON(_: any): MsgRevokeRelayersResponse {
    return {};
  },

  toJSON(_: MsgRevokeRelayersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeRelayersResponse>, I>>(_: I): MsgRevokeRelayersResponse {
    const message = createBaseMsgRevokeRelayersResponse();
    return message;
  }
};

function createBaseMsgEnrollApprovers(): MsgEnrollApprovers {
  return {creator: "", addresses: []};
}

export const MsgEnrollApprovers = {
  encode(message: MsgEnrollApprovers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollApprovers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollApprovers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollApprovers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollApprovers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollApprovers>, I>>(object: I): MsgEnrollApprovers {
    const message = createBaseMsgEnrollApprovers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollApproversResponse(): MsgEnrollApproversResponse {
  return {};
}

export const MsgEnrollApproversResponse = {
  encode(_: MsgEnrollApproversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollApproversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollApproversResponse();
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

  fromJSON(_: any): MsgEnrollApproversResponse {
    return {};
  },

  toJSON(_: MsgEnrollApproversResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollApproversResponse>, I>>(_: I): MsgEnrollApproversResponse {
    const message = createBaseMsgEnrollApproversResponse();
    return message;
  }
};

function createBaseMsgRevokeApprovers(): MsgRevokeApprovers {
  return {creator: "", addresses: []};
}

export const MsgRevokeApprovers = {
  encode(message: MsgRevokeApprovers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeApprovers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeApprovers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeApprovers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeApprovers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeApprovers>, I>>(object: I): MsgRevokeApprovers {
    const message = createBaseMsgRevokeApprovers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeApproversResponse(): MsgRevokeApproversResponse {
  return {};
}

export const MsgRevokeApproversResponse = {
  encode(_: MsgRevokeApproversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeApproversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeApproversResponse();
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

  fromJSON(_: any): MsgRevokeApproversResponse {
    return {};
  },

  toJSON(_: MsgRevokeApproversResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeApproversResponse>, I>>(_: I): MsgRevokeApproversResponse {
    const message = createBaseMsgRevokeApproversResponse();
    return message;
  }
};

function createBaseMsgEnrollSwapManagers(): MsgEnrollSwapManagers {
  return {creator: "", addresses: []};
}

export const MsgEnrollSwapManagers = {
  encode(message: MsgEnrollSwapManagers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollSwapManagers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollSwapManagers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEnrollSwapManagers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgEnrollSwapManagers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollSwapManagers>, I>>(object: I): MsgEnrollSwapManagers {
    const message = createBaseMsgEnrollSwapManagers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgEnrollSwapManagersResponse(): MsgEnrollSwapManagersResponse {
  return {};
}

export const MsgEnrollSwapManagersResponse = {
  encode(_: MsgEnrollSwapManagersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollSwapManagersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnrollSwapManagersResponse();
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

  fromJSON(_: any): MsgEnrollSwapManagersResponse {
    return {};
  },

  toJSON(_: MsgEnrollSwapManagersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollSwapManagersResponse>, I>>(_: I): MsgEnrollSwapManagersResponse {
    const message = createBaseMsgEnrollSwapManagersResponse();
    return message;
  }
};

function createBaseMsgRevokeSwapManagers(): MsgRevokeSwapManagers {
  return {creator: "", addresses: []};
}

export const MsgRevokeSwapManagers = {
  encode(message: MsgRevokeSwapManagers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeSwapManagers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeSwapManagers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeSwapManagers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: MsgRevokeSwapManagers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeSwapManagers>, I>>(object: I): MsgRevokeSwapManagers {
    const message = createBaseMsgRevokeSwapManagers();
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgRevokeSwapManagersResponse(): MsgRevokeSwapManagersResponse {
  return {};
}

export const MsgRevokeSwapManagersResponse = {
  encode(_: MsgRevokeSwapManagersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeSwapManagersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeSwapManagersResponse();
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

  fromJSON(_: any): MsgRevokeSwapManagersResponse {
    return {};
  },

  toJSON(_: MsgRevokeSwapManagersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeSwapManagersResponse>, I>>(_: I): MsgRevokeSwapManagersResponse {
    const message = createBaseMsgRevokeSwapManagersResponse();
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  EnrollVoter(request: MsgEnrollVoter): Promise<MsgEnrollVoterResponse>;
  RevokeVoter(request: MsgRevokeVoter): Promise<MsgRevokeVoterResponse>;
  EnrollLoaders(request: MsgEnrollLoaders): Promise<MsgEnrollLoadersResponse>;
  RevokeLoaders(request: MsgRevokeLoaders): Promise<MsgRevokeLoadersResponse>;
  EnrollIdSigners(request: MsgEnrollIdSigners): Promise<MsgEnrollIdSignersResponse>;
  RevokeIdSigners(request: MsgRevokeIdSigners): Promise<MsgRevokeIdSignersResponse>;
  EnrollDocIssuers(request: MsgEnrollDocIssuers): Promise<MsgEnrollDocIssuersResponse>;
  RevokeDocIssuers(request: MsgRevokeDocIssuers): Promise<MsgRevokeDocIssuersResponse>;
  EnrollAccountOperators(request: MsgEnrollAccountOperators): Promise<MsgEnrollAccountOperatorsResponse>;
  RevokeAccountOperators(request: MsgRevokeAccountOperators): Promise<MsgRevokeAccountOperatorsResponse>;
  EnrollRelayers(request: MsgEnrollRelayers): Promise<MsgEnrollRelayersResponse>;
  RevokeRelayers(request: MsgRevokeRelayers): Promise<MsgRevokeRelayersResponse>;
  EnrollApprovers(request: MsgEnrollApprovers): Promise<MsgEnrollApproversResponse>;
  RevokeApprovers(request: MsgRevokeApprovers): Promise<MsgRevokeApproversResponse>;
  EnrollSwapManagers(request: MsgEnrollSwapManagers): Promise<MsgEnrollSwapManagersResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RevokeSwapManagers(request: MsgRevokeSwapManagers): Promise<MsgRevokeSwapManagersResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.electoral.Msg";
    this.rpc = rpc;
    this.EnrollVoter = this.EnrollVoter.bind(this);
    this.RevokeVoter = this.RevokeVoter.bind(this);
    this.EnrollLoaders = this.EnrollLoaders.bind(this);
    this.RevokeLoaders = this.RevokeLoaders.bind(this);
    this.EnrollIdSigners = this.EnrollIdSigners.bind(this);
    this.RevokeIdSigners = this.RevokeIdSigners.bind(this);
    this.EnrollDocIssuers = this.EnrollDocIssuers.bind(this);
    this.RevokeDocIssuers = this.RevokeDocIssuers.bind(this);
    this.EnrollAccountOperators = this.EnrollAccountOperators.bind(this);
    this.RevokeAccountOperators = this.RevokeAccountOperators.bind(this);
    this.EnrollRelayers = this.EnrollRelayers.bind(this);
    this.RevokeRelayers = this.RevokeRelayers.bind(this);
    this.EnrollApprovers = this.EnrollApprovers.bind(this);
    this.RevokeApprovers = this.RevokeApprovers.bind(this);
    this.EnrollSwapManagers = this.EnrollSwapManagers.bind(this);
    this.RevokeSwapManagers = this.RevokeSwapManagers.bind(this);
  }
  EnrollVoter(request: MsgEnrollVoter): Promise<MsgEnrollVoterResponse> {
    const data = MsgEnrollVoter.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollVoter", data);
    return promise.then((data) => MsgEnrollVoterResponse.decode(new _m0.Reader(data)));
  }

  RevokeVoter(request: MsgRevokeVoter): Promise<MsgRevokeVoterResponse> {
    const data = MsgRevokeVoter.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeVoter", data);
    return promise.then((data) => MsgRevokeVoterResponse.decode(new _m0.Reader(data)));
  }

  EnrollLoaders(request: MsgEnrollLoaders): Promise<MsgEnrollLoadersResponse> {
    const data = MsgEnrollLoaders.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollLoaders", data);
    return promise.then((data) => MsgEnrollLoadersResponse.decode(new _m0.Reader(data)));
  }

  RevokeLoaders(request: MsgRevokeLoaders): Promise<MsgRevokeLoadersResponse> {
    const data = MsgRevokeLoaders.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeLoaders", data);
    return promise.then((data) => MsgRevokeLoadersResponse.decode(new _m0.Reader(data)));
  }

  EnrollIdSigners(request: MsgEnrollIdSigners): Promise<MsgEnrollIdSignersResponse> {
    const data = MsgEnrollIdSigners.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollIdSigners", data);
    return promise.then((data) => MsgEnrollIdSignersResponse.decode(new _m0.Reader(data)));
  }

  RevokeIdSigners(request: MsgRevokeIdSigners): Promise<MsgRevokeIdSignersResponse> {
    const data = MsgRevokeIdSigners.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeIdSigners", data);
    return promise.then((data) => MsgRevokeIdSignersResponse.decode(new _m0.Reader(data)));
  }

  EnrollDocIssuers(request: MsgEnrollDocIssuers): Promise<MsgEnrollDocIssuersResponse> {
    const data = MsgEnrollDocIssuers.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollDocIssuers", data);
    return promise.then((data) => MsgEnrollDocIssuersResponse.decode(new _m0.Reader(data)));
  }

  RevokeDocIssuers(request: MsgRevokeDocIssuers): Promise<MsgRevokeDocIssuersResponse> {
    const data = MsgRevokeDocIssuers.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeDocIssuers", data);
    return promise.then((data) => MsgRevokeDocIssuersResponse.decode(new _m0.Reader(data)));
  }

  EnrollAccountOperators(request: MsgEnrollAccountOperators): Promise<MsgEnrollAccountOperatorsResponse> {
    const data = MsgEnrollAccountOperators.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollAccountOperators", data);
    return promise.then((data) => MsgEnrollAccountOperatorsResponse.decode(new _m0.Reader(data)));
  }

  RevokeAccountOperators(request: MsgRevokeAccountOperators): Promise<MsgRevokeAccountOperatorsResponse> {
    const data = MsgRevokeAccountOperators.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeAccountOperators", data);
    return promise.then((data) => MsgRevokeAccountOperatorsResponse.decode(new _m0.Reader(data)));
  }

  EnrollRelayers(request: MsgEnrollRelayers): Promise<MsgEnrollRelayersResponse> {
    const data = MsgEnrollRelayers.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollRelayers", data);
    return promise.then((data) => MsgEnrollRelayersResponse.decode(new _m0.Reader(data)));
  }

  RevokeRelayers(request: MsgRevokeRelayers): Promise<MsgRevokeRelayersResponse> {
    const data = MsgRevokeRelayers.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeRelayers", data);
    return promise.then((data) => MsgRevokeRelayersResponse.decode(new _m0.Reader(data)));
  }

  EnrollApprovers(request: MsgEnrollApprovers): Promise<MsgEnrollApproversResponse> {
    const data = MsgEnrollApprovers.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollApprovers", data);
    return promise.then((data) => MsgEnrollApproversResponse.decode(new _m0.Reader(data)));
  }

  RevokeApprovers(request: MsgRevokeApprovers): Promise<MsgRevokeApproversResponse> {
    const data = MsgRevokeApprovers.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeApprovers", data);
    return promise.then((data) => MsgRevokeApproversResponse.decode(new _m0.Reader(data)));
  }

  EnrollSwapManagers(request: MsgEnrollSwapManagers): Promise<MsgEnrollSwapManagersResponse> {
    const data = MsgEnrollSwapManagers.encode(request).finish();
    const promise = this.rpc.request(this.service, "EnrollSwapManagers", data);
    return promise.then((data) => MsgEnrollSwapManagersResponse.decode(new _m0.Reader(data)));
  }

  RevokeSwapManagers(request: MsgRevokeSwapManagers): Promise<MsgRevokeSwapManagersResponse> {
    const data = MsgRevokeSwapManagers.encode(request).finish();
    const promise = this.rpc.request(this.service, "RevokeSwapManagers", data);
    return promise.then((data) => MsgRevokeSwapManagersResponse.decode(new _m0.Reader(data)));
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & {[K in Exclude<keyof I, KeysOfUnion<P>>]: never};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
