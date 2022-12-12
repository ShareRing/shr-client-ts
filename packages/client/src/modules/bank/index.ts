import {BaseClient} from "../../baseclient";
import {BankQueryExtension, BankQueryExtensionMethods} from "./query";
import {BankTxExtension, BankTxExtensionMethods} from "./tx";

export type BankExtensionMethods = BankQueryExtensionMethods & BankTxExtensionMethods;
export type BankExtension = BankQueryExtension & BankTxExtension;

export function BankExtension<T extends {new (...args: any[]): BaseClient & BankExtension}>(constructor: T): T {
  return class extends BankTxExtension(BankQueryExtension(constructor)) {};
}

export * from "./amino";
export * from "./query";
export * from "./tx";
