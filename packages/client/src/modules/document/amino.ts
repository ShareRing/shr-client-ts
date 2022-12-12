/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoConverter} from "@shareledgerjs/amino";

export function createDocumentAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/shareledger.document.MsgCreateDocument": "not_supported_by_chain",
    "/shareledger.document.MsgCreateDocuments": "not_supported_by_chain",
    "/shareledger.document.MsgUpdateDocument": "not_supported_by_chain",
    "/shareledger.document.MsgRevokeDocument": "not_supported_by_chain"
  };
}
