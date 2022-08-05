/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.swap";

/** RequestedIns */
export interface PastTxEvent {
  /** erc20 */
  srcAddr: string;
  /** slp3 */
  destAddr: string;
}

const basePastTxEvent: object = {srcAddr: "", destAddr: ""};

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
    const message = {...basePastTxEvent} as PastTxEvent;
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

  fromJSON(object: any): PastTxEvent {
    const message = {...basePastTxEvent} as PastTxEvent;
    message.srcAddr = object.srcAddr !== undefined && object.srcAddr !== null ? String(object.srcAddr) : "";
    message.destAddr = object.destAddr !== undefined && object.destAddr !== null ? String(object.destAddr) : "";
    return message;
  },

  toJSON(message: PastTxEvent): unknown {
    const obj: any = {};
    message.srcAddr !== undefined && (obj.srcAddr = message.srcAddr);
    message.destAddr !== undefined && (obj.destAddr = message.destAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PastTxEvent>, I>>(object: I): PastTxEvent {
    const message = {...basePastTxEvent} as PastTxEvent;
    message.srcAddr = object.srcAddr ?? "";
    message.destAddr = object.destAddr ?? "";
    return message;
  }
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {[K in keyof T]?: DeepPartial<T[K]>}
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
