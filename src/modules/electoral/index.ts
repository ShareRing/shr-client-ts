import {BaseClient} from "../../baseclient";
import {ElectoralQueryExtension} from "./query";
import {ElectoralTxExtension} from "./tx";

export type ElectoralExtension = ElectoralQueryExtension & ElectoralTxExtension;

export function ElectoralExtension<T extends {new (...args: any[]): BaseClient & ElectoralExtension}>(constructor: T): T {
  return class extends ElectoralTxExtension(ElectoralQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
