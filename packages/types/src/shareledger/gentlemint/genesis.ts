/* eslint-disable */
import {ExchangeRate} from "./exchange_rate";
import {LevelFee} from "./level_fee";
import {ActionLevelFee} from "./action_level_fee";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.gentlemint";
/** GenesisState defines the gentlemint module's genesis state. */

export interface GenesisState {
  exchangeRate?: ExchangeRate;
  levelFeeList: LevelFee[];
  actionLevelFeeList: ActionLevelFee[];
}

function createBaseGenesisState(): GenesisState {
  return {
    exchangeRate: undefined,
    levelFeeList: [],
    actionLevelFeeList: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== undefined) {
      ExchangeRate.encode(message.exchangeRate, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.levelFeeList) {
      LevelFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.actionLevelFeeList) {
      ActionLevelFee.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = ExchangeRate.decode(reader, reader.uint32());
          break;

        case 2:
          message.levelFeeList.push(LevelFee.decode(reader, reader.uint32()));
          break;

        case 3:
          message.actionLevelFeeList.push(ActionLevelFee.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.exchangeRate =
      object.exchangeRate !== undefined && object.exchangeRate !== null ? ExchangeRate.fromPartial(object.exchangeRate) : undefined;
    message.levelFeeList = object.levelFeeList?.map((e) => LevelFee.fromPartial(e)) || [];
    message.actionLevelFeeList = object.actionLevelFeeList?.map((e) => ActionLevelFee.fromPartial(e)) || [];
    return message;
  }
};
