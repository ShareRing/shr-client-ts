/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.gentlemint";
export interface ExchangeRate {
  rate: string;
}

function createBaseExchangeRate(): ExchangeRate {
  return {
    rate: ""
  };
}

export const ExchangeRate = {
  encode(message: ExchangeRate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rate !== "") {
      writer.uint32(10).string(message.rate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ExchangeRate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExchangeRate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rate = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<ExchangeRate>, I>>(object: I): ExchangeRate {
    const message = createBaseExchangeRate();
    message.rate = object.rate ?? "";
    return message;
  }
};
