/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {MsgCreateId, MsgCreateIds, MsgUpdateId, MsgReplaceIdOwner} from "../../codec/shareledger/id/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export interface AminoMsgCreateId extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "id/CreateId";
  readonly value: {
    /** Bech32 account address */
    readonly backup_address: string;
    readonly extra_data: string;
    readonly id: string;
    /** Bech32 account address */
    readonly issuer_address: string;
    /** Bech32 account address */
    readonly owner_address: string;
  };
}

export function isAminoMsgCreateId(msg: AminoMsg): msg is AminoMsgCreateId {
  // NOTE: Type string and names diverge here!
  return msg.type === "id/CreateId";
}

export interface MsgCreateIdEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgCreateId";
  readonly value: Partial<MsgCreateId>;
}

export function isMsgCreateIdEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateIdEncodeObject {
  return (encodeObject as MsgCreateIdEncodeObject).typeUrl === "/shareledger.id.MsgCreateId";
}

export interface AminoMsgCreateIds extends AminoMsg {
  readonly type: "id/CreateIds";
  readonly value: {
    readonly backup_address: string[];
    readonly extra_data: string[];
    readonly id: string[];
    readonly issuer_address: string;
    readonly owner_address: string[];
  };
}

export function isAminoMsgCreateIds(msg: AminoMsg): msg is AminoMsgCreateIds {
  return msg.type === "id/CreateIds";
}

export interface MsgCreateIdsEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgCreateIds";
  readonly value: Partial<MsgCreateIds>;
}

export function isMsgCreateIdsEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateIdsEncodeObject {
  return (encodeObject as MsgCreateIdsEncodeObject).typeUrl === "/shareledger.id.MsgCreateIds";
}

export interface AminoMsgUpdateId extends AminoMsg {
  readonly type: "id/UpdateId";
  readonly value: {
    readonly extra_data: string;
    readonly id: string;
    readonly issuer_address: string;
  };
}

export function isAminoMsgUpdateId(msg: AminoMsg): msg is AminoMsgUpdateId {
  return msg.type === "id/UpdateId";
}

export interface MsgUpdateIdEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgUpdateId";
  readonly value: Partial<MsgUpdateId>;
}

export function isMsgUpdateIdEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateIdEncodeObject {
  return (encodeObject as MsgUpdateIdEncodeObject).typeUrl === "/shareledger.id.MsgUpdateId";
}

export interface AminoMsgReplaceIdOwner extends AminoMsg {
  readonly type: "id/ReplaceIdOwner";
  readonly value: {
    readonly backup_address: string;
    readonly id: string;
    readonly owner_address: string;
  };
}

export function isAminoMsgReplaceIdOwner(msg: AminoMsg): msg is AminoMsgReplaceIdOwner {
  return msg.type === "id/ReplaceIdOwner";
}

export interface MsgReplaceIdOwnerEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.id.MsgReplaceIdOwner";
  readonly value: Partial<MsgReplaceIdOwner>;
}

export function isMsgReplaceIdOwnerEncodeObject(encodeObject: EncodeObject): encodeObject is MsgReplaceIdOwnerEncodeObject {
  return (encodeObject as MsgReplaceIdOwnerEncodeObject).typeUrl === "/shareledger.id.MsgReplaceIdOwner";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.id.MsgCreateId": {
      aminoType: "id/CreateId",
      toAmino: ({backupAddress, extraData, id, issuerAddress, ownerAddress}: MsgCreateId): AminoMsgCreateId["value"] => ({
        backup_address: backupAddress,
        extra_data: extraData,
        id,
        issuer_address: issuerAddress,
        owner_address: ownerAddress
      }),
      fromAmino: ({backup_address, extra_data, id, issuer_address, owner_address}: AminoMsgCreateId["value"]): MsgCreateId => ({
        backupAddress: backup_address,
        extraData: extra_data,
        id,
        issuerAddress: issuer_address,
        ownerAddress: owner_address
      })
    },
    "/shareledger.id.MsgCreateIds": {
      aminoType: "id/CreateIds",
      toAmino: ({backupAddress, extraData, id, issuerAddress, ownerAddress}: MsgCreateIds): AminoMsgCreateIds["value"] => ({
        backup_address: [...backupAddress],
        extra_data: [...extraData],
        id: [...id],
        issuer_address: issuerAddress,
        owner_address: [...ownerAddress]
      }),
      fromAmino: ({backup_address, extra_data, id, issuer_address, owner_address}: AminoMsgCreateIds["value"]): MsgCreateIds => ({
        backupAddress: [...backup_address],
        extraData: [...extra_data],
        id: [...id],
        issuerAddress: issuer_address,
        ownerAddress: [...owner_address]
      })
    },
    "/shareledger.id.MsgUpdateId": {
      aminoType: "id/UpdateId",
      toAmino: ({extraData, id, issuerAddress}: MsgUpdateId): AminoMsgUpdateId["value"] => ({
        extra_data: extraData,
        id,
        issuer_address: issuerAddress
      }),
      fromAmino: ({extra_data, id, issuer_address}: AminoMsgUpdateId["value"]): MsgUpdateId => ({
        extraData: extra_data,
        id,
        issuerAddress: issuer_address
      })
    },
    "/shareledger.id.MsgReplaceIdOwner": {
      aminoType: "id/ReplaceIdOwner",
      toAmino: ({backupAddress, id, ownerAddress}: MsgReplaceIdOwner): AminoMsgReplaceIdOwner["value"] => ({
        backup_address: backupAddress,
        id,
        owner_address: ownerAddress
      }),
      fromAmino: ({backup_address, id, owner_address}: AminoMsgReplaceIdOwner["value"]): MsgReplaceIdOwner => ({
        backupAddress: backup_address,
        id,
        ownerAddress: owner_address
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.id.MsgCreateId", MsgCreateId],
    ["/shareledger.id.MsgCreateIds", MsgCreateIds],
    ["/shareledger.id.MsgUpdateId", MsgUpdateId],
    ["/shareledger.id.MsgReplaceIdOwner", MsgReplaceIdOwner]
  ];
}
