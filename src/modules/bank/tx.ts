import {BaseClient} from "../../baseclient";
import {Input, Output} from "../../codec/cosmos/bank/v1beta1/bank";
import {MsgMultiSend, MsgSend} from "../../codec/cosmos/bank/v1beta1/tx";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {EncodeObject, GeneratedType} from "../../signing";

export function createBankTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmos.base.v1beta1.Coin", Coin],
    ["/cosmos.bank.v1beta1.MsgSend", MsgSend],
    ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend]
  ];
}

export function createBankActions(): Record<string, string> {
  return {
    "/cosmos.bank.v1beta1.MsgSend": "bank_send",
    "/cosmos.bank.v1beta1.MsgMultiSend": "bank_multi-send"
  };
}

export interface MsgSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.bank.v1beta1.MsgSend";
  readonly value: Partial<MsgSend>;
}

export function isMsgSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgSendEncodeObject {
  return (encodeObject as MsgSendEncodeObject).typeUrl === "/cosmos.bank.v1beta1.MsgSend";
}

export interface MsgMultiSendEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.bank.v1beta1.MsgMuliSend";
  readonly value: Partial<MsgMultiSend>;
}

export function isMsgMultiSendEncodeObject(encodeObject: EncodeObject): encodeObject is MsgMultiSendEncodeObject {
  return (encodeObject as MsgMultiSendEncodeObject).typeUrl === "/cosmos.bank.v1beta1.MsgMuliSend";
}

export interface BankTxExtensionMethods {
  send(senderAddress: string, recipientAddress: string, amount: readonly Coin[]): MsgSendEncodeObject;
  multiSend(inputs: Input[], outputs: Output[]): MsgMultiSendEncodeObject;
}

export interface BankTxExtension {
  readonly bank: BankTxExtensionMethods;
}

export function BankTxExtension<T extends {new (...args: any[]): BaseClient & BankTxExtension}>(constructor: T): T {
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
