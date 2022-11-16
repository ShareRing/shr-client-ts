import {BaseClient} from "../../baseclient";
import {BankQueryExtension} from "./query";
import {BankTxExtension} from "./tx";

export type BankExtension = BankQueryExtension & BankTxExtension;

export function BankExtension<T extends {new (...args: any[]): BaseClient & BankExtension}>(constructor: T): T {
  return class extends BankTxExtension(BankQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
