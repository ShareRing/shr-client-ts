import {BaseClient} from "../../baseclient";
import {StakingQueryExtension, StakingQueryExtensionMethods} from "./query";
import {StakingTxExtension, StakingTxExtensionMethods} from "./tx";

export type StakingExtension = StakingQueryExtension & StakingTxExtension;
export type StakingExtensionMethods = StakingQueryExtensionMethods & StakingTxExtensionMethods;

export function StakingExtension<T extends {new (...args: any[]): BaseClient & StakingExtension}>(constructor: T): T {
  return class extends StakingTxExtension(StakingQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
