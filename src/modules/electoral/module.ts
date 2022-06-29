import {Client} from "../../client";
import {AccState} from "../../codec/shareledger/electoral/acc_state";
import {QueryClientImpl} from "../../codec/shareledger/electoral/query";
import {
  MsgEnrollAccountOperators,
  MsgEnrollDocIssuers,
  MsgEnrollIdSigners,
  MsgEnrollLoaders,
  MsgEnrollVoter,
  MsgRevokeAccountOperators,
  MsgRevokeDocIssuers,
  MsgRevokeIdSigners,
  MsgRevokeLoaders,
  MsgRevokeVoter
} from "../../codec/shareledger/electoral/tx";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";
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

export type ElectoralQueryExtension = {
  get electoral(): {
    readonly accountOperator: (address: string) => Promise<AccState | undefined>;
    readonly accountOperators: () => Promise<AccState[]>;
    readonly docIssuer: (address: string) => Promise<AccState | undefined>;
    readonly docIssuers: () => Promise<AccState[]>;
    readonly loader: (address: string) => Promise<AccState | undefined>;
    readonly loaders: () => Promise<AccState[]>;
    readonly voter: (address: string) => Promise<AccState | undefined>;
    readonly voters: () => Promise<AccState[]>;
    readonly idSigner: (address: string) => Promise<AccState | undefined>;
    readonly idSigners: () => Promise<AccState[]>;
    readonly enrollAccountOperators: (addresses: string[], creator: string) => MsgEnrollAccountOperatorsEncodeObject;
    readonly revokeAccountOperators: (addresses: string[], creator: string) => MsgRevokeAccountOperatorsEncodeObject;
    readonly enrollDocIssuers: (addresses: string[], creator: string) => MsgEnrollDocIssuersEncodeObject;
    readonly revokeDocIssuers: (addresses: string[], creator: string) => MsgRevokeDocIssuersEncodeObject;
    readonly enrollLoaders: (addresses: string[], creator: string) => MsgEnrollLoadersEncodeObject;
    readonly revokeLoaders: (addresses: string[], creator: string) => MsgRevokeLoadersEncodeObject;
    readonly enrollVoter: (address: string, creator: string) => MsgEnrollVoterEncodeObject;
    readonly revokeVoter: (address: string, creator: string) => MsgRevokeVoterEncodeObject;
    readonly enrollIdSigners: (addresses: string[], creator: string) => MsgEnrollIdSignersEncodeObject;
    readonly revokeIdSigners: (addresses: string[], creator: string) => MsgRevokeIdSignersEncodeObject;
  };
};

export type ElectoralTxExtension = {
  get electoral(): {
    readonly enrollAccountOperators: (addresses: string[], creator: string) => MsgEnrollAccountOperatorsEncodeObject;
    readonly revokeAccountOperators: (addresses: string[], creator: string) => MsgRevokeAccountOperatorsEncodeObject;
    readonly enrollDocIssuers: (addresses: string[], creator: string) => MsgEnrollDocIssuersEncodeObject;
    readonly revokeDocIssuers: (addresses: string[], creator: string) => MsgRevokeDocIssuersEncodeObject;
    readonly enrollLoaders: (addresses: string[], creator: string) => MsgEnrollLoadersEncodeObject;
    readonly revokeLoaders: (addresses: string[], creator: string) => MsgRevokeLoadersEncodeObject;
    readonly enrollVoter: (address: string, creator: string) => MsgEnrollVoterEncodeObject;
    readonly revokeVoter: (address: string, creator: string) => MsgRevokeVoterEncodeObject;
    readonly enrollIdSigners: (addresses: string[], creator: string) => MsgEnrollIdSignersEncodeObject;
    readonly revokeIdSigners: (addresses: string[], creator: string) => MsgRevokeIdSignersEncodeObject;
  };
};

export type ElectoralExtension = ElectoralQueryExtension & ElectoralTxExtension;

export function ElectoralQueryExtension<T extends {new (...args: any[]): Client & ElectoralQueryExtension}>(constructor: T): T {
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
    get electoral() {
      return {
        ...super["electoral"],
        accountOperator: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {accState} = await queryService.AccountOperator({address});
          return accState;
        },
        accountOperators: async (height?: number) => {
          rpcClient.withHeight(height);
          const {accStates} = await queryService.AccountOperators({});
          return accStates;
        },
        docIssuer: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {accState} = await queryService.DocumentIssuer({address});
          return accState;
        },
        docIssuers: async (height?: number) => {
          rpcClient.withHeight(height);
          const {accStates} = await queryService.DocumentIssuers({});
          return accStates;
        },
        loader: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {accState} = await queryService.Loader({address});
          return accState;
        },
        loaders: async (height?: number) => {
          rpcClient.withHeight(height);
          const {loaders} = await queryService.Loaders({});
          return loaders;
        },
        voter: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {voter} = await queryService.Voter({address});
          return voter;
        },
        voters: async (height?: number) => {
          rpcClient.withHeight(height);
          const {voters} = await queryService.Voters({});
          return voters;
        },
        idSigner: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {accState} = await queryService.IdSigner({address});
          return accState;
        },
        idSigners: async (height?: number) => {
          rpcClient.withHeight(height);
          const {accStates} = await queryService.IdSigners({});
          return accStates;
        }
      };
    }
  };
}

export function ElectoralTxExtension<T extends {new (...args: any[]): Client & ElectoralTxExtension}>(constructor: T): T {
  return class extends constructor {
    get electoral() {
      return {
        ...super["electoral"],
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
      };
    }
  };
}

export function ElectoralExtension<T extends {new (...args: any[]): Client & ElectoralExtension}>(constructor: T): T {
  return class extends ElectoralTxExtension(ElectoralQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/shareledger.electoral.MsgEnrollAccountOperators": "electoral_enroll-account-operators",
    "/shareledger.electoral.MsgRevokeAccountOperators": "electoral_revoke-account-operators",
    "/shareledger.electoral.MsgEnrollDocIssuers": "electoral_enroll-doc-issuers",
    "/shareledger.electoral.MsgRevokeDocIssuers": "electoral_revoke-doc-issuers",
    "/shareledger.electoral.MsgEnrollIdSigners": "electoral_enroll-id-signers",
    "/shareledger.electoral.MsgRevokeIdSigners": "electoral_revoke-id-signers",
    "/shareledger.electoral.MsgEnrollLoaders": "electoral_enroll-loaders",
    "/shareledger.electoral.MsgRevokeLoaders": "electoral_revoke-loaders",
    "/shareledger.electoral.MsgEnrollVoter": "electoral_enroll-voter",
    "/shareledger.electoral.MsgRevokeVoter": "electoral_revoke-voter"
  };
}
