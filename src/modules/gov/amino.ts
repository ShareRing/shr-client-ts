/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {Any} from "../../codec/google/protobuf/any";
import {VoteOption} from "../../codec/cosmos/gov/v1beta1/gov";
import {EncodeObject, GeneratedType} from "../../signing";
import {MsgDeposit, MsgSubmitProposal, MsgVote} from "../../codec/cosmos/gov/v1beta1/tx";
import {TextProposal} from "../../codec/cosmos/gov/v1beta1/gov";
import {AminoConverter} from "../../amino/types";
import Long from "long";
import { assert, assertDefinedAndNotNull, isNonNullObject } from "@cosmjs/utils";

export {VoteOption};

export interface AminoTextProposal extends AminoMsg {
  readonly type: "cosmos-sdk/TextProposal";
  readonly value: {
    readonly title: string;
    readonly description: string;
  };
}

export function isAminoTextProposal(msg: AminoMsg): msg is AminoTextProposal {
  return msg.type === "cosmos-sdk/TextProposal";
}

export interface TextProposalEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.TextProposal";
  readonly value: Partial<TextProposal>;
}

export function isMsgTextProposalEncodeObject(encodeObject: EncodeObject): encodeObject is TextProposalEncodeObject {
  return (encodeObject as TextProposalEncodeObject).typeUrl === "/cosmos.gov.v1beta1.TextProposal";
}

/** Supports submitting arbitrary proposal content. */
export interface AminoMsgSubmitProposal extends AminoMsg {
  readonly type: "cosmos-sdk/MsgSubmitProposal";
  readonly value: {
    readonly content: {
      readonly type: "cosmos-sdk/TextProposal";
      readonly value: {
        readonly title: string;
        readonly description: string;
      };
    };
    readonly initial_deposit: readonly Coin[];
    /** Bech32 account address */
    readonly proposer: string;
  };
}

export function isAminoMsgSubmitProposal(msg: AminoMsg): msg is AminoMsgSubmitProposal {
  return msg.type === "cosmos-sdk/MsgSubmitProposal";
}

export interface MsgSubmitProposalEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  readonly value: Partial<MsgSubmitProposal>;
}

export function isMsgSubmitProposalEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSubmitProposalEncodeObject {
  return (encodeObject as MsgSubmitProposalEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgSubmitProposal";
}

/** Casts a vote */
export interface AminoMsgVote extends AminoMsg {
  readonly type: "cosmos-sdk/MsgVote";
  readonly value: {
    readonly proposal_id: string;
    /** Bech32 account address */
    readonly voter: string;
    readonly option: VoteOption;
  };
}

export function isAminoMsgVote(msg: AminoMsg): msg is AminoMsgVote {
  return msg.type === "cosmos-sdk/MsgVote";
}

export interface MsgVoteEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  readonly value: Partial<MsgVote>;
}

export function isMsgVoteEncodeObject(encodeObject: EncodeObject): encodeObject is MsgVoteEncodeObject {
  return (encodeObject as MsgVoteEncodeObject).typeUrl === "/cosmos.gov.v1beta1.MsgVote";
}

/** Submits a deposit to an existing proposal */
export interface AminoMsgDeposit extends AminoMsg {
  readonly type: "cosmos-sdk/MsgDeposit";
  readonly value: {
    readonly proposal_id: string;
    /** Bech32 account address */
    readonly depositor: string;
    readonly amount: readonly Coin[];
  };
}

export function isAminoMsgDeposit(msg: AminoMsg): msg is AminoMsgDeposit {
  return msg.type === "cosmos-sdk/MsgDeposit";
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
      toAmino: ({initialDeposit, proposer, content}: MsgSubmitProposal): AminoMsgSubmitProposal["value"] => {
        assertDefinedAndNotNull(content);
        let proposal: any;
        switch (content.typeUrl) {
          case "/cosmos.gov.v1beta1.TextProposal": {
            const textProposal = TextProposal.decode(content.value);
            proposal = {
              type: "cosmos-sdk/TextProposal",
              value: {
                description: textProposal.description,
                title: textProposal.title,
              },
            };
            break;
          }
          default:
            throw new Error(`Unsupported proposal type: '${content.typeUrl}'`);
        }
        return {
          initial_deposit: initialDeposit,
          proposer: proposer,
          content: proposal,
        };
      },
      fromAmino: ({initial_deposit, proposer, content}: AminoMsgSubmitProposal["value"]): MsgSubmitProposal => {
        let any_content: Any;
        switch (content.type) {
          case "cosmos-sdk/TextProposal": {
            const { value } = content;
            assert(isNonNullObject(value));
            const { title, description } = value as any;
            assert(typeof title === "string");
            assert(typeof description === "string");
            any_content = Any.fromPartial({
              typeUrl: "/cosmos.gov.v1beta1.TextProposal",
              value: TextProposal.encode(
                TextProposal.fromPartial({
                  title: title,
                  description: description,
                }),
              ).finish(),
            });
            break;
          }
          default:
            throw new Error(`Unsupported proposal type: '${content.type}'`);
        }
        return {
          initialDeposit: Array.from(initial_deposit),
          proposer: proposer,
          content: any_content,
        };
      }
    },
    "/cosmos.gov.v1beta1.MsgVote": {
      aminoType: "cosmos-sdk/MsgVote",
      toAmino: ({proposalId, voter, option}: MsgVote): AminoMsgVote["value"] => ({
        proposal_id: proposalId.toString(),
        voter,
        option
      }),
      fromAmino: ({proposal_id, voter, option}: AminoMsgVote["value"]): MsgVote => ({
        proposalId: Long.fromString(proposal_id),
        voter,
        option
      })
    },
    "/cosmos.gov.v1beta1.MsgDeposit": {
      aminoType: "cosmos-sdk/MsgDeposit",
      toAmino: ({proposalId, depositor, amount}: MsgDeposit): AminoMsgDeposit["value"] => ({
        proposal_id: proposalId.toString(),
        depositor,
        amount: [...amount]
      }),
      fromAmino: ({proposal_id, depositor, amount}: AminoMsgDeposit["value"]): MsgDeposit => ({
        proposalId: Long.fromString(proposal_id),
        depositor,
        amount: [...amount]
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.gov.v1beta1.MsgSubmitProposal", MsgSubmitProposal],
    ["/cosmos.gov.v1beta1.MsgDeposit", MsgDeposit],
    ["/cosmos.gov.v1beta1.MsgVote", MsgVote]
  ];
}
