import {BaseClient} from "../../baseclient";
import {FeegrantQueryExtension} from "./query";

export type FeegrantExtension = FeegrantQueryExtension;

export function FeegrantExtension<T extends {new (...args: any[]): BaseClient & FeegrantExtension}>(constructor: T): T {
  return class extends FeegrantQueryExtension(constructor) {};
}

export * from "./amino";
export * from "./tx";
export * from "./query";
