/* eslint-disable */
import {Params} from "./params";
import {Reward} from "./reward";
import {BuilderCount} from "./builder_count";
import {BuilderList} from "./builder_list";
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
/** GenesisState defines the sdistribution module's genesis state. */

export interface GenesisState {
  params?: Params;
  rewardList: Reward[];
  builderCountList: BuilderCount[];
  builderListList: BuilderList[];
  builderListCount: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    rewardList: [],
    builderCountList: [],
    builderListList: [],
    builderListCount: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.rewardList) {
      Reward.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.builderCountList) {
      BuilderCount.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.builderListList) {
      BuilderList.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (!message.builderListCount.isZero()) {
      writer.uint32(40).uint64(message.builderListCount);
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
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.rewardList.push(Reward.decode(reader, reader.uint32()));
          break;

        case 3:
          message.builderCountList.push(BuilderCount.decode(reader, reader.uint32()));
          break;

        case 4:
          message.builderListList.push(BuilderList.decode(reader, reader.uint32()));
          break;

        case 5:
          message.builderListCount = reader.uint64() as Long;
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.rewardList = object.rewardList?.map((e) => Reward.fromPartial(e)) || [];
    message.builderCountList = object.builderCountList?.map((e) => BuilderCount.fromPartial(e)) || [];
    message.builderListList = object.builderListList?.map((e) => BuilderList.fromPartial(e)) || [];
    message.builderListCount =
      object.builderListCount !== undefined && object.builderListCount !== null ? Long.fromValue(object.builderListCount) : Long.UZERO;
    return message;
  }
};
