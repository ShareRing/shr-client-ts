import {BaseClient} from "../../baseclient";
import {SlashingQueryExtension, SlashingQueryExtensionMethods} from "./query";
import {SlashingTxExtension, SlashingTxExtensionMethods} from "./tx";

export type SlashingExtension = SlashingQueryExtension & SlashingTxExtension;
export type SlashingExtensionMethods = SlashingQueryExtensionMethods & SlashingTxExtensionMethods;

export function SlashingExtension<T extends {new (...args: any[]): BaseClient & SlashingExtension}>(constructor: T): T {
  return class extends SlashingTxExtension(SlashingQueryExtension(constructor)) {};
}

export * from "./amino";
export * from "./query";
export * from "./tx";
