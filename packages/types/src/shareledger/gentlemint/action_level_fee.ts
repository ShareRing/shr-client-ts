/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.gentlemint";
export interface ActionLevelFee {
  action: string;
  level: string;
  creator: string;
}

function createBaseActionLevelFee(): ActionLevelFee {
  return {
    action: "",
    level: "",
    creator: ""
  };
}

export const ActionLevelFee = {
  encode(message: ActionLevelFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.action !== "") {
      writer.uint32(10).string(message.action);
    }

    if (message.level !== "") {
      writer.uint32(18).string(message.level);
    }

    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionLevelFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionLevelFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.action = reader.string();
          break;

        case 2:
          message.level = reader.string();
          break;

        case 3:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ActionLevelFee>, I>>(object: I): ActionLevelFee {
    const message = createBaseActionLevelFee();
    message.action = object.action ?? "";
    message.level = object.level ?? "";
    message.creator = object.creator ?? "";
    return message;
  }
};
