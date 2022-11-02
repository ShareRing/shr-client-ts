import {fromAscii, fromBech32, toBech32} from "@cosmjs/encoding";
import {Decimal, Uint64} from "@cosmjs/math";
import Long from "long";
import {PageRequest} from "../codec/cosmos/base/query/v1beta1/pagination";
import type {QueryClient} from "./client";

/**
 * Takes a bech32 encoded address and returns the data part. The prefix is ignored and discarded.
 * This is called AccAddress in Cosmos SDK, which is basically an alias for raw binary data.
 * The result is typically 20 bytes long but not restricted to that.
 */
export function toAccAddress(address: string): Uint8Array {
  return fromBech32(address).data;
}

export function toBech32Address(pubkey: Uint8Array, prefix = "shareledger") {
  return toBech32(prefix, pubkey);
}

export function toBech32ValAddress(pubkey: Uint8Array, prefix = "shareledgervaloper") {
  return toBech32Address(pubkey, prefix);
}

export function toBech32ConsAddress(pubkey: Uint8Array, prefix = "shareledgervalcons") {
  return toBech32Address(pubkey, prefix);
}

export function createPagination(paginationKey?: Uint8Array): PageRequest | undefined {
  return paginationKey
    ? PageRequest.fromPartial({
        key: paginationKey,
        offset: Long.fromNumber(0, true),
        limit: Long.fromNumber(0, true),
        countTotal: false,
        reverse: false
      })
    : undefined;
}

export interface ProtobufRpcClient {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
  withHeight(height?: number): ProtobufRpcClient;
}

export class ProtobufRpcClientImpl implements ProtobufRpcClient {
  private _height?: number = undefined;

  constructor(private readonly base: QueryClient) {}

  request(service: string, method: string, data: Uint8Array, height?: number): Promise<Uint8Array> {
    const path = `/${service}/${method}`;
    return this.base.queryUnverified(path, data, height || this._height).finally(() => this.withHeight(undefined));
  }

  withHeight(height?: number): ProtobufRpcClient {
    this._height = height;
    return this;
  }
}

export function createProtobufRpcClient(base: QueryClient): ProtobufRpcClient {
  return new ProtobufRpcClientImpl(base);
}

/**
 * Takes a uint64 value as string, number, Long or Uint64 and returns an unsigned Long instance
 * of it.
 */
export function longify(value: string | number | Long | Uint64): Long {
  const checkedValue = Uint64.fromString(value.toString());
  return Long.fromBytesBE([...checkedValue.toBytesBigEndian()], true);
}

/**
 * Takes a string or binary encoded `github.com/cosmos/cosmos-sdk/types.Dec` from the
 * protobuf API and converts it into a `Decimal` with 18 fractional digits.
 *
 * See https://github.com/cosmos/cosmos-sdk/issues/10863 for more context why this is needed.
 */
export function decodeCosmosSdkDecFromProto(input: string | Uint8Array): Decimal {
  const asString = typeof input === "string" ? input : fromAscii(input);
  return Decimal.fromAtomics(asString, 18);
}
