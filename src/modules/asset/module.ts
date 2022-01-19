import Long from "long";
import {Client} from "../../client";
import {Asset} from "../../codec/shareledger/asset/asset";
import {QueryClientImpl} from "../../codec/shareledger/asset/query";
import {MsgCreateAsset, MsgDeleteAsset, MsgUpdateAsset} from "../../codec/shareledger/asset/tx";
import {createProtobufRpcClient} from "../../query";
import {MsgCreateAssetEncodeObject, MsgDeleteAssetEncodeObject, MsgUpdateAssetEncodeObject} from "./amino";

export type AssetQueryExtension = {
  get asset(): {
    readonly asset: (id: string) => Promise<Asset | undefined>;
  };
};

export type AssetTxExtension = {
  get asset(): {
    readonly create: (uuid: string, hash: Uint8Array, status: boolean, rate: Long, creator: string) => MsgCreateAssetEncodeObject;
    readonly update: (uuid: string, hash: Uint8Array, status: boolean, rate: Long, creator: string) => MsgUpdateAssetEncodeObject;
    readonly delete: (uuid: string, owner: string) => MsgDeleteAssetEncodeObject;
  };
};

export type AssetExtension = AssetQueryExtension & AssetTxExtension;

export function AssetQueryExtension<T extends {new (...args: any[]): Client & AssetQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get asset() {
      return {
        ...super["asset"],
        asset: async (uuid: string) => {
          const {asset} = await queryService.AssetByUUID({uuid});
          return asset;
        }
      };
    }
  };
}

export function AssetTxExtension<T extends {new (...args: any[]): Client & AssetTxExtension}>(constructor: T): T {
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

export function AssetExtension<T extends {new (...args: any[]): Client & AssetExtension}>(constructor: T): T {
  return class extends AssetTxExtension(AssetQueryExtension(constructor)) {};
}
