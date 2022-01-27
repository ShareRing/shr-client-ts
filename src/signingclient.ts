import {encodeSecp256k1Pubkey, makeSignDoc as makeSignDocAmino, StdFee} from "@cosmjs/amino";
import {fromBase64} from "@cosmjs/encoding";
import {Int53} from "@cosmjs/math";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {assert} from "@cosmjs/utils";
import {AminoTypes} from "./amino";
import {BroadcastTxResponse, Client} from "./client";
import {SignMode} from "./codec/cosmos/tx/signing/v1beta1/signing";
import {TxRaw} from "./codec/cosmos/tx/v1beta1/tx";
import {
  EncodeObject,
  encodePubkey,
  GeneratedType,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject
} from "./signing";

/**
 * Signing information for a single signer that is not included in the transaction.
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.42.2/x/auth/signing/sign_mode_handler.go#L23-L37
 */
export interface SignerData {
  readonly accountNumber: number;
  readonly sequence: number;
  readonly chainId: string;
}

export interface SigningOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly prefix?: string;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
}

/** */
import {createRegistryTypes as A} from "./modules/auth";
import {createRegistryTypes as B, createActions as BB} from "./modules/bank";
import {createRegistryTypes as C, createActions as CC} from "./modules/distribution";
import {createRegistryTypes as D, createActions as DD} from "./modules/gov";
import {createRegistryTypes as E, createActions as EE} from "./modules/slashing";
import {createRegistryTypes as F, createActions as FF} from "./modules/staking";
/** */

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [A, B, C, D, E, F].reduce(
  (prev, curr) => [...prev, ...curr()],
  []
);

export const defaultActions: Record<string, string> = [BB, CC, DD, EE, FF].reduce((prev, curr) => ({...prev, ...curr()}), {});

function createDefaultRegistry(): Registry {
  const registry = new Registry();
  defaultRegistryTypes.forEach(([typeUrl, type]) => {
    registry.register(typeUrl, type);
  });
  return registry;
}

export class SigningClient extends Client {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;

  public static async connectWithSigner(endpoint: string, signer: OfflineSigner, options: SigningOptions = {}): Promise<SigningClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new SigningClient(tmClient, signer, options);
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  public static async offline(signer: OfflineSigner, options: SigningOptions = {}): Promise<SigningClient> {
    return new SigningClient(undefined, signer, options);
  }

  public constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningOptions) {
    super(tmClient);
    const {registry = createDefaultRegistry(), aminoTypes = new AminoTypes({prefix: options.prefix})} = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo?: string
  ): Promise<BroadcastTxResponse> {
    const txBytes = await this.sign(signerAddress, messages, fee, memo);
    return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo?: string,
    explicitSignerData?: SignerData
  ): Promise<Uint8Array> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const {accountNumber, sequence} = await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId
      };
    }

    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo ?? "", signerData)
      : this.signAmino(signerAddress, messages, fee, memo ?? "", signerData);
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData
  ): Promise<Uint8Array> {
    assert(!isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const {signature, signed} = await this.signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes([{pubkey, sequence: signedSequence}], signed.fee.amount, signedGasLimit, signMode);
    return TxRaw.encode(
      TxRaw.fromPartial({
        bodyBytes: signedTxBodyBytes,
        authInfoBytes: signedAuthInfoBytes,
        signatures: [fromBase64(signature.signature)]
      })
    ).finish();
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData
  ): Promise<Uint8Array> {
    assert(isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo
      }
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([{pubkey, sequence}], fee.amount, gasLimit);
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const {signature, signed} = await this.signer.signDirect(signerAddress, signDoc);
    return TxRaw.encode(
      TxRaw.fromPartial({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)]
      })
    ).finish();
  }
}
