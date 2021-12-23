/* eslint-disable @typescript-eslint/naming-convention */

import {StdFee} from "@cosmjs/amino";
import {assert} from "@cosmjs/utils";
import {Client} from "../../client";
import {Input, Output} from "../../codec/cosmos/bank/v1beta1/bank";
import {QueryClientImpl} from "../../codec/cosmos/bank/v1beta1/query";
import {MsgMultiSend, MsgSend} from "../../codec/cosmos/bank/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {createProtobufRpcClient} from "../../query";
import {MsgMultiSendEncodeObject, MsgSendEncodeObject} from "./amino";

export interface BankExtension {
  readonly bank: {
    readonly balance: (address: string, denom: string) => Promise<Coin>;
    readonly allBalances: (address: string) => Promise<Coin[]>;
    readonly totalSupply: () => Promise<Coin[]>;
    readonly supplyOf: (denom: string) => Promise<Coin>;
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
