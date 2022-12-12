/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.id";
export interface BaseID {
  issuerAddress: string;
  backupAddress: string;
  ownerAddress: string;
  extraData: string;
}

function createBaseBaseID(): BaseID {
  return {
    issuerAddress: "",
    backupAddress: "",
    ownerAddress: "",
    extraData: ""
  };
}

export const BaseID = {
  encode(message: BaseID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerAddress !== "") {
      writer.uint32(10).string(message.issuerAddress);
    }

    if (message.backupAddress !== "") {
      writer.uint32(18).string(message.backupAddress);
    }

    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }

    if (message.extraData !== "") {
      writer.uint32(34).string(message.extraData);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseID();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.issuerAddress = reader.string();
          break;

        case 2:
          message.backupAddress = reader.string();
          break;

        case 3:
          message.ownerAddress = reader.string();
          break;

        case 4:
          message.extraData = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<BaseID>, I>>(object: I): BaseID {
    const message = createBaseBaseID();
    message.issuerAddress = object.issuerAddress ?? "";
    message.backupAddress = object.backupAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.extraData = object.extraData ?? "";
    return message;
  }
};
