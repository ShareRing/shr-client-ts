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

export interface DocumentExtension {
  readonly document: {
    readonly byHolder: (holder: string) => Promise<Document[]>;
    readonly byProof: (proof: string) => Promise<Document | undefined>;
    readonly byIssuer: (holder: string, issuer: string) => Promise<Document[]>;
    readonly tx: {
      create: (issuer: string, holder: string, proof: string, data?: string) => MsgCreateDocumentEncodeObject;
      createMany: (issuer: string, holder: string[], proof: string[], data?: string[]) => MsgCreateDocumentsEncodeObject;
      update: (issuer: string, holder: string, proof: string, data?: string) => MsgUpdateDocumentEncodeObject;
      revoke: (issuer: string, holder: string, proof: string) => MsgRevokeDocumentEncodeObject;
    };
  };
}

export function DocumentExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class Client extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    document = {
      byHolder: async (holder: string) => {
        const {documents} = await queryService.DocumentByHolderId({id: holder});
        return documents;
      },
      byProof: async (proof: string) => {
        const {document} = await queryService.DocumentByProof({proof});
        return document;
      },
      byIssuer: async (holder: string, issuer: string) => {
        const {documents} = await queryService.DocumentOfHolderByIssuer({holder, issuer});
        return documents;
      },
      tx: {
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
      }
    };
  };
}
