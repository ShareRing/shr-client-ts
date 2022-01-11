import {Client} from "../../client";
import {Document} from "../../codec/shareledger/document/document";
import {QueryClientImpl} from "../../codec/shareledger/document/query";
import {MsgCreateDocument, MsgCreateDocuments, MsgRevokeDocument, MsgUpdateDocument} from "../../codec/shareledger/document/tx";
import {createProtobufRpcClient} from "../../query";
import {
  MsgCreateDocumentEncodeObject,
  MsgCreateDocumentsEncodeObject,
  MsgRevokeDocumentEncodeObject,
  MsgUpdateDocumentEncodeObject
} from "./amino";

export type DocumentQueryExtension = {
  readonly document: {
    readonly documentsByHolder: (holder: string) => Promise<Document[]>;
    readonly documentByProof: (proof: string) => Promise<Document | undefined>;
    readonly documentsByIssuer: (holder: string, issuer: string) => Promise<Document[]>;
    readonly create: (issuer: string, holder: string, proof: string, data?: string) => MsgCreateDocumentEncodeObject;
    readonly createMany: (issuer: string, holder: string[], proof: string[], data?: string[]) => MsgCreateDocumentsEncodeObject;
    readonly update: (issuer: string, holder: string, proof: string, data?: string) => MsgUpdateDocumentEncodeObject;
    readonly revoke: (issuer: string, holder: string, proof: string) => MsgRevokeDocumentEncodeObject;
  };
};

export type DocumentTxExtension = {
  readonly document: {
    readonly create: (issuer: string, holder: string, proof: string, data?: string) => MsgCreateDocumentEncodeObject;
    readonly createMany: (issuer: string, holder: string[], proof: string[], data?: string[]) => MsgCreateDocumentsEncodeObject;
    readonly update: (issuer: string, holder: string, proof: string, data?: string) => MsgUpdateDocumentEncodeObject;
    readonly revoke: (issuer: string, holder: string, proof: string) => MsgRevokeDocumentEncodeObject;
  };
};

export type DocumentExtension = DocumentQueryExtension & DocumentTxExtension;

export function DocumentQueryExtension<T extends {new (...args: any[]): Client & DocumentQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    document = {
      ...super["document"],
      documentsByHolder: async (holder: string) => {
        const {documents} = await queryService.DocumentByHolderId({id: holder});
        return documents;
      },
      documentByProof: async (proof: string) => {
        const {document} = await queryService.DocumentByProof({proof});
        return document;
      },
      documentsByIssuer: async (holder: string, issuer: string) => {
        const {documents} = await queryService.DocumentOfHolderByIssuer({holder, issuer});
        return documents;
      }
    };
  };
}

export function DocumentTxExtension<T extends {new (...args: any[]): Client & DocumentTxExtension}>(constructor: T): T {
  return class extends constructor {
    document = {
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
  };
}

export function DocumentExtension<T extends {new (...args: any[]): Client & DocumentExtension}>(constructor: T): T {
  return class extends DocumentTxExtension(DocumentQueryExtension(constructor)) {};
}
