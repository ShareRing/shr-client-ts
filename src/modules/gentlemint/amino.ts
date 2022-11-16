/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoConverter} from "../../amino";

export function createGentlemintAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/shareledger.gentlemint.MsgBurn": "not_supported_by_chain",
    "/shareledger.gentlemint.MsgLoad": "not_supported_by_chain",
    "/shareledger.gentlemint.MsgSend": "not_supported_by_chain",
    "/shareledger.gentlemint.MsgBuyShr": "not_supported_by_chain",
    "/shareledger.gentlemint.MsgSetExchange": "not_supported_by_chain",
    "/shareledger.gentlemint.MsgLoadFee": "not_supported_by_chain"
  };
}
