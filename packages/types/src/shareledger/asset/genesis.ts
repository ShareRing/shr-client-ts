/* eslint-disable */
import {Asset} from "./asset";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.asset";
/** GenesisState defines the asset module's genesis state. */

export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  assets: Asset[];
}

function createBaseGenesisState(): GenesisState {
  return {
    assets: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.assets.push(Asset.decode(reader, reader.uint32()));
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
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  }
};
