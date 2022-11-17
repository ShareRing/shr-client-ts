import {BaseClient} from "../../baseclient";
import {MsgCreateId, MsgCreateIds, MsgReplaceIdOwner, MsgUpdateId} from "../../codec/shareledger/id/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export function createIdTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.id.MsgCreateId", MsgCreateId],
    ["/shareledger.id.MsgCreateIds", MsgCreateIds],
    ["/shareledger.id.MsgUpdateId", MsgUpdateId],
    ["/shareledger.id.MsgReplaceIdOwner", MsgReplaceIdOwner]
  ];
}

export function createIdActions(): Record<string, string> {
  return {
    "/shareledger.id.MsgCreateId": "id_create",
    "/shareledger.id.MsgCreateIds": "id_create-ids",
    "/shareledger.id.MsgUpdateId": "id_update",
    "/shareledger.id.MsgReplaceIdOwner": "id_replace"
  };
}

export interface MsgCreateIdEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgCreateId";
  readonly value: Partial<MsgCreateId>;
}

export function isMsgCreateIdEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateIdEncodeObject {
  return (encodeObject as MsgCreateIdEncodeObject).typeUrl === "/shareledger.id.MsgCreateId";
}

export interface MsgCreateIdsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgCreateIds";
  readonly value: Partial<MsgCreateIds>;
}

export function isMsgCreateIdsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateIdsEncodeObject {
  return (encodeObject as MsgCreateIdsEncodeObject).typeUrl === "/shareledger.id.MsgCreateIds";
}

export interface MsgUpdateIdEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgUpdateId";
  readonly value: Partial<MsgUpdateId>;
}

export function isMsgUpdateIdEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateIdEncodeObject {
  return (encodeObject as MsgUpdateIdEncodeObject).typeUrl === "/shareledger.id.MsgUpdateId";
}

export interface MsgReplaceIdOwnerEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgReplaceIdOwner";
  readonly value: Partial<MsgReplaceIdOwner>;
}

export function isMsgReplaceIdOwnerEncodeObject(encodeObject: EncodeObject): encodeObject is MsgReplaceIdOwnerEncodeObject {
  return (encodeObject as MsgReplaceIdOwnerEncodeObject).typeUrl === "/shareledger.id.MsgReplaceIdOwner";
}

export interface IdTxExtensionMethods {
  create(id: string, ownerAddress: string, backupAddress: string, issuerAddress: string, extraData?: string): MsgCreateIdEncodeObject;
  createMany(
    id: string[],
    ownerAddress: string[],
    backupAddress: string[],
    issuerAddress: string,
    extraData?: string[]
  ): MsgCreateIdsEncodeObject;
  update(id: string, issuerAddress: string, extraData?: string): MsgUpdateIdEncodeObject;
  replaceOwner(id: string, ownerAddress: string, backupAddress: string): MsgReplaceIdOwnerEncodeObject;
}

export interface IdTxExtension {
  readonly id: IdTxExtensionMethods;
}

export function IdTxExtension<T extends {new (...args: any[]): BaseClient & IdTxExtension}>(constructor: T): T {
  return class extends constructor {
    get id() {
      return {
        ...super["id"],
        create: (
          id: string,
          ownerAddress: string,
          backupAddress: string,
          issuerAddress: string,
          extraData?: string
        ): MsgCreateIdEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgCreateId",
            value: MsgCreateId.fromPartial({
              backupAddress,
              extraData,
              id,
              issuerAddress,
              ownerAddress
            })
          };
        },
        createMany: (
          id: string[],
          ownerAddress: string[],
          backupAddress: string[],
          issuerAddress: string,
          extraData?: string[]
        ): MsgCreateIdsEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgCreateIds",
            value: MsgCreateIds.fromPartial({
              backupAddress,
              extraData,
              id,
              issuerAddress,
              ownerAddress
            })
          };
        },
        update: (id: string, issuerAddress: string, extraData?: string): MsgUpdateIdEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgUpdateId",
            value: MsgUpdateId.fromPartial({
              id,
              issuerAddress,
              extraData
            })
          };
        },
        replaceOnwer: (id: string, ownerAddress: string, backupAddress: string): MsgReplaceIdOwnerEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgReplaceIdOwner",
            value: MsgReplaceIdOwner.fromPartial({
              backupAddress,
              id,
              ownerAddress
            })
          };
        }
      };
    }
  };
}
