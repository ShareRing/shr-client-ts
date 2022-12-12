import {Document} from "@shareledgerjs/types/shareledger/document/document";
import {QueryClientImpl} from "@shareledgerjs/types/shareledger/document/query";

import {BaseClient} from "../../baseclient";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export interface DocumentQueryExtensionMethods {
  documentsByHolder(holder: string, height?: number): Promise<Document[]>;
  documentByProof(proof: string, height?: number): Promise<Document | undefined>;
  documentsByIssuer(holder: string, issuer: string, height?: number): Promise<Document[]>;
}

export interface DocumentQueryExtension {
  readonly document: DocumentQueryExtensionMethods;
}

export function DocumentQueryExtension<T extends {new (...args: any[]): BaseClient & DocumentQueryExtension}>(constructor: T): T {
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
    override get document() {
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
