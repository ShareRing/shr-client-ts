import {BaseClient} from "../../baseclient";
import {DocumentQueryExtension, DocumentQueryExtensionMethods} from "./query";
import {DocumentTxExtension, DocumentTxExtensionMethods} from "./tx";

export type DocumentExtension = DocumentQueryExtension & DocumentTxExtension;
export type DocumentExtensionMethods = DocumentQueryExtensionMethods & DocumentTxExtensionMethods;

export function DocumentExtension<T extends {new (...args: any[]): BaseClient & DocumentExtension}>(constructor: T): T {
  return class extends DocumentTxExtension(DocumentQueryExtension(constructor)) {};
}

export * from "./amino";
export * from "./query";
export * from "./tx";
