import Long from "long";
import {Client} from "../../client";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {Batch} from "../../codec/shareledger/swap/batch";
import {Params} from "../../codec/shareledger/swap/params";
import {QueryAllSignSchemasResponse, QueryClientImpl, QuerySwapResponse} from "../../codec/shareledger/swap/query";
import {SignSchema} from "../../codec/shareledger/swap/sign_schema";
import {
  MsgApproveIn,
  MsgApproveOut,
  MsgCancel,
  MsgCreateSignSchema,
  MsgDeleteSignSchema,
  MsgDeposit,
  MsgReject,
  MsgRequestIn,
  MsgRequestOut,
  MsgUpdateSignSchema,
  MsgWithdraw
} from "../../codec/shareledger/swap/tx";
import {createPagination, createProtobufRpcClient} from "../../query";
import {
  MsgApproveInEncodeObject,
  MsgApproveOutEncodeObject,
  MsgCancelEncodeObject,
  MsgCreateSignSchemaEncodeObject,
  MsgDeleteSignSchemaEncodeObject,
  MsgDepositEncodeObject,
  MsgRejectEncodeObject,
  MsgRequestInEncodeObject,
  MsgRequestOutEncodeObject,
  MsgUpdateSignSchemaEncodeObject,
  MsgWithdrawEncodeObject
} from "./amino";

export type SwapQueryExtension = {
  get swap(): {
    readonly params: () => Promise<Params | undefined>;
    readonly batchById: (id: Long) => Promise<Batch | undefined>;
    readonly batchByStatus: (status: string) => Promise<Batch | undefined>;
    readonly tokensAvailable: () => Promise<DecCoin | undefined>;
    readonly requests: (
      ids: Long[],
      destAddr: string,
      destNetwork: string,
      srcAddr: string,
      srcNetwork: string,
      status: string,
      paginationKey?: Uint8Array
    ) => Promise<QuerySwapResponse>;
    readonly schema: (network: string) => Promise<SignSchema | undefined>;
    readonly schemas: () => Promise<QueryAllSignSchemasResponse>;
  };
};

export type SwapTxExtension = {
  get swap(): {
    readonly requestSwapIn: (
      creator: string,
      srcAddress: string,
      destAddress: string,
      network: string,
      amount: DecCoin,
      fee: DecCoin
    ) => MsgRequestInEncodeObject;
    readonly requestSwapOut: (
      creator: string,
      destAddress: string,
      network: string,
      amount: DecCoin,
      fee: DecCoin
    ) => MsgRequestOutEncodeObject;
    readonly approveSwapIn: (creator: string, ids: Long[]) => MsgApproveInEncodeObject;
    readonly approveSwapOut: (creator: string, ids: Long[], signature: string) => MsgApproveOutEncodeObject;
    readonly deposit: (creator: string, amount: DecCoin) => MsgDepositEncodeObject;
    readonly withdraw: (creator: string, to: string, amount: DecCoin) => MsgWithdrawEncodeObject;
    readonly cancelSwap: (creator: string, ids: Long[]) => MsgCancelEncodeObject;
    readonly rejectSwap: (creator: string, ids: Long[]) => MsgRejectEncodeObject;
    readonly createSignSchema: (creator: string, network: string, schema: string) => MsgCreateSignSchemaEncodeObject;
    readonly updateSignSchema: (creator: string, network: string, schema: string) => MsgUpdateSignSchemaEncodeObject;
    readonly deleteSignSchema: (creator: string, network: string) => MsgDeleteSignSchemaEncodeObject;
  };
};

export type SwapExtension = SwapQueryExtension & SwapTxExtension;

export function SwapQueryExtension<T extends {new (...args: any[]): Client & SwapQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get swap() {
      return {
        ...super["swap"],
        batchById: async (id: Long) => {
          return queryService.Batch({id}).then((res) => res.batch);
        },
        batchByStatus: (status: string) => {
          status;
          return Promise.resolve(undefined);
        },
        tokensAvailable: async () => {
          return queryService.Balance({}).then((res) => res.balance);
        },
        requests: async (
          ids: Long[],
          destAddr: string,
          destNetwork: string,
          srcAddr: string,
          srcNetwork: string,
          status: string,
          paginationKey?: Uint8Array
        ) => {
          return queryService.Swap({
            ids,
            destAddr,
            destNetwork,
            srcAddr,
            srcNetwork,
            status,
            pagination: createPagination(paginationKey)
          });
        },
        schema: async (network: string) => {
          return queryService.SignSchema({network}).then((res) => res.schema);
        },
        schemas: async (paginationKey?: Uint8Array) => {
          return queryService.AllSignSchemas({pagination: createPagination(paginationKey)});
        }
      };
    }
  };
}

