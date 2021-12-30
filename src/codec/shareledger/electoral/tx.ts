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

export interface MsgEnrollIdSigner {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollIdSignerResponse {}

export interface MsgRevokeIdSigner {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeIdSignerResponse {}

export interface MsgEnrollDocIssuer {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollDocIssuerResponse {}

export interface MsgRevokeDocIssuer {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeDocIssuerResponse {}

export interface MsgEnrollAccountOperator {
  creator: string;
  addresses: string[];
}

export interface MsgEnrollAccountOperatorResponse {}

export interface MsgRevokeAccountOperator {
  creator: string;
  addresses: string[];
}

export interface MsgRevokeAccountOperatorResponse {}

const baseMsgEnrollVoter: object = {creator: "", address: ""};

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
    const message = {...baseMsgEnrollVoter} as MsgEnrollVoter;
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
    const message = {...baseMsgEnrollVoter} as MsgEnrollVoter;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: MsgEnrollVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollVoter>, I>>(object: I): MsgEnrollVoter {
    const message = {...baseMsgEnrollVoter} as MsgEnrollVoter;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  }
};

const baseMsgEnrollVoterResponse: object = {};

export const MsgEnrollVoterResponse = {
  encode(_: MsgEnrollVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollVoterResponse} as MsgEnrollVoterResponse;
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
    const message = {...baseMsgEnrollVoterResponse} as MsgEnrollVoterResponse;
    return message;
  },

  toJSON(_: MsgEnrollVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollVoterResponse>, I>>(_: I): MsgEnrollVoterResponse {
    const message = {...baseMsgEnrollVoterResponse} as MsgEnrollVoterResponse;
    return message;
  }
};

const baseMsgRevokeVoter: object = {creator: "", address: ""};

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
    const message = {...baseMsgRevokeVoter} as MsgRevokeVoter;
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
    const message = {...baseMsgRevokeVoter} as MsgRevokeVoter;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.address = object.address !== undefined && object.address !== null ? String(object.address) : "";
    return message;
  },

  toJSON(message: MsgRevokeVoter): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeVoter>, I>>(object: I): MsgRevokeVoter {
    const message = {...baseMsgRevokeVoter} as MsgRevokeVoter;
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  }
};

const baseMsgRevokeVoterResponse: object = {};

export const MsgRevokeVoterResponse = {
  encode(_: MsgRevokeVoterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeVoterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeVoterResponse} as MsgRevokeVoterResponse;
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
    const message = {...baseMsgRevokeVoterResponse} as MsgRevokeVoterResponse;
    return message;
  },

  toJSON(_: MsgRevokeVoterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeVoterResponse>, I>>(_: I): MsgRevokeVoterResponse {
    const message = {...baseMsgRevokeVoterResponse} as MsgRevokeVoterResponse;
    return message;
  }
};

const baseMsgEnrollLoaders: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollLoaders} as MsgEnrollLoaders;
    message.addresses = [];
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
    const message = {...baseMsgEnrollLoaders} as MsgEnrollLoaders;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollLoaders} as MsgEnrollLoaders;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollLoadersResponse: object = {};

export const MsgEnrollLoadersResponse = {
  encode(_: MsgEnrollLoadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollLoadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollLoadersResponse} as MsgEnrollLoadersResponse;
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
    const message = {...baseMsgEnrollLoadersResponse} as MsgEnrollLoadersResponse;
    return message;
  },

  toJSON(_: MsgEnrollLoadersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollLoadersResponse>, I>>(_: I): MsgEnrollLoadersResponse {
    const message = {...baseMsgEnrollLoadersResponse} as MsgEnrollLoadersResponse;
    return message;
  }
};

const baseMsgRevokeLoaders: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeLoaders} as MsgRevokeLoaders;
    message.addresses = [];
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
    const message = {...baseMsgRevokeLoaders} as MsgRevokeLoaders;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeLoaders} as MsgRevokeLoaders;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeLoadersResponse: object = {};

export const MsgRevokeLoadersResponse = {
  encode(_: MsgRevokeLoadersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeLoadersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeLoadersResponse} as MsgRevokeLoadersResponse;
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
    const message = {...baseMsgRevokeLoadersResponse} as MsgRevokeLoadersResponse;
    return message;
  },

  toJSON(_: MsgRevokeLoadersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeLoadersResponse>, I>>(_: I): MsgRevokeLoadersResponse {
    const message = {...baseMsgRevokeLoadersResponse} as MsgRevokeLoadersResponse;
    return message;
  }
};

