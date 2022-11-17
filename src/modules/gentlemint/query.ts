import {coin} from "@cosmjs/amino";
import {Decimal} from "@cosmjs/math";
import {BigNumber} from "bignumber.js";
import {BaseClient} from "../../baseclient";
import {Coin, DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {QueryClientImpl} from "../../codec/shareledger/gentlemint/query";
import {fromCent, fromNshr, toCent, toNshr} from "../../denoms";
import {GasPrice} from "../../fee";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export type FeeEstimation = {
  fee?: Coin;
  feeExchange?: Coin;
  hasEnoughNshr: boolean;
  hasEnoughCentForFeeExchange: boolean;
};

export interface GentlemintQueryExtensionMethods {
  exchangeRate(height?: number): Promise<Decimal>;
  estimateFee(address: string, actions: string | string[], height?: number): Promise<FeeEstimation>;
  feeByLevel(level: string, height?: number): Promise<Coin>;
  feeByAction(action: string, height?: number): Promise<Coin>;
  feeLevels(height?: number): Promise<Record<"zero" | "low" | "medium" | "high" | string, Coin>>;
  balances(address: string, height?: number): Promise<DecCoin[]>;
}

export interface GentlemintQueryExtension {
  readonly gentlemint: GentlemintQueryExtensionMethods;
}

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

export function GentlemintQueryExtension<T extends {new (...args: any[]): BaseClient & GentlemintQueryExtension}>(constructor: T): T {
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
