import {BaseClient} from "../../baseclient";
import {WasmQueryExtension, WasmQueryExtensionMethods} from "./query";
import {WasmTxExtension, WasmTxExtensionMethods} from "./tx";

export type WasmExtension = WasmQueryExtension & WasmTxExtension;
export type WasmExtensionMethods = WasmQueryExtensionMethods & WasmTxExtensionMethods;

export function WasmExtension<T extends {new (...args: any[]): BaseClient & WasmExtension}>(constructor: T): T {
  return class extends WasmTxExtension(WasmQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
