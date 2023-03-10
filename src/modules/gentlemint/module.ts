import {Coin, coin} from "@cosmjs/amino";
import {Decimal} from "@cosmjs/math";
import {BigNumber} from "bignumber.js";
import {Client} from "../../client";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {QueryClientImpl} from "../../codec/shareledger/gentlemint/query";
import {MsgBurn, MsgBuyShr, MsgLoad, MsgSend, MsgSetExchange, MsgLoadFee} from "../../codec/shareledger/gentlemint/tx";
import {fromCent, fromNshr, toCent, toNshr} from "../../denoms";
import {GasPrice} from "../../fee";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";
import {
  MsgBurnEncodeObject,
  MsgBuyShrEncodeObject,
  MsgLoadEncodeObject,
  MsgLoadFeeEncodeObject,
  MsgSendEncodeObject,
  MsgSetExchangeEncodeObject
} from "./amino";

export type FeeEstimation = {
  fee?: Coin;
  feeExchange?: Coin;
  hasEnoughNshr: boolean;
  hasEnoughCentForFeeExchange: boolean;
};

export type GentlemintQueryExtension = {
  get gentlemint(): {
    readonly exchangeRate: (height?: number) => Promise<Decimal>;
    readonly estimateFee: (address: string, actions: string | string[], height?: number) => Promise<FeeEstimation>;
    readonly feeByLevel: (level: string, height?: number) => Promise<Coin>;
    readonly feeByAction: (action: string, height?: number) => Promise<Coin>;
    readonly feeLevels: (height?: number) => Promise<Record<"zero" | "low" | "medium" | "high" | string, Coin>>;
    readonly balances: (address: string, height?: number) => Promise<DecCoin[]>;
  };
};

export type GentlemintTxExtension = {
  get gentlemint(): {
    readonly burn: (fromAddress: string, coins: DecCoin[]) => MsgBurnEncodeObject;
    readonly load: (fromAddress: string, toAddress: string, coins: DecCoin[]) => MsgLoadEncodeObject;
    readonly send: (fromAddress: string, toAddress: string, coins: DecCoin[]) => MsgSendEncodeObject;
    readonly buyShr: (toAddress: string, amount: Long) => MsgBuyShrEncodeObject;
    readonly setExchangeRate: (rate: string, creator: string) => MsgSetExchangeEncodeObject;
    readonly loadFee: (address: string, fee: DecCoin) => MsgLoadFeeEncodeObject;
  };
};

export type GentlemintExtension = GentlemintQueryExtension & GentlemintTxExtension;

function normalizeToNshr(amount: string | number, denom = "nshr", exchangeRate: Decimal = Decimal.fromUserInput("1", 18)): Coin {
  switch (denom) {
    default:
      throw new Error(`Denom ${denom} not supported`);
    case "nshr":
      return coin(amount, "nshr");
    case "shr":
      return toNshr(amount);
    case "shrp":
      return toNshr(new BigNumber(amount).times(exchangeRate.toString()));
    case "cent":
      return toNshr(new BigNumber(fromCent(amount).amount).times(exchangeRate.toString()));
  }
}

function normalizeToCent(amount: string | number, denom = "cent", exchangeRate: Decimal = Decimal.fromUserInput("1", 18)): Coin {
  switch (denom) {
    default:
      throw new Error(`Denom ${denom} not supported`);
    case "cent":
      return coin(amount, "cent");
    case "shrp":
      return toCent(amount);
    case "shr":
      return toCent(new BigNumber(amount).div(exchangeRate.toString()));
    case "nshr":
      return toCent(new BigNumber(fromNshr(amount).amount).div(exchangeRate.toString()));
  }
}

export function GentlemintQueryExtension<T extends {new (...args: any[]): Client & GentlemintQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get gentlemint() {
      return {
        ...super["gentlemint"],
        exchangeRate: async (height?: number) => {
          rpcClient.withHeight(height);
          const {rate} = await queryService.ExchangeRate({});
          return Decimal.fromUserInput(rate, 18);
        },
        feeByAction: async (action: string, height?: number) => {
          rpcClient.withHeight(height);
          const {fee} = await queryService.ActionLevelFee({action});
          let {amount, denom} = GasPrice.fromString(fee); // eslint-disable-line prefer-const
          const amt = amount.toString();
          const exchangeRate = await this.gentlemint.exchangeRate();
          return normalizeToNshr(amt, denom, exchangeRate);
        },
        feeByLevel: async (level: string, height?: number) => {
          rpcClient.withHeight(height);
          const {levelFee} = await queryService.LevelFee({level});
          if (!levelFee || !levelFee.originalFee) {
            return toNshr(1);
          }
          let {amount, denom} = levelFee.originalFee; // eslint-disable-line prefer-const
          const exchangeRate = await this.gentlemint.exchangeRate();
          return normalizeToNshr(amount, denom, exchangeRate);
        },
        feeLevels: async (height?: number) => {
          rpcClient.withHeight(height);
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
              case "shr":
              case "shrp":
              case "cent":
                c = normalizeToNshr(amount, denom, exchangeRate);
                break;
            }
            prev[curr.level] = c;
            return prev;
          }, {} as Record<"zero" | "low" | "medium" | "high" | string, Coin>);
        },
        estimateFee: async (address: string, actions: string | string[], height?: number): Promise<FeeEstimation> => {
          actions = typeof actions === "string" ? [actions] : actions;
          try {
            rpcClient.withHeight(height);
            const {convertedFee, sufficientFee, sufficientFundForFee, costLoadingFee} = await queryService.CheckFees({address, actions});
            // let feeByNshr = convertedFee;
            // if (!feeByNshr) {
            //   const fees = await this.gentlemint.feeLevels();
            //   feeByNshr = fees.low || fees.high;
            // }
            const exchangeRate = await this.gentlemint.exchangeRate();
            const fee = convertedFee ? normalizeToNshr(convertedFee.amount, convertedFee.denom, exchangeRate) : undefined;
            const feeExchange = costLoadingFee ? normalizeToCent(costLoadingFee.amount, costLoadingFee.denom, exchangeRate) : undefined;
            return {
              fee,
              feeExchange,
              hasEnoughNshr: sufficientFee,
              hasEnoughCentForFeeExchange: sufficientFundForFee
            };
          } catch (e) {
            return {
              hasEnoughCentForFeeExchange: false,
              hasEnoughNshr: false
            };
          }
        },
        balances: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
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
        },
        loadFee: (address: string, fee: DecCoin): MsgLoadFeeEncodeObject => {
          return {
            typeUrl: "/shareledger.gentlemint.MsgLoadFee",
            value: MsgLoadFee.fromPartial({
              creator: address,
              shrp: {...fee}
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
    "/shareledger.gentlemint.MsgSetExchange": "gentlemint_set-exchange",
    "/shareledger.gentlemint.MsgLoadFee": "gentlemint_load-fee"
  };
}
