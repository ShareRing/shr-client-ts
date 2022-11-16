import {BaseClient} from "../../baseclient";
import {TxQueryExtension} from "./query";

export type TxExtension = TxQueryExtension;

export function TxExtension<T extends {new (...args: any[]): BaseClient & TxExtension}>(constructor: T): T {
  return class extends TxQueryExtension(constructor) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
