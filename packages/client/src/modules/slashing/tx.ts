import {EncodeObject, GeneratedType} from "@shareledgerjs/signing";
import {MsgUnjail} from "@shareledgerjs/types/cosmos/slashing/v1beta1/tx";

import {BaseClient} from "../../baseclient";

export function createSlashingTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [["/cosmos.slashing.v1beta1.MsgUnjail", MsgUnjail]];
}

export function createSlashingActions(): Record<string, string> {
  return {
    "/cosmos.slashing.v1beta1.MsgUnjail": "slashing_unjail"
  };
}

export interface MsgUnjailEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
  readonly value: Partial<MsgUnjail>;
}

export function isMsgUnjailEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUnjailEncodeObject {
  return (encodeObject as MsgUnjailEncodeObject).typeUrl === "/cosmos.slashing.v1beta1.MsgUnjail";
}

export interface SlashingTxExtensionMethods {
  unjail(validatorAddress: string): MsgUnjailEncodeObject;
}

export interface SlashingTxExtension {
  readonly slashing: SlashingTxExtensionMethods;
}

export function SlashingTxExtension<T extends {new (...args: any[]): BaseClient & SlashingTxExtension}>(constructor: T): T {
  return class extends constructor {
    override get slashing() {
      return {
        ...super["slashing"],
        unjail: (validatorAddress: string): MsgUnjailEncodeObject => {
          return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: MsgUnjail.fromPartial({
              validatorAddr: validatorAddress
            })
          };
        }
      };
    }
  };
}
