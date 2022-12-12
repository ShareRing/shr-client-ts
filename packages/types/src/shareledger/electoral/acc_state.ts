/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.electoral";
export interface AccState {
  key: string;
  address: string;
  status: string;
}

function createBaseAccState(): AccState {
  return {
    key: "",
    address: "",
    status: ""
  };
}

export const AccState = {
  encode(message: AccState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.status = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<AccState>, I>>(object: I): AccState {
    const message = createBaseAccState();
    message.key = object.key ?? "";
    message.address = object.address ?? "";
    message.status = object.status ?? "";
    return message;
  }
};
