/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
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
  private readonly register: Record<string, AminoConverter>;

  public constructor({additions = {}, prefix = "shareledger"}: AminoTypesOptions = {}) {
    const additionalAminoTypes = Object.values(additions);
    const filteredDefaultTypes = Object.entries(createDefaultAminoTypes(prefix)).reduce(
      (acc, [key, value]) => (additionalAminoTypes.find(({aminoType}) => value.aminoType === aminoType) ? acc : {...acc, [key]: value}),
      {}
    );
    this.register = {...filteredDefaultTypes, ...additions};
  }

  public toAmino({typeUrl, value}: EncodeObject): AminoMsg {
    const converter = this.register[typeUrl];
    if (!converter) {
      throw new Error(
        "Type URL does not exist in the Amino message type register. " +
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
    const result = Object.entries(this.register).find(([_typeUrl, {aminoType}]) => aminoType === type);
    if (!result) {
      throw new Error(
        "Type does not exist in the Amino message type register. " +
          "If you need support for this message type, you can pass in additional entries to the AminoTypes constructor. " +
          "If you think this message type should be included by default, please open an issue at https://github.com/cosmos/cosmjs/issues."
      );
    }
    const [typeUrl, converter] = result;
    return {
      typeUrl: typeUrl,
      value: converter.fromAmino(value)
    };
  }
}
