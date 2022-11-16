import {BaseClient} from "../../baseclient";
import {WasmQueryExtension} from "./query";
import {WasmTxExtension} from "./tx";

export type WasmExtension = WasmQueryExtension & WasmTxExtension;

export function WasmExtension<T extends {new (...args: any[]): BaseClient & WasmExtension}>(constructor: T): T {
  return class extends WasmTxExtension(WasmQueryExtension(constructor)) {};
}

export * from "./amino";
export * from "./tx";
export * from "./query";
