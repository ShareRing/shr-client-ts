import {BaseClient} from "../../baseclient";
import {AuthQueryExtension, AuthQueryExtensionMethods} from "./query";

export type AuthExtension = AuthQueryExtension;
export type AuthExtensionMethods = AuthQueryExtensionMethods;

export function AuthExtension<T extends {new (...args: any[]): BaseClient & AuthExtension}>(constructor: T): T {
  return class extends AuthQueryExtension(constructor) {};
}

export * from "./amino";
export * from "./query";
export * from "./tx";
