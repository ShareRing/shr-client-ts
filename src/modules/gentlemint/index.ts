import {BaseClient} from "../../baseclient";
import {GentlemintQueryExtension, GentlemintQueryExtensionMethods} from "./query";
import {GentlemintTxExtension, GentlemintTxExtensionMethods} from "./tx";

export type GentlemintExtension = GentlemintQueryExtension & GentlemintTxExtension;
export type GentlemintExtensionMethods = GentlemintQueryExtensionMethods & GentlemintTxExtensionMethods;

export function GentlemintExtension<T extends {new (...args: any[]): BaseClient & GentlemintExtension}>(constructor: T): T {
  return class extends GentlemintTxExtension(GentlemintQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
