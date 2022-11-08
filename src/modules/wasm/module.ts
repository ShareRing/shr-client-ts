import {fromUtf8, toUtf8} from "@cosmjs/encoding";
import Long from "long";
import {Client} from "../../client";
import {
  QueryAllContractStateResponse,
  QueryClientImpl,
  QueryCodeResponse,
  QueryCodesResponse,
  QueryContractHistoryResponse,
  QueryContractInfoResponse,
  QueryContractsByCodeResponse,
  QueryRawContractStateResponse
} from "../../codec/cosmos/wasm/v1beta1/query";
import {Any} from "../../codec/google/protobuf/any";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";
import {
  MsgClearAdminEncodeObject,
  MsgExecuteContractEncodeObject,
  MsgInstantiateContractEncodeObject,
  MsgMigrateContractEncodeObject,
  MsgStoreCodeEncodeObject,
  MsgUpdateAdminEncodeObject
} from "./amino";
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin
} from "../../codec/cosmos/wasm/v1beta1/tx";
import {AccessConfig} from "../../codec/cosmos/wasm/v1beta1/types";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";

/**
 * An object containing a parsed JSON document. The result of JSON.parse().
 * This doesn't provide any type safety over `any` but expresses intent in the code.
 *
 * This type is returned by `queryContractSmart`.
 */
export type JsonObject = any;

export type WasmQueryExtension = {
  get wasm(): {
    readonly listCodeInfo: (paginationKey?: Uint8Array) => Promise<QueryCodesResponse>;
    /**
     * Downloads the original wasm bytecode by code ID.
     *
     * Throws an error if no code with this id
     */
    readonly getCode: (id: number) => Promise<QueryCodeResponse>;
    readonly listContractsByCodeId: (id: number, paginationKey?: Uint8Array) => Promise<QueryContractsByCodeResponse>;
    /**
     * Returns null when contract was not found at this address.
     */
    readonly getContractInfo: (address: string) => Promise<QueryContractInfoResponse>;
    /**
     * Returns null when contract history was not found for this address.
     */
    readonly getContractCodeHistory: (address: string, paginationKey?: Uint8Array) => Promise<QueryContractHistoryResponse>;
    /**
     * Returns all contract state.
     * This is an empty array if no such contract, or contract has no data.
     */
    readonly getAllContractState: (address: string, paginationKey?: Uint8Array) => Promise<QueryAllContractStateResponse>;
    /**
     * Returns the data at the key if present (unknown decoded json),
     * or null if no data at this (contract address, key) pair
     */
    readonly queryContractRaw: (address: string, key: Uint8Array) => Promise<QueryRawContractStateResponse>;
    /**
     * Makes a smart query on the contract and parses the response as JSON.
     * Throws error if no such contract exists, the query format is invalid or the response is invalid.
     */
    readonly queryContractSmart: (address: string, query: JsonObject) => Promise<JsonObject>;
  };
};

export type WasmTxExtension = {
  get wasm(): {
    readonly storeCode: (sender: string, wasmByteCode: Uint8Array, instantiatePermission?: AccessConfig) => MsgStoreCodeEncodeObject;
    readonly instantiateContract: (
      sender: string,
      admin: string,
      codeId: Long,
      label: string,
      msg: Uint8Array,
      funds: Coin[]
    ) => MsgInstantiateContractEncodeObject;
    readonly executeContract: (sender: string, contract: string, msg: Uint8Array, funds: Coin[]) => MsgExecuteContractEncodeObject;
    readonly migrateContract: (sender: string, contract: string, codeId: Long, msg: Uint8Array) => MsgMigrateContractEncodeObject;
    readonly updateAdmin: (sender: string, newAdmin: string, contract: string) => MsgUpdateAdminEncodeObject;
    readonly clearAdmin: (sender: string, contract: string) => MsgClearAdminEncodeObject;
  };
};

export type WasmExtension = WasmQueryExtension & WasmTxExtension;

