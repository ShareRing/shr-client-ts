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

const baseMsgEnrollIdSigners: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollIdSigners} as MsgEnrollIdSigners;
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

  fromJSON(object: any): MsgEnrollIdSigners {
    const message = {...baseMsgEnrollIdSigners} as MsgEnrollIdSigners;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollIdSigners} as MsgEnrollIdSigners;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollIdSignersResponse: object = {};

export const MsgEnrollIdSignersResponse = {
  encode(_: MsgEnrollIdSignersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollIdSignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollIdSignersResponse} as MsgEnrollIdSignersResponse;
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
    const message = {...baseMsgEnrollIdSignersResponse} as MsgEnrollIdSignersResponse;
    return message;
  },

  toJSON(_: MsgEnrollIdSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollIdSignersResponse>, I>>(_: I): MsgEnrollIdSignersResponse {
    const message = {...baseMsgEnrollIdSignersResponse} as MsgEnrollIdSignersResponse;
    return message;
  }
};

const baseMsgRevokeIdSigners: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeIdSigners} as MsgRevokeIdSigners;
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

  fromJSON(object: any): MsgRevokeIdSigners {
    const message = {...baseMsgRevokeIdSigners} as MsgRevokeIdSigners;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeIdSigners} as MsgRevokeIdSigners;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeIdSignersResponse: object = {};

export const MsgRevokeIdSignersResponse = {
  encode(_: MsgRevokeIdSignersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeIdSignersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeIdSignersResponse} as MsgRevokeIdSignersResponse;
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
    const message = {...baseMsgRevokeIdSignersResponse} as MsgRevokeIdSignersResponse;
    return message;
  },

  toJSON(_: MsgRevokeIdSignersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeIdSignersResponse>, I>>(_: I): MsgRevokeIdSignersResponse {
    const message = {...baseMsgRevokeIdSignersResponse} as MsgRevokeIdSignersResponse;
    return message;
  }
};

const baseMsgEnrollDocIssuers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollDocIssuers} as MsgEnrollDocIssuers;
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

  fromJSON(object: any): MsgEnrollDocIssuers {
    const message = {...baseMsgEnrollDocIssuers} as MsgEnrollDocIssuers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollDocIssuers} as MsgEnrollDocIssuers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollDocIssuersResponse: object = {};

export const MsgEnrollDocIssuersResponse = {
  encode(_: MsgEnrollDocIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollDocIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollDocIssuersResponse} as MsgEnrollDocIssuersResponse;
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
    const message = {...baseMsgEnrollDocIssuersResponse} as MsgEnrollDocIssuersResponse;
    return message;
  },

  toJSON(_: MsgEnrollDocIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollDocIssuersResponse>, I>>(_: I): MsgEnrollDocIssuersResponse {
    const message = {...baseMsgEnrollDocIssuersResponse} as MsgEnrollDocIssuersResponse;
    return message;
  }
};

const baseMsgRevokeDocIssuers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeDocIssuers} as MsgRevokeDocIssuers;
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

  fromJSON(object: any): MsgRevokeDocIssuers {
    const message = {...baseMsgRevokeDocIssuers} as MsgRevokeDocIssuers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeDocIssuers} as MsgRevokeDocIssuers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeDocIssuersResponse: object = {};

export const MsgRevokeDocIssuersResponse = {
  encode(_: MsgRevokeDocIssuersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocIssuersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeDocIssuersResponse} as MsgRevokeDocIssuersResponse;
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
    const message = {...baseMsgRevokeDocIssuersResponse} as MsgRevokeDocIssuersResponse;
    return message;
  },

  toJSON(_: MsgRevokeDocIssuersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocIssuersResponse>, I>>(_: I): MsgRevokeDocIssuersResponse {
    const message = {...baseMsgRevokeDocIssuersResponse} as MsgRevokeDocIssuersResponse;
    return message;
  }
};

