import {PageResponse} from "@shareledgerjs/types/cosmos/base/query/v1beta1/pagination";
import {BasicAllowance, PeriodicAllowance} from "@shareledgerjs/types/cosmos/feegrant/v1beta1/feegrant";
import {QueryClientImpl} from "@shareledgerjs/types/cosmos/feegrant/v1beta1/query";
import {Any} from "@shareledgerjs/types/google/protobuf/any";

import {BaseClient} from "../../baseclient";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

export type Allowance = {
  granter: string;
  grantee: string;
  allowance?: BasicAllowance | PeriodicAllowance;
};

export type AllowancesResponse = {
  allowances: Allowance[];
  pagination?: PageResponse;
};

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

export interface FeegrantQueryExtensionMethods {
  allowance(grantee: string, granter: string, height?: number): Promise<Allowance | undefined>;
  allowances(grantee: string, paginationKey?: Uint8Array, height?: number): Promise<AllowancesResponse>;
  allowancesByGranter(granter: string, paginationKey?: Uint8Array, height?: number): Promise<AllowancesResponse>;
}

export interface FeegrantQueryExtension {
  readonly feegrant: FeegrantQueryExtensionMethods;
}

export function FeegrantQueryExtension<T extends {new (...args: any[]): BaseClient & FeegrantQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    override get feegrant() {
      return {
        ...super["feegrant"],
        allowance: async (grantee: string, granter: string, height?: number): Promise<Allowance | undefined> => {
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
        allowances: async (grantee: string, paginationKey?: Uint8Array, height?: number): Promise<AllowancesResponse> => {
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
        },
        allowancesByGranter: async (granter: string, paginationKey?: Uint8Array, height?: number): Promise<AllowancesResponse> => {
          rpcClient.withHeight(height);
          const response = await queryService.AllowancesByGranter({
            granter,
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