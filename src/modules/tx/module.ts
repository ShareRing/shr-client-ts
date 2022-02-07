import {Pubkey} from "@cosmjs/amino";
import Long from "long";
import {Client} from "../../client";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {SignMode} from "../../codec/cosmos/tx/signing/v1beta1/signing";
import {
  GetTxResponse,
  GetTxsEventResponse,
  OrderBy,
  ServiceClientImpl,
  SimulateRequest,
  SimulateResponse
} from "../../codec/cosmos/tx/v1beta1/service";
import {AuthInfo, Fee, Tx, TxBody} from "../../codec/cosmos/tx/v1beta1/tx";
import {Any} from "../../codec/google/protobuf/any";
import {createPagination, createProtobufRpcClient} from "../../query";
import {encodePubkey} from "../../signing";

export type TxQueryExtension = {
  get tx(): {
    getTx: (hash: string) => Promise<GetTxResponse>;
    getTxs: (events: string[], orderBy?: OrderBy, paginationKey?: Uint8Array) => Promise<GetTxsEventResponse>;
    simulate: (signer: Pubkey, sequence: number, messages: readonly Any[], memo?: string, fee?: Coin[]) => Promise<SimulateResponse>;
  };
};

export type TxExtension = TxQueryExtension;

export function TxQueryExtension<T extends {new (...args: any[]): Client & TxQueryExtension}>(constructor: T): T {
  let serviceClient: ServiceClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      serviceClient = new ServiceClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get tx() {
      return {
        ...super["tx"],
        getTx: async (hash: string) => {
          const response = await serviceClient.GetTx({hash});
          return response;
        },
        getTxs: async (events: string[], orderBy: OrderBy = OrderBy.ORDER_BY_UNSPECIFIED, paginationKey?: Uint8Array) => {
          const response = await serviceClient.GetTxsEvent({
            events,
            orderBy,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        simulate: async (signer: Pubkey, sequence: number, messages: readonly Any[], memo?: string, fee?: Coin[]) => {
          const response = await serviceClient.Simulate(
            SimulateRequest.fromPartial({
              tx: Tx.fromPartial({
                authInfo: AuthInfo.fromPartial({
                  fee: Fee.fromPartial({amount: fee}),
                  signerInfos: [
                    {
                      publicKey: encodePubkey(signer),
                      sequence: Long.fromNumber(sequence, true),
                      modeInfo: {single: {mode: SignMode.SIGN_MODE_UNSPECIFIED}}
                    }
                  ]
                }),
                body: TxBody.fromPartial({
                  messages: Array.from(messages),
                  memo: memo
                }),
                signatures: [new Uint8Array()]
              }),
              // Sending serialized `txBytes` is the future. But
              // this is not available in Comsos SDK 0.42.
              txBytes: undefined
            })
          );
          return response;
        }
      };
    }
  };
}

export function TxExtension<T extends {new (...args: any[]): Client & TxExtension}>(constructor: T): T {
  return class extends TxQueryExtension(constructor) {};
}