const baseMsgEnrollIdSigner: object = {creator: "", addresses: ""};

export const MsgEnrollIdSigner = {
  encode(message: MsgEnrollIdSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollIdSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollIdSigner} as MsgEnrollIdSigner;
    message.addresses = [];
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

  fromJSON(object: any): MsgEnrollIdSigner {
    const message = {...baseMsgEnrollIdSigner} as MsgEnrollIdSigner;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgEnrollIdSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollIdSigner>, I>>(object: I): MsgEnrollIdSigner {
    const message = {...baseMsgEnrollIdSigner} as MsgEnrollIdSigner;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollIdSignerResponse: object = {};

export const MsgEnrollIdSignerResponse = {
  encode(_: MsgEnrollIdSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollIdSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollIdSignerResponse} as MsgEnrollIdSignerResponse;
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

  fromJSON(_: any): MsgEnrollIdSignerResponse {
    const message = {...baseMsgEnrollIdSignerResponse} as MsgEnrollIdSignerResponse;
    return message;
  },

  toJSON(_: MsgEnrollIdSignerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollIdSignerResponse>, I>>(_: I): MsgEnrollIdSignerResponse {
    const message = {...baseMsgEnrollIdSignerResponse} as MsgEnrollIdSignerResponse;
    return message;
  }
};

const baseMsgRevokeIdSigner: object = {creator: "", addresses: ""};

export const MsgRevokeIdSigner = {
  encode(message: MsgRevokeIdSigner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeIdSigner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeIdSigner} as MsgRevokeIdSigner;
    message.addresses = [];
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

  fromJSON(object: any): MsgRevokeIdSigner {
    const message = {...baseMsgRevokeIdSigner} as MsgRevokeIdSigner;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgRevokeIdSigner): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeIdSigner>, I>>(object: I): MsgRevokeIdSigner {
    const message = {...baseMsgRevokeIdSigner} as MsgRevokeIdSigner;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeIdSignerResponse: object = {};

export const MsgRevokeIdSignerResponse = {
  encode(_: MsgRevokeIdSignerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeIdSignerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeIdSignerResponse} as MsgRevokeIdSignerResponse;
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

  fromJSON(_: any): MsgRevokeIdSignerResponse {
    const message = {...baseMsgRevokeIdSignerResponse} as MsgRevokeIdSignerResponse;
    return message;
  },

  toJSON(_: MsgRevokeIdSignerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeIdSignerResponse>, I>>(_: I): MsgRevokeIdSignerResponse {
    const message = {...baseMsgRevokeIdSignerResponse} as MsgRevokeIdSignerResponse;
    return message;
  }
};

const baseMsgEnrollDocIssuer: object = {creator: "", addresses: ""};

export const MsgEnrollDocIssuer = {
  encode(message: MsgEnrollDocIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollDocIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollDocIssuer} as MsgEnrollDocIssuer;
    message.addresses = [];
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

  fromJSON(object: any): MsgEnrollDocIssuer {
    const message = {...baseMsgEnrollDocIssuer} as MsgEnrollDocIssuer;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgEnrollDocIssuer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollDocIssuer>, I>>(object: I): MsgEnrollDocIssuer {
    const message = {...baseMsgEnrollDocIssuer} as MsgEnrollDocIssuer;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollDocIssuerResponse: object = {};

export const MsgEnrollDocIssuerResponse = {
  encode(_: MsgEnrollDocIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollDocIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollDocIssuerResponse} as MsgEnrollDocIssuerResponse;
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

  fromJSON(_: any): MsgEnrollDocIssuerResponse {
    const message = {...baseMsgEnrollDocIssuerResponse} as MsgEnrollDocIssuerResponse;
    return message;
  },

  toJSON(_: MsgEnrollDocIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollDocIssuerResponse>, I>>(_: I): MsgEnrollDocIssuerResponse {
    const message = {...baseMsgEnrollDocIssuerResponse} as MsgEnrollDocIssuerResponse;
    return message;
  }
};

const baseMsgRevokeDocIssuer: object = {creator: "", addresses: ""};

export const MsgRevokeDocIssuer = {
  encode(message: MsgRevokeDocIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocIssuer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeDocIssuer} as MsgRevokeDocIssuer;
    message.addresses = [];
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

  fromJSON(object: any): MsgRevokeDocIssuer {
    const message = {...baseMsgRevokeDocIssuer} as MsgRevokeDocIssuer;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgRevokeDocIssuer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocIssuer>, I>>(object: I): MsgRevokeDocIssuer {
    const message = {...baseMsgRevokeDocIssuer} as MsgRevokeDocIssuer;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeDocIssuerResponse: object = {};

export const MsgRevokeDocIssuerResponse = {
  encode(_: MsgRevokeDocIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeDocIssuerResponse} as MsgRevokeDocIssuerResponse;
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

  fromJSON(_: any): MsgRevokeDocIssuerResponse {
    const message = {...baseMsgRevokeDocIssuerResponse} as MsgRevokeDocIssuerResponse;
    return message;
  },

  toJSON(_: MsgRevokeDocIssuerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocIssuerResponse>, I>>(_: I): MsgRevokeDocIssuerResponse {
    const message = {...baseMsgRevokeDocIssuerResponse} as MsgRevokeDocIssuerResponse;
    return message;
  }
};

const baseMsgEnrollAccountOperator: object = {creator: "", addresses: ""};

export const MsgEnrollAccountOperator = {
  encode(message: MsgEnrollAccountOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollAccountOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollAccountOperator} as MsgEnrollAccountOperator;
    message.addresses = [];
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

  fromJSON(object: any): MsgEnrollAccountOperator {
    const message = {...baseMsgEnrollAccountOperator} as MsgEnrollAccountOperator;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgEnrollAccountOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollAccountOperator>, I>>(object: I): MsgEnrollAccountOperator {
    const message = {...baseMsgEnrollAccountOperator} as MsgEnrollAccountOperator;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollAccountOperatorResponse: object = {};

export const MsgEnrollAccountOperatorResponse = {
  encode(_: MsgEnrollAccountOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollAccountOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollAccountOperatorResponse} as MsgEnrollAccountOperatorResponse;
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

  fromJSON(_: any): MsgEnrollAccountOperatorResponse {
    const message = {...baseMsgEnrollAccountOperatorResponse} as MsgEnrollAccountOperatorResponse;
    return message;
  },

  toJSON(_: MsgEnrollAccountOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollAccountOperatorResponse>, I>>(_: I): MsgEnrollAccountOperatorResponse {
    const message = {...baseMsgEnrollAccountOperatorResponse} as MsgEnrollAccountOperatorResponse;
    return message;
  }
};

const baseMsgRevokeAccountOperator: object = {creator: "", addresses: ""};

export const MsgRevokeAccountOperator = {
  encode(message: MsgRevokeAccountOperator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAccountOperator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeAccountOperator} as MsgRevokeAccountOperator;
    message.addresses = [];
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

  fromJSON(object: any): MsgRevokeAccountOperator {
    const message = {...baseMsgRevokeAccountOperator} as MsgRevokeAccountOperator;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgRevokeAccountOperator): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAccountOperator>, I>>(object: I): MsgRevokeAccountOperator {
    const message = {...baseMsgRevokeAccountOperator} as MsgRevokeAccountOperator;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeAccountOperatorResponse: object = {};

export const MsgRevokeAccountOperatorResponse = {
  encode(_: MsgRevokeAccountOperatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAccountOperatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeAccountOperatorResponse} as MsgRevokeAccountOperatorResponse;
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

  fromJSON(_: any): MsgRevokeAccountOperatorResponse {
    const message = {...baseMsgRevokeAccountOperatorResponse} as MsgRevokeAccountOperatorResponse;
    return message;
  },

  toJSON(_: MsgRevokeAccountOperatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAccountOperatorResponse>, I>>(_: I): MsgRevokeAccountOperatorResponse {
    const message = {...baseMsgRevokeAccountOperatorResponse} as MsgRevokeAccountOperatorResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  EnrollVoter(request: MsgEnrollVoter): Promise<MsgEnrollVoterResponse>;
  RevokeVoter(request: MsgRevokeVoter): Promise<MsgRevokeVoterResponse>;
  EnrollLoaders(request: MsgEnrollLoaders): Promise<MsgEnrollLoadersResponse>;
  RevokeLoaders(request: MsgRevokeLoaders): Promise<MsgRevokeLoadersResponse>;
  EnrollIdSigner(request: MsgEnrollIdSigner): Promise<MsgEnrollIdSignerResponse>;
  RevokeIdSigner(request: MsgRevokeIdSigner): Promise<MsgRevokeIdSignerResponse>;
  EnrollDocIssuer(request: MsgEnrollDocIssuer): Promise<MsgEnrollDocIssuerResponse>;
  RevokeDocIssuer(request: MsgRevokeDocIssuer): Promise<MsgRevokeDocIssuerResponse>;
  EnrollAccountOperator(request: MsgEnrollAccountOperator): Promise<MsgEnrollAccountOperatorResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RevokeAccountOperator(request: MsgRevokeAccountOperator): Promise<MsgRevokeAccountOperatorResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EnrollVoter = this.EnrollVoter.bind(this);
    this.RevokeVoter = this.RevokeVoter.bind(this);
    this.EnrollLoaders = this.EnrollLoaders.bind(this);
    this.RevokeLoaders = this.RevokeLoaders.bind(this);
    this.EnrollIdSigner = this.EnrollIdSigner.bind(this);
    this.RevokeIdSigner = this.RevokeIdSigner.bind(this);
    this.EnrollDocIssuer = this.EnrollDocIssuer.bind(this);
    this.RevokeDocIssuer = this.RevokeDocIssuer.bind(this);
    this.EnrollAccountOperator = this.EnrollAccountOperator.bind(this);
    this.RevokeAccountOperator = this.RevokeAccountOperator.bind(this);
  }
  EnrollVoter(request: MsgEnrollVoter): Promise<MsgEnrollVoterResponse> {
    const data = MsgEnrollVoter.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollVoter", data);
    return promise.then((data) => MsgEnrollVoterResponse.decode(new _m0.Reader(data)));
  }

  RevokeVoter(request: MsgRevokeVoter): Promise<MsgRevokeVoterResponse> {
    const data = MsgRevokeVoter.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeVoter", data);
    return promise.then((data) => MsgRevokeVoterResponse.decode(new _m0.Reader(data)));
  }

  EnrollLoaders(request: MsgEnrollLoaders): Promise<MsgEnrollLoadersResponse> {
    const data = MsgEnrollLoaders.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollLoaders", data);
    return promise.then((data) => MsgEnrollLoadersResponse.decode(new _m0.Reader(data)));
  }

  RevokeLoaders(request: MsgRevokeLoaders): Promise<MsgRevokeLoadersResponse> {
    const data = MsgRevokeLoaders.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeLoaders", data);
    return promise.then((data) => MsgRevokeLoadersResponse.decode(new _m0.Reader(data)));
  }

  EnrollIdSigner(request: MsgEnrollIdSigner): Promise<MsgEnrollIdSignerResponse> {
    const data = MsgEnrollIdSigner.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollIdSigner", data);
    return promise.then((data) => MsgEnrollIdSignerResponse.decode(new _m0.Reader(data)));
  }

  RevokeIdSigner(request: MsgRevokeIdSigner): Promise<MsgRevokeIdSignerResponse> {
    const data = MsgRevokeIdSigner.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeIdSigner", data);
    return promise.then((data) => MsgRevokeIdSignerResponse.decode(new _m0.Reader(data)));
  }

  EnrollDocIssuer(request: MsgEnrollDocIssuer): Promise<MsgEnrollDocIssuerResponse> {
    const data = MsgEnrollDocIssuer.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollDocIssuer", data);
    return promise.then((data) => MsgEnrollDocIssuerResponse.decode(new _m0.Reader(data)));
  }

  RevokeDocIssuer(request: MsgRevokeDocIssuer): Promise<MsgRevokeDocIssuerResponse> {
    const data = MsgRevokeDocIssuer.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeDocIssuer", data);
    return promise.then((data) => MsgRevokeDocIssuerResponse.decode(new _m0.Reader(data)));
  }

  EnrollAccountOperator(request: MsgEnrollAccountOperator): Promise<MsgEnrollAccountOperatorResponse> {
    const data = MsgEnrollAccountOperator.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollAccountOperator", data);
    return promise.then((data) => MsgEnrollAccountOperatorResponse.decode(new _m0.Reader(data)));
  }

  RevokeAccountOperator(request: MsgRevokeAccountOperator): Promise<MsgRevokeAccountOperatorResponse> {
    const data = MsgRevokeAccountOperator.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeAccountOperator", data);
    return promise.then((data) => MsgRevokeAccountOperatorResponse.decode(new _m0.Reader(data)));
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
