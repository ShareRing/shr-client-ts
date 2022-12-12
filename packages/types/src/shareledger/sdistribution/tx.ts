/* eslint-disable */
import {Coin} from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact, Rpc} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
/** must withdraw all reward at once */

export interface MsgWithdrawReward {}
export interface MsgWithdrawRewardResponse {
  amount: Coin[];
}

function createBaseMsgWithdrawReward(): MsgWithdrawReward {
  return {};
}

export const MsgWithdrawReward = {
  encode(_: MsgWithdrawReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawReward>, I>>(_: I): MsgWithdrawReward {
    const message = createBaseMsgWithdrawReward();
    return message;
  }
};

function createBaseMsgWithdrawRewardResponse(): MsgWithdrawRewardResponse {
  return {
    amount: []
  };
}

export const MsgWithdrawRewardResponse = {
  encode(message: MsgWithdrawRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewardResponse>, I>>(object: I): MsgWithdrawRewardResponse {
    const message = createBaseMsgWithdrawRewardResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  }
};
/** Msg defines the Msg service. */

export interface Msg {
  WithdrawReward(request?: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.WithdrawReward = this.WithdrawReward.bind(this);
  }

  WithdrawReward(request: MsgWithdrawReward = {}): Promise<MsgWithdrawRewardResponse> {
    const data = MsgWithdrawReward.encode(request).finish();
    const promise = this.rpc.request("sharering.shareledger.sdistribution.Msg", "WithdrawReward", data);
    return promise.then((data) => MsgWithdrawRewardResponse.decode(new _m0.Reader(data)));
  }
}
