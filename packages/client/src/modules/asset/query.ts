import {Asset} from "@shareledgerjs/types/shareledger/asset/asset";
import {QueryClientImpl} from "@shareledgerjs/types/shareledger/asset/query";

import {BaseClient} from "../../baseclient";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export type AssetQueryExtension = {
  get asset(): {
    readonly asset: (id: string, height?: number) => Promise<Asset | undefined>;
  };
};

export function AssetQueryExtension<T extends {new (...args: any[]): BaseClient & AssetQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    public constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }

    public override get asset() {
      return {
        ...super["asset"],
        asset: async (uuid: string, height?: number) => {
          rpcClient.withHeight(height);
          const {asset} = await queryService.AssetByUUID({uuid});
          return asset;
        }
      };
    }
  };
}
