/* eslint-disable @typescript-eslint/naming-convention */

import {StdFee} from "@cosmjs/amino";
import {toAscii} from "@cosmjs/encoding";
import {assert} from "@cosmjs/utils";
import {Client} from "../../client";
import {Input, Output} from "../../codec/cosmos/bank/v1beta1/bank";
import {QueryClientImpl} from "../../codec/cosmos/bank/v1beta1/query";
import {MsgMultiSend, MsgSend} from "../../codec/cosmos/bank/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {createProtobufRpcClient, toAccAddress} from "../../query";
import {MsgMultiSendEncodeObject, MsgSendEncodeObject} from "./amino";

export interface BankExtension {
  readonly bank: {
    readonly balance: (address: string, denom: string) => Promise<Coin>;
    readonly allBalances: (address: string) => Promise<Coin[]>;
    readonly totalSupply: () => Promise<Coin[]>;
    readonly supplyOf: (denom: string) => Promise<Coin>;
    readonly verified: {
      readonly balance: (address: string, denom: string) => Promise<Coin | null>;
    };
    readonly tx: {
      readonly send: (senderAddress: string, recipientAddress: string, amount: readonly Coin[], fee: StdFee) => MsgSendEncodeObject;
      readonly multiSend: (inputs: Input[], outputs: Output[]) => MsgMultiSendEncodeObject;
    };
  };
}

export function BankExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    bank = {
      balance: async (address: string, denom: string) => {
        const {balance} = await queryService.Balance({address: address, denom: denom});
        assert(balance);
        return balance;
      },
      allBalances: async (address: string) => {
        const {balances} = await queryService.AllBalances({address: address});
        return balances;
      },
      totalSupply: async () => {
        const {supply} = await queryService.TotalSupply({});
        return supply;
      },
      supplyOf: async (denom: string) => {
        const {amount} = await queryService.SupplyOf({denom: denom});
        assert(amount);
        return amount;
      },
      verified: {
        balance: async (address: string, denom: string) => {
          // balance key is a bit tricker, using some prefix stores
          // https://github.com/cosmwasm/cosmos-sdk/blob/80f7ff62f79777a487d0c7a53c64b0f7e43c47b9/x/bank/keeper/view.go#L74-L77
          // ("balances", binAddress, denom)
          // it seem like prefix stores just do a dumb concat with the keys (no tricks to avoid overlap)
          // https://github.com/cosmos/cosmos-sdk/blob/2879c0702c87dc9dd828a8c42b9224dc054e28ad/store/prefix/store.go#L61-L64
          // https://github.com/cosmos/cosmos-sdk/blob/2879c0702c87dc9dd828a8c42b9224dc054e28ad/store/prefix/store.go#L37-L43
          const key = Uint8Array.from([...toAscii("balances"), ...toAccAddress(address), ...toAscii(denom)]);
          const responseData = await this.forceGetQueryClient().queryVerified("bank", key);
          return responseData.length ? Coin.decode(responseData) : null;
        }
      },
      tx: {
        send: (senderAddress: string, recipientAddress: string, amount: readonly Coin[]): MsgSendEncodeObject => {
          return {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: MsgSend.fromPartial({
              fromAddress: senderAddress,
              toAddress: recipientAddress,
              amount: [...amount]
            })
          };
        },
        multiSend: (inputs: Input[], outputs: Output[]): MsgMultiSendEncodeObject => {
          return {
            typeUrl: "/cosmos.bank.v1beta1.MsgMuliSend",
            value: MsgMultiSend.fromPartial({
              inputs: inputs.map((input) => ({
                address: input.address,
                coins: [...input.coins]
              })),
              outputs: outputs.map((output) => ({
                address: output.address,
                coins: [...output.coins]
              }))
            })
          };
        }
      }
    };
  };
}
