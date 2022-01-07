import {Client} from "../../client";
import {
  QueryClientImpl,
  QueryAccountOperatorResponse,
  QueryAccountOperatorsResponse,
  QueryDocumentIssuerResponse,
  QueryDocumentIssuersResponse,
  QueryGetLoaderResponse,
  QueryGetLoadersResponse,
  QueryGetVoterResponse,
  QueryGetVotersResponse,
  QueryIdSignerResponse,
  QueryIdSignersResponse
} from "../../codec/shareledger/electoral/query";
import {
  MsgEnrollAccountOperators,
  MsgEnrollLoaders,
  MsgEnrollDocIssuers,
  MsgEnrollIdSigners,
  MsgEnrollVoter,
  MsgRevokeAccountOperators,
  MsgRevokeDocIssuers,
  MsgRevokeIdSigners,
  MsgRevokeLoaders,
  MsgRevokeVoter
} from "../../codec/shareledger/electoral/tx";
import {createProtobufRpcClient} from "../../query";
import {
  MsgEnrollAccountOperatorsEncodeObject,
  MsgEnrollDocIssuersEncodeObject,
  MsgEnrollIdSignersEncodeObject,
  MsgEnrollLoadersEncodeObject,
  MsgEnrollVoterEncodeObject,
  MsgRevokeAccountOperatorsEncodeObject,
  MsgRevokeDocIssuersEncodeObject,
  MsgRevokeIdSignersEncodeObject,
  MsgRevokeLoadersEncodeObject,
  MsgRevokeVoterEncodeObject
} from "./amino";

export interface ElectoralExtension {
  readonly electoral: {
    readonly accountOperator: (address: string) => Promise<QueryAccountOperatorResponse>;
    readonly accountOperators: () => Promise<QueryAccountOperatorsResponse>;
    readonly docIssuer: (address: string) => Promise<QueryDocumentIssuerResponse>;
    readonly docIssuers: () => Promise<QueryDocumentIssuersResponse>;
    readonly loader: (address: string) => Promise<QueryGetLoaderResponse>;
    readonly loaders: () => Promise<QueryGetLoadersResponse>;
    readonly voter: (address: string) => Promise<QueryGetVoterResponse>;
    readonly voters: () => Promise<QueryGetVotersResponse>;
    readonly idSigner: (address: string) => Promise<QueryIdSignerResponse>;
    readonly idSigners: () => Promise<QueryIdSignersResponse>;
    readonly tx: {
      enrollAccountOperators: (addresses: string[], creator: string) => MsgEnrollAccountOperatorsEncodeObject;
      revokeAccountOperators: (addresses: string[], creator: string) => MsgRevokeAccountOperatorsEncodeObject;
      enrollDocIssuers: (addresses: string[], creator: string) => MsgEnrollDocIssuersEncodeObject;
      revokeDocIssuers: (addresses: string[], creator: string) => MsgRevokeDocIssuersEncodeObject;
      enrollLoaders: (addresses: string[], creator: string) => MsgEnrollLoadersEncodeObject;
      revokeLoaders: (addresses: string[], creator: string) => MsgRevokeLoadersEncodeObject;
      enrollVoter: (address: string, creator: string) => MsgEnrollVoterEncodeObject;
      revokeVoter: (address: string, creator: string) => MsgRevokeVoterEncodeObject;
      enrollIdSigners: (addresses: string[], creator: string) => MsgEnrollIdSignersEncodeObject;
      revokeIdSigners: (addresses: string[], creator: string) => MsgRevokeIdSignersEncodeObject;
    };
  };
}

export function ElectoralExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class Client extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    electoral = {
      accountOperator: async (address: string) => {
        const response = await queryService.AccountOperator({address});
        return response;
      },
      accountOperators: async () => {
        const response = await queryService.AccountOperators({});
        return response;
      },
      docIssuer: async (address: string) => {
        const response = await queryService.DocumentIssuer({address});
        return response;
      },
      docIssuers: async () => {
        const response = await queryService.DocumentIssuers({});
        return response;
      },
      loader: async (address: string) => {
        const response = await queryService.GetLoader({address});
        return response;
      },
      loaders: async () => {
        const response = await queryService.GetLoaders({});
        return response;
      },
      voter: async (address: string) => {
        const response = await queryService.GetVoter({address});
        return response;
      },
      voters: async () => {
        const response = await queryService.GetVoters({});
        return response;
      },
      idSigner: async (address: string) => {
        const response = await queryService.IdSigner({address});
        return response;
      },
      idSigners: async () => {
        const response = await queryService.IdSigners({});
        return response;
      },
      tx: {
        enrollAccountOperators: (addresses: string[], creator: string): MsgEnrollAccountOperatorsEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollAccountOperators",
            value: MsgEnrollAccountOperators.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeAccountOperators: (addresses: string[], creator: string): MsgRevokeAccountOperatorsEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeAccountOperators",
            value: MsgRevokeAccountOperators.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollDocIssuers: (addresses: string[], creator: string): MsgEnrollDocIssuersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollDocIssuers",
            value: MsgEnrollDocIssuers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeDocIssuers: (addresses: string[], creator: string): MsgRevokeDocIssuersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeDocIssuers",
            value: MsgRevokeDocIssuers.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollLoaders: (addresses: string[], creator: string): MsgEnrollLoadersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollLoaders",
            value: MsgEnrollLoaders.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeLoaders: (addresses: string[], creator: string): MsgRevokeLoadersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeLoaders",
            value: MsgRevokeLoaders.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollIdSigners: (addresses: string[], creator: string): MsgEnrollIdSignersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollIdSigners",
            value: MsgEnrollIdSigners.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeIdSigners: (addresses: string[], creator: string): MsgRevokeIdSignersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeIdSigners",
            value: MsgRevokeIdSigners.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollVoter: (address: string, creator: string): MsgEnrollVoterEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollVoter",
            value: MsgEnrollVoter.fromPartial({
              address,
              creator
            })
          };
        },
        revokeVoter: (address: string, creator: string): MsgRevokeVoterEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeVoter",
            value: MsgRevokeVoter.fromPartial({
              address,
              creator
            })
          };
        }
      }
    };
  };
}
