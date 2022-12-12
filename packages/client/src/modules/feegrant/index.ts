import {BaseClient} from "../../baseclient";
import {FeegrantQueryExtension, FeegrantQueryExtensionMethods} from "./query";
import {FeegrantTxExtension, FeegrantTxExtensionMethods} from "./tx";

export type FeegrantExtension = FeegrantQueryExtension & FeegrantTxExtension;
export type FeegrantExtensionMethods = FeegrantQueryExtensionMethods & FeegrantTxExtensionMethods;

export function FeegrantExtension<T extends {new (...args: any[]): BaseClient & FeegrantExtension}>(constructor: T): T {
  return class extends FeegrantTxExtension(FeegrantQueryExtension(constructor)) {};
}

export * from "./amino";
export * from "./query";
export * from "./tx";
