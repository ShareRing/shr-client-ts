/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
/** store list of contract address of master builder */

export interface BuilderList {
  id: Long;
  contractAddress: string;
}

function createBaseBuilderList(): BuilderList {
  return {
    id: Long.UZERO,
    contractAddress: ""
  };
}

export const BuilderList = {
  encode(message: BuilderList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuilderList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuilderList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;

        case 2:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<BuilderList>, I>>(object: I): BuilderList {
    const message = createBaseBuilderList();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};
