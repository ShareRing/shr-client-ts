import {AccState} from "@shareledgerjs/types/shareledger/electoral/acc_state";
import {QueryClientImpl} from "@shareledgerjs/types/shareledger/electoral/query";

import {BaseClient} from "../../baseclient";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export interface ElectoralQueryExtensionMethods {
  accountOperator(address: string, height?: number): Promise<AccState | undefined>;
  accountOperators(height?: number): Promise<AccState[]>;
  docIssuer(address: string, height?: number): Promise<AccState | undefined>;
  docIssuers(height?: number): Promise<AccState[]>;
  loader(address: string, height?: number): Promise<AccState | undefined>;
  loaders(height?: number): Promise<AccState[]>;
  voter(address: string, height?: number): Promise<AccState | undefined>;
  voters(height?: number): Promise<AccState[]>;
  idSigner(address: string, height?: number): Promise<AccState | undefined>;
  idSigners(height?: number): Promise<AccState[]>;
  approver(address: string, height?: number): Promise<AccState | undefined>;
  approvers(height?: number): Promise<AccState[]>;
  relayer(address: string, height?: number): Promise<AccState | undefined>;
  relayers(height?: number): Promise<AccState[]>;
  swapManager(address: string, height?: number): Promise<AccState | undefined>;
  swapManagers(height?: number): Promise<AccState[]>;
}

export interface ElectoralQueryExtension {
  readonly electoral: ElectoralQueryExtensionMethods;
}

export function ElectoralQueryExtension<T extends {new (...args: any[]): BaseClient & ElectoralQueryExtension}>(constructor: T): T {
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
    override get electoral() {
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
        },
        approver: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {accState} = await queryService.Approver({address});
          return accState;
        },
        approvers: async (height?: number) => {
          rpcClient.withHeight(height);
          const {approvers} = await queryService.Approvers({});
          return approvers;
        },
        relayer: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {accState} = await queryService.Relayer({address});
          return accState;
        },
        relayers: async (height?: number) => {
          rpcClient.withHeight(height);
          const {relayers} = await queryService.Relayers({});
          return relayers;
        }
      };
    }
  };
}