const baseMsgEnrollAccountOperators: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollAccountOperators} as MsgEnrollAccountOperators;
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

  fromJSON(object: any): MsgEnrollAccountOperators {
    const message = {...baseMsgEnrollAccountOperators} as MsgEnrollAccountOperators;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollAccountOperators} as MsgEnrollAccountOperators;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollAccountOperatorsResponse: object = {};

export const MsgEnrollAccountOperatorsResponse = {
  encode(_: MsgEnrollAccountOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollAccountOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollAccountOperatorsResponse} as MsgEnrollAccountOperatorsResponse;
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
    const message = {...baseMsgEnrollAccountOperatorsResponse} as MsgEnrollAccountOperatorsResponse;
    return message;
  },

  toJSON(_: MsgEnrollAccountOperatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollAccountOperatorsResponse>, I>>(_: I): MsgEnrollAccountOperatorsResponse {
    const message = {...baseMsgEnrollAccountOperatorsResponse} as MsgEnrollAccountOperatorsResponse;
    return message;
  }
};

const baseMsgRevokeAccountOperators: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeAccountOperators} as MsgRevokeAccountOperators;
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

  fromJSON(object: any): MsgRevokeAccountOperators {
    const message = {...baseMsgRevokeAccountOperators} as MsgRevokeAccountOperators;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeAccountOperators} as MsgRevokeAccountOperators;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeAccountOperatorsResponse: object = {};

export const MsgRevokeAccountOperatorsResponse = {
  encode(_: MsgRevokeAccountOperatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAccountOperatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeAccountOperatorsResponse} as MsgRevokeAccountOperatorsResponse;
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
    const message = {...baseMsgRevokeAccountOperatorsResponse} as MsgRevokeAccountOperatorsResponse;
    return message;
  },

  toJSON(_: MsgRevokeAccountOperatorsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeAccountOperatorsResponse>, I>>(_: I): MsgRevokeAccountOperatorsResponse {
    const message = {...baseMsgRevokeAccountOperatorsResponse} as MsgRevokeAccountOperatorsResponse;
    return message;
  }
};

const baseMsgEnrollRelayers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollRelayers} as MsgEnrollRelayers;
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

  fromJSON(object: any): MsgEnrollRelayers {
    const message = {...baseMsgEnrollRelayers} as MsgEnrollRelayers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollRelayers} as MsgEnrollRelayers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollRelayersResponse: object = {};

export const MsgEnrollRelayersResponse = {
  encode(_: MsgEnrollRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollRelayersResponse} as MsgEnrollRelayersResponse;
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
    const message = {...baseMsgEnrollRelayersResponse} as MsgEnrollRelayersResponse;
    return message;
  },

  toJSON(_: MsgEnrollRelayersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollRelayersResponse>, I>>(_: I): MsgEnrollRelayersResponse {
    const message = {...baseMsgEnrollRelayersResponse} as MsgEnrollRelayersResponse;
    return message;
  }
};

const baseMsgRevokeRelayers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeRelayers} as MsgRevokeRelayers;
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

  fromJSON(object: any): MsgRevokeRelayers {
    const message = {...baseMsgRevokeRelayers} as MsgRevokeRelayers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeRelayers} as MsgRevokeRelayers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeRelayersResponse: object = {};

export const MsgRevokeRelayersResponse = {
  encode(_: MsgRevokeRelayersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeRelayersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeRelayersResponse} as MsgRevokeRelayersResponse;
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
    const message = {...baseMsgRevokeRelayersResponse} as MsgRevokeRelayersResponse;
    return message;
  },

  toJSON(_: MsgRevokeRelayersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeRelayersResponse>, I>>(_: I): MsgRevokeRelayersResponse {
    const message = {...baseMsgRevokeRelayersResponse} as MsgRevokeRelayersResponse;
    return message;
  }
};

