/* eslint-disable */
import {Coin} from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import {Long, DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "shareledger.swap";
export interface Request {
  id: Long;
  srcAddr: string;
  destAddr: string;
  srcNetwork: string;
  destNetwork: string;
  amount?: Coin;
  fee?: Coin;
  status: string;
  batchId: Long;
  /** ERCHashes */

  txEvents: TxEvent[];
}
export interface TxEvent {
  txHash: string;
  sender: string;
  logIndex: Long;
}

function createBaseRequest(): Request {
  return {
    id: Long.UZERO,
    srcAddr: "",
    destAddr: "",
    srcNetwork: "",
    destNetwork: "",
    amount: undefined,
    fee: undefined,
    status: "",
    batchId: Long.UZERO,
    txEvents: []
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.srcAddr !== "") {
      writer.uint32(18).string(message.srcAddr);
    }

    if (message.destAddr !== "") {
      writer.uint32(26).string(message.destAddr);
    }

    if (message.srcNetwork !== "") {
      writer.uint32(34).string(message.srcNetwork);
    }

    if (message.destNetwork !== "") {
      writer.uint32(42).string(message.destNetwork);
    }

    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(50).fork()).ldelim();
    }

    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(58).fork()).ldelim();
    }

    if (message.status !== "") {
      writer.uint32(66).string(message.status);
    }

    if (!message.batchId.isZero()) {
      writer.uint32(72).uint64(message.batchId);
    }

    for (const v of message.txEvents) {
      TxEvent.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;

        case 2:
          message.srcAddr = reader.string();
          break;

        case 3:
          message.destAddr = reader.string();
          break;

        case 4:
          message.srcNetwork = reader.string();
          break;

        case 5:
          message.destNetwork = reader.string();
          break;

        case 6:
          message.amount = Coin.decode(reader, reader.uint32());
          break;

        case 7:
          message.fee = Coin.decode(reader, reader.uint32());
          break;

        case 8:
          message.status = reader.string();
          break;

        case 9:
          message.batchId = reader.uint64() as Long;
          break;

        case 10:
          message.txEvents.push(TxEvent.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.srcAddr = object.srcAddr ?? "";
    message.destAddr = object.destAddr ?? "";
    message.srcNetwork = object.srcNetwork ?? "";
    message.destNetwork = object.destNetwork ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.fee = object.fee !== undefined && object.fee !== null ? Coin.fromPartial(object.fee) : undefined;
    message.status = object.status ?? "";
    message.batchId = object.batchId !== undefined && object.batchId !== null ? Long.fromValue(object.batchId) : Long.UZERO;
    message.txEvents = object.txEvents?.map((e) => TxEvent.fromPartial(e)) || [];
    return message;
  }
};

function createBaseTxEvent(): TxEvent {
  return {
    txHash: "",
    sender: "",
    logIndex: Long.UZERO
  };
}

export const TxEvent = {
  encode(message: TxEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash !== "") {
      writer.uint32(10).string(message.txHash);
    }

    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }

    if (!message.logIndex.isZero()) {
      writer.uint32(24).uint64(message.logIndex);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEvent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.string();
          break;

        case 2:
          message.sender = reader.string();
          break;

        case 3:
          message.logIndex = reader.uint64() as Long;
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<TxEvent>, I>>(object: I): TxEvent {
    const message = createBaseTxEvent();
    message.txHash = object.txHash ?? "";
    message.sender = object.sender ?? "";
    message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? Long.fromValue(object.logIndex) : Long.UZERO;
    return message;
  }
};