export function WasmQueryExtension<T extends {new (...args: any[]): Client & WasmQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    get wasm() {
      return {
        ...super["wasm"],
        listCodeInfo: async (paginationKey?: Uint8Array) => {
          const request = {
            pagination: createPagination(paginationKey)
          };
          return queryService.Codes(request);
        },
        getCode: async (id: number) => {
          const request = {codeId: Long.fromNumber(id)};
          return queryService.Code(request);
        },
        listContractsByCodeId: async (id: number, paginationKey?: Uint8Array) => {
          const request = {
            codeId: Long.fromNumber(id),
            pagination: createPagination(paginationKey)
          };
          return queryService.ContractsByCode(request);
        },
        getContractInfo: async (address: string) => {
          const request = {address: address};
          return queryService.ContractInfo(request);
        },

        getContractCodeHistory: async (address: string, paginationKey?: Uint8Array) => {
          const request = {
            address: address,
            pagination: createPagination(paginationKey)
          };
          return queryService.ContractHistory(request);
        },

        getAllContractState: async (address: string, paginationKey?: Uint8Array) => {
          const request = {
            address: address,
            pagination: createPagination(paginationKey)
          };
          return queryService.AllContractState(request);
        },

        queryContractRaw: async (address: string, key: Uint8Array) => {
          const request = {address: address, queryData: key};
          return queryService.RawContractState(request);
        },

        queryContractSmart: async (address: string, query: JsonObject) => {
          const request = {address: address, queryData: toUtf8(JSON.stringify(query))};
          const {data} = await queryService.SmartContractState(request);
          // By convention, smart queries must return a valid JSON document (see https://github.com/CosmWasm/cosmwasm/issues/144)
          let responseText: string;
          try {
            responseText = fromUtf8(data);
          } catch (error) {
            throw new Error(`Could not UTF-8 decode smart query response from contract: ${error}`);
          }
          try {
            return JSON.parse(responseText);
          } catch (error) {
            throw new Error(`Could not JSON parse smart query response from contract: ${error}`);
          }
        }
      };
    }
  };
}

export function WasmExtension<T extends {new (...args: any[]): Client & WasmExtension}>(constructor: T): T {
  return class extends WasmTxExtension(WasmQueryExtension(constructor)) {};

}

export function WasmTxExtension<T extends {new (...args: any[]): Client & WasmTxExtension}>(constructor: T): T {
  return class extends constructor {
    get wasm() {
      return {
        ...super["wasm"],
        storeCode: (sender: string, wasmByteCode: Uint8Array, instantiatePermission?: AccessConfig): MsgStoreCodeEncodeObject => {
          return {
            typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
            value: MsgStoreCode.fromPartial({sender, wasmByteCode, instantiatePermission})
          };
        },
        instantiateContract: (
          sender: string,
          admin: string,
          codeId: Long,
          label: string,
          msg: Uint8Array,
          funds: Coin[]
        ): MsgInstantiateContractEncodeObject => {
          return {
            typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
            value: MsgInstantiateContract.fromPartial({sender, admin, codeId, label, msg, funds})
          };
        },
        executeContract: (sender: string, contract: string, msg: Uint8Array, funds: Coin[]): MsgExecuteContractEncodeObject => {
          return {
            typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
            value: MsgExecuteContract.fromPartial({sender, contract, msg, funds})
          };
        },
        migrateContract: (sender: string, contract: string, codeId: Long, msg: Uint8Array): MsgMigrateContractEncodeObject => {
          return {
            typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
            value: MsgMigrateContract.fromPartial({sender, contract, codeId, msg})
          };
        },
        updateAdmin: (sender: string, newAdmin: string, contract: string): MsgUpdateAdminEncodeObject => {
          return {
            typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
            value: MsgUpdateAdmin.fromPartial({sender, newAdmin, contract})
          };
        },
        clearAdmin: (sender: string, contract: string): MsgClearAdminEncodeObject => {
          return {
            typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
            value: MsgClearAdmin.fromPartial({sender, contract})
          };
        }
      };
    }
  };
}

export function createActions(): Record<string, string> {
  return {
    "/cosmwasm.wasm.v1.MsgStoreCode": "wasm_store-code",
    "/cosmwasm.wasm.v1.MsgInstantiateContract": "wasm_instantiate-contract",
    "/cosmwasm.wasm.v1.MsgExecuteContract": "wasm_execute-contract",
    "/cosmwasm.wasm.v1.MsgMigrateContract": "wasm_migrate-contract",
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": "wasm_update-admin",
    "/cosmwasm.wasm.v1.MsgClearAdmin": "wasm_clear-admin"
  };
}