const baseMsgEnrollApprovers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollApprovers} as MsgEnrollApprovers;
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

  fromJSON(object: any): MsgEnrollApprovers {
    const message = {...baseMsgEnrollApprovers} as MsgEnrollApprovers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollApprovers} as MsgEnrollApprovers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollApproversResponse: object = {};

export const MsgEnrollApproversResponse = {
  encode(_: MsgEnrollApproversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollApproversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollApproversResponse} as MsgEnrollApproversResponse;
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
    const message = {...baseMsgEnrollApproversResponse} as MsgEnrollApproversResponse;
    return message;
  },

  toJSON(_: MsgEnrollApproversResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollApproversResponse>, I>>(_: I): MsgEnrollApproversResponse {
    const message = {...baseMsgEnrollApproversResponse} as MsgEnrollApproversResponse;
    return message;
  }
};

const baseMsgRevokeApprovers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeApprovers} as MsgRevokeApprovers;
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

  fromJSON(object: any): MsgRevokeApprovers {
    const message = {...baseMsgRevokeApprovers} as MsgRevokeApprovers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeApprovers} as MsgRevokeApprovers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeApproversResponse: object = {};

export const MsgRevokeApproversResponse = {
  encode(_: MsgRevokeApproversResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeApproversResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeApproversResponse} as MsgRevokeApproversResponse;
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
    const message = {...baseMsgRevokeApproversResponse} as MsgRevokeApproversResponse;
    return message;
  },

  toJSON(_: MsgRevokeApproversResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeApproversResponse>, I>>(_: I): MsgRevokeApproversResponse {
    const message = {...baseMsgRevokeApproversResponse} as MsgRevokeApproversResponse;
    return message;
  }
};

const baseMsgEnrollSwapManagers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgEnrollSwapManagers} as MsgEnrollSwapManagers;
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

  fromJSON(object: any): MsgEnrollSwapManagers {
    const message = {...baseMsgEnrollSwapManagers} as MsgEnrollSwapManagers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgEnrollSwapManagers} as MsgEnrollSwapManagers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgEnrollSwapManagersResponse: object = {};

export const MsgEnrollSwapManagersResponse = {
  encode(_: MsgEnrollSwapManagersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnrollSwapManagersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgEnrollSwapManagersResponse} as MsgEnrollSwapManagersResponse;
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
    const message = {...baseMsgEnrollSwapManagersResponse} as MsgEnrollSwapManagersResponse;
    return message;
  },

  toJSON(_: MsgEnrollSwapManagersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEnrollSwapManagersResponse>, I>>(_: I): MsgEnrollSwapManagersResponse {
    const message = {...baseMsgEnrollSwapManagersResponse} as MsgEnrollSwapManagersResponse;
    return message;
  }
};

const baseMsgRevokeSwapManagers: object = {creator: "", addresses: ""};

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
    const message = {...baseMsgRevokeSwapManagers} as MsgRevokeSwapManagers;
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

  fromJSON(object: any): MsgRevokeSwapManagers {
    const message = {...baseMsgRevokeSwapManagers} as MsgRevokeSwapManagers;
    message.creator = object.creator !== undefined && object.creator !== null ? String(object.creator) : "";
    message.addresses = (object.addresses ?? []).map((e: any) => String(e));
    return message;
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
    const message = {...baseMsgRevokeSwapManagers} as MsgRevokeSwapManagers;
    message.creator = object.creator ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  }
};

const baseMsgRevokeSwapManagersResponse: object = {};

