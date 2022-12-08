import {BaseClient} from "../../baseclient";
import {DistributionQueryExtension, DistributionQueryExtensionMethods} from "./query";
import {DistributionTxExtension, DistributionTxExtensionMethods} from "./tx";

export type DistributionExtension = DistributionQueryExtension & DistributionTxExtension;
export type DistributionExtensionMethods = DistributionQueryExtensionMethods & DistributionTxExtensionMethods;

export function DistributionExtension<T extends {new (...args: any[]): BaseClient & DistributionExtension}>(constructor: T): T {
  return class extends DistributionTxExtension(DistributionQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
