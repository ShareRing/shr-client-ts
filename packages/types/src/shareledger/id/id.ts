/* eslint-disable */
import {BaseID} from "./base_id";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.id";
export interface Id {
  id: string;
  data?: BaseID;
}

function createBaseId(): Id {
  return {
    id: "",
    data: undefined
  };
}

export const Id = {
  encode(message: Id, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.data !== undefined) {
      BaseID.encode(message.data, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Id {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseId();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.data = BaseID.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Id>, I>>(object: I): Id {
    const message = createBaseId();
    message.id = object.id ?? "";
    message.data = object.data !== undefined && object.data !== null ? BaseID.fromPartial(object.data) : undefined;
    return message;
  }
};
