/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.document";
export interface DocDetailState {
  data: string;
  version: number;
}

function createBaseDocDetailState(): DocDetailState {
  return {
    data: "",
    version: 0
  };
}

export const DocDetailState = {
  encode(message: DocDetailState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }

    if (message.version !== 0) {
      writer.uint32(16).int32(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DocDetailState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocDetailState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;

        case 2:
          message.version = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<DocDetailState>, I>>(object: I): DocDetailState {
    const message = createBaseDocDetailState();
    message.data = object.data ?? "";
    message.version = object.version ?? 0;
    return message;
  }
};
