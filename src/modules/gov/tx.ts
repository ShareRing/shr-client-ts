import {Uint64} from "@cosmjs/math";
import Long from "long";
import {BaseClient} from "../../baseclient";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {TextProposal, VoteOption} from "../../codec/cosmos/gov/v1beta1/gov";
import {MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted} from "../../codec/cosmos/gov/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";
import {longify} from "../../query";
import {EncodeObject, GeneratedType} from "../../signing";

export type GovProposalId = string | number | Long | Uint64;

export function createGovTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
    ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
    ["/cosmos.gov.v1beta1.MsgVote", MsgVote],
    ["/cosmos.gov.v1beta1.MsgVoteWeighted", MsgVoteWeighted]
  ];
}

export function createGovActions(): Record<string, string> {
  return {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": "gov_submit-proposal",
    "/cosmos.gov.v1beta1.MsgDeposit": "gov_deposit",
    "/cosmos.gov.v1beta1.MsgVote": "gov_vote"
  };
}

export interface TextProposalEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.TextProposal";
  readonly value: Partial<TextProposal>;
}

export function isMsgTextProposalEncodeObject(encodeObject: EncodeObject): encodeObject is TextProposalEncodeObject {
  return (encodeObject as TextProposalEncodeObject).typeUrl === "/cosmos.gov.v1beta1.TextProposal";
}

export interface MsgSubmitProposalEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  readonly value: Partial<MsgSubmitProposal>;
}

export function isMsgSubmitProposalEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSubmitProposalEncodeObject {
  return (encodeObject as MsgSubmitProposalEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgSubmitProposal";
}

export interface MsgVoteEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  readonly value: Partial<MsgVote>;
}

export function isMsgVoteEncodeObject(encodeObject: EncodeObject): encodeObject is MsgVoteEncodeObject {
  return (encodeObject as MsgVoteEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgVote";
}

export interface MsgVoteWeightedEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted";
  readonly value: Partial<MsgVoteWeighted>;
}

export function isMsgVoteWeightedEncodeObject(encodeObject: EncodeObject): encodeObject is MsgVoteWeightedEncodeObject {
  return (encodeObject as MsgVoteWeightedEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgVoteWeighted";
}

export interface MsgDepositEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  readonly value: Partial<MsgDeposit>;
}

export function isMsgDepositEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDepositEncodeObject {
  return (encodeObject as MsgDepositEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgDeposit";
}

export interface GovTxExtensionMethods {
  submitProposal(proposer: string, initialDeposit: Coin[], content?: {title: string; description: string}): MsgSubmitProposalEncodeObject;
  voteTx(proposalId: GovProposalId, voter: string, option: VoteOption): MsgVoteEncodeObject;
  voteWeightedTx(
    proposalId: GovProposalId,
    voter: string,
    options: Array<{option: VoteOption; weight: string}>
  ): MsgVoteWeightedEncodeObject;
  depositTx(proposalId: GovProposalId, depositor: string, amount: Coin[]): MsgDepositEncodeObject;
}

export interface GovTxExtension {
  readonly gov: GovTxExtensionMethods;
}

export function GovTxExtension<T extends {new (...args: any[]): BaseClient & GovTxExtension}>(constructor: T): T {
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
        voteWeightedTx: (
          proposalId: GovProposalId,
          voter: string,
          options: Array<{option: VoteOption; weight: string}>
        ): MsgVoteWeightedEncodeObject => {
          return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
            value: MsgVoteWeighted.fromPartial({
              proposalId: longify(proposalId),
              voter,
              options
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