export const MsgRevokeSwapManagersResponse = {
  encode(_: MsgRevokeSwapManagersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeSwapManagersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeSwapManagersResponse} as MsgRevokeSwapManagersResponse;
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
    const message = {...baseMsgRevokeSwapManagersResponse} as MsgRevokeSwapManagersResponse;
    return message;
  },

  toJSON(_: MsgRevokeSwapManagersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeSwapManagersResponse>, I>>(_: I): MsgRevokeSwapManagersResponse {
    const message = {...baseMsgRevokeSwapManagersResponse} as MsgRevokeSwapManagersResponse;
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
  constructor(rpc: Rpc) {
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

  EnrollIdSigners(request: MsgEnrollIdSigners): Promise<MsgEnrollIdSignersResponse> {
    const data = MsgEnrollIdSigners.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollIdSigners", data);
    return promise.then((data) => MsgEnrollIdSignersResponse.decode(new _m0.Reader(data)));
  }

  RevokeIdSigners(request: MsgRevokeIdSigners): Promise<MsgRevokeIdSignersResponse> {
    const data = MsgRevokeIdSigners.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeIdSigners", data);
    return promise.then((data) => MsgRevokeIdSignersResponse.decode(new _m0.Reader(data)));
  }

  EnrollDocIssuers(request: MsgEnrollDocIssuers): Promise<MsgEnrollDocIssuersResponse> {
    const data = MsgEnrollDocIssuers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollDocIssuers", data);
    return promise.then((data) => MsgEnrollDocIssuersResponse.decode(new _m0.Reader(data)));
  }

  RevokeDocIssuers(request: MsgRevokeDocIssuers): Promise<MsgRevokeDocIssuersResponse> {
    const data = MsgRevokeDocIssuers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeDocIssuers", data);
    return promise.then((data) => MsgRevokeDocIssuersResponse.decode(new _m0.Reader(data)));
  }

  EnrollAccountOperators(request: MsgEnrollAccountOperators): Promise<MsgEnrollAccountOperatorsResponse> {
    const data = MsgEnrollAccountOperators.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollAccountOperators", data);
    return promise.then((data) => MsgEnrollAccountOperatorsResponse.decode(new _m0.Reader(data)));
  }

  RevokeAccountOperators(request: MsgRevokeAccountOperators): Promise<MsgRevokeAccountOperatorsResponse> {
    const data = MsgRevokeAccountOperators.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeAccountOperators", data);
    return promise.then((data) => MsgRevokeAccountOperatorsResponse.decode(new _m0.Reader(data)));
  }

  EnrollRelayers(request: MsgEnrollRelayers): Promise<MsgEnrollRelayersResponse> {
    const data = MsgEnrollRelayers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollRelayers", data);
    return promise.then((data) => MsgEnrollRelayersResponse.decode(new _m0.Reader(data)));
  }

  RevokeRelayers(request: MsgRevokeRelayers): Promise<MsgRevokeRelayersResponse> {
    const data = MsgRevokeRelayers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeRelayers", data);
    return promise.then((data) => MsgRevokeRelayersResponse.decode(new _m0.Reader(data)));
  }

  EnrollApprovers(request: MsgEnrollApprovers): Promise<MsgEnrollApproversResponse> {
    const data = MsgEnrollApprovers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollApprovers", data);
    return promise.then((data) => MsgEnrollApproversResponse.decode(new _m0.Reader(data)));
  }

  RevokeApprovers(request: MsgRevokeApprovers): Promise<MsgRevokeApproversResponse> {
    const data = MsgRevokeApprovers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeApprovers", data);
    return promise.then((data) => MsgRevokeApproversResponse.decode(new _m0.Reader(data)));
  }

  EnrollSwapManagers(request: MsgEnrollSwapManagers): Promise<MsgEnrollSwapManagersResponse> {
    const data = MsgEnrollSwapManagers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "EnrollSwapManagers", data);
    return promise.then((data) => MsgEnrollSwapManagersResponse.decode(new _m0.Reader(data)));
  }

  RevokeSwapManagers(request: MsgRevokeSwapManagers): Promise<MsgRevokeSwapManagersResponse> {
    const data = MsgRevokeSwapManagers.encode(request).finish();
    const promise = this.rpc.request("shareledger.electoral.Msg", "RevokeSwapManagers", data);
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
