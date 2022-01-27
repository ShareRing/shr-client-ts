/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import {ExchangeRate} from "../../shareledger/gentlemint/exchange_rate";
import {LevelFee} from "../../shareledger/gentlemint/level_fee";
import {ActionLevelFee} from "../../shareledger/gentlemint/action_level_fee";

export const protobufPackage = "shareledger.gentlemint";

/** GenesisState defines the gentlemint module's genesis state. */
export interface GenesisState {
  exchangeRate?: ExchangeRate;
  levelFeeList: LevelFee[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  actionLevelFeeList: ActionLevelFee[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.exchangeRate !== undefined) {
      ExchangeRate.encode(message.exchangeRate, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.levelFeeList) {
      LevelFee.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.actionLevelFeeList) {
      ActionLevelFee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {...baseGenesisState} as GenesisState;
    message.levelFeeList = [];
    message.actionLevelFeeList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = ExchangeRate.decode(reader, reader.uint32());
          break;
        case 2:
          message.levelFeeList.push(LevelFee.decode(reader, reader.uint32()));
          break;
        case 3:
          message.actionLevelFeeList.push(ActionLevelFee.decode(reader, reader.uint32()));
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
    message.exchangeRate =
      object.exchangeRate !== undefined && object.exchangeRate !== null ? ExchangeRate.fromJSON(object.exchangeRate) : undefined;
    message.levelFeeList = (object.levelFeeList ?? []).map((e: any) => LevelFee.fromJSON(e));
    message.actionLevelFeeList = (object.actionLevelFeeList ?? []).map((e: any) => ActionLevelFee.fromJSON(e));
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined && (obj.exchangeRate = message.exchangeRate ? ExchangeRate.toJSON(message.exchangeRate) : undefined);
    if (message.levelFeeList) {
      obj.levelFeeList = message.levelFeeList.map((e) => (e ? LevelFee.toJSON(e) : undefined));
    } else {
      obj.levelFeeList = [];
    }
    if (message.actionLevelFeeList) {
      obj.actionLevelFeeList = message.actionLevelFeeList.map((e) => (e ? ActionLevelFee.toJSON(e) : undefined));
    } else {
      obj.actionLevelFeeList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = {...baseGenesisState} as GenesisState;
    message.exchangeRate =
      object.exchangeRate !== undefined && object.exchangeRate !== null ? ExchangeRate.fromPartial(object.exchangeRate) : undefined;
    message.levelFeeList = object.levelFeeList?.map((e) => LevelFee.fromPartial(e)) || [];
    message.actionLevelFeeList = object.actionLevelFeeList?.map((e) => ActionLevelFee.fromPartial(e)) || [];
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
