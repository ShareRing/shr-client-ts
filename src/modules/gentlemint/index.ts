import {BaseClient} from "../../baseclient";
import {GentlemintQueryExtension} from "./query";
import {GentlemintTxExtension} from "./tx";

export type GentlemintExtension = GentlemintQueryExtension & GentlemintTxExtension;

export function GentlemintExtension<T extends {new (...args: any[]): BaseClient & GentlemintExtension}>(constructor: T): T {
  return class extends GentlemintTxExtension(GentlemintQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
