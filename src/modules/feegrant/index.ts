import {BaseClient} from "../../baseclient";
import {FeegrantQueryExtension} from "./query";
import {FeegrantTxExtension} from "./tx";

export type FeegrantExtension = FeegrantQueryExtension & FeegrantTxExtension;

export function FeegrantExtension<T extends {new (...args: any[]): BaseClient & FeegrantExtension}>(constructor: T): T {
  return class extends FeegrantTxExtension(FeegrantQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
