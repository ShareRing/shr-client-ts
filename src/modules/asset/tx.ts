import Long from "long";
import {BaseClient} from "../../baseclient";
import {MsgCreateAsset, MsgDeleteAsset, MsgUpdateAsset} from "../../codec/shareledger/asset/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export function createAssetTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.asset.MsgCreateAsset", MsgCreateAsset],
    ["/shareledger.asset.MsgUpdateAsset", MsgUpdateAsset],
    ["/shareledger.asset.MsgDeleteAsset", MsgDeleteAsset]
  ];
}

export function createAssetActions(): Record<string, string> {
  return {
    "/shareledger.asset.MsgCreateAsset": "asset_create",
    "/shareledger.asset.MsgUpdateAsset": "asset_update",
    "/shareledger.asset.MsgDeleteAsset": "asset_delete"
  };
}

export interface MsgCreateAssetEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.asset.MsgCreateAsset";
  readonly value: Partial<MsgCreateAsset>;
}

export function isMsgCreateAssetEncodeObject(encodeObject: EncodeObject): encodeObject is MsgCreateAssetEncodeObject {
  return (encodeObject as MsgCreateAssetEncodeObject).typeUrl === "/shareledger.asset.MsgCreateAsset";
}

export interface MsgUpdateAssetEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.asset.MsgUpdateAsset";
  readonly value: Partial<MsgUpdateAsset>;
}

export function isMsgUpdateAssetEncodeObject(encodeObject: EncodeObject): encodeObject is MsgUpdateAssetEncodeObject {
  return (encodeObject as MsgUpdateAssetEncodeObject).typeUrl === "/shareledger.asset.MsgUpdateAsset";
}

export interface MsgDeleteAssetEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.asset.MsgDeleteAsset";
  readonly value: Partial<MsgDeleteAsset>;
}

export function isMsgDeleteAssetEncodeObject(encodeObject: EncodeObject): encodeObject is MsgDeleteAssetEncodeObject {
  return (encodeObject as MsgDeleteAssetEncodeObject).typeUrl === "/shareledger.asset.MsgDeleteAsset";
}

export type AssetTxExtension = {
  get asset(): {
    readonly create: (uuid: string, hash: Uint8Array, status: boolean, rate: Long, creator: string) => MsgCreateAssetEncodeObject;
    readonly update: (uuid: string, hash: Uint8Array, status: boolean, rate: Long, creator: string) => MsgUpdateAssetEncodeObject;
    readonly delete: (uuid: string, owner: string) => MsgDeleteAssetEncodeObject;
  };
};

export function AssetTxExtension<T extends {new (...args: any[]): BaseClient & AssetTxExtension}>(constructor: T): T {
  return class extends constructor {
    get asset() {
      return {
        ...super["asset"],
        create: (uuid: string, hash: Uint8Array, status: boolean, rate: Long, creator: string): MsgCreateAssetEncodeObject => {
          return {
            typeUrl: "/shareledger.asset.MsgCreateAsset",
            value: MsgCreateAsset.fromPartial({
              creator,
              hash,
              rate,
              status,
              UUID: uuid
            })
          };
        },
        update: (uuid: string, hash: Uint8Array, status: boolean, rate: Long, creator: string): MsgUpdateAssetEncodeObject => {
          return {
            typeUrl: "/shareledger.asset.MsgUpdateAsset",
            value: MsgUpdateAsset.fromPartial({
              creator,
              hash,
              rate,
              status,
              UUID: uuid
            })
          };
        },
        delete: (uuid: string, owner: string): MsgDeleteAssetEncodeObject => {
          return {
            typeUrl: "/shareledger.asset.MsgDeleteAsset",
            value: MsgDeleteAsset.fromPartial({
              owner,
              UUID: uuid
            })
          };
        }
      };
    }
  };
}
