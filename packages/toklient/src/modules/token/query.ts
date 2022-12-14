import {BaseClient} from "@shareledgerjs/client";

export interface TokenQueryExtensionMethods {}

export interface TokenQueryExtension {
  readonly token: TokenQueryExtensionMethods;
}

export function TokenQueryExtension<T extends {new (...args: any[]): BaseClient & TokenQueryExtension}>(constructor: T): T {
  // let serviceClient: ServiceClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // serviceClient = new ServiceClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }

    override get token() {
      return {
        ...super["token"]
      };
    }
  };
}
