import {BaseClient} from "../../baseclient";
import {MsgCreateDocument, MsgCreateDocuments, MsgRevokeDocument, MsgUpdateDocument} from "../../codec/shareledger/document/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export function createDocumentTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.document.MsgCreateDocument", MsgCreateDocument],
    ["/shareledger.document.MsgCreateDocuments", MsgCreateDocuments],
    ["/shareledger.document.MsgUpdateDocument", MsgUpdateDocument],
    ["/shareledger.document.MsgRevokeDocument", MsgRevokeDocument]
  ];
}

export function createDocumentActions(): Record<string, string> {
  return {
    "/shareledger.document.MsgCreateDocument": "document_create",
    "/shareledger.document.MsgCreateDocuments": "documents_create",
    "/shareledger.document.MsgUpdateDocument": "document_update",
    "/shareledger.document.MsgRevokeDocument": "document_revoke"
  };
}

export interface MsgCreateDocumentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgCreateDocument";
  readonly value: Partial<MsgCreateDocument>;
}

export function isMsgCreateDocumentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateDocumentEncodeObject {
  return (encodeObject as MsgCreateDocumentEncodeObject).typeUrl === "/shareledger.document.MsgCreateDocument";
}

export interface MsgCreateDocumentsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgCreateDocuments";
  readonly value: Partial<MsgCreateDocuments>;
}

export function isMsgCreateDocumentsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateDocumentsEncodeObject {
  return (encodeObject as MsgCreateDocumentsEncodeObject).typeUrl === "/shareledger.document.MsgCreateDocuments";
}

export interface MsgUpdateDocumentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgUpdateDocument";
  readonly value: Partial<MsgUpdateDocument>;
}

export function isMsgUpdateDocumentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateDocumentEncodeObject {
  return (encodeObject as MsgUpdateDocumentEncodeObject).typeUrl === "/shareledger.document.MsgUpdateDocument";
}

export interface MsgRevokeDocumentEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.document.MsgRevokeDocument";
  readonly value: Partial<MsgRevokeDocument>;
}

export function isMsgRevokeDocumentEncodeObject(encodeObject: EncodeObject): encodeObject is MsgRevokeDocumentEncodeObject {
  return (encodeObject as MsgRevokeDocumentEncodeObject).typeUrl === "/shareledger.document.MsgRevokeDocument";
}

export type DocumentTxExtension = {
  get document(): {
    readonly create: (issuer: string, holder: string, proof: string, data?: string) => MsgCreateDocumentEncodeObject;
    readonly createMany: (issuer: string, holder: string[], proof: string[], data?: string[]) => MsgCreateDocumentsEncodeObject;
    readonly update: (issuer: string, holder: string, proof: string, data?: string) => MsgUpdateDocumentEncodeObject;
    readonly revoke: (issuer: string, holder: string, proof: string) => MsgRevokeDocumentEncodeObject;
  };
};

export function DocumentTxExtension<T extends {new (...args: any[]): BaseClient & DocumentTxExtension}>(constructor: T): T {
  return class extends constructor {
    get document() {
      return {
        ...super["document"],
        create: (issuer: string, holder: string, proof: string, data?: string): MsgCreateDocumentEncodeObject => {
          return {
            typeUrl: "/shareledger.document.MsgCreateDocument",
            value: MsgCreateDocument.fromPartial({
              data,
              holder,
              issuer,
              proof
            })
          };
        },
        createMany: (issuer: string, holder: string[], proof: string[], data?: string[]): MsgCreateDocumentsEncodeObject => {
          return {
            typeUrl: "/shareledger.document.MsgCreateDocuments",
            value: MsgCreateDocuments.fromPartial({
              data,
              holder,
              issuer,
              proof
            })
          };
        },
        update: (issuer: string, holder: string, proof: string, data?: string): MsgUpdateDocumentEncodeObject => {
          return {
            typeUrl: "/shareledger.document.MsgUpdateDocument",
            value: MsgUpdateDocument.fromPartial({
              data,
              holder,
              issuer,
              proof
            })
          };
        },
        revoke: (issuer: string, holder: string, proof: string): MsgRevokeDocumentEncodeObject => {
          return {
            typeUrl: "/shareledger.document.MsgRevokeDocument",
            value: MsgRevokeDocument.fromPartial({
              holder,
              issuer,
              proof
            })
          };
        }
      };
    }
  };
}
