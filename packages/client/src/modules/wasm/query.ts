import {fromUtf8, toUtf8} from "@cosmjs/encoding";
import {
  QueryAllContractStateResponse,
  QueryClientImpl,
  QueryCodeResponse,
  QueryCodesResponse,
  QueryContractHistoryResponse,
  QueryContractInfoResponse,
  QueryContractsByCodeResponse,
  QueryRawContractStateResponse
} from "@shareledgerjs/types/cosmwasm/wasm/v1/query";
import Long from "long";

import {BaseClient} from "../../baseclient";
import {createPagination, createProtobufRpcClient, ProtobufRpcClient} from "../../query";

/**
 * An object containing a parsed JSON document. The result of JSON.parse().
 * This doesn't provide any type safety over `any` but expresses intent in the code.
 *
 * This type is returned by `queryContractSmart`.
 */
export type JsonObject = any;

export interface WasmQueryExtensionMethods {
  codes(paginationKey?: Uint8Array): Promise<QueryCodesResponse>;
  /**
   * Downloads the original wasm bytecode by code ID.
   *
   * Throws an error if no code with this id
   */
  code(id: number): Promise<QueryCodeResponse>;
  contractsByCode(id: number, paginationKey?: Uint8Array): Promise<QueryContractsByCodeResponse>;
  /**
   * Returns null when contract was not found at this address.
   */
  contractInfo(address: string): Promise<QueryContractInfoResponse>;
  /**
   * Returns null when contract history was not found for this address.
   */
  contractHistory(address: string, paginationKey?: Uint8Array): Promise<QueryContractHistoryResponse>;
  /**
   * Returns all contract state.
   * This is an empty array if no such contract, or contract has no data.
   */
  allContractState(address: string, paginationKey?: Uint8Array): Promise<QueryAllContractStateResponse>;
  /**
   * Returns the data at the key if present (unknown decoded json),
   * or null if no data at this (contract address, key) pair
   */
  rawContractState(address: string, key: Uint8Array): Promise<QueryRawContractStateResponse>;
  /**
   * Makes a smart query on the contract and parses the response as JSON.
   * Throws error if no such contract exists, the query format is invalid or the response is invalid.
   */
  smartContractState(address: string, query: JsonObject): Promise<JsonObject>;
}

export interface WasmQueryExtension {
  readonly wasm: WasmQueryExtensionMethods;
}

export function WasmQueryExtension<T extends {new (...args: any[]): BaseClient & WasmQueryExtension}>(constructor: T): T {
  let queryService: QueryClientImpl;
  let rpcClient: ProtobufRpcClient;
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      rpcClient = createProtobufRpcClient(this.forceGetQueryClient());
      queryService = new QueryClientImpl(rpcClient);
    }
    override get wasm() {
      return {
        ...super["wasm"],
        codes: async (paginationKey?: Uint8Array) => {
          const request = {
            pagination: createPagination(paginationKey)
          };
          return queryService.Codes(request);
        },
        code: async (id: number) => {
          const request = {codeId: Long.fromNumber(id)};
          return queryService.Code(request);
        },
        contractsByCode: async (id: number, paginationKey?: Uint8Array) => {
          const request = {
            codeId: Long.fromNumber(id),
            pagination: createPagination(paginationKey)
          };
          return queryService.ContractsByCode(request);
        },
        contractInfo: async (address: string) => {
          const request = {address: address};
          return queryService.ContractInfo(request);
        },
        contractHistory: async (address: string, paginationKey?: Uint8Array) => {
          const request = {
            address: address,
            pagination: createPagination(paginationKey)
          };
          return queryService.ContractHistory(request);
        },
        allContractState: async (address: string, paginationKey?: Uint8Array) => {
          const request = {
            address: address,
            pagination: createPagination(paginationKey)
          };
          return queryService.AllContractState(request);
        },
        rawContractState: async (address: string, key: Uint8Array) => {
          const request = {address: address, queryData: key};
          return queryService.RawContractState(request);
        },
        smartContractState: async (address: string, query: JsonObject) => {
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