export function SwapTxExtension<T extends {new (...args: any[]): Client & SwapTxExtension}>(constructor: T): T {
  return class extends constructor {
    get swap() {
      return {
        ...super["swap"],
        requestSwapIn: (
          creator: string,
          srcAddress: string,
          destAddress: string,
          network: string,
          amount: DecCoin,
          fee: DecCoin
        ): MsgRequestInEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgRequestIn",
            value: MsgRequestIn.fromPartial({
              creator,
              srcAddress,
              destAddress,
              network,
              amount,
              fee
            })
          };
        },
        requestSwapOut: (
          creator: string,
          destAddress: string,
          network: string,
          amount: DecCoin,
          fee: DecCoin
        ): MsgRequestOutEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgRequestOut",
            value: MsgRequestOut.fromPartial({
              creator,
              destAddress,
              network,
              amount,
              fee
            })
          };
        },
        approveSwapIn: (creator: string, ids: Long[]): MsgApproveInEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgApproveIn",
            value: MsgApproveIn.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        approveSwapOut: (creator: string, ids: Long[], signature: string): MsgApproveOutEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgApproveOut",
            value: MsgApproveOut.fromPartial({
              creator,
              signature,
              ids: [...ids]
            })
          };
        },
        deposit: (creator: string, amount: DecCoin): MsgDepositEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgDeposit",
            value: MsgDeposit.fromPartial({
              creator,
              amount
            })
          };
        },
        withdraw: (creator: string, to: string, amount: DecCoin): MsgWithdrawEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgWithdraw",
            value: MsgWithdraw.fromPartial({
              creator,
              receiver: to,
              amount
            })
          };
        },
        cancelSwap: (creator: string, ids: Long[]): MsgCancelEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgCancel",
            value: MsgCancel.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        rejectSwap: (creator: string, ids: Long[]): MsgRejectEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgReject",
            value: MsgReject.fromPartial({
              creator,
              ids: [...ids]
            })
          };
        },
        createSignSchema: (creator: string, network: string, schema: string): MsgCreateSignSchemaEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgCreateSignSchema",
            value: MsgCreateSignSchema.fromPartial({
              creator,
              network,
              schema
            })
          };
        },
        updateSignSchema: (creator: string, network: string, schema: string): MsgUpdateSignSchemaEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgUpdateSignSchema",
            value: MsgUpdateSignSchema.fromPartial({
              creator,
              network,
              schema
            })
          };
        },
        deleteSignSchema: (creator: string, network: string): MsgDeleteSignSchemaEncodeObject => {
          return {
            typeUrl: "/shareledger.swap.MsgDeleteSignSchema",
            value: MsgDeleteSignSchema.fromPartial({
              creator,
              network
            })
          };
        }
      };
    }
  };
}

export function SwapExtension<T extends {new (...args: any[]): Client & SwapExtension}>(constructor: T): T {
  return class extends SwapTxExtension(SwapQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/shareledger.swap.MsgRequestIn": "swap_request-in",
    "/shareledger.swap.MsgRequestOut": "swap_request-out",
    "/shareledger.swap.MsgApproveIn": "swap_approve-in",
    "/shareledger.swap.MsgApproveOut": "swap_approve-out",
    "/shareledger.swap.MsgCancel": "swap_cancel",
    "/shareledger.swap.MsgReject": "swap_reject",
    "/shareledger.swap.MsgDeposit": "swap_deposit",
    "/shareledger.swap.MsgWithdraw": "swap_withdraw",
    "/shareledger.swap.MsgCreateSignSchema": "swap_create-sign-schema",
    "/shareledger.swap.MsgUpdateSignSchema": "swap_update-sign-schema",
    "/shareledger.swap.MsgDeleteSignSchema": "swap_delete-sign-schema"
  };
}
