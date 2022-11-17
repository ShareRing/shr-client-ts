import Long from "long";
import {BaseClient} from "../../baseclient";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin
} from "../../codec/cosmos/wasm/v1beta1/tx";
import {AccessConfig} from "../../codec/cosmos/wasm/v1beta1/types";
import {EncodeObject, GeneratedType} from "../../signing";

export function createWasmTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin]
  ];
}

export function createWasmActions(): Record<string, string> {
  return {
    "/cosmwasm.wasm.v1.MsgStoreCode": "wasm_store-code",
    "/cosmwasm.wasm.v1.MsgInstantiateContract": "wasm_instantiate-contract",
    "/cosmwasm.wasm.v1.MsgExecuteContract": "wasm_execute-contract",
    "/cosmwasm.wasm.v1.MsgMigrateContract": "wasm_migrate-contract",
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": "wasm_update-admin",
    "/cosmwasm.wasm.v1.MsgClearAdmin": "wasm_clear-admin"
  };
}

export interface MsgStoreCodeEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
  readonly value: Partial<MsgStoreCode>;
}

export function isMsgStoreCodeEncodeObject(object: EncodeObject): object is MsgStoreCodeEncodeObject {
  return (object as MsgStoreCodeEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgStoreCode";
}

export interface MsgInstantiateContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  readonly value: Partial<MsgInstantiateContract>;
}

export function isMsgInstantiateContractEncodeObject(object: EncodeObject): object is MsgInstantiateContractEncodeObject {
  return (object as MsgInstantiateContractEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgInstantiateContract";
}

export interface MsgUpdateAdminEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  readonly value: Partial<MsgUpdateAdmin>;
}
export function isMsgUpdateAdminEncodeObject(object: EncodeObject): object is MsgUpdateAdminEncodeObject {
  return (object as MsgUpdateAdminEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgUpdateAdmin";
}

export interface MsgClearAdminEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
  readonly value: Partial<MsgClearAdmin>;
}

export function isMsgClearAdminEncodeObject(object: EncodeObject): object is MsgClearAdminEncodeObject {
  return (object as MsgClearAdminEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgClearAdmin";
}

export interface MsgMigrateContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
  readonly value: Partial<MsgMigrateContract>;
}

export function isMsgMigrateEncodeObject(object: EncodeObject): object is MsgMigrateContractEncodeObject {
  return (object as MsgMigrateContractEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgMigrateContract";
}

export interface MsgExecuteContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
  readonly value: Partial<MsgExecuteContract>;
}

export function isMsgExecuteEncodeObject(object: EncodeObject): object is MsgExecuteContractEncodeObject {
  return (object as MsgExecuteContractEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgExecuteContract";
}

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

export function WasmTxExtension<T extends {new (...args: any[]): BaseClient & WasmTxExtension}>(constructor: T): T {
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
