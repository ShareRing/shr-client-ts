/* eslint-disable */
import {Coin} from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
export interface Reward {
  /** account address of reward owner */
  index: string;
  /** reward amount */

  amount: Coin[];
}

function createBaseReward(): Reward {
  return {
    index: "",
    amount: []
  };
}

export const Reward = {
  encode(message: Reward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReward();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        case 2:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Reward>, I>>(object: I): Reward {
    const message = createBaseReward();
    message.index = object.index ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  }
};
