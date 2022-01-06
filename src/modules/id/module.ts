import {Client} from "../../client";
import {QueryClientImpl, QueryIdByAddressResponse, QueryIdByIdResponse} from "../../codec/shareledger/id/query";
import {MsgCreateId, MsgCreateIds, MsgReplaceIdOwner, MsgUpdateId} from "../../codec/shareledger/id/tx";
import {createProtobufRpcClient} from "../../query";
import {MsgCreateIdEncodeObject, MsgCreateIdsEncodeObject, MsgUpdateIdEncodeObject, MsgReplaceIdOwnerEncodeObject} from "./amino";

export interface IdExtension {
  readonly id: {
    readonly byId: (id: string) => Promise<QueryIdByIdResponse>;
    readonly byAddress: (address: string) => Promise<QueryIdByAddressResponse>;
    readonly tx: {
      create: (
        id: string,
        ownerAddress: string,
        backupAddress: string,
        issuerAddress: string,
        extraData?: string
      ) => MsgCreateIdEncodeObject;
      createMany: (
        id: string[],
        ownerAddress: string[],
        backupAddress: string[],
        issuerAddress: string,
        extraData?: string[]
      ) => MsgCreateIdsEncodeObject;
      update: (id: string, issuerAddress: string, extraData?: string) => MsgUpdateIdEncodeObject;
      replaceOwner: (id: string, ownerAddress: string, backupAddress: string) => MsgReplaceIdOwnerEncodeObject;
    };
  };
}

export function IdExtension<T extends {new (...args: any[]): Client}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class Client extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    id = {
      byId: async (id: string) => {
        const response = await queryService.IdById({id});
        return response;
      },
      byAddress: async (address: string) => {
        const response = await queryService.IdByAddress({address});
        return response;
      },
      tx: {
        create: (
          id: string,
          ownerAddress: string,
          backupAddress: string,
          issuerAddress: string,
          extraData?: string
        ): MsgCreateIdEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgCreateId",
            value: MsgCreateId.fromPartial({
              backupAddress,
              extraData,
              id,
              issuerAddress,
              ownerAddress
            })
          };
        },
        createMany: (
          id: string[],
          ownerAddress: string[],
          backupAddress: string[],
          issuerAddress: string,
          extraData?: string[]
        ): MsgCreateIdsEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgCreateIds",
            value: MsgCreateIds.fromPartial({
              backupAddress,
              extraData,
              id,
              issuerAddress,
              ownerAddress
            })
          };
        },
        update: (id: string, issuerAddress: string, extraData?: string): MsgUpdateIdEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgUpdateId",
            value: MsgUpdateId.fromPartial({
              id,
              issuerAddress,
              extraData
            })
          };
        },
        replaceOnwer: (id: string, ownerAddress: string, backupAddress: string): MsgReplaceIdOwnerEncodeObject => {
          return {
            typeUrl: "/shareledger.id.MsgReplaceIdOwner",
            value: MsgReplaceIdOwner.fromPartial({
              backupAddress,
              id,
              ownerAddress
            })
          };
        }
      }
    };
  };
}
