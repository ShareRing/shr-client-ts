/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoMsg} from "@cosmjs/amino";
import {AminoConverter} from "../../amino/types";
import {MsgCreateAsset, MsgDeleteAsset, MsgUpdateAsset} from "../../codec/shareledger/asset/tx";
import {EncodeObject, GeneratedType} from "../../signing";
import Long from "long";

export interface AminoMsgCreateAsset extends AminoMsg {
  // NOTE: Type string and names diverge here!
  readonly type: "asset/CreateAsset";
  readonly value: {
    readonly uuid: string;
    readonly creator: string;
    readonly hash: Uint8Array;
    readonly rate: Long;
    readonly status: boolean;
  };
}

export function isAminoMsgCreateAsset(msg: AminoMsg): msg is AminoMsgCreateAsset {
  // NOTE: Type string and names diverge here!
  return msg.type === "asset/CreateAsset";
}

export interface MsgCreateAssetEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.asset.MsgCreateAsset";
  readonly value: Partial<MsgCreateAsset>;
}

export function isMsgCreateAssetEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateAssetEncodeObject {
  return (encodeObject as MsgCreateAssetEncodeObject).typeUrl === "/shareledger.asset.MsgCreateAsset";
}

export interface AminoMsgUpdateAsset extends AminoMsg {
  readonly type: "asset/UpdateAsset";
  readonly value: {
    readonly uuid: string;
    readonly creator: string;
    readonly hash: Uint8Array;
    readonly rate: Long;
    readonly status: boolean;
  };
}

export function isAminoMsgUpdateAsset(msg: AminoMsg): msg is AminoMsgUpdateAsset {
  return msg.type === "asset/UpdateAsset";
}

export interface MsgUpdateAssetEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.asset.MsgUpdateAsset";
  readonly value: Partial<MsgUpdateAsset>;
}

export function isMsgUpdateAssetEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateAssetEncodeObject {
  return (encodeObject as MsgUpdateAssetEncodeObject).typeUrl === "/shareledger.asset.MsgUpdateAsset";
}

export interface AminoMsgDeleteAsset extends AminoMsg {
  readonly type: "asset/DeleteAsset";
  readonly value: {
    readonly uuid: string;
    readonly owner: string;
  };
}

export function isAminoMsgDeleteAsset(msg: AminoMsg): msg is AminoMsgDeleteAsset {
  return msg.type === "asset/DeleteAsset";
}

export interface MsgDeleteAssetEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.asset.MsgDeleteAsset";
  readonly value: Partial<MsgDeleteAsset>;
}

export function isMsgDeleteAssetEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDeleteAssetEncodeObject {
  return (encodeObject as MsgDeleteAssetEncodeObject).typeUrl === "/shareledger.asset.MsgDeleteAsset";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/shareledger.asset.MsgCreateAsset": {
      aminoType: "asset/CreateAsset",
      toAmino: ({creator, hash, rate, status, UUID}: MsgCreateAsset): AminoMsgCreateAsset["value"] => ({
        creator,
        hash: Uint8Array.from(hash),
        rate,
        status,
        uuid: UUID
      }),
      fromAmino: ({creator, hash, rate, status, uuid}: AminoMsgCreateAsset["value"]): MsgCreateAsset => ({
        creator,
        hash: Uint8Array.from(hash),
        rate,
        status,
        UUID: uuid
      })
    },
    "/shareledger.asset.MsgUpdateAsset": {
      aminoType: "asset/UpdateAsset",
      toAmino: ({creator, hash, rate, status, UUID}: MsgUpdateAsset): AminoMsgUpdateAsset["value"] => ({
        creator,
        hash: Uint8Array.from(hash),
        rate,
        status,
        uuid: UUID
      }),
      fromAmino: ({creator, hash, rate, status, uuid}: AminoMsgUpdateAsset["value"]): MsgUpdateAsset => ({
        creator,
        hash: Uint8Array.from(hash),
        rate,
        status,
        UUID: uuid
      })
    },
    "/shareledger.asset.MsgDeleteAsset": {
      aminoType: "asset/DeleteAsset",
      toAmino: ({owner, UUID}: MsgDeleteAsset): AminoMsgDeleteAsset["value"] => ({
        owner,
        uuid: UUID
      }),
      fromAmino: ({owner, uuid}: AminoMsgDeleteAsset["value"]): MsgDeleteAsset => ({
        owner,
        UUID: uuid
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.asset.MsgCreateAsset", MsgCreateAsset],
    ["/shareledger.asset.MsgUpdateAsset", MsgUpdateAsset],
    ["/shareledger.asset.MsgDeleteAsset", MsgDeleteAsset]
  ];
}
