/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.asset";
export interface Asset {
  creator: string;
  hash: Uint8Array;
  UUID: string;
  status: boolean;
  rate: Long;
}

function createBaseAsset(): Asset {
  return {
    creator: "",
    hash: new Uint8Array(),
    UUID: "",
    status: false,
    rate: Long.ZERO
  };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }

    if (message.UUID !== "") {
      writer.uint32(26).string(message.UUID);
    }

    if (message.status === true) {
      writer.uint32(32).bool(message.status);
    }

    if (!message.rate.isZero()) {
      writer.uint32(40).int64(message.rate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.hash = reader.bytes();
          break;

        case 3:
          message.UUID = reader.string();
          break;

        case 4:
          message.status = reader.bool();
          break;

        case 5:
          message.rate = reader.int64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Asset>, I>>(object: I): Asset {
    const message = createBaseAsset();
    message.creator = object.creator ?? "";
    message.hash = object.hash ?? new Uint8Array();
    message.UUID = object.UUID ?? "";
    message.status = object.status ?? false;
    message.rate = object.rate !== undefined && object.rate !== null ? Long.fromValue(object.rate) : Long.ZERO;
    return message;
  }
};
