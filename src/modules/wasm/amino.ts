/* eslint-disable @typescript-eslint/no-unused-vars */
import {fromBase64, fromUtf8, toBase64, toUtf8} from "@cosmjs/encoding";
import Long from "long";
import {AminoConverter} from "../../amino/types";
import {Coin} from "../../codec/cosmos/base/v1beta1/coin";
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin
} from "../../codec/cosmos/wasm/v1beta1/tx";
import {EncodeObject, GeneratedType} from "../../signing";

// TODO: implement
/**
 * @see https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/types.proto#L36-L41
 */
type AccessConfig = never;

/**
 * The Amino JSON representation of [MsgStoreCode].
 *
 * [MsgStoreCode]: https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/tx.proto#L28-L39
 */
export interface AminoMsgStoreCode {
  type: "wasm/MsgStoreCode";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Base64 encoded Wasm */
    readonly wasm_byte_code: string;
    readonly instantiate_permission?: AccessConfig;
  };
}

export interface MsgStoreCodeEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode";
  readonly value: Partial<MsgStoreCode>;
}

export function isMsgStoreCodeEncodeObject(object: EncodeObject): object is MsgStoreCodeEncodeObject {
  return (object as MsgStoreCodeEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgStoreCode";
}

/**
 * The Amino JSON representation of [MsgInstantiateContract].
 *
 * [MsgInstantiateContract]: https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/tx.proto#L46-L64
 */
export interface AminoMsgInstantiateContract {
  type: "wasm/MsgInstantiateContract";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** ID of the Wasm code that was uploaded before */
    readonly code_id: string;
    /** Human-readable label for this contract */
    readonly label: string;
    /** Instantiate message as JavaScript object */
    readonly msg: any;
    readonly funds: readonly Coin[];
    /** Bech32-encoded admin address */
    readonly admin?: string;
  };
}

export interface MsgInstantiateContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract";
  readonly value: Partial<MsgInstantiateContract>;
}

export function isMsgInstantiateContractEncodeObject(object: EncodeObject): object is MsgInstantiateContractEncodeObject {
  return (object as MsgInstantiateContractEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgInstantiateContract";
}

/**
 * The Amino JSON representation of [MsgUpdateAdmin].
 *
 * [MsgUpdateAdmin]: https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/tx.proto#L113-L121
 */
export interface AminoMsgUpdateAdmin {
  type: "wasm/MsgUpdateAdmin";
  value: {
    /** Bech32-encoded sender address. This must be the old admin. */
    readonly sender: string;
    /** Bech32-encoded contract address to be updated */
    readonly contract: string;
    /** Bech32-encoded address of the new admin */
    readonly new_admin: string;
  };
}

export interface MsgUpdateAdminEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin";
  readonly value: Partial<MsgUpdateAdmin>;
}

export function isMsgUpdateAdminEncodeObject(object: EncodeObject): object is MsgUpdateAdminEncodeObject {
  return (object as MsgUpdateAdminEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgUpdateAdmin";
}

/**
 * The Amino JSON representation of [MsgClearAdmin].
 *
 * [MsgClearAdmin]: https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/tx.proto#L126-L132
 */
export interface AminoMsgClearAdmin {
  type: "wasm/MsgClearAdmin";
  value: {
    /** Bech32-encoded sender address. This must be the old admin. */
    readonly sender: string;
    /** Bech32-encoded contract address to be updated */
    readonly contract: string;
  };
}

export interface MsgClearAdminEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin";
  readonly value: Partial<MsgClearAdmin>;
}

export function isMsgClearAdminEncodeObject(object: EncodeObject): object is MsgClearAdminEncodeObject {
  return (object as MsgClearAdminEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgClearAdmin";
}

/**
 * The Amino JSON representation of [MsgMigrateContract].
 *
 * [MsgMigrateContract]: https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/tx.proto#L94-L104
 */
export interface AminoMsgMigrateContract {
  type: "wasm/MsgMigrateContract";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Bech32 account address */
    readonly contract: string;
    /** The new code */
    readonly code_id: string;
    /** Migrate message as JavaScript object */
    readonly msg: any;
  };
}

export interface MsgMigrateContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract";
  readonly value: Partial<MsgMigrateContract>;
}

export function isMsgMigrateEncodeObject(object: EncodeObject): object is MsgMigrateContractEncodeObject {
  return (object as MsgMigrateContractEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgMigrateContract";
}

/**
 * The Amino JSON representation of [MsgExecuteContract].
 *
 * [MsgExecuteContract]: https://github.com/CosmWasm/wasmd/blob/v0.18.0-rc1/proto/cosmwasm/wasm/v1/tx.proto#L73-L86
 */
export interface AminoMsgExecuteContract {
  type: "wasm/MsgExecuteContract";
  value: {
    /** Bech32 account address */
    readonly sender: string;
    /** Bech32 account address */
    readonly contract: string;
    /** Execute message as JavaScript object */
    readonly msg: any;
    readonly funds: readonly Coin[];
  };
}

export interface MsgExecuteContractEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract";
  readonly value: Partial<MsgExecuteContract>;
}

