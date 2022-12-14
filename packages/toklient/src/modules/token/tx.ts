import {BaseClient} from "@shareledgerjs/client";
import {GeneratedType} from "@shareledgerjs/signing";

export function createTokenTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [];
}

// export interface MsgUnjailEncodeObject extends EncodeObject {
//   readonly typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
//   readonly value: Partial<MsgUnjail>;
// }

// export function isMsgUnjailEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUnjailEncodeObject {
//   return (encodeObject as MsgUnjailEncodeObject).typeUrl === "/cosmos.slashing.v1beta1.MsgUnjail";
// }

export interface TokenTxExtensionMethods {
  // unjail(validatorAddress: string): MsgUnjailEncodeObject;
}

export interface TokenTxExtension {
  readonly token: TokenTxExtensionMethods;
}

export function TokenTxExtension<T extends {new (...args: any[]): BaseClient & TokenTxExtension}>(constructor: T): T {
  return class extends constructor {
    override get token() {
      return {
        ...super["token"]
      };
    }
  };
}
