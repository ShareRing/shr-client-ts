/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.document";
export interface Document {
  holder: string;
  issuer: string;
  proof: string;
  data: string;
  version: number;
}

function createBaseDocument(): Document {
  return {
    holder: "",
    issuer: "",
    proof: "",
    data: "",
    version: 0
  };
}

export const Document = {
  encode(message: Document, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.holder !== "") {
      writer.uint32(10).string(message.holder);
    }

    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }

    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }

    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }

    if (message.version !== 0) {
      writer.uint32(40).int32(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.holder = reader.string();
          break;

        case 2:
          message.issuer = reader.string();
          break;

        case 3:
          message.proof = reader.string();
          break;

        case 4:
          message.data = reader.string();
          break;

        case 5:
          message.version = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.holder = object.holder ?? "";
    message.issuer = object.issuer ?? "";
    message.proof = object.proof ?? "";
    message.data = object.data ?? "";
    message.version = object.version ?? 0;
    return message;
  }
};
