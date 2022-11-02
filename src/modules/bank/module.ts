/* eslint-disable @typescript-eslint/naming-convention */

import {assert} from "@cosmjs/utils";
import {Client} from "../../client";
import {Input, Metadata, Output} from "../../codec/cosmos/bank/v1beta1/bank";
import {QueryClientImpl} from "../../codec/cosmos/bank/v1beta1/query";
import {MsgMultiSend, MsgSend} from "../../codec/cosmos/bank/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {createProtobufRpcClient, ProtobufRpcClient} from "../../query";
import {MsgMultiSendEncodeObject, MsgSendEncodeObject} from "./amino";

export type BankQueryExtension = {
  get bank(): {
    readonly balance: (address: string, denom: string, height?: number) => Promise<Coin>;
    readonly allBalances: (address: string, height?: number) => Promise<Coin[]>;
    readonly totalSupply: (height?: number) => Promise<Coin[]>;
    readonly supplyOf: (denom: string, height?: number) => Promise<Coin>;
    readonly denomMetadata: (denom: string, height?: number) => Promise<Metadata>;
    readonly denomsMetadata: (height?: number) => Promise<Metadata[]>;
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
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get bank() {
      return {
        ...super["bank"],
        balance: async (address: string, denom: string, height?: number) => {
          rpcClient.withHeight(height);
          const {balance} = await queryService.Balance({address: address, denom: denom});
          assert(balance);
          return balance;
        },
        allBalances: async (address: string, height?: number) => {
          rpcClient.withHeight(height);
          const {balances} = await queryService.AllBalances({address: address});
          return balances;
        },
        totalSupply: async (height?: number) => {
          rpcClient.withHeight(height);
          const {supply} = await queryService.TotalSupply({});
          return supply;
        },
        supplyOf: async (denom: string, height?: number) => {
          rpcClient.withHeight(height);
          const {amount} = await queryService.SupplyOf({denom: denom});
          assert(amount);
          return amount;
        },
        denomMetadata: async (denom: string, height?: number) => {
          rpcClient.withHeight(height);
          const {metadata} = await queryService.DenomMetadata({denom});
          assert(metadata);
          return metadata;
        },
        denomsMetadata: async (height?: number) => {
          rpcClient.withHeight(height);
          const {metadatas} = await queryService.DenomsMetadata({
            pagination: undefined // Not implemented
          });
          return metadatas;
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

export function createActions(): Record<string, string> {
  return {
    "/cosmos.bank.v1beta1.MsgSend": "bank_send",
    "/cosmos.bank.v1beta1.MsgMultiSend": "bank_multi-send"
  };
}
