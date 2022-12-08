import {coin} from "@cosmjs/amino";
import BigNumber from "bignumber.js";
import {Coin, DecCoin} from "./codec/cosmos/base/v1beta1/coin";

export function fromNshr(number: string | number | BigNumber): DecCoin {
  const amount = new BigNumber(number).div(10 ** 9).toFixed();
  return DecCoin.fromPartial({
    denom: "shr",
    amount
  });
}

export function toNshr(number: string | number | BigNumber): Coin {
  const amount = new BigNumber(number).times(10 ** 9).toFixed(0, BigNumber.ROUND_CEIL);
  return coin(amount, "nshr");
}

export function fromCent(number: string | number | BigNumber): DecCoin {
  const amount = new BigNumber(number).div(10 ** 2).toFixed();
  return DecCoin.fromPartial({
    denom: "shrp",
    amount
  });
}

export function toCent(number: string | number | BigNumber): Coin {
  const amount = new BigNumber(number).times(10 ** 2).toFixed(0, BigNumber.ROUND_CEIL);
  return coin(amount, "cent");
}
