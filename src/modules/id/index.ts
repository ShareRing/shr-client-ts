import {BaseClient} from "../../baseclient";
import {IdQueryExtension} from "./query";
import {IdTxExtension} from "./tx";

export type IdExtension = IdQueryExtension & IdTxExtension;

export function IdExtension<T extends {new (...args: any[]): BaseClient & IdExtension}>(constructor: T): T {
  return class extends IdTxExtension(IdQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
