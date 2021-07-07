/* eslint-disable @typescript-eslint/naming-convention */

import {QueryClient} from "./client";
import {createPagination, createProtobufRpcClient} from "./utils";
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
} from "../codec/cosmos/gov/v1beta1/query";
import {ProposalStatus} from "../codec/cosmos/gov/v1beta1/gov";
import Long from "long";

export interface GovExtension {
  readonly gov: {
    deposit: (proposalId: number, depositor: string) => Promise<QueryDepositResponse>;
    deposits: (proposalId: number, paginationKey?: Uint8Array) => Promise<QueryDepositsResponse>;
    params: (paramsType: "voting" | "tallying" | "deposit") => Promise<QueryParamsResponse>;
    proposal: (proposalId: number) => Promise<QueryProposalResponse>;
    proposals: (
      proposalStatus: ProposalStatus,
      voter: string,
      depositor: string,
      paginationKey?: Uint8Array
    ) => Promise<QueryProposalsResponse>;
    tallyResult: (proposalId: number) => Promise<QueryTallyResultResponse>;
    vote: (proposalId: number, voter: string) => Promise<QueryVoteResponse>;
    votes: (proposalId: number, paginationKey?: Uint8Array) => Promise<QueryVotesResponse>;
  };
}

export function setupGovExtension(base: QueryClient): GovExtension {
  const rpc = createProtobufRpcClient(base);
  // Use this service to get easy typed access to query methods
  // This cannot be used for proof verification
  const queryService = new QueryClientImpl(rpc);

  return {
    gov: {
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
      }
    }
  };
}
