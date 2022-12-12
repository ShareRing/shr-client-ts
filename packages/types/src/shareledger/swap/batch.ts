/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.swap";
export interface Batch {
  id: Long;
  signature: string;
  requestIds: Long[];
  status: string;
  network: string;
}

function createBaseBatch(): Batch {
  return {
    id: Long.UZERO,
    signature: "",
    requestIds: [],
    status: "",
    network: ""
  };
}

export const Batch = {
  encode(message: Batch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }

    writer.uint32(26).fork();

    for (const v of message.requestIds) {
      writer.uint64(v);
    }

    writer.ldelim();

    if (message.status !== "") {
      writer.uint32(34).string(message.status);
    }

    if (message.network !== "") {
      writer.uint32(42).string(message.network);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Batch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatch();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;

        case 2:
          message.signature = reader.string();
          break;

        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.requestIds.push(reader.uint64() as Long);
            }
          } else {
            message.requestIds.push(reader.uint64() as Long);
          }

          break;

        case 4:
          message.status = reader.string();
          break;

        case 5:
          message.network = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Batch>, I>>(object: I): Batch {
    const message = createBaseBatch();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.signature = object.signature ?? "";
    message.requestIds = object.requestIds?.map((e) => Long.fromValue(e)) || [];
    message.status = object.status ?? "";
    message.network = object.network ?? "";
    return message;
  }
};
