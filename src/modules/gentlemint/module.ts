import {Coin} from "@cosmjs/amino";
import {Decimal} from "@cosmjs/math";
import {BigNumber} from "bignumber.js";
import {Client} from "../../client";
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
import {GasPrice} from "../../fee";
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
    readonly exchangeRate: () => Promise<Decimal>;
    readonly determineFee: (address: string, actions: string | string[]) => Promise<Coin>;
    readonly feeByLevel: (level: string) => Promise<Coin>;
    readonly feeByAction: (action: string) => Promise<Coin>;
    readonly feeLevels: () => Promise<Record<"zero" | "low" | "medium" | "high" | string, Coin>>;
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
          return Decimal.fromUserInput(rate, 18);
        },
        feeByAction: async (action: string) => {
          const res = await queryService.ActionLevelFee({action});
          let fee = GasPrice.fromString(res.fee);
          const exchangeRate = await this.gentlemint.exchangeRate();
          if (fee.denom === "shrp") {
            fee = new GasPrice(
              // TODO
              Decimal.fromUserInput(
                new BigNumber(exchangeRate.toString()).multipliedBy(fee.amount.toString()).toFixed(0, BigNumber.ROUND_CEIL),
                18
              ),
              "shr"
            );
          }
          return {
            denom: fee.denom,
            amount: fee.amount.toString()
          };
        },
        feeByLevel: async (level: string) => {
          const {levelFee} = await queryService.LevelFee({level});
          if (!levelFee) {
            return {
              denom: "shr",
              amount: "1"
            };
          }
          let fee = GasPrice.fromString(levelFee.fee);
          const exchangeRate = await this.gentlemint.exchangeRate();
          if (fee.denom === "shrp") {
            fee = new GasPrice(
              // TODO
              Decimal.fromUserInput(
                new BigNumber(exchangeRate.toString()).multipliedBy(fee.amount.toString()).toFixed(0, BigNumber.ROUND_CEIL),
                18
              ),
              "shr"
            );
          }
          return {
            denom: fee.denom,
            amount: fee.amount.toString()
          };
        },
        feeLevels: async () => {
          const {levelFees} = await queryService.LevelFees({});
          const exchangeRate = await this.gentlemint.exchangeRate();
          return levelFees.reduce((prev, curr) => {
            let fee = GasPrice.fromString(curr.originalFee);
            if (fee.denom === "shrp") {
              fee = new GasPrice(
                // TODO
                Decimal.fromUserInput(
                  new BigNumber(exchangeRate.toString()).multipliedBy(fee.amount.toString()).toFixed(0, BigNumber.ROUND_CEIL),
                  18
                ),
                "shr"
              );
            }
            prev[curr.level] = {denom: fee.denom, amount: fee.amount.toString()};
            return prev;
          }, {} as Record<"zero" | "low" | "medium" | "high" | string, Coin>);
        },
        determineFee: async (address: string, actions: string | string[]) => {
          actions = typeof actions === "string" ? [actions] : actions;
          try {
            const {convertedFee} = await queryService.CheckFees({address, actions});
            if (!convertedFee) {
              throw "Not found";
            }
            return convertedFee;
          } catch (e) {
            const fees = await this.gentlemint.feeLevels();
            return fees.low || fees.high;
          }
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

export function createActions(): Record<string, string> {
  return {
    "/shareledger.gentlemint.MsgBurnShr": "gentlemint_burn-shr",
    "/shareledger.gentlemint.MsgBurnShrp": "gentlemint_burn-shrp",
    "/shareledger.gentlemint.MsgLoadShr": "gentlemint_load-shr",
    "/shareledger.gentlemint.MsgLoadShrp": "gentlemint_load-shrp",
    "/shareledger.gentlemint.MsgSendShr": "gentlemint_send-shr",
    "/shareledger.gentlemint.MsgSendShrp": "gentlemint_send-shrp",
    "/shareledger.gentlemint.MsgBuyShr": "gentlemint_buy-shr",
    "/shareledger.gentlemint.MsgBuyCent": "gentlemint_buy-cent ",
    "/shareledger.gentlemint.MsgSetExchange": "gentlemint_set-exchange"
  };
}
