import Long from "long";
import {Client} from "../../client";
import {QueryClientImpl, QueryAssetByUUIDResponse} from "../../codec/shareledger/asset/query";
import {MsgCreateAsset, MsgUpdateAsset, MsgDeleteAsset} from "../../codec/shareledger/asset/tx";
import {createProtobufRpcClient} from "../../query";
import {MsgCreateAssetEncodeObject, MsgUpdateAssetEncodeObject, MsgDeleteAssetEncodeObject} from "./amino";

export interface AssetExtension {
  readonly asset: {
    readonly byId: (id: string) => Promise<QueryAssetByUUIDResponse>;
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
        const response = await queryService.AssetByUUID({uuid});
        return response;
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
