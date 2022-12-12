/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import {DeepPartial, Exact} from "../../helpers";
export const protobufPackage = "sharering.shareledger.sdistribution";
/** Params defines the parameters for the module. */

export interface Params {
  wasmMasterBuilder: string;
  wasmContractAdmin: string;
  wasmDevelopment: string;
  wasmValidator: string;
  nativeValidator: string;
  nativeDevelopment: string;
  builderWindows: number;
  txThreshold: number;
  devPoolAccount: string;
}

function createBaseParams(): Params {
  return {
    wasmMasterBuilder: "",
    wasmContractAdmin: "",
    wasmDevelopment: "",
    wasmValidator: "",
    nativeValidator: "",
    nativeDevelopment: "",
    builderWindows: 0,
    txThreshold: 0,
    devPoolAccount: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wasmMasterBuilder !== "") {
      writer.uint32(10).string(message.wasmMasterBuilder);
    }

    if (message.wasmContractAdmin !== "") {
      writer.uint32(18).string(message.wasmContractAdmin);
    }

    if (message.wasmDevelopment !== "") {
      writer.uint32(26).string(message.wasmDevelopment);
    }

    if (message.wasmValidator !== "") {
      writer.uint32(34).string(message.wasmValidator);
    }

    if (message.nativeValidator !== "") {
      writer.uint32(42).string(message.nativeValidator);
    }

    if (message.nativeDevelopment !== "") {
      writer.uint32(50).string(message.nativeDevelopment);
    }

    if (message.builderWindows !== 0) {
      writer.uint32(56).uint32(message.builderWindows);
    }

    if (message.txThreshold !== 0) {
      writer.uint32(64).uint32(message.txThreshold);
    }

    if (message.devPoolAccount !== "") {
      writer.uint32(74).string(message.devPoolAccount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.wasmMasterBuilder = reader.string();
          break;

        case 2:
          message.wasmContractAdmin = reader.string();
          break;

        case 3:
          message.wasmDevelopment = reader.string();
          break;

        case 4:
          message.wasmValidator = reader.string();
          break;

        case 5:
          message.nativeValidator = reader.string();
          break;

        case 6:
          message.nativeDevelopment = reader.string();
          break;

        case 7:
          message.builderWindows = reader.uint32();
          break;

        case 8:
          message.txThreshold = reader.uint32();
          break;

        case 9:
          message.devPoolAccount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.wasmMasterBuilder = object.wasmMasterBuilder ?? "";
    message.wasmContractAdmin = object.wasmContractAdmin ?? "";
    message.wasmDevelopment = object.wasmDevelopment ?? "";
    message.wasmValidator = object.wasmValidator ?? "";
    message.nativeValidator = object.nativeValidator ?? "";
    message.nativeDevelopment = object.nativeDevelopment ?? "";
    message.builderWindows = object.builderWindows ?? 0;
    message.txThreshold = object.txThreshold ?? 0;
    message.devPoolAccount = object.devPoolAccount ?? "";
    return message;
  }
};
