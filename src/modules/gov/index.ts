import {BaseClient} from "../../baseclient";
import {GovQueryExtension} from "./query";
import {GovTxExtension} from "./tx";

export type GovExtension = GovQueryExtension & GovTxExtension;

export function GovExtension<T extends {new (...args: any[]): BaseClient & GovExtension}>(constructor: T): T {
  return class extends GovTxExtension(GovQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
