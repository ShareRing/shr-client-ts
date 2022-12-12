import {Pubkey} from "@cosmjs/amino";
import {Int53} from "@cosmjs/math";
import {StdFee} from "@shareledgerjs/amino";
import {encodePubkey} from "@shareledgerjs/signing";
import {SignMode} from "@shareledgerjs/types/cosmos/tx/signing/v1beta1/signing";
import {
  GetTxResponse,
  GetTxsEventResponse,
  OrderBy,
  ServiceClientImpl,
  SimulateRequest,
  SimulateResponse
} from "@shareledgerjs/types/cosmos/tx/v1beta1/service";
import {AuthInfo, Fee, Tx, TxBody} from "@shareledgerjs/types/cosmos/tx/v1beta1/tx";
import {Any} from "@shareledgerjs/types/google/protobuf/any";
import Long from "long";

import {BaseClient} from "../../baseclient";
import {createPagination, createProtobufRpcClient} from "../../query";

export interface TxQueryExtensionMethods {
  getTx(hash: string): Promise<GetTxResponse>;
  getTxs(events: string[], orderBy?: OrderBy, paginationKey?: Uint8Array): Promise<GetTxsEventResponse>;
  simulate(signer: Pubkey, sequence: number, messages: readonly Any[], memo?: string, fee?: StdFee): Promise<SimulateResponse>;
}

export interface TxQueryExtension {
  readonly tx: TxQueryExtensionMethods;
}

export function TxQueryExtension<T extends {new (...args: any[]): BaseClient & TxQueryExtension}>(constructor: T): T {
  let serviceClient: ServiceClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      serviceClient = new ServiceClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }

    override get tx() {
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
            page: Long.UZERO,
            limit: Long.UZERO,
            pagination: createPagination(paginationKey)
          });
          return response;
        },
        simulate: async (signer: Pubkey, sequence: number, messages: readonly Any[], memo?: string, fee?: StdFee) => {
          const tx = Tx.fromPartial({
            authInfo: AuthInfo.fromPartial({
              fee: Fee.fromPartial({
                amount: fee?.amount ? [...fee.amount] : undefined,
                gasLimit: fee?.gas ? Int53.fromString(fee.gas).toNumber() : undefined,
                granter: fee?.granter,
                payer: fee?.payer
              }),
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
          });
          const response = await serviceClient.Simulate(
            SimulateRequest.fromPartial({
              txBytes: Tx.encode(tx).finish()
            })
          );
          return response;
        }
      };
    }
  };
}
