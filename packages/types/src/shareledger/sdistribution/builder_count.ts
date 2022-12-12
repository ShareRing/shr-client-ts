/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
export interface BuilderCount {
  /** contract address */
  index: string;
  count: number;
}

function createBaseBuilderCount(): BuilderCount {
  return {
    index: "",
    count: 0
  };
}

export const BuilderCount = {
  encode(message: BuilderCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuilderCount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuilderCount();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        case 2:
          message.count = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<BuilderCount>, I>>(object: I): BuilderCount {
    const message = createBaseBuilderCount();
    message.index = object.index ?? "";
    message.count = object.count ?? 0;
    return message;
  }
};
