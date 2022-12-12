/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.document";
export interface DocBasicState {
  holder: string;
  issuer: string;
}

function createBaseDocBasicState(): DocBasicState {
  return {
    holder: "",
    issuer: ""
  };
}

export const DocBasicState = {
  encode(message: DocBasicState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }

    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DocBasicState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocBasicState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;

        case 2:
          message.issuer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<DocBasicState>, I>>(object: I): DocBasicState {
    const message = createBaseDocBasicState();
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    return message;
  }
};
