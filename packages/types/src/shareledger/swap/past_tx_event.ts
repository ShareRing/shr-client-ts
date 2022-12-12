/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.swap";
/** RequestedIns */

export interface PastTxEvent {
  /** erc20 */
  srcAddr: string;
  /** slp3 */

  destAddr: string;
}

function createBasePastTxEvent(): PastTxEvent {
  return {
    srcAddr: "",
    destAddr: ""
  };
}

export const PastTxEvent = {
  encode(message: PastTxEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.srcAddr !== "") {
      writer.uint32(10).string(message.srcAddr);
    }

    if (message.destAddr !== "") {
      writer.uint32(18).string(message.destAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PastTxEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePastTxEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.srcAddr = reader.string();
          break;

        case 2:
          message.destAddr = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<PastTxEvent>, I>>(object: I): PastTxEvent {
    const message = createBasePastTxEvent();
    message.srcAddr = object.srcAddr ?? "";
    message.destAddr = object.destAddr ?? "";
    return message;
  }
};
