import Long from "long";
import {Client} from "../../client";
import {LevelFee} from "../../codec/shareledger/gentlemint/level_fee";
import {QueryClientImpl} from "../../codec/shareledger/gentlemint/query";
import {
  MsgBurnShr,
  MsgBurnShrp,
  MsgBuyCent,
  MsgBuyShr,
  MsgLoadShr,
  MsgLoadShrp,
  MsgSendShr,
  MsgSendShrp,
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

export type GentlemintQueryExtension = {
  get gentlemint(): {
    readonly exchangeRate: () => Promise<Long>;
    readonly levelFees: () => Promise<LevelFee[]>;
  };
};

export type GentlemintTxExtension = {
  get gentlemint(): {
    readonly burnShr: (fromAddress: string, amount: Long) => MsgBurnShrEncodeObject;
    readonly burnShrp: (fromAddress: string, amount: string) => MsgBurnShrpEncodeObject;
    readonly loadShr: (toAddress: string, amount: Long) => MsgLoadShrEncodeObject;
    readonly loadShrp: (toAddress: string, amount: string) => MsgLoadShrpEncodeObject;
    readonly sendShr: (fromAddress: string, toAddress: string, amount: Long) => MsgSendShrEncodeObject;
    readonly sendShrp: (fromAddress: string, toAddress: string, amount: string) => MsgSendShrpEncodeObject;
    readonly buyShr: (toAddress: string, amount: Long) => MsgBuyShrEncodeObject;
    readonly buyCent: (toAddress: string, amount: Long) => MsgBuyCentEncodeObject;
    readonly setExchangeRate: (rate: string, creator: string) => MsgSetExchangeEncodeObject;
  };
};

export type GentlemintExtension = GentlemintQueryExtension & GentlemintTxExtension;

export function GentlemintQueryExtension<T extends {new (...args: any[]): Client & GentlemintQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get gentlemint() {
      return {
        ...super["gentlemint"],
        exchangeRate: async () => {
          const {rate} = await queryService.ExchangeRate({});
          return Long.fromString(rate);
        },
        levelFees: async () => {
          const {levelFee} = await queryService.LevelFees({});
          return levelFee;
        }
      };
    }
  };
}

export function GentlemintTxExtension<T extends {new (...args: any[]): Client & GentlemintTxExtension}>(constructor: T): T {
  return class extends constructor {
    get gentlemint() {
      return {
        ...super["gentlemint"],
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
      };
    }
  };
}

export function GentlemintExtension<T extends {new (...args: any[]): Client & GentlemintExtension}>(constructor: T): T {
  return class extends GentlemintTxExtension(GentlemintQueryExtension(constructor)) {};
}
