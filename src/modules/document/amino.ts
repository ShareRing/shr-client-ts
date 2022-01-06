/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {MsgCreateDocument, MsgCreateDocuments, MsgUpdateDocument, MsgRevokeDocument} from "../../codec/shareledger/document/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgCreateDocument extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "document/CreateDocument";
  readonly value: {
    readonly data: string;
    readonly holder: string;
    readonly issuer: string;
    readonly proof: string;
  };
}

export function isAminoMsgCreateDocument(msg: AminoMsg): msg is AminoMsgCreateDocument {
  // NOTE: Type string and names diverge here!
  return msg.type === "document/CreateDocument";
}

export interface MsgCreateDocumentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgCreateDocument";
  readonly value: Partial<MsgCreateDocument>;
}

export function isMsgCreateDocumentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateDocumentEncodeObject {
  return (encodeObject as MsgCreateDocumentEncodeObject).typeUrl === "/shareledger.document.MsgCreateDocument";
}

export interface AminoMsgCreateDocuments extends AminoMsg {
  readonly type: "document/CreateDocuments";
  readonly value: {
    readonly data: string[];
    readonly holder: string[];
    readonly issuer: string;
    readonly proof: string[];
  };
}

export function isAminoMsgCreateDocuments(msg: AminoMsg): msg is AminoMsgCreateDocuments {
  return msg.type === "document/CreateDocuments";
}

export interface MsgCreateDocumentsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgCreateDocuments";
  readonly value: Partial<MsgCreateDocuments>;
}

export function isMsgCreateDocumentsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateDocumentsEncodeObject {
  return (encodeObject as MsgCreateDocumentsEncodeObject).typeUrl === "/shareledger.document.MsgCreateDocuments";
}

export interface AminoMsgUpdateDocument extends AminoMsg {
  readonly type: "document/UpdateDocument";
  readonly value: {
    readonly data: string;
    readonly holder: string;
    readonly issuer: string;
    readonly proof: string;
  };
}

export function isAminoMsgUpdateDocument(msg: AminoMsg): msg is AminoMsgUpdateDocument {
  return msg.type === "document/UpdateDocument";
}

export interface MsgUpdateDocumentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgUpdateDocument";
  readonly value: Partial<MsgUpdateDocument>;
}

export function isMsgUpdateDocumentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateDocumentEncodeObject {
  return (encodeObject as MsgUpdateDocumentEncodeObject).typeUrl === "/shareledger.document.MsgUpdateDocument";
}

export interface AminoMsgRevokeDocument extends AminoMsg {
  readonly type: "document/RevokeDocument";
  readonly value: {
    readonly holder: string;
    readonly issuer: string;
    readonly proof: string;
  };
}

export function isAminoMsgRevokeDocument(msg: AminoMsg): msg is AminoMsgRevokeDocument {
  return msg.type === "document/RevokeDocument";
}

export interface MsgRevokeDocumentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgRevokeDocument";
  readonly value: Partial<MsgRevokeDocument>;
}

export function isMsgRevokeDocumentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeDocumentEncodeObject {
  return (encodeObject as MsgRevokeDocumentEncodeObject).typeUrl === "/shareledger.document.MsgRevokeDocument";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.document.MsgCreateDocument": {
      aminoType: "document/CreateDocument",
      toAmino: ({data, holder, issuer, proof}: MsgCreateDocument): AminoMsgCreateDocument["value"] => ({
        data,
        holder,
        issuer,
        proof
      }),
      fromAmino: ({data, holder, issuer, proof}: AminoMsgCreateDocument["value"]): MsgCreateDocument => ({
        data,
        holder,
        issuer,
        proof
      })
    },
    "/shareledger.document.MsgCreateDocuments": {
      aminoType: "document/CreateDocuments",
      toAmino: ({data, holder, issuer, proof}: MsgCreateDocuments): AminoMsgCreateDocuments["value"] => ({
        data: [...data],
        holder: [...holder],
        issuer,
        proof: [...proof]
      }),
      fromAmino: ({data, holder, issuer, proof}: AminoMsgCreateDocuments["value"]): MsgCreateDocuments => ({
        data: [...data],
        holder: [...holder],
        issuer,
        proof: [...proof]
      })
    },
    "/shareledger.document.MsgUpdateDocument": {
      aminoType: "document/UpdateDocument",
      toAmino: ({data, holder, issuer, proof}: MsgUpdateDocument): AminoMsgUpdateDocument["value"] => ({
        data,
        holder,
        issuer,
        proof
      }),
      fromAmino: ({data, holder, issuer, proof}: AminoMsgUpdateDocument["value"]): MsgUpdateDocument => ({
        data,
        holder,
        issuer,
        proof
      })
    },
    "/shareledger.document.MsgRevokeDocument": {
      aminoType: "document/RevokeDocument",
      toAmino: ({holder, issuer, proof}: MsgRevokeDocument): AminoMsgRevokeDocument["value"] => ({
        holder,
        issuer,
        proof
      }),
      fromAmino: ({holder, issuer, proof}: AminoMsgRevokeDocument["value"]): MsgRevokeDocument => ({
        holder,
        issuer,
        proof
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.document.MsgCreateDocument", MsgCreateDocument],
    ["/shareledger.document.MsgCreateDocuments", MsgCreateDocuments],
    ["/shareledger.document.MsgUpdateDocument", MsgUpdateDocument],
    ["/shareledger.document.MsgRevokeDocument", MsgRevokeDocument]
  ];
}
