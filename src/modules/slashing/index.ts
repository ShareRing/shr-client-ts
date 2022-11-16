import {BaseClient} from "../../baseclient";
import {SlashingQueryExtension} from "./query";
import {SlashingTxExtension} from "./tx";

export type SlashingExtension = SlashingQueryExtension & SlashingTxExtension;

export function SlashingExtension<T extends {new (...args: any[]): BaseClient & SlashingExtension}>(constructor: T): T {
  return class extends SlashingTxExtension(SlashingQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
