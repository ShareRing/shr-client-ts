import {Client} from "../../client";
import {Document} from "../../codec/shareledger/document/document";
import {QueryClientImpl} from "../../codec/shareledger/document/query";
import {MsgCreateDocument, MsgCreateDocuments, MsgRevokeDocument, MsgUpdateDocument} from "../../codec/shareledger/document/tx";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";
import {
  MsgCreateDocumentEncodeObject,
  MsgCreateDocumentsEncodeObject,
  MsgRevokeDocumentEncodeObject,
  MsgUpdateDocumentEncodeObject
} from "./amino";

export type DocumentQueryExtension = {
  get document(): {
    readonly documentsByHolder: (holder: string, height?: number) => Promise<Document[]>;
    readonly documentByProof: (proof: string, height?: number) => Promise<Document | undefined>;
    readonly documentsByIssuer: (holder: string, issuer: string, height?: number) => Promise<Document[]>;
  };
};

export type DocumentTxExtension = {
  get document(): {
    readonly create: (issuer: string, holder: string, proof: string, data?: string) => MsgCreateDocumentEncodeObject;
    readonly createMany: (issuer: string, holder: string[], proof: string[], data?: string[]) => MsgCreateDocumentsEncodeObject;
    readonly update: (issuer: string, holder: string, proof: string, data?: string) => MsgUpdateDocumentEncodeObject;
    readonly revoke: (issuer: string, holder: string, proof: string) => MsgRevokeDocumentEncodeObject;
  };
};

export type DocumentExtension = DocumentQueryExtension & DocumentTxExtension;

export function DocumentQueryExtension<T extends {new (...args: any[]): Client & DocumentQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get document() {
      return {
        ...super["document"],
        documentsByHolder: async (holder: string, height?: number) => {
          rpcClient.withHeight(height);
          const {documents} = await queryService.DocumentByHolderId({id: holder});
          return documents;
        },
        documentByProof: async (proof: string, height?: number) => {
          rpcClient.withHeight(height);
          const {document} = await queryService.DocumentByProof({proof});
          return document;
        },
        documentsByIssuer: async (holder: string, issuer: string, height?: number) => {
          rpcClient.withHeight(height);
          const {documents} = await queryService.DocumentOfHolderByIssuer({holder, issuer});
          return documents;
        }
      };
    }
  };
}

export function DocumentTxExtension<T extends {new (...args: any[]): Client & DocumentTxExtension}>(constructor: T): T {
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

export function DocumentExtension<T extends {new (...args: any[]): Client & DocumentExtension}>(constructor: T): T {
  return class extends DocumentTxExtension(DocumentQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/shareledger.document.MsgCreateDocument": "document_create",
    "/shareledger.document.MsgCreateDocuments": "documents_create",
    "/shareledger.document.MsgUpdateDocument": "document_update",
    "/shareledger.document.MsgRevokeDocument": "document_revoke"
  };
}
