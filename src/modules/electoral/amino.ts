/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoConverter} from "../../amino";

export function createElectoralAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/shareledger.electoral.MsgEnrollAccountOperators": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeAccountOperators": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollDocIssuers": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeDocIssuers": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollIdSigners": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeIdSigners": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollLoaders": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeLoaders": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollVoter": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeVoter": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollRelayers": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeRelayers": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollApprovers": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeApprovers": "not_supported_by_chain",
    "/shareledger.electoral.MsgEnrollSwapManagers": "not_supported_by_chain",
    "/shareledger.electoral.MsgRevokeSwapManagers": "not_supported_by_chain"
  };
}
