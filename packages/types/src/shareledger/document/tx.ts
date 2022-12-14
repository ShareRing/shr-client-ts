/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Rpc} from "../../helpers";
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

function createBaseMsgCreateDocument(): MsgCreateDocument {
  return {
    data: "",
    holder: "",
    issuer: "",
    proof: ""
  };
}

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
    const message = createBaseMsgCreateDocument();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocument>, I>>(object: I): MsgCreateDocument {
    const message = createBaseMsgCreateDocument();
    message.data = object.data ?? "";
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    return message;
  }
};

function createBaseMsgCreateDocumentResponse(): MsgCreateDocumentResponse {
  return {};
}

export const MsgCreateDocumentResponse = {
  encode(_: MsgCreateDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDocumentResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocumentResponse>, I>>(_: I): MsgCreateDocumentResponse {
    const message = createBaseMsgCreateDocumentResponse();
    return message;
  }
};

function createBaseMsgCreateDocuments(): MsgCreateDocuments {
  return {
    data: [],
    holder: [],
    issuer: "",
    proof: []
  };
}

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
    const message = createBaseMsgCreateDocuments();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocuments>, I>>(object: I): MsgCreateDocuments {
    const message = createBaseMsgCreateDocuments();
    message.data = object.data?.map((e) => e) || [];
    message.holder = object.holder?.map((e) => e) || [];
    message.issuer = object.issuer ?? "";
    message.proof = object.proof?.map((e) => e) || [];
    return message;
  }
};

function createBaseMsgCreateDocumentsResponse(): MsgCreateDocumentsResponse {
  return {};
}

export const MsgCreateDocumentsResponse = {
  encode(_: MsgCreateDocumentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDocumentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDocumentsResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgCreateDocumentsResponse>, I>>(_: I): MsgCreateDocumentsResponse {
    const message = createBaseMsgCreateDocumentsResponse();
    return message;
  }
};

function createBaseMsgRevokeDocument(): MsgRevokeDocument {
  return {
    holder: "",
    issuer: "",
    proof: ""
  };
}

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
    const message = createBaseMsgRevokeDocument();

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

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocument>, I>>(object: I): MsgRevokeDocument {
    const message = createBaseMsgRevokeDocument();
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    return message;
  }
};

function createBaseMsgRevokeDocumentResponse(): MsgRevokeDocumentResponse {
  return {};
}

export const MsgRevokeDocumentResponse = {
  encode(_: MsgRevokeDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeDocumentResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgRevokeDocumentResponse>, I>>(_: I): MsgRevokeDocumentResponse {
    const message = createBaseMsgRevokeDocumentResponse();
    return message;
  }
};

function createBaseMsgUpdateDocument(): MsgUpdateDocument {
  return {
    data: "",
    holder: "",
    issuer: "",
    proof: ""
  };
}

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
    const message = createBaseMsgUpdateDocument();

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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDocument>, I>>(object: I): MsgUpdateDocument {
    const message = createBaseMsgUpdateDocument();
    message.data = object.data ?? "";
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    return message;
  }
};

function createBaseMsgUpdateDocumentResponse(): MsgUpdateDocumentResponse {
  return {};
}

export const MsgUpdateDocumentResponse = {
  encode(_: MsgUpdateDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDocumentResponse();

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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDocumentResponse>, I>>(_: I): MsgUpdateDocumentResponse {
    const message = createBaseMsgUpdateDocumentResponse();
    return message;
  }
};
/** Msg defines the Msg service. */

export interface Msg {
  CreateDocument(request: MsgCreateDocument): Promise<MsgCreateDocumentResponse>;
  CreateDocuments(request: MsgCreateDocuments): Promise<MsgCreateDocumentsResponse>;
  RevokeDocument(request: MsgRevokeDocument): Promise<MsgRevokeDocumentResponse>;
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