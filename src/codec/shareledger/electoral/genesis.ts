/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {Authority} from "../../shareledger/electoral/authority";
import {Treasurer} from "../../shareledger/electoral/treasurer";
import {AccState} from "../../shareledger/electoral/acc_state";

export const protobufPackage = "shareledger.electoral";

/** GenesisState defines the electoral module's genesis state. */
export interface GenesisState {
  accStateList: AccState[];
  authority?: Authority;
  /** this line is used by starport scaffolding # genesis/proto/state */
  treasurer?: Treasurer;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accStateList) {
      AccState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== undefined) {
      Authority.encode(message.authority, writer.uint32(18).fork()).ldelim();
    }
    if (message.treasurer !== undefined) {
      Treasurer.encode(message.treasurer, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseGenesisState} as GenesisState;
    message.accStateList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accStateList.push(AccState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.authority = Authority.decode(reader, reader.uint32());
          break;
        case 3:
          message.treasurer = Treasurer.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = {...baseGenesisState} as GenesisState;
    message.accStateList = (object.accStateList ?? []).map((e: any) => AccState.fromJSON(e));
    message.authority = object.authority !== undefined && object.authority !== null ? Authority.fromJSON(object.authority) : undefined;
    message.treasurer = object.treasurer !== undefined && object.treasurer !== null ? Treasurer.fromJSON(object.treasurer) : undefined;
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.accStateList) {
      obj.accStateList = message.accStateList.map((e) => (e ? AccState.toJSON(e) : undefined));
    } else {
      obj.accStateList = [];
    }
    message.authority !== undefined && (obj.authority = message.authority ? Authority.toJSON(message.authority) : undefined);
    message.treasurer !== undefined && (obj.treasurer = message.treasurer ? Treasurer.toJSON(message.treasurer) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = {...baseGenesisState} as GenesisState;
    message.accStateList = object.accStateList?.map((e) => AccState.fromPartial(e)) || [];
    message.authority = object.authority !== undefined && object.authority !== null ? Authority.fromPartial(object.authority) : undefined;
    message.treasurer = object.treasurer !== undefined && object.treasurer !== null ? Treasurer.fromPartial(object.treasurer) : undefined;
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
