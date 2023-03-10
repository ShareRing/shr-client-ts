/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "./signdoc";
import {EncodeObject} from "../signing";
import {AminoConverter, AminoTypesOptions} from "./types";

import {createAminoTypes as A} from "../modules/auth";
import {createAminoTypes as B} from "../modules/bank";
import {createAminoTypes as C} from "../modules/distribution";
import {createAminoTypes as D} from "../modules/staking";
import {createAminoTypes as E} from "../modules/gov";

const defaultAminoTypes = [A, B, C, D, E];

function createDefaultAminoTypes(prefix: string): Record<string, AminoConverter> {
  return defaultAminoTypes.reduce((prev, curr) => ({...prev, ...curr(prefix)}), {});
}

/**
 * A map from Stargate message types as used in the messages's `Any` type
 * to Amino types.
 */
export class AminoTypes {
  // The map type here ensures uniqueness of the protobuf type URL in the key.
  // There is no uniqueness guarantee of the Amino type identifier in the type
  // system or constructor. Instead it's the user's responsibility to ensure
  // there is no overlap when fromAmino is called.
  private readonly register: Record<string, AminoConverter>;

  public constructor({prefix, additions = {}}: AminoTypesOptions) {
    const defaultTypes = createDefaultAminoTypes(prefix);
    this.register = {...defaultTypes, ...additions};
  }

  public toAmino({typeUrl, value}: EncodeObject): AminoMsg {
    const converter = this.register[typeUrl];
    if (!converter) {
      throw new Error(
        `Type URL '${typeUrl}' does not exist in the Amino message type register. ` +
          "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
          "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
      );
    }
    return {
      type: converter.aminoType,
      value: converter.toAmino(value)
    };
  }

  public fromAmino({type, value}: AminoMsg): EncodeObject {
    const matches = Object.entries(this.register).filter(([_typeUrl, {aminoType}]) => aminoType === type);
    switch (matches.length) {
      case 0: {
        throw new Error(
          `Amino type identifier '${type}' does not exist in the Amino message type register. ` +
            "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
            "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
        );
      }
      case 1: {
        const [typeUrl, converter] = matches[0];
        return {
          typeUrl: typeUrl,
          value: converter.fromAmino(value)
        };
      }
      default:
        throw new Error(
          `Multiple types are registered with Amino type identifier '${type}': '` +
            matches
              .map(([key, _value]) => key)
              .sort()
              .join("', '") +
            "'. Thus fromAmino cannot be performed."
        );
    }
  }
}

export * from "./signdoc";
export * from "./signer";
