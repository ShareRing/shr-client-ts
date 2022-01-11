import Long from "long";
import {Client} from "../../client";
import {QueryClientImpl, QueryExchangeRateResponse} from "../../codec/shareledger/gentlemint/query";
import {
  MsgBurnShr,
  MsgBurnShrp,
  MsgLoadShr,
  MsgLoadShrp,
  MsgSendShr,
  MsgSendShrp,
  MsgBuyCent,
  MsgBuyShr,
  MsgSetExchange
} from "../../codec/shareledger/gentlemint/tx";
import {createProtobufRpcClient} from "../../query";
import {
  MsgBurnShrEncodeObject,
  MsgBurnShrpEncodeObject,
  MsgBuyCentEncodeObject,
  MsgBuyShrEncodeObject,
  MsgLoadShrEncodeObject,
  MsgLoadShrpEncodeObject,
  MsgSendShrEncodeObject,
  MsgSendShrpEncodeObject,
  MsgSetExchangeEncodeObject
} from "./amino";

export interface GentlemintExtension {
  readonly gentlemint: {
    readonly exchangeRate: () => Promise<QueryExchangeRateResponse>;
    readonly tx: {
      burnShr: (fromAddress: string, amount: Long) => MsgBurnShrEncodeObject;
      burnShrp: (fromAddress: string, amount: string) => MsgBurnShrpEncodeObject;
      loadShr: (toAddress: string, amount: Long) => MsgLoadShrEncodeObject;
      loadShrp: (toAddress: string, amount: string) => MsgLoadShrpEncodeObject;
      sendShr: (fromAddress: string, toAddress: string, amount: Long) => MsgSendShrEncodeObject;
      sendShrp: (fromAddress: string, toAddress: string, amount: string) => MsgSendShrpEncodeObject;
      buyShr: (toAddress: string, amount: Long) => MsgBuyShrEncodeObject;
      buyCent: (toAddress: string, amount: Long) => MsgBuyCentEncodeObject;
      setExchangeRate: (rate: string, creator: string) => MsgSetExchangeEncodeObject;
    };
  };
}

export function GentlemintExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class Client extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    gentlemint = {
      exchangeRate: () => {
        const response = queryService.ExchangeRate({});
        return response;
      },
      tx: {
        burnShr: (fromAddress: string, amount: Long): MsgBurnShrEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgBurnShr",
            value: MsgBurnShr.fromPartial({
              amount: amount.toString(),
              creator: fromAddress
            })
          };
        },
        burnShrp: (fromAddress: string, amount: string): MsgBurnShrpEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgBurnShrp",
            value: MsgBurnShrp.fromPartial({
              amount,
              creator: fromAddress
            })
          };
        },
        loadShr: (toAddress: string, amount: Long): MsgLoadShrEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgLoadShr",
            value: MsgLoadShr.fromPartial({
              amount: amount.toString(),
              creator: toAddress
            })
          };
        },
        loadShrp: (toAddress: string, amount: string): MsgLoadShrpEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgLoadShrp",
            value: MsgLoadShrp.fromPartial({
              amount,
              creator: toAddress
            })
          };
        },
        sendShr: (fromAddress: string, toAddress: string, amount: Long): MsgSendShrEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgSendShr",
            value: MsgSendShr.fromPartial({
              address: toAddress,
              amount: amount.toString(),
              creator: fromAddress
            })
          };
        },
        sendShrp: (fromAddress: string, toAddress: string, amount: string): MsgSendShrpEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgSendShrp",
            value: MsgSendShrp.fromPartial({
              address: toAddress,
              amount,
              creator: fromAddress
            })
          };
        },
        buyShr: (toAddress: string, amount: Long): MsgBuyShrEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgBuyShr",
            value: MsgBuyShr.fromPartial({
              amount: amount.toString(),
              creator: toAddress
            })
          };
        },
        buyCent: (toAddress: string, amount: Long): MsgBuyCentEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgBuyCent",
            value: MsgBuyCent.fromPartial({
              amount: amount.toString(),
              creator: toAddress
            })
          };
        },
        setExchangeRate: (rate: string, creator: string): MsgSetExchangeEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgSetExchange",
            value: MsgSetExchange.fromPartial({
              creator,
              rate
            })
          };
        }
      }
    };
  };
}
