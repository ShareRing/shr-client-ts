import {BaseClient} from "../../baseclient";
import {AssetQueryExtension} from "./query";
import {AssetTxExtension} from "./tx";

export type AssetExtension = AssetQueryExtension & AssetTxExtension;

export function AssetExtension<T extends {new (...args: any[]): BaseClient & AssetExtension}>(constructor: T): T {
  return class extends AssetTxExtension(AssetQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
