import {BaseClient} from "../../baseclient";
import {StakingQueryExtension} from "./query";
import {StakingTxExtension} from "./tx";

export type StakingExtension = StakingQueryExtension & StakingTxExtension;

export function StakingExtension<T extends {new (...args: any[]): BaseClient & StakingExtension}>(constructor: T): T {
  return class extends StakingTxExtension(StakingQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
