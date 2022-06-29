/* eslint-disable @typescript-eslint/naming-convention */

import {Uint64} from "@cosmjs/math";
import Long from "long";
import {Client} from "../../client";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {Deposit, Proposal, ProposalStatus, TallyResult, Vote} from "../../codec/cosmos/gov/v1beta1/gov";
import {QueryClientImpl, QueryDepositsResponse, QueryProposalsResponse, QueryVotesResponse} from "../../codec/cosmos/gov/v1beta1/query";
import {MsgDeposit, MsgSubmitProposal, MsgVote} from "../../codec/cosmos/gov/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";
import {createPagination, createProtobufRpcClient, longify, ProtobufRpcClient} from "../../query";
import {MsgDepositEncodeObject, MsgSubmitProposalEncodeObject, MsgVoteEncodeObject, VoteOption} from "./amino";

export type GovParamsType = "deposit" | "tallying" | "voting";

export type GovProposalId = string | number | Long | Uint64;

export type GovQueryExtension = {
  get gov(): {
    readonly deposit: (proposalId: GovProposalId, depositor: string, height?: number) => Promise<Deposit | undefined>;
    readonly deposits: (proposalId: GovProposalId, paginationKey?: Uint8Array, height?: number) => Promise<QueryDepositsResponse>;
    readonly proposal: (proposalId: GovProposalId, height?: number) => Promise<Proposal | undefined>;
    readonly proposals: (
      proposalStatus: ProposalStatus,
      voter: string,
      depositor: string,
      paginationKey?: Uint8Array,
      height?: number
    ) => Promise<QueryProposalsResponse>;
    readonly tallyResult: (proposalId: GovProposalId, height?: number) => Promise<TallyResult | undefined>;
    readonly vote: (proposalId: GovProposalId, voter: string, height?: number) => Promise<Vote | undefined>;
    readonly votes: (proposalId: GovProposalId, paginationKey?: Uint8Array, height?: number) => Promise<QueryVotesResponse>;
  };
};

export type GovTxExtension = {
  get gov(): {
    readonly submitProposal: (
      proposer: string,
      initialDeposit: Coin[],
      content?: {title: string; description: string}
    ) => MsgSubmitProposalEncodeObject;
    readonly voteTx: (proposalId: GovProposalId, voter: string, option: VoteOption) => MsgVoteEncodeObject;
    readonly depositTx: (proposalId: GovProposalId, depositor: string, amount: Coin[]) => MsgDepositEncodeObject;
  };
};

export type GovExtension = GovQueryExtension & GovTxExtension;

export function GovQueryExtension<T extends {new (...args: any[]): Client & GovQueryExtension}>(constructor: T): T {
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

export function GovTxExtension<T extends {new (...args: any[]): Client & GovTxExtension}>(constructor: T): T {
  return class extends constructor {
    get gov() {
      return {
        ...super["gov"],
        submitProposal: (
          proposer: string,
          initialDeposit: Coin[],
          content?: {title: string; description: string}
        ): MsgSubmitProposalEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
            value: MsgSubmitProposal.fromPartial({
              proposer,
              initialDeposit: [...initialDeposit],
              content: content
                ? Any.fromJSON({
                    typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                    value: {
                      title: content.title,
                      description: content.description
                    }
                  })
                : undefined
            })
          };
        },
        voteTx: (proposalId: GovProposalId, voter: string, option: VoteOption): MsgVoteEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: MsgVote.fromPartial({
              proposalId: longify(proposalId),
              voter,
              option
            })
          };
        },
        depositTx: (proposalId: GovProposalId, depositor: string, amount: Coin[]): MsgDepositEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: MsgDeposit.fromPartial({
              proposalId: longify(proposalId),
              depositor,
              amount: [...amount]
            })
          };
        }
      };
    }
  };
}

export function GovExtension<T extends {new (...args: any[]): Client & GovExtension}>(constructor: T): T {
  return class extends GovTxExtension(GovQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": "gov_submit-proposal",
    "/cosmos.gov.v1beta1.MsgDeposit": "gov_deposit",
    "/cosmos.gov.v1beta1.MsgVote": "gov_vote"
  };
}
