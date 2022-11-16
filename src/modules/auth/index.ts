import {BaseClient} from "../../baseclient";
import {AuthQueryExtension} from "./query";

export type AuthExtension = AuthQueryExtension;

export function AuthExtension<T extends {new (...args: any[]): BaseClient & AuthExtension}>(constructor: T): T {
  return class extends AuthQueryExtension(constructor) {};
}

export * from "./tx";
export * from "./amino";
export * from "./query";
