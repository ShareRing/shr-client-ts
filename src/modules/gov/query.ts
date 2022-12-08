/* eslint-disable @typescript-eslint/naming-convention */

import {Uint64} from "@cosmjs/math";
import Long from "long";
import {BaseClient} from "../../baseclient";
import {Deposit, Proposal, ProposalStatus, TallyResult, Vote} from "../../codec/cosmos/gov/v1beta1/gov";
import {QueryClientImpl, QueryDepositsResponse, QueryProposalsResponse, QueryVotesResponse} from "../../codec/cosmos/gov/v1beta1/query";
import {createPagination, createProtobufRpcClient, longify, ProtobufRpcClient} from "../../query";

export type GovParamsType = "deposit" | "tallying" | "voting";

type GovProposalId = string | number | Long | Uint64;

export interface GovQueryExtensionMethods {
  deposit(proposalId: GovProposalId, depositor: string, height?: number): Promise<Deposit | undefined>;
  deposits(proposalId: GovProposalId, paginationKey?: Uint8Array, height?: number): Promise<QueryDepositsResponse>;
  proposal(proposalId: GovProposalId, height?: number): Promise<Proposal | undefined>;
  proposals(
    proposalStatus: ProposalStatus,
    voter: string,
    depositor: string,
    paginationKey?: Uint8Array,
    height?: number
  ): Promise<QueryProposalsResponse>;
  tallyResult(proposalId: GovProposalId, height?: number): Promise<TallyResult | undefined>;
  vote(proposalId: GovProposalId, voter: string, height?: number): Promise<Vote | undefined>;
  votes(proposalId: GovProposalId, paginationKey?: Uint8Array, height?: number): Promise<QueryVotesResponse>;
}

export interface GovQueryExtension {
  readonly gov: GovQueryExtensionMethods;
}

export function GovQueryExtension<T extends {new (...args: any[]): BaseClient & GovQueryExtension}>(constructor: T): T {
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
    get gov() {
      return {
        ...super["gov"],
        deposit: async (proposalId: GovProposalId, depositor: string, height?: number) => {
          rpcClient.withHeight(height);
          const {deposit} = await queryService.Deposit({
            proposalId: longify(proposalId),
            depositor
          });
          return deposit;
        },
        deposits: async (proposalId: GovProposalId, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.Deposits({
            proposalId: longify(proposalId),
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        proposal: async (proposalId: GovProposalId, height?: number) => {
          rpcClient.withHeight(height);
          const {proposal} = await queryService.Proposal({
            proposalId: longify(proposalId)
          });
          return proposal;
        },
        proposals: async (
          proposalStatus: ProposalStatus,
          voter: string,
          depositor: string,
          paginationKey?: Uint8Array,
          height?: number
        ) => {
          rpcClient.withHeight(height);
          const response = await queryService.Proposals({
            proposalStatus,
            voter,
            depositor,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        tallyResult: async (proposalId: GovProposalId, height?: number) => {
          rpcClient.withHeight(height);
          const {tally} = await queryService.TallyResult({
            proposalId: longify(proposalId)
          });
          return tally;
        },
        vote: async (proposalId: GovProposalId, voter: string, height?: number) => {
          rpcClient.withHeight(height);
          const {vote} = await queryService.Vote({
            proposalId: longify(proposalId),
            voter
          });
          return vote;
        },
        votes: async (proposalId: GovProposalId, paginationKey?: Uint8Array, height?: number) => {
          rpcClient.withHeight(height);
          const response = await queryService.Votes({
            proposalId: longify(proposalId),
            pagination: createPagination(paginationKey)
          });
          return response;
        }
      };
    }
  };
}
