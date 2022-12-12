/* eslint-disable */
import {Coin} from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.swap";
export interface Schema {
  network: string;
  creator: string;
  schema: string;
  contractExponent: number;
  fee?: Fee;
}
export interface Fee {
  in?: Coin;
  out?: Coin;
}

function createBaseSchema(): Schema {
  return {
    network: "",
    creator: "",
    schema: "",
    contractExponent: 0,
    fee: undefined
  };
}

export const Schema = {
  encode(message: Schema, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.network !== "") {
      writer.uint32(10).string(message.network);
    }

    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }

    if (message.schema !== "") {
      writer.uint32(26).string(message.schema);
    }

    if (message.contractExponent !== 0) {
      writer.uint32(32).int32(message.contractExponent);
    }

    if (message.fee !== undefined) {
      Fee.encode(message.fee, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchema();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.network = reader.string();
          break;

        case 2:
          message.creator = reader.string();
          break;

        case 3:
          message.schema = reader.string();
          break;

        case 4:
          message.contractExponent = reader.int32();
          break;

        case 5:
          message.fee = Fee.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Schema>, I>>(object: I): Schema {
    const message = createBaseSchema();
    message.network = object.network ?? "";
    message.creator = object.creator ?? "";
    message.schema = object.schema ?? "";
    message.contractExponent = object.contractExponent ?? 0;
    message.fee = object.fee !== undefined && object.fee !== null ? Fee.fromPartial(object.fee) : undefined;
    return message;
  }
};

function createBaseFee(): Fee {
  return {
    in: undefined,
    out: undefined
  };
}

export const Fee = {
  encode(message: Fee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.in !== undefined) {
      Coin.encode(message.in, writer.uint32(10).fork()).ldelim();
    }

    if (message.out !== undefined) {
      Coin.encode(message.out, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Fee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFee();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.in = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.out = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Fee>, I>>(object: I): Fee {
    const message = createBaseFee();
    message.in = object.in !== undefined && object.in !== null ? Coin.fromPartial(object.in) : undefined;
    message.out = object.out !== undefined && object.out !== null ? Coin.fromPartial(object.out) : undefined;
    return message;
  }
};
