import {Client} from "../../client";
import {AccState} from "../../codec/shareledger/electoral/acc_state";
import {QueryClientImpl} from "../../codec/shareledger/electoral/query";
import {
  MsgEnrollAccountOperators,
  MsgEnrollDocIssuers,
  MsgEnrollIdSigners,
  MsgEnrollLoaders,
  MsgEnrollVoter,
  MsgEnrollApprovers,
  MsgEnrollRelayers,
  MsgEnrollSwapManagers,
  MsgRevokeAccountOperators,
  MsgRevokeDocIssuers,
  MsgRevokeIdSigners,
  MsgRevokeLoaders,
  MsgRevokeVoter,
  MsgRevokeApprovers,
  MsgRevokeRelayers,
  MsgRevokeSwapManagers
} from "../../codec/shareledger/electoral/tx";
import {createProtobufRpcClient} from "../../query";
import {
  MsgEnrollAccountOperatorsEncodeObject,
  MsgEnrollDocIssuersEncodeObject,
  MsgEnrollIdSignersEncodeObject,
  MsgEnrollLoadersEncodeObject,
  MsgEnrollVoterEncodeObject,
  MsgEnrollApproversEncodeObject,
  MsgEnrollRelayersEncodeObject,
  MsgEnrollSwapManagersEncodeObject,
  MsgRevokeAccountOperatorsEncodeObject,
  MsgRevokeDocIssuersEncodeObject,
  MsgRevokeIdSignersEncodeObject,
  MsgRevokeLoadersEncodeObject,
  MsgRevokeVoterEncodeObject,
  MsgRevokeApproversEncodeObject,
  MsgRevokeRelayersEncodeObject,
  MsgRevokeSwapManagersEncodeObject
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
    readonly approver: (address: string) => Promise<AccState | undefined>;
    readonly approvers: () => Promise<AccState[]>;
    readonly relayer: (address: string) => Promise<AccState | undefined>;
    readonly relayers: () => Promise<AccState[]>;
    readonly swapManager: (address: string) => Promise<AccState | undefined>;
    readonly swapManagers: () => Promise<AccState[]>;
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
    readonly enrollRelayers: (addresses: string[], creator: string) => MsgEnrollRelayersEncodeObject;
    readonly revokeRelayers: (addresses: string[], creator: string) => MsgRevokeRelayersEncodeObject;
    readonly enrollApprovers: (addresses: string[], creator: string) => MsgEnrollApproversEncodeObject;
    readonly revokeApprovers: (addresses: string[], creator: string) => MsgRevokeApproversEncodeObject;
    readonly enrollSwapManagers: (addresses: string[], creator: string) => MsgEnrollSwapManagersEncodeObject;
    readonly revokeSwapManagers: (addresses: string[], creator: string) => MsgRevokeSwapManagersEncodeObject;
  };
};

export type ElectoralExtension = ElectoralQueryExtension & ElectoralTxExtension;

export function ElectoralQueryExtension<T extends {new (...args: any[]): Client & ElectoralQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get electoral() {
      return {
        ...super["electoral"],
        accountOperator: async (address: string) => {
          const {accState} = await queryService.AccountOperator({address});
          return accState;
        },
        accountOperators: async () => {
          const {accStates} = await queryService.AccountOperators({});
          return accStates;
        },
        docIssuer: async (address: string) => {
          const {accState} = await queryService.DocumentIssuer({address});
          return accState;
        },
        docIssuers: async () => {
          const {accStates} = await queryService.DocumentIssuers({});
          return accStates;
        },
        loader: async (address: string) => {
          const {accState} = await queryService.Loader({address});
          return accState;
        },
        loaders: async () => {
          const {loaders} = await queryService.Loaders({});
          return loaders;
        },
        voter: async (address: string) => {
          const {voter} = await queryService.Voter({address});
          return voter;
        },
        voters: async () => {
          const {voters} = await queryService.Voters({});
          return voters;
        },
        idSigner: async (address: string) => {
          const {accState} = await queryService.IdSigner({address});
          return accState;
        },
        idSigners: async () => {
          const {accStates} = await queryService.IdSigners({});
          return accStates;
        },
        approver: async (address: string) => {
          const {accState} = await queryService.Approver({address});
          return accState;
        },
        approvers: async () => {
          const {approvers} = await queryService.Approvers({});
          return approvers;
        },
        relayer: async (address: string) => {
          const {accState} = await queryService.Relayer({address});
          return accState;
        },
        relayers: async () => {
          const {relayers} = await queryService.Relayers({});
          return relayers;
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
        },
        enrollApprovers: (addresses: string[], creator: string): MsgEnrollApproversEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollApprovers",
            value: MsgEnrollApprovers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeApprovers: (addresses: string[], creator: string): MsgRevokeApproversEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeApprovers",
            value: MsgRevokeApprovers.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollRelayers: (addresses: string[], creator: string): MsgEnrollRelayersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollRelayers",
            value: MsgEnrollRelayers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeRelayers: (addresses: string[], creator: string): MsgRevokeRelayersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeRelayers",
            value: MsgRevokeRelayers.fromPartial({
              addresses,
              creator
            })
          };
        },
        enrollSwapManagers: (addresses: string[], creator: string): MsgEnrollSwapManagersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgEnrollSwapManagers",
            value: MsgEnrollSwapManagers.fromPartial({
              addresses,
              creator
            })
          };
        },
        revokeSwapManagers: (addresses: string[], creator: string): MsgRevokeSwapManagersEncodeObject => {
          return {
            typeUrl: "/shareledger.electoral.MsgRevokeSwapManagers",
            value: MsgRevokeSwapManagers.fromPartial({
              addresses,
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
    "/shareledger.electoral.MsgRevokeVoter": "electoral_revoke-voter",
    "/shareledger.electoral.MsgEnrollApprovers": "electoral_enroll-approvers",
    "/shareledger.electoral.MsgRevokeApprovers": "electoral_revoke-approvers",
    "/shareledger.electoral.MsgEnrollRelayers": "electoral_enroll-relayers",
    "/shareledger.electoral.MsgRevokeRelayers": "electoral_revoke-relayers",
    "/shareledger.electoral.MsgEnrollSwapManagers": "electoral_enroll-swap-managers",
    "/shareledger.electoral.MsgRevokeSwapManagers": "electoral_revoke-swap-managers"
  };
}
