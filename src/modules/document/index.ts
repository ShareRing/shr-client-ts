import {BaseClient} from "../../baseclient";
import {DocumentQueryExtension} from "./query";
import {DocumentTxExtension} from "./tx";

export type DocumentExtension = DocumentQueryExtension & DocumentTxExtension;

export function DocumentExtension<T extends {new (...args: any[]): BaseClient & DocumentExtension}>(constructor: T): T {
  return class extends DocumentTxExtension(DocumentQueryExtension(constructor)) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
