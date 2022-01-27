import {Client} from "../../client";
import {Id} from "../../codec/shareledger/id/id";
import {QueryClientImpl} from "../../codec/shareledger/id/query";
import {MsgCreateId, MsgCreateIds, MsgReplaceIdOwner, MsgUpdateId} from "../../codec/shareledger/id/tx";
import {createProtobufRpcClient} from "../../query";
import {MsgCreateIdEncodeObject, MsgCreateIdsEncodeObject, MsgReplaceIdOwnerEncodeObject, MsgUpdateIdEncodeObject} from "./amino";

export type IdQueryExtension = {
  get id(): {
    readonly id: (id: string) => Promise<Id | undefined>;
    readonly idByAddress: (address: string) => Promise<Id | undefined>;
  };
};

export type IdTxExtension = {
  get id(): {
    create: (id: string, ownerAddress: string, backupAddress: string, issuerAddress: string, extraData?: string) => MsgCreateIdEncodeObject;
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

export type IdExtension = IdQueryExtension & IdTxExtension;

export function IdQueryExtension<T extends {new (...args: any[]): Client & IdQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      // Use this service to get easy typed access to query methods
      // This cannot be used for proof verification
      queryService = new QueryClientImpl(createProtobufRpcClient(this.forceGetQueryClient()));
    }
    get id() {
      return {
        ...super["id"],
        byId: async (id: string) => {
          const response = await queryService.IdById({id});
          return response.id;
        },
        byAddress: async (address: string) => {
          const response = await queryService.IdByAddress({address});
          return response.id;
        }
      };
    }
  };
}

export function IdTxExtension<T extends {new (...args: any[]): Client & IdTxExtension}>(constructor: T): T {
  return class extends constructor {
    get id() {
      return {
        ...super["id"],
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
      };
    }
  };
}

export function IdExtension<T extends {new (...args: any[]): Client & IdExtension}>(constructor: T): T {
  return class extends IdTxExtension(IdQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/shareledger.id.MsgCreateId": "id_create",
    "/shareledger.id.MsgCreateIds": "id_create-ids",
    "/shareledger.id.MsgUpdateId": "id_update",
    "/shareledger.id.MsgReplaceIdOwner": "id_replace"
  };
}
