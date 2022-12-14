import {Pubkey} from "@cosmjs/amino";
import {StdFee} from "@shareledgerjs/amino";
import {BaseClient} from "@shareledgerjs/client";
import {GetTxResponse, GetTxsEventResponse, OrderBy, SimulateResponse} from "@shareledgerjs/types/cosmos/tx/v1beta1/service";
import {Any} from "@shareledgerjs/types/google/protobuf/any";

export interface TokenQueryExtensionMethods {
  getTx(hash: string): Promise<GetTxResponse>;
  getTxs(events: string[], orderBy?: OrderBy, paginationKey?: Uint8Array): Promise<GetTxsEventResponse>;
  simulate(signer: Pubkey, sequence: number, messages: readonly Any[], memo?: string, fee?: StdFee): Promise<SimulateResponse>;
}

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
