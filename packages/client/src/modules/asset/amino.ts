/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoConverter} from "@shareledgerjs/amino";

export function createAssetAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/shareledger.asset.MsgCreateAsset": "not_supported_by_chain",
    "/shareledger.asset.MsgUpdateAsset": "not_supported_by_chain",
    "/shareledger.asset.MsgDeleteAsset": "not_supported_by_chain"
  };
}
