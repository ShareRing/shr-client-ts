import {BaseClient} from "../../baseclient";
import {ElectoralQueryExtension, ElectoralQueryExtensionMethods} from "./query";
import {ElectoralTxExtension, ElectoralTxExtensionMethods} from "./tx";

export type ElectoralExtension = ElectoralQueryExtension & ElectoralTxExtension;
export type ElectoralExtensionMethods = ElectoralQueryExtensionMethods & ElectoralTxExtensionMethods;

export function ElectoralExtension<T extends {new (...args: any[]): BaseClient & ElectoralExtension}>(constructor: T): T {
  return class extends ElectoralTxExtension(ElectoralQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
