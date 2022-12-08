/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "shareledger.id";

export interface BaseID {
  issuerAddress: string;
  backupAddress: string;
  ownerAddress: string;
  extraData: string;
}

function createBaseBaseID(): BaseID {
  return {issuerAddress: "", backupAddress: "", ownerAddress: "", extraData: ""};
}

export const BaseID = {
  encode(message: BaseID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issuerAddress !== "") {
      writer.uint32(10).string(message.issuerAddress);
    }
    if (message.backupAddress !== "") {
      writer.uint32(18).string(message.backupAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(26).string(message.ownerAddress);
    }
    if (message.extraData !== "") {
      writer.uint32(34).string(message.extraData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.issuerAddress = reader.string();
          break;
        case 2:
          message.backupAddress = reader.string();
          break;
        case 3:
          message.ownerAddress = reader.string();
          break;
        case 4:
          message.extraData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BaseID {
    return {
      issuerAddress: isSet(object.issuerAddress) ? String(object.issuerAddress) : "",
      backupAddress: isSet(object.backupAddress) ? String(object.backupAddress) : "",
      ownerAddress: isSet(object.ownerAddress) ? String(object.ownerAddress) : "",
      extraData: isSet(object.extraData) ? String(object.extraData) : ""
    };
  },

  toJSON(message: BaseID): unknown {
    const obj: any = {};
    message.issuerAddress !== undefined && (obj.issuerAddress = message.issuerAddress);
    message.backupAddress !== undefined && (obj.backupAddress = message.backupAddress);
    message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
    message.extraData !== undefined && (obj.extraData = message.extraData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BaseID>, I>>(object: I): BaseID {
    const message = createBaseBaseID();
    message.issuerAddress = object.issuerAddress ?? "";
    message.backupAddress = object.backupAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.extraData = object.extraData ?? "";
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
  : P & {[K in keyof P]: Exact<P[K], I[K]>} & {[K in Exclude<keyof I, KeysOfUnion<P>>]: never};

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
