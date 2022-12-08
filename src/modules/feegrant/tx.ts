import {BaseClient} from "../../baseclient";
import {MsgGrantAllowance, MsgRevokeAllowance} from "../../codec/cosmos/feegrant/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";
import {EncodeObject, GeneratedType} from "../../signing";

export function createFeegrantTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.feegrant.v1beta1.MsgGrantAllowance", MsgGrantAllowance],
    ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", MsgRevokeAllowance]
  ];
}

export function createFeegrantActions(): Record<string, string> {
  return {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": "feegrant_grant-allowance",
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": "feegrant_revoke-allowance"
  };
}

export interface MsgGrantAllowanceEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
  readonly value: Partial<MsgGrantAllowance>;
}

export interface MsgRevokeAllowanceEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
  readonly value: Partial<MsgRevokeAllowance>;
}

export interface FeegrantTxExtensionMethods {
  grantAllowance(granter: string, grantee: string, allowance?: Any): MsgGrantAllowanceEncodeObject;
  revokeAllowance(granter: string, grantee: string): MsgRevokeAllowanceEncodeObject;
}

export interface FeegrantTxExtension {
  readonly feegrant: FeegrantTxExtensionMethods;
}

export function FeegrantTxExtension<T extends {new (...args: any[]): BaseClient & FeegrantTxExtension}>(constructor: T): T {
  return class extends constructor {
    get feegrant() {
      return {
        ...super["feegrant"],
        grantAllowance: (granter: string, grantee: string, allowance?: Any): MsgGrantAllowanceEncodeObject => {
          return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: MsgGrantAllowance.fromPartial({granter, grantee, allowance})
          };
        },
        revokeAllowance: (granter: string, grantee: string): MsgRevokeAllowanceEncodeObject => {
          return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: MsgRevokeAllowance.fromPartial({granter, grantee})
          };
        }
      };
    }
  };
}
