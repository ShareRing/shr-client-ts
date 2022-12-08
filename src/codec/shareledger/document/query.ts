/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Document} from "./document";

export const protobufPackage = "shareledger.document";

export interface QueryDocumentByProofRequest {
  proof: string;
}

export interface QueryDocumentByProofResponse {
  document?: Document;
}

export interface QueryDocumentByHolderIdRequest {
  id: string;
}

export interface QueryDocumentByHolderIdResponse {
  documents: Document[];
}

export interface QueryDocumentOfHolderByIssuerRequest {
  holder: string;
  issuer: string;
}

export interface QueryDocumentOfHolderByIssuerResponse {
  documents: Document[];
}

function createBaseQueryDocumentByProofRequest(): QueryDocumentByProofRequest {
  return {proof: ""};
}

export const QueryDocumentByProofRequest = {
  encode(message: QueryDocumentByProofRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proof !== "") {
      writer.uint32(10).string(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentByProofRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentByProofRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentByProofRequest {
    return {proof: isSet(object.proof) ? String(object.proof) : ""};
  },

  toJSON(message: QueryDocumentByProofRequest): unknown {
    const obj: any = {};
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentByProofRequest>, I>>(object: I): QueryDocumentByProofRequest {
    const message = createBaseQueryDocumentByProofRequest();
    message.proof = object.proof ?? "";
    return message;
  }
};

function createBaseQueryDocumentByProofResponse(): QueryDocumentByProofResponse {
  return {document: undefined};
}

export const QueryDocumentByProofResponse = {
  encode(message: QueryDocumentByProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.document !== undefined) {
      Document.encode(message.document, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentByProofResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentByProofResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.document = Document.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentByProofResponse {
    return {document: isSet(object.document) ? Document.fromJSON(object.document) : undefined};
  },

  toJSON(message: QueryDocumentByProofResponse): unknown {
    const obj: any = {};
    message.document !== undefined && (obj.document = message.document ? Document.toJSON(message.document) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentByProofResponse>, I>>(object: I): QueryDocumentByProofResponse {
    const message = createBaseQueryDocumentByProofResponse();
    message.document = object.document !== undefined && object.document !== null ? Document.fromPartial(object.document) : undefined;
    return message;
  }
};

function createBaseQueryDocumentByHolderIdRequest(): QueryDocumentByHolderIdRequest {
  return {id: ""};
}

export const QueryDocumentByHolderIdRequest = {
  encode(message: QueryDocumentByHolderIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentByHolderIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentByHolderIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentByHolderIdRequest {
    return {id: isSet(object.id) ? String(object.id) : ""};
  },

  toJSON(message: QueryDocumentByHolderIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentByHolderIdRequest>, I>>(object: I): QueryDocumentByHolderIdRequest {
    const message = createBaseQueryDocumentByHolderIdRequest();
    message.id = object.id ?? "";
    return message;
  }
};

function createBaseQueryDocumentByHolderIdResponse(): QueryDocumentByHolderIdResponse {
  return {documents: []};
}

export const QueryDocumentByHolderIdResponse = {
  encode(message: QueryDocumentByHolderIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.documents) {
      Document.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentByHolderIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentByHolderIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.documents.push(Document.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentByHolderIdResponse {
    return {
      documents: Array.isArray(object?.documents) ? object.documents.map((e: any) => Document.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryDocumentByHolderIdResponse): unknown {
    const obj: any = {};
    if (message.documents) {
      obj.documents = message.documents.map((e) => (e ? Document.toJSON(e) : undefined));
    } else {
      obj.documents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentByHolderIdResponse>, I>>(object: I): QueryDocumentByHolderIdResponse {
    const message = createBaseQueryDocumentByHolderIdResponse();
    message.documents = object.documents?.map((e) => Document.fromPartial(e)) || [];
    return message;
  }
};

function createBaseQueryDocumentOfHolderByIssuerRequest(): QueryDocumentOfHolderByIssuerRequest {
  return {holder: "", issuer: ""};
}

export const QueryDocumentOfHolderByIssuerRequest = {
  encode(message: QueryDocumentOfHolderByIssuerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentOfHolderByIssuerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentOfHolderByIssuerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentOfHolderByIssuerRequest {
    return {
      holder: isSet(object.holder) ? String(object.holder) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : ""
    };
  },

  toJSON(message: QueryDocumentOfHolderByIssuerRequest): unknown {
    const obj: any = {};
    message.holder !== undefined && (obj.holder = message.holder);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentOfHolderByIssuerRequest>, I>>(object: I): QueryDocumentOfHolderByIssuerRequest {
    const message = createBaseQueryDocumentOfHolderByIssuerRequest();
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    return message;
  }
};

function createBaseQueryDocumentOfHolderByIssuerResponse(): QueryDocumentOfHolderByIssuerResponse {
  return {documents: []};
}

export const QueryDocumentOfHolderByIssuerResponse = {
  encode(message: QueryDocumentOfHolderByIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.documents) {
      Document.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDocumentOfHolderByIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDocumentOfHolderByIssuerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.documents.push(Document.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDocumentOfHolderByIssuerResponse {
    return {
      documents: Array.isArray(object?.documents) ? object.documents.map((e: any) => Document.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryDocumentOfHolderByIssuerResponse): unknown {
    const obj: any = {};
    if (message.documents) {
      obj.documents = message.documents.map((e) => (e ? Document.toJSON(e) : undefined));
    } else {
      obj.documents = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDocumentOfHolderByIssuerResponse>, I>>(object: I): QueryDocumentOfHolderByIssuerResponse {
    const message = createBaseQueryDocumentOfHolderByIssuerResponse();
    message.documents = object.documents?.map((e) => Document.fromPartial(e)) || [];
    return message;
  }
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a list of documentByProof items. */
  DocumentByProof(request: QueryDocumentByProofRequest): Promise<QueryDocumentByProofResponse>;
  /** Queries a list of documentByHolderId items. */
  DocumentByHolderId(request: QueryDocumentByHolderIdRequest): Promise<QueryDocumentByHolderIdResponse>;
  /** Queries a list of documentOfHolderByIssuer items. */
  DocumentOfHolderByIssuer(request: QueryDocumentOfHolderByIssuerRequest): Promise<QueryDocumentOfHolderByIssuerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: {service?: string}) {
    this.service = opts?.service || "shareledger.document.Query";
    this.rpc = rpc;
    this.DocumentByProof = this.DocumentByProof.bind(this);
    this.DocumentByHolderId = this.DocumentByHolderId.bind(this);
    this.DocumentOfHolderByIssuer = this.DocumentOfHolderByIssuer.bind(this);
  }
  DocumentByProof(request: QueryDocumentByProofRequest): Promise<QueryDocumentByProofResponse> {
    const data = QueryDocumentByProofRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DocumentByProof", data);
    return promise.then((data) => QueryDocumentByProofResponse.decode(new _m0.Reader(data)));
  }

  DocumentByHolderId(request: QueryDocumentByHolderIdRequest): Promise<QueryDocumentByHolderIdResponse> {
    const data = QueryDocumentByHolderIdRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DocumentByHolderId", data);
    return promise.then((data) => QueryDocumentByHolderIdResponse.decode(new _m0.Reader(data)));
  }

  DocumentOfHolderByIssuer(request: QueryDocumentOfHolderByIssuerRequest): Promise<QueryDocumentOfHolderByIssuerResponse> {
    const data = QueryDocumentOfHolderByIssuerRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DocumentOfHolderByIssuer", data);
    return promise.then((data) => QueryDocumentOfHolderByIssuerResponse.decode(new _m0.Reader(data)));
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
