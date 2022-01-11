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
