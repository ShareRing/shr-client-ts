import { Client } from "../../client";
import { PageResponse } from "../../codec/cosmos/base/query/v1beta1/pagination";
import { BasicAllowance, PeriodicAllowance } from "../../codec/cosmos/feegrant/v1beta1/feegrant";
import { QueryClientImpl } from "../../codec/cosmos/feegrant/v1beta1/query";
import { MsgGrantAllowance, MsgRevokeAllowance } from "../../codec/cosmos/feegrant/v1beta1/tx";
import { Any } from "../../codec/google/protobuf/any";
import { createPagination, createProtobufRpcClient, ProtobufRpcClient } from "../../query";
import { MsgGrantAllowanceEncodeObject, MsgRevokeAllowanceEncodeObject } from "./amino";

export type Allowance = {
  granter: string;
  grantee: string;
  allowance?: BasicAllowance | PeriodicAllowance;
};

export type AllowancesResponse = {
  allowances: Allowance[];
  pagination?: PageResponse;
};

export type FeegrantQueryExtension = {
  get feegrant(): {
    allowance(grantee: string, granter: string, height?: number): Promise<Allowance | undefined>;
    allowances(grantee: string, paginationKey?: Uint8Array, height?: number): Promise<AllowancesResponse>;
  };
};

export type FeegrantTxExtension = {
  get feegrant(): {
    readonly grantAllowanceTx: (granter: string, grantee: string, allowance?: Any) => MsgGrantAllowanceEncodeObject;
    readonly revokeAllowanceTx: (granter: string, grantee: string) => MsgRevokeAllowanceEncodeObject;
  };
};

export type FeegrantExtension = FeegrantQueryExtension & FeegrantTxExtension;

function decodeAllowance(allowance?: Any): BasicAllowance | PeriodicAllowance | undefined {
  if (!allowance) {
    return undefined;
  }
  switch (allowance.typeUrl) {
    case "/cosmos.feegrant.v1beta1.BasicAllowance":
      return BasicAllowance.decode(allowance.value);
    case "/cosmos.feegrant.v1beta1.PeriodicAllowance":
      return PeriodicAllowance.decode(allowance.value);
    default:
      throw new Error(`Unsupported type: '${allowance.typeUrl}'`);
  }
}

export function FeegrantQueryExtension<T extends {new (...args: any[]): Client & FeegrantQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get feegrant() {
      return {
        ...super["feegrant"],
        async allowance(grantee: string, granter: string, height?: number): Promise<Allowance | undefined> {
          rpcClient.withHeight(height);
          const {allowance} = await queryService.Allowance({granter, grantee});
          if (!allowance) {
            return undefined;
          }
          return {
            granter: allowance.granter,
            grantee: allowance.grantee,
            allowance: decodeAllowance(allowance.allowance)
          };
        },
        async allowances(grantee: string, paginationKey?: Uint8Array, height?: number): Promise<AllowancesResponse> {
          rpcClient.withHeight(height);
          const response = await queryService.Allowances({
            grantee,
            pagination: createPagination(paginationKey)
          });
          return {
            allowances: response.allowances.map((a) => ({
              granter: a.granter,
              grantee: a.grantee,
              allowance: decodeAllowance(a.allowance)
            })),
            pagination: response.pagination
          };
        }
      };
    }
  };
}

export function FeegrantTxExtension<T extends {new (...args: any[]): Client & FeegrantTxExtension}>(constructor: T): T {
  return class extends constructor {
    get feegrant() {
      return {
        ...super["feegrant"],
        grantAllowanceTx: (granter: string, grantee: string, allowance?: Any): MsgGrantAllowanceEncodeObject => {
          return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
            value: MsgGrantAllowance.fromPartial({granter, grantee, allowance})
          };
        },
        revokeAllowanceTx: (granter: string, grantee: string): MsgRevokeAllowanceEncodeObject => {
          return {
            typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
            value: MsgRevokeAllowance.fromPartial({granter, grantee})
          };
        }
      };
    }
  };
}

export function FeegrantExtension<T extends {new (...args: any[]): Client & FeegrantExtension}>(constructor: T): T {
  return class extends FeegrantTxExtension(FeegrantQueryExtension(constructor)) {};
}

export function createActions(): Record<string, string> {
  return {
    "/cosmos.feegrant.v1beta1.MsgGrantAllowance": "feegrant_grant-allowance",
    "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": "feegrant_revoke-allowance"
  };
}
