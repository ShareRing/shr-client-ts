import Long from "long";
import {Client} from "../../client";
import {Asset} from "../../codec/shareledger/asset/asset";
import {QueryClientImpl} from "../../codec/shareledger/asset/query";
import {MsgCreateAsset, MsgDeleteAsset, MsgUpdateAsset} from "../../codec/shareledger/asset/tx";
import {createProtobufRpcClient} from "../../query";
import {MsgCreateAssetEncodeObject, MsgDeleteAssetEncodeObject, MsgUpdateAssetEncodeObject} from "./amino";

export interface AssetExtension {
  readonly asset: {
    readonly byId: (id: string) => Promise<Asset | undefined>;
    readonly tx: {
      create: () => MsgCreateAssetEncodeObject;
      update: () => MsgUpdateAssetEncodeObject;
      delete: (uuid: string, owner: string) => MsgDeleteAssetEncodeObject;
    };
  };
}

export function AssetExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class Client extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    asset = {
      byId: async (uuid: string) => {
        const {asset} = await queryService.AssetByUUID({uuid});
        return asset;
      },
      tx: {
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
        replaceIdOnwer: (uuid: string, owner: string): MsgDeleteAssetEncodeObject => {
          return {
            typeUrl: "/shareledger.asset.MsgDeleteAsset",
            value: MsgDeleteAsset.fromPartial({
              owner,
              UUID: uuid
            })
          };
        }
      }
    };
  };
}
