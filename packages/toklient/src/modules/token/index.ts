import {BaseClient} from "@shareledgerjs/client";

import {TokenQueryExtension, TokenQueryExtensionMethods} from "./query";

export type TokenExtension = TokenQueryExtension;
export type TxExtensioMethods = TokenQueryExtensionMethods;

export function TokenExtension<T extends {new (...args: any[]): BaseClient & TokenExtension}>(constructor: T): T {
  return class extends TokenQueryExtension(constructor) {};
}

export * from "./amino";
export * from "./query";
export * from "./tx";
