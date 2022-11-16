import {BaseClient} from "../../baseclient";
import {DecCoin} from "../../codec/cosmos/base/v1beta1/coin";
import {MsgBurn, MsgBuyShr, MsgLoad, MsgLoadFee, MsgSend, MsgSetExchange} from "../../codec/shareledger/gentlemint/tx";
import {EncodeObject, GeneratedType} from "../../signing";

export function createGentlemintTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/shareledger.gentlemint.MsgBurn", MsgBurn],
    ["/shareledger.gentlemint.MsgLoad", MsgLoad],
    ["/shareledger.gentlemint.MsgSend", MsgSend],
    ["/shareledger.gentlemint.MsgBuyShr", MsgBuyShr],
    ["/shareledger.gentlemint.MsgSetExchange", MsgSetExchange],
    ["/shareledger.gentlemint.MsgLoadFee", MsgLoadFee]
  ];
}

export function createGentlemintActions(): Record<string, string> {
  return {
    "/shareledger.gentlemint.MsgBurn": "gentlemint_burn",
    "/shareledger.gentlemint.MsgLoad": "gentlemint_load",
    "/shareledger.gentlemint.MsgSend": "gentlemint_send",
    "/shareledger.gentlemint.MsgBuyShr": "gentlemint_buy-shr",
    "/shareledger.gentlemint.MsgSetExchange": "gentlemint_set-exchange",
    "/shareledger.gentlemint.MsgLoadFee": "gentlemint_load-fee"
  };
}

export interface MsgBurnEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBurn";
  readonly value: Partial<MsgBurn>;
}

export function isMsgBurnEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBurnEncodeObject {
  return (encodeObject as MsgBurnEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBurn";
}

export interface MsgLoadEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgLoad";
  readonly value: Partial<MsgLoad>;
}

export function isMsgLoadEncodeObject(encodeObject: EncodeObject): encodeObject is MsgLoadEncodeObject {
  return (encodeObject as MsgLoadEncodeObject).typeUrl === "/shareledger.gentlemint.MsgLoad";
}

export interface MsgSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgSend";
  readonly value: Partial<MsgSend>;
}

export function isMsgSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendEncodeObject {
  return (encodeObject as MsgSendEncodeObject).typeUrl === "/shareledger.gentlemint.MsgSend";
}

export interface MsgBuyShrEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgBuyShr";
  readonly value: Partial<MsgBuyShr>;
}

export function isMsgBuyShrEncodeObject(encodeObject: EncodeObject): encodeObject is MsgBuyShrEncodeObject {
  return (encodeObject as MsgBuyShrEncodeObject).typeUrl === "/shareledger.gentlemint.MsgBuyShr";
}

export interface MsgSetExchangeEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgSetExchange";
  readonly value: Partial<MsgSetExchange>;
}

export function isMsgSetExchangeEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSetExchangeEncodeObject {
  return (encodeObject as MsgSetExchangeEncodeObject).typeUrl === "/shareledger.gentlemint.MsgSetExchange";
}

export interface MsgLoadFeeEncodeObject extends EncodeObject {
  readonly typeUrl: "/shareledger.gentlemint.MsgLoadFee";
  readonly value: Partial<MsgLoadFee>;
}

export function isMsgLoadFeeEncodeObject(encodeObject: EncodeObject): encodeObject is MsgLoadFeeEncodeObject {
  return (encodeObject as MsgLoadFeeEncodeObject).typeUrl === "/shareledger.gentlemint.MsgLoadFee";
}

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

export function GentlemintTxExtension<T extends {new (...args: any[]): BaseClient & GentlemintTxExtension}>(constructor: T): T {
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
