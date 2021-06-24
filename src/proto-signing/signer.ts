import { StdSignature } from "@cosmjs/amino";
import { SignDoc } from "../codec/cosmos/tx/v1beta1/tx";

/**
 * This is the same as Algo from @cosmjs/launchpad but those might diverge in the future.
 */
export type Algo = "secp256k1" | "ed25519" | "sr25519";

/**
 * This is the same as AccountData from @cosmjs/launchpad but those might diverge in the future.
 */
export interface AccountData {
  /** A printable address (typically bech32 encoded) */
  readonly address: string;
  readonly algo: Algo;
  readonly pubkey: Uint8Array;
}

export interface SignResponse {
  /**
   * The sign doc that was signed.
   * This may be different from the input signDoc when the signer modifies it as part of the signing process.
   */
  readonly signed: SignDoc;
  readonly signature: StdSignature;
}

export interface OfflineSigner {
  readonly getAccounts: () => Promise<readonly AccountData[]>;
  readonly sign: (signerAddress: string, signDoc: SignDoc) => Promise<SignResponse>;
}