/* eslint-disable @typescript-eslint/naming-convention */

import {assert} from "@cosmjs/utils";
import {Client} from "../../client";
import {Input, Output} from "../../codec/cosmos/bank/v1beta1/bank";
import {QueryClientImpl} from "../../codec/cosmos/bank/v1beta1/query";
import {MsgMultiSend, MsgSend} from "../../codec/cosmos/bank/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {createProtobufRpcClient} from "../../query";
import {MsgMultiSendEncodeObject, MsgSendEncodeObject} from "./amino";

export type BankQueryExtension = {
  get bank(): {
    readonly balance: (address: string, denom: string) => Promise<Coin>;
    readonly allBalances: (address: string) => Promise<Coin[]>;
    readonly totalSupply: () => Promise<Coin[]>;
    readonly supplyOf: (denom: string) => Promise<Coin>;
  };
};

export type BankTxExtension = {
  get bank(): {
    readonly send: (senderAddress: string, recipientAddress: string, amount: readonly Coin[]) => MsgSendEncodeObject;
    readonly multiSend: (inputs: Input[], outputs: Output[]) => MsgMultiSendEncodeObject;
  };
};

export type BankExtension = BankQueryExtension & BankTxExtension;

export function BankQueryExtension<T extends {new (...args: any[]): Client & BankQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get bank() {
      return {
        ...super["bank"],
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
        }
      };
    }
  };
}

export function BankTxExtension<T extends {new (...args: any[]): Client & BankTxExtension}>(constructor: T): T {
  return class extends constructor {
    get bank() {
      return {
        ...super["bank"],
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
      };
    }
  };
}

export function BankExtension<T extends {new (...args: any[]): Client & BankExtension}>(constructor: T): T {
  return class extends BankTxExtension(BankQueryExtension(constructor)) {};
}
