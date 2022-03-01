import {Coin, coin} from "@cosmjs/amino";
import {Decimal} from "@cosmjs/math";
import {BigNumber} from "bignumber.js";
import {Client} from "../../client";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {QueryClientImpl} from "../../codec/shareledger/gentlemint/query";
import {MsgBurn, MsgBuyShr, MsgLoad, MsgSend, MsgSetExchange} from "../../codec/shareledger/gentlemint/tx";
import {fromCent, toNshr} from "../../denoms";
import {GasPrice} from "../../fee";
import {createProtobufRpcClient} from "../../query";
import {MsgBurnEncodeObject, MsgBuyShrEncodeObject, MsgLoadEncodeObject, MsgSendEncodeObject, MsgSetExchangeEncodeObject} from "./amino";

export type GentlemintQueryExtension = {
  get gentlemint(): {
    readonly exchangeRate: () => Promise<Decimal>;
    readonly determineFee: (address: string, actions: string | string[]) => Promise<Coin>;
    readonly feeByLevel: (level: string) => Promise<Coin>;
    readonly feeByAction: (action: string) => Promise<Coin>;
    readonly feeLevels: () => Promise<Record<"zero" | "low" | "medium" | "high" | string, Coin>>;
    readonly balances: (address: string) => Promise<DecCoin[]>;
  };
};

export type GentlemintTxExtension = {
  get gentlemint(): {
    readonly burn: (fromAddress: string, coins: DecCoin[]) => MsgBurnEncodeObject;
    readonly load: (fromAddress: string, toAddress: string, coins: DecCoin[]) => MsgLoadEncodeObject;
    readonly send: (fromAddress: string, toAddress: string, coins: DecCoin[]) => MsgSendEncodeObject;
    readonly buyShr: (toAddress: string, amount: Long) => MsgBuyShrEncodeObject;
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
          return Decimal.fromUserInput(rate, 18);
        },
        feeByAction: async (action: string) => {
          const {fee} = await queryService.ActionLevelFee({action});
          let {amount, denom} = GasPrice.fromString(fee); // eslint-disable-line prefer-const
          let amt = amount.toString();
          if (denom === "cent") {
            const exchangeRate = await this.gentlemint.exchangeRate();
            amt = new BigNumber(exchangeRate.toString()).multipliedBy(amount.toString()).toFixed(0, BigNumber.ROUND_CEIL);
            denom = "shr";
          }
          return coin(amt, denom);
        },
        feeByLevel: async (level: string) => {
          const {levelFee} = await queryService.LevelFee({level});
          if (!levelFee || !levelFee.originalFee) {
            return toNshr(1);
          }
          let {amount, denom} = levelFee.originalFee; // eslint-disable-line prefer-const
          const exchangeRate = await this.gentlemint.exchangeRate();
          switch (denom) {
            default:
              throw new Error(`Denom ${denom} not supported`);
            case "nshr":
              return coin(amount, "nshr");
            case "shr":
              return toNshr(amount);
            case "shrp":
              return toNshr(new BigNumber(amount).multipliedBy(exchangeRate.toString()));
            case "cent":
              return toNshr(new BigNumber(fromCent(amount).amount).multipliedBy(exchangeRate.toString()));
          }
        },
        feeLevels: async () => {
          const {levelFees} = await queryService.LevelFees({});
          const exchangeRate = await this.gentlemint.exchangeRate();
          return levelFees.reduce((prev, curr) => {
            if (!curr.originalFee) {
              prev[curr.level] = toNshr(1);
              return prev;
            }
            let {amount, denom} = curr.originalFee; // eslint-disable-line prefer-const
            let c: Coin;
            switch (denom) {
              default:
                c = toNshr(1);
                break;
              case "nshr":
                c = coin(amount, denom);
                break;
              case "shr":
                c = toNshr(amount);
                break;
              case "shrp":
                c = toNshr(new BigNumber(amount).multipliedBy(exchangeRate.toString()));
                break;
              case "cent":
                c = toNshr(new BigNumber(fromCent(amount).amount).multipliedBy(exchangeRate.toString()));
            }
            prev[curr.level] = c;
            return prev;
          }, {} as Record<"zero" | "low" | "medium" | "high" | string, Coin>);
        },
        determineFee: async (address: string, actions: string | string[]) => {
          actions = typeof actions === "string" ? [actions] : actions;
          try {
            const {convertedFee} = await queryService.CheckFees({address, actions});
            if (!convertedFee) {
              throw new Error("Not found");
            }
            return convertedFee;
          } catch (e) {
            const fees = await this.gentlemint.feeLevels();
            return fees.low || fees.high;
          }
        },
        balances: async (address: string) => {
          const {coins} = await queryService.Balances({address: address});
          return coins;
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
        burn: (fromAddress: string, coins: DecCoin[]): MsgBurnEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgBurn",
            value: MsgBurn.fromPartial({
              coins: [...coins],
              creator: fromAddress
            })
          };
        },
        load: (fromAddress: string, toAddress: string, coins: DecCoin[]): MsgLoadEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgLoad",
            value: MsgLoad.fromPartial({
              coins: [...coins],
              creator: fromAddress,
              address: toAddress
            })
          };
        },
        send: (fromAddress: string, toAddress: string, coins: DecCoin[]): MsgSendEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgSend",
            value: MsgSend.fromPartial({
              address: toAddress,
              coins: [...coins],
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

export function createActions(): Record<string, string> {
  return {
    "/shareledger.gentlemint.MsgBurn": "gentlemint_burn",
    "/shareledger.gentlemint.MsgLoad": "gentlemint_load",
    "/shareledger.gentlemint.MsgSend": "gentlemint_send",
    "/shareledger.gentlemint.MsgBuyShr": "gentlemint_buy-shr",
    "/shareledger.gentlemint.MsgSetExchange": "gentlemint_set-exchange"
  };
}
