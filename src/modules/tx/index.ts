import {BaseClient} from "../../baseclient";
import {TxQueryExtension, TxQueryExtensionMethods} from "./query";

export type TxExtension = TxQueryExtension;
export type TxExtensioMethods = TxQueryExtensionMethods;

export function TxExtension<T extends {new (...args: any[]): BaseClient & TxExtension}>(constructor: T): T {
  return class extends TxQueryExtension(constructor) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
