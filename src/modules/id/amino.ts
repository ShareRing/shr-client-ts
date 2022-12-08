/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoConverter} from "../../amino";

export function createIdAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/shareledger.id.MsgCreateId": "not_supported_by_chain",
    "/shareledger.id.MsgCreateIds": "not_supported_by_chain",
    "/shareledger.id.MsgUpdateId": "not_supported_by_chain",
    "/shareledger.id.MsgReplaceIdOwner": "not_supported_by_chain"
  };
}
