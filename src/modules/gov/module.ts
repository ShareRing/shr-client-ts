/* eslint-disable @typescript-eslint/naming-convention */

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
import {ProposalStatus} from "../../codec/cosmos/gov/v1beta1/gov";
import {createPagination, createProtobufRpcClient} from "../../query";
import Long from "long";
import {Client} from "../../client";
import {MsgDepositEncodeObject, MsgSubmitProposalEncodeObject, MsgVoteEncodeObject, VoteOption} from "./amino";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {MsgDeposit, MsgSubmitProposal, MsgVote} from "../../codec/cosmos/gov/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";

export interface GovExtension {
  readonly gov: {
    readonly deposit: (proposalId: number, depositor: string) => Promise<QueryDepositResponse>;
    readonly deposits: (proposalId: number, paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
    readonly params: (paramsType: "voting" | "tallying" | "deposit") => Promise<QueryParamsResponse>;
    readonly proposal: (proposalId: number) => Promise<QueryProposalResponse>;
    readonly proposals: (
      proposalStatus: ProposalStatus,
      voter: string,
      depositor: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryProposalsResponse>;
    readonly tallyResult: (proposalId: number) => Promise<QueryTallyResultResponse>;
    readonly vote: (proposalId: number, voter: string) => Promise<QueryVoteResponse>;
    readonly votes: (proposalId: number, paginationKey?: Uint8Array) => Promise<QueryVotesResponse>;
    readonly tx: {
      readonly submitProposal: (
        initialDeposit: Coin[],
        proposer: string,
        content?: {title: string; description: string}
      ) => MsgSubmitProposalEncodeObject;
      readonly vote: (proposalId: number, voter: string, option: VoteOption) => MsgVoteEncodeObject;
      readonly deposit: (proposalId: number, depositor: string, amount: Coin[]) => MsgDepositEncodeObject;
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
      deposit: async (proposalId: number, depositor: string) => {
        const response = await queryService.Deposit({
          proposalId: Long.fromNumber(proposalId, true),
          depositor
        });
        return response;
      },
      deposits: async (proposalId: number, paginationKey?: Uint8Array) => {
        const response = await queryService.Deposits({
          proposalId: Long.fromNumber(proposalId, true),
          pagination: createPagination(paginationKey)
        });
        return response;
      },
      params: async (paramsType: "voting" | "tallying" | "deposit") => {
        const response = await queryService.Params({paramsType});
        return response;
      },
      proposal: async (proposalId: number) => {
        const response = await queryService.Proposal({
          proposalId: Long.fromNumber(proposalId)
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
      tallyResult: async (proposalId: number) => {
        const response = await queryService.TallyResult({
          proposalId: Long.fromNumber(proposalId)
        });
        return response;
      },
      vote: async (proposalId: number, voter: string) => {
        const response = await queryService.Vote({
          proposalId: Long.fromNumber(proposalId),
          voter
        });
        return response;
      },
      votes: async (proposalId: number, paginationKey?: Uint8Array) => {
        const response = await queryService.Votes({
          proposalId: Long.fromNumber(proposalId),
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
        vote: (proposalId: number, voter: string, option: VoteOption): MsgVoteEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: MsgVote.fromPartial({
              proposalId: Long.fromNumber(proposalId),
              voter,
              option
            })
          };
        },
        deposit: (proposalId: number, depositor: string, amount: Coin[]): MsgDepositEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: MsgDeposit.fromPartial({
              proposalId: Long.fromNumber(proposalId),
              depositor,
              amount: [...amount]
            })
          };
        }
      }
    };
  };
}
