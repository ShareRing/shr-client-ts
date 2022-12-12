/* eslint-disable */
import {AccState} from "./acc_state";
import {Authority} from "./authority";
import {Treasurer} from "./treasurer";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.electoral";
/** GenesisState defines the electoral module's genesis state. */

export interface GenesisState {
  accStateList: AccState[];
  authority?: Authority;
  treasurer?: Treasurer;
}

function createBaseGenesisState(): GenesisState {
  return {
    accStateList: [],
    authority: undefined,
    treasurer: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accStateList) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.authority !== undefined) {
      Authority.encode(message.authority, writer.uint32(18).fork()).ldelim();
    }

    if (message.treasurer !== undefined) {
      Treasurer.encode(message.treasurer, writer.uint32(26).fork()).ldelim();
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
          message.accStateList.push(AccState.decode(reader, reader.uint32()));
          break;

        case 2:
          message.authority = Authority.decode(reader, reader.uint32());
          break;

        case 3:
          message.treasurer = Treasurer.decode(reader, reader.uint32());
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
    message.accStateList = object.accStateList?.map((e) => AccState.fromPartial(e)) || [];
    message.authority = object.authority !== undefined && object.authority !== null ? Authority.fromPartial(object.authority) : undefined;
    message.treasurer = object.treasurer !== undefined && object.treasurer !== null ? Treasurer.fromPartial(object.treasurer) : undefined;
    return message;
  }
};
