/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {Any} from "../../codec/google/protobuf/any";
import {VoteOption} from "../../codec/cosmos/gov/v1beta1/gov";
import {EncodeObject} from "../../signing";
import {MsgDeposit, MsgSubmitProposal, MsgVote} from "../../codec/cosmos/gov/v1beta1/tx";
import {AminoConverter} from "../../amino/types";
import Long from "long";

export {VoteOption};

/** Supports submitting arbitrary proposal content. */
export interface AminoMsgSubmitProposal extends AminoMsg {
  readonly type: "cosmos-sdk/MsgSubmitProposal";
  readonly value: {
    readonly content?: Any;
    readonly initial_deposit: readonly Coin[];
    /** Bech32 account address */
    readonly proposer: string;
  };
}

export function isAminoMsgSubmitProposal(msg: AminoMsg): msg is AminoMsgSubmitProposal {
  return msg.type === "cosmos-sdk/MsgSubmitProposal";
}

/** Casts a vote */
export interface AminoMsgVote extends AminoMsg {
  readonly type: "cosmos-sdk/MsgVote";
  readonly value: {
    readonly proposal_id: number;
    /** Bech32 account address */
    readonly voter: string;
    readonly option: VoteOption;
  };
}

export function isAminoMsgVote(msg: AminoMsg): msg is AminoMsgVote {
  return msg.type === "cosmos-sdk/MsgVote";
}

/** Submits a deposit to an existing proposal */
export interface AminoMsgDeposit extends AminoMsg {
  readonly type: "cosmos-sdk/MsgDeposit";
  readonly value: {
    readonly proposal_id: number;
    /** Bech32 account address */
    readonly depositor: string;
    readonly amount: readonly Coin[];
  };
}

export function isAminoMsgDeposit(msg: AminoMsg): msg is AminoMsgDeposit {
  return msg.type === "cosmos-sdk/MsgDeposit";
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

export interface MsgDepositEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  readonly value: Partial<MsgDeposit>;
}

export function isMsgDepositEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDepositEncodeObject {
  return (encodeObject as MsgDepositEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgDeposit";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/cosmos.gov.v1beta1.MsgSubmitProposal": {
      aminoType: "cosmos-sdk/MsgSubmitProposal",
      toAmino: ({initialDeposit, proposer, content}: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => ({
        initial_deposit: [...initialDeposit],
        proposer,
        content
      }),
      fromAmino: ({initial_deposit, proposer, content}: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => ({
        initialDeposit: [...initial_deposit],
        proposer,
        content
      })
    },
    "/cosmos.gov.v1beta1.MsgVote": {
      aminoType: "cosmos-sdk/MsgVote",
      toAmino: ({proposalId, voter, option}: MsgVote): AminoMsgVote["value"] => ({
        proposal_id: proposalId.toNumber(),
        voter,
        option
      }),
      fromAmino: ({proposal_id, voter, option}: AminoMsgVote["value"]): MsgVote => ({
        proposalId: Long.fromNumber(proposal_id),
        voter,
        option
      })
    },
    "/cosmos.gov.v1beta1.MsgDeposit": {
      aminoType: "cosmos-sdk/MsgDeposit",
      toAmino: ({proposalId, depositor, amount}: MsgDeposit): AminoMsgDeposit["value"] => ({
        proposal_id: proposalId.toNumber(),
        depositor,
        amount: [...amount]
      }),
      fromAmino: ({proposal_id, depositor, amount}: AminoMsgDeposit["value"]): MsgDeposit => ({
        proposalId: Long.fromNumber(proposal_id),
        depositor,
        amount: [...amount]
      })
    }
  };
}
