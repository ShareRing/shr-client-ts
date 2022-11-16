import {BaseClient} from "../../baseclient";
import {SwapQueryExtension} from "./query";
import {SwapTxExtension} from "./tx";

export type SwapExtension = SwapQueryExtension & SwapTxExtension;

export function SwapExtension<T extends {new (...args: any[]): BaseClient & SwapExtension}>(constructor: T): T {
  return class extends SwapTxExtension(SwapQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
