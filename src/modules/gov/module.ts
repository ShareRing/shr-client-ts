/* eslint-disable @typescript-eslint/naming-convention */

import {Uint64} from "@cosmjs/math";
import Long from "long";
import {Client} from "../../client";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {ProposalStatus} from "../../codec/cosmos/gov/v1beta1/gov";
import {
  QueryClientImpl,
  QueryDepositResponse,
  QueryDepositsResponse,
  QueryParamsResponse,
  QueryProposalResponse,
  QueryProposalsResponse,
  QueryTallyResultResponse,
  QueryVoteResponse,
  QueryVotesResponse
} from "../../codec/cosmos/gov/v1beta1/query";
import {MsgDeposit, MsgSubmitProposal, MsgVote} from "../../codec/cosmos/gov/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";
import {createPagination, createProtobufRpcClient, longify} from "../../query";
import {MsgDepositEncodeObject, MsgSubmitProposalEncodeObject, MsgVoteEncodeObject, VoteOption} from "./amino";

export type GovParamsType = "deposit" | "tallying" | "voting";

export type GovProposalId = string | number | Long | Uint64;

export interface GovExtension {
  readonly gov: {
    readonly deposit: (proposalId: GovProposalId, depositor: string) => Promise<QueryDepositResponse>;
    readonly deposits: (proposalId: GovProposalId, paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
    readonly params: (paramsType: GovParamsType) => Promise<QueryParamsResponse>;
    readonly proposal: (proposalId: GovProposalId) => Promise<QueryProposalResponse>;
    readonly proposals: (
      proposalStatus: ProposalStatus,
      voter: string,
      depositor: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryProposalsResponse>;
    readonly tallyResult: (proposalId: GovProposalId) => Promise<QueryTallyResultResponse>;
    readonly vote: (proposalId: GovProposalId, voter: string) => Promise<QueryVoteResponse>;
    readonly votes: (proposalId: GovProposalId, paginationKey?: Uint8Array) => Promise<QueryVotesResponse>;
    readonly tx: {
      readonly submitProposal: (
        initialDeposit: Coin[],
        proposer: string,
        content?: {title: string; description: string}
      ) => MsgSubmitProposalEncodeObject;
      readonly vote: (proposalId: GovProposalId, voter: string, option: VoteOption) => MsgVoteEncodeObject;
      readonly deposit: (proposalId: GovProposalId, depositor: string, amount: Coin[]) => MsgDepositEncodeObject;
    };
  };
}

export function GovExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    gov = {
      deposit: async (proposalId: GovProposalId, depositor: string) => {
        const response = await queryService.Deposit({
          proposalId: longify(proposalId),
          depositor
        });
        return response;
      },
      deposits: async (proposalId: GovProposalId, paginationKey?: Uint8Array) => {
        const response = await queryService.Deposits({
          proposalId: longify(proposalId),
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      params: async (paramsType: GovParamsType) => {
        const response = await queryService.Params({paramsType});
        return response;
      },
      proposal: async (proposalId: GovProposalId) => {
        const response = await queryService.Proposal({
          proposalId: longify(proposalId)
        });
        return response;
      },
      proposals: async (proposalStatus: ProposalStatus, voter: string, depositor: string, paginationKey?: Uint8Array) => {
        const response = await queryService.Proposals({
          proposalStatus,
          voter,
          depositor,
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      tallyResult: async (proposalId: GovProposalId) => {
        const response = await queryService.TallyResult({
          proposalId: longify(proposalId)
        });
        return response;
      },
      vote: async (proposalId: GovProposalId, voter: string) => {
        const response = await queryService.Vote({
          proposalId: longify(proposalId),
          voter
        });
        return response;
      },
      votes: async (proposalId: GovProposalId, paginationKey?: Uint8Array) => {
        const response = await queryService.Votes({
          proposalId: longify(proposalId),
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      tx: {
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
        vote: (proposalId: GovProposalId, voter: string, option: VoteOption): MsgVoteEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: MsgVote.fromPartial({
              proposalId: longify(proposalId),
              voter,
              option
            })
          };
        },
        deposit: (proposalId: GovProposalId, depositor: string, amount: Coin[]): MsgDepositEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: MsgDeposit.fromPartial({
              proposalId: longify(proposalId),
              depositor,
              amount: [...amount]
            })
          };
        }
      }
    };
  };
}
