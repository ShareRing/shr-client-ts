import {BaseClient} from "../../baseclient";
import {SwapQueryExtension, SwapQueryExtensionMethods} from "./query";
import {SwapTxExtension, SwapTxExtensionMethods} from "./tx";

export type SwapExtension = SwapQueryExtension & SwapTxExtension;
export type SwapExtensionMethods = SwapQueryExtensionMethods & SwapTxExtensionMethods;

export function SwapExtension<T extends {new (...args: any[]): BaseClient & SwapExtension}>(constructor: T): T {
  return class extends SwapTxExtension(SwapQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
