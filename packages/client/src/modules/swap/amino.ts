/* eslint-disable @typescript-eslint/no-unused-vars */

import {AminoConverter} from "@shareledgerjs/amino";

export function createSwapAminoConverters(prefix: string): Record<string, AminoConverter | "not_supported_by_chain"> {
  return {
    "/shareledger.swap.MsgRequestIn": "not_supported_by_chain",
    "/shareledger.swap.MsgRequestOut": "not_supported_by_chain",
    "/shareledger.swap.MsgApproveIn": "not_supported_by_chain",
    "/shareledger.swap.MsgApproveOut": "not_supported_by_chain",
    "/shareledger.swap.MsgCancel": "not_supported_by_chain",
    "/shareledger.swap.MsgReject": "not_supported_by_chain",
    "/shareledger.swap.MsgDeposit": "not_supported_by_chain",
    "/shareledger.swap.MsgWithdraw": "not_supported_by_chain",
    "/shareledger.swap.MsgCreateSchema": "not_supported_by_chain",
    "/shareledger.swap.MsgUpdateSchema": "not_supported_by_chain",
    "/shareledger.swap.MsgDeleteSchema": "not_supported_by_chain",
    "/shareledger.swap.MsgCompleteBatch": "not_supported_by_chain",
    "/shareledger.swap.MsgCancelBatches": "not_supported_by_chain",
    "/shareledger.swap.MsgUpdateSwapFee": "not_supported_by_chain"
  };
}