export function isMsgExecuteEncodeObject(object: EncodeObject): object is MsgExecuteContractEncodeObject {
  return (object as MsgExecuteContractEncodeObject).typeUrl === "/cosmwasm.wasm.v1.MsgExecuteContract";
}

export function createAminoTypes(prefix: string): Record<string, AminoConverter> {
  return {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
      aminoType: "wasm/MsgStoreCode",
      toAmino: ({sender, wasmByteCode}: MsgStoreCode): AminoMsgStoreCode["value"] => ({
        sender: sender,
        wasm_byte_code: toBase64(wasmByteCode)
      }),
      fromAmino: ({sender, wasm_byte_code}: AminoMsgStoreCode["value"]): MsgStoreCode => ({
        sender: sender,
        wasmByteCode: fromBase64(wasm_byte_code),
        instantiatePermission: undefined
      })
    },
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
      aminoType: "wasm/MsgInstantiateContract",
      toAmino: ({sender, codeId, label, msg, funds, admin}: MsgInstantiateContract): AminoMsgInstantiateContract["value"] => ({
        sender: sender,
        code_id: codeId.toString(),
        label: label,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds,
        admin: admin || undefined
      }),
      fromAmino: ({sender, code_id, label, msg, funds, admin}: AminoMsgInstantiateContract["value"]): MsgInstantiateContract => ({
        sender: sender,
        codeId: Long.fromString(code_id),
        label: label,
        msg: toUtf8(JSON.stringify(msg)),
        funds: [...funds],
        admin: admin ?? ""
      })
    },
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
      aminoType: "wasm/MsgUpdateAdmin",
      toAmino: ({sender, newAdmin, contract}: MsgUpdateAdmin): AminoMsgUpdateAdmin["value"] => ({
        sender: sender,
        new_admin: newAdmin,
        contract: contract
      }),
      fromAmino: ({sender, new_admin, contract}: AminoMsgUpdateAdmin["value"]): MsgUpdateAdmin => ({
        sender: sender,
        newAdmin: new_admin,
        contract: contract
      })
    },
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
      aminoType: "wasm/MsgClearAdmin",
      toAmino: ({sender, contract}: MsgClearAdmin): AminoMsgClearAdmin["value"] => ({
        sender: sender,
        contract: contract
      }),
      fromAmino: ({sender, contract}: AminoMsgClearAdmin["value"]): MsgClearAdmin => ({
        sender: sender,
        contract: contract
      })
    },
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
      aminoType: "wasm/MsgExecuteContract",
      toAmino: ({sender, contract, msg, funds}: MsgExecuteContract): AminoMsgExecuteContract["value"] => ({
        sender: sender,
        contract: contract,
        msg: JSON.parse(fromUtf8(msg)),
        funds: funds
      }),
      fromAmino: ({sender, contract, msg, funds}: AminoMsgExecuteContract["value"]): MsgExecuteContract => ({
        sender: sender,
        contract: contract,
        msg: toUtf8(JSON.stringify(msg)),
        funds: [...funds]
      })
    },
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
      aminoType: "wasm/MsgMigrateContract",
      toAmino: ({sender, contract, codeId, msg}: MsgMigrateContract): AminoMsgMigrateContract["value"] => ({
        sender: sender,
        contract: contract,
        code_id: codeId.toString(),
        msg: JSON.parse(fromUtf8(msg))
      }),
      fromAmino: ({sender, contract, code_id, msg}: AminoMsgMigrateContract["value"]): MsgMigrateContract => ({
        sender: sender,
        contract: contract,
        codeId: Long.fromString(code_id),
        msg: toUtf8(JSON.stringify(msg))
      })
    }
  };
}

export function createRegistryTypes(): ReadonlyArray<[string, GeneratedType]> {
  return [
    ["/cosmwasm.wasm.v1.MsgClearAdmin", MsgClearAdmin],
    ["/cosmwasm.wasm.v1.MsgExecuteContract", MsgExecuteContract],
    ["/cosmwasm.wasm.v1.MsgMigrateContract", MsgMigrateContract],
    ["/cosmwasm.wasm.v1.MsgStoreCode", MsgStoreCode],
    ["/cosmwasm.wasm.v1.MsgInstantiateContract", MsgInstantiateContract],
    ["/cosmwasm.wasm.v1.MsgUpdateAdmin", MsgUpdateAdmin]
  ];
}
