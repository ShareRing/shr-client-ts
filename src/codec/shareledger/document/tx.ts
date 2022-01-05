/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.document";

export interface MsgCreateDocument {
  data: string;
  holder: string;
  issuer: string;
  proof: string;
}

export interface MsgCreateDocumentResponse {}

export interface MsgCreateDocuments {
  data: string[];
  holder: string[];
  issuer: string;
  proof: string[];
}

export interface MsgCreateDocumentsResponse {}

export interface MsgRevokeDocument {
  holder: string;
  issuer: string;
  proof: string;
}

export interface MsgRevokeDocumentResponse {}

export interface MsgUpdateDocument {
  data: string;
  holder: string;
  issuer: string;
  proof: string;
}

export interface MsgUpdateDocumentResponse {}

const baseMsgCreateDocument: object = {data: "", holder: "", issuer: "", proof: ""};

export const MsgCreateDocument = {
  encode(message: MsgCreateDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.holder !== "") {
      writer.uint32(18).string(message.holder);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    if (message.proof !== "") {
      writer.uint32(34).string(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateDocument} as MsgCreateDocument;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.holder = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDocument {
    const message = {...baseMsgCreateDocument} as MsgCreateDocument;
    message.data = object.data !== undefined && object.data !== null ? String(object.data) : "";
    message.holder = object.holder !== undefined && object.holder !== null ? String(object.holder) : "";
    message.issuer = object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : "";
    message.proof = object.proof !== undefined && object.proof !== null ? String(object.proof) : "";
    return message;
  },

  toJSON(message: MsgCreateDocument): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.holder !== undefined && (obj.holder = message.holder);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocument>, I>>(object: I): MsgCreateDocument {
    const message = {...baseMsgCreateDocument} as MsgCreateDocument;
    message.data = object.data ?? "";
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    return message;
  }
};

const baseMsgCreateDocumentResponse: object = {};

export const MsgCreateDocumentResponse = {
  encode(_: MsgCreateDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateDocumentResponse} as MsgCreateDocumentResponse;
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

  fromJSON(_: any): MsgCreateDocumentResponse {
    const message = {...baseMsgCreateDocumentResponse} as MsgCreateDocumentResponse;
    return message;
  },

  toJSON(_: MsgCreateDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocumentResponse>, I>>(_: I): MsgCreateDocumentResponse {
    const message = {...baseMsgCreateDocumentResponse} as MsgCreateDocumentResponse;
    return message;
  }
};

const baseMsgCreateDocuments: object = {data: "", holder: "", issuer: "", proof: ""};

export const MsgCreateDocuments = {
  encode(message: MsgCreateDocuments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.holder) {
      writer.uint32(18).string(v!);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    for (const v of message.proof) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDocuments {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateDocuments} as MsgCreateDocuments;
    message.data = [];
    message.holder = [];
    message.proof = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(reader.string());
          break;
        case 2:
          message.holder.push(reader.string());
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.proof.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDocuments {
    const message = {...baseMsgCreateDocuments} as MsgCreateDocuments;
    message.data = (object.data ?? []).map((e: any) => String(e));
    message.holder = (object.holder ?? []).map((e: any) => String(e));
    message.issuer = object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : "";
    message.proof = (object.proof ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: MsgCreateDocuments): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map((e) => e);
    } else {
      obj.data = [];
    }
    if (message.holder) {
      obj.holder = message.holder.map((e) => e);
    } else {
      obj.holder = [];
    }
    message.issuer !== undefined && (obj.issuer = message.issuer);
    if (message.proof) {
      obj.proof = message.proof.map((e) => e);
    } else {
      obj.proof = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocuments>, I>>(object: I): MsgCreateDocuments {
    const message = {...baseMsgCreateDocuments} as MsgCreateDocuments;
    message.data = object.data?.map((e) => e) || [];
    message.holder = object.holder?.map((e) => e) || [];
    message.issuer = object.issuer ?? "";
    message.proof = object.proof?.map((e) => e) || [];
    return message;
  }
};

const baseMsgCreateDocumentsResponse: object = {};

export const MsgCreateDocumentsResponse = {
  encode(_: MsgCreateDocumentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDocumentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgCreateDocumentsResponse} as MsgCreateDocumentsResponse;
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

  fromJSON(_: any): MsgCreateDocumentsResponse {
    const message = {...baseMsgCreateDocumentsResponse} as MsgCreateDocumentsResponse;
    return message;
  },

  toJSON(_: MsgCreateDocumentsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocumentsResponse>, I>>(_: I): MsgCreateDocumentsResponse {
    const message = {...baseMsgCreateDocumentsResponse} as MsgCreateDocumentsResponse;
    return message;
  }
};

const baseMsgRevokeDocument: object = {holder: "", issuer: "", proof: ""};

export const MsgRevokeDocument = {
  encode(message: MsgRevokeDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeDocument} as MsgRevokeDocument;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRevokeDocument {
    const message = {...baseMsgRevokeDocument} as MsgRevokeDocument;
    message.holder = object.holder !== undefined && object.holder !== null ? String(object.holder) : "";
    message.issuer = object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : "";
    message.proof = object.proof !== undefined && object.proof !== null ? String(object.proof) : "";
    return message;
  },

  toJSON(message: MsgRevokeDocument): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocument>, I>>(object: I): MsgRevokeDocument {
    const message = {...baseMsgRevokeDocument} as MsgRevokeDocument;
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    return message;
  }
};

const baseMsgRevokeDocumentResponse: object = {};

export const MsgRevokeDocumentResponse = {
  encode(_: MsgRevokeDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgRevokeDocumentResponse} as MsgRevokeDocumentResponse;
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

  fromJSON(_: any): MsgRevokeDocumentResponse {
    const message = {...baseMsgRevokeDocumentResponse} as MsgRevokeDocumentResponse;
    return message;
  },

  toJSON(_: MsgRevokeDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocumentResponse>, I>>(_: I): MsgRevokeDocumentResponse {
    const message = {...baseMsgRevokeDocumentResponse} as MsgRevokeDocumentResponse;
    return message;
  }
};

const baseMsgUpdateDocument: object = {data: "", holder: "", issuer: "", proof: ""};

export const MsgUpdateDocument = {
  encode(message: MsgUpdateDocument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.holder !== "") {
      writer.uint32(18).string(message.holder);
    }
    if (message.issuer !== "") {
      writer.uint32(26).string(message.issuer);
    }
    if (message.proof !== "") {
      writer.uint32(34).string(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDocument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateDocument} as MsgUpdateDocument;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.holder = reader.string();
          break;
        case 3:
          message.issuer = reader.string();
          break;
        case 4:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDocument {
    const message = {...baseMsgUpdateDocument} as MsgUpdateDocument;
    message.data = object.data !== undefined && object.data !== null ? String(object.data) : "";
    message.holder = object.holder !== undefined && object.holder !== null ? String(object.holder) : "";
    message.issuer = object.issuer !== undefined && object.issuer !== null ? String(object.issuer) : "";
    message.proof = object.proof !== undefined && object.proof !== null ? String(object.proof) : "";
    return message;
  },

  toJSON(message: MsgUpdateDocument): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.holder !== undefined && (obj.holder = message.holder);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDocument>, I>>(object: I): MsgUpdateDocument {
    const message = {...baseMsgUpdateDocument} as MsgUpdateDocument;
    message.data = object.data ?? "";
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    return message;
  }
};

const baseMsgUpdateDocumentResponse: object = {};

export const MsgUpdateDocumentResponse = {
  encode(_: MsgUpdateDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseMsgUpdateDocumentResponse} as MsgUpdateDocumentResponse;
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

  fromJSON(_: any): MsgUpdateDocumentResponse {
    const message = {...baseMsgUpdateDocumentResponse} as MsgUpdateDocumentResponse;
    return message;
  },

  toJSON(_: MsgUpdateDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDocumentResponse>, I>>(_: I): MsgUpdateDocumentResponse {
    const message = {...baseMsgUpdateDocumentResponse} as MsgUpdateDocumentResponse;
    return message;
  }
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDocument(request: MsgCreateDocument): Promise<MsgCreateDocumentResponse>;
  CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse>;
  RevokeDocument(request: MsgRevokeDocument): Promise<MsgRevokeDocumentResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateDocument(request: MsgUpdateDocument): Promise<MsgUpdateDocumentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDocument = this.CreateDocument.bind(this);
    this.CreateDocuments = this.CreateDocuments.bind(this);
    this.RevokeDocument = this.RevokeDocument.bind(this);
    this.UpdateDocument = this.UpdateDocument.bind(this);
  }
  CreateDocument(request: MsgCreateDocument): Promise<MsgCreateDocumentResponse> {
    const data = MsgCreateDocument.encode(request).finish();
    const promise = this.rpc.request("shareledger.document.Msg", "CreateDocument", data);
    return promise.then((data) => MsgCreateDocumentResponse.decode(new _m0.Reader(data)));
  }

  CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse> {
    const data = MsgCreateDocuments.encode(request).finish();
    const promise = this.rpc.request("shareledger.document.Msg", "CreateDocuments", data);
    return promise.then((data) => MsgCreateDocumentsResponse.decode(new _m0.Reader(data)));
  }

  RevokeDocument(request: MsgRevokeDocument): Promise<MsgRevokeDocumentResponse> {
    const data = MsgRevokeDocument.encode(request).finish();
    const promise = this.rpc.request("shareledger.document.Msg", "RevokeDocument", data);
    return promise.then((data) => MsgRevokeDocumentResponse.decode(new _m0.Reader(data)));
  }

  UpdateDocument(request: MsgUpdateDocument): Promise<MsgUpdateDocumentResponse> {
    const data = MsgUpdateDocument.encode(request).finish();
    const promise = this.rpc.request("shareledger.document.Msg", "UpdateDocument", data);
    return promise.then((data) => MsgUpdateDocumentResponse.decode(new _m0.Reader(data)));
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
