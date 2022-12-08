import {BaseClient} from "../../baseclient";
import {IdQueryExtension, IdQueryExtensionMethods} from "./query";
import {IdTxExtension, IdTxExtensionMethods} from "./tx";

export type IdExtension = IdQueryExtension & IdTxExtension;
export type IdExtensionMethods = IdQueryExtensionMethods & IdTxExtensionMethods;

export function IdExtension<T extends {new (...args: any[]): BaseClient & IdExtension}>(constructor: T): T {
  return class extends IdTxExtension(IdQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
