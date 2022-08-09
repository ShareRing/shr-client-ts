import {Coin, encodeSecp256k1Pubkey} from "@cosmjs/amino";
import {fromBase64} from "@cosmjs/encoding";
import {Decimal, Int53, Uint53} from "@cosmjs/math";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {assert, assertDefined} from "@cosmjs/utils";
import {AminoTypes, StdFee, makeSignDoc as makeSignDocAmino} from "./amino";
import {BroadcastTxResponse, Client, ClientOptions} from "./client";
import {SignMode} from "./codec/cosmos/tx/signing/v1beta1/signing";
import {TxRaw} from "./codec/cosmos/tx/v1beta1/tx";
import {toNshr} from "./denoms";
import {calculateFee, GasPrice} from "./fee";
import {createRegistryTypes as A} from "./modules/auth";
import {createActions as BB, createRegistryTypes as B} from "./modules/bank";
import {createActions as CC, createRegistryTypes as C} from "./modules/distribution";
import {createActions as DD, createRegistryTypes as D} from "./modules/gov";
import {createActions as EE, createRegistryTypes as E} from "./modules/slashing";
import {createActions as FF, createRegistryTypes as F} from "./modules/staking";
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

export interface SigningOptions extends ClientOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly prefix?: string;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
  readonly minTxFee?: Coin;
}

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

  protected readonly minTxFee?: Coin;

  private signer?: OfflineSigner;
  private readonly aminoTypes: AminoTypes;

  // public static async connectWithSigner(endpoint: string | HttpEndpoint, signer: OfflineSigner, options: SigningOptions = {}): Promise<SigningClient> {
  //   const tmClient = await Tendermint34Client.connect(endpoint);
  //   return new SigningClient(tmClient, signer, options);
  // }

  // /**
  //  * Creates a client in offline mode.
  //  *
  //  * This should only be used in niche cases where you know exactly what you're doing,
  //  * e.g. when building an offline signing application.
  //  *
  //  * When you try to use online functionality with such a signer, an
  //  * exception will be raised.
  //  */
  // public static async offline(signer: OfflineSigner, options: SigningOptions = {}): Promise<SigningClient> {
  //   return new SigningClient(undefined, signer, options);
  // }

  public constructor(tmClient: Tendermint34Client | undefined, signer?: OfflineSigner, options: SigningOptions = {}) {
    super(tmClient, options);
    const {
      registry = createDefaultRegistry(),
      aminoTypes = new AminoTypes({prefix: options.prefix ?? "shareledger"}),
      minTxFee = toNshr(2)
    } = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
    this.minTxFee = minTxFee;
  }

  protected forceGetSigner(): OfflineSigner {
    if (!this.signer) {
      throw new Error("Signer not available. You must connect with a signer or add a signer to continue.");
    }
    return this.signer;
  }

  public async withSigner(signer: OfflineSigner): Promise<SigningClient> {
    this.signer = signer;
    return this;
  }

  public withoutSigner(): SigningClient {
    this.signer = undefined;
    return this;
  }

  public getSignerAccounts() {
    return this.forceGetSigner().getAccounts();
  }

  public async getSignerAccount() {
    const [account] = await this.getSignerAccounts();
    return account;
  }

  public async simulate(signerAddress: string, messages: readonly EncodeObject[], memo?: string, fee?: Coin[]): Promise<number> {
    const anyMsgs = messages.map((m) => this.registry.encodeAsAny(m));
    const accountFromSigner = (await this.forceGetSigner().getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodeSecp256k1Pubkey(accountFromSigner.pubkey);
    const {sequence} = await this.getSequence(signerAddress);
    const {gasInfo} = await this.tx.simulate(pubkey, sequence, anyMsgs, memo, fee);
    assertDefined(gasInfo);
    return Uint53.fromString(gasInfo.gasUsed.toString()).toNumber();
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee?: Partial<StdFee>,
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
    fee?: Partial<StdFee>,
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

    if (!fee || (!fee.amount && !fee.gas)) {
      assertDefined(this.minTxFee, "Min tx fee must be set in the client options when auto gas is used.");
      const gasEstimation = await this.simulate(signerAddress, messages, memo);
      const buff = Math.round(gasEstimation * 1.275);
      const gasPrice = new GasPrice(
        Decimal.fromAtomics(Math.floor(+Decimal.fromUserInput(this.minTxFee.amount, 18).atomics / buff).toString(), 18),
        this.minTxFee.denom
      );
      fee = {...calculateFee(buff, gasPrice), granter: fee?.granter, payer: fee?.payer};
    }

    const signer = this.forceGetSigner();
    return isOfflineDirectSigner(signer)
      ? this.signDirect(signerAddress, messages, <StdFee>fee, memo ?? "", signerData)
      : this.signAmino(signerAddress, messages, <StdFee>fee, memo ?? "", signerData);
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData
  ): Promise<Uint8Array> {
    const signer = this.forceGetSigner();
    assert(!isOfflineDirectSigner(signer));
    const accountFromSigner = (await signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const {signature, signed} = await signer.signAmino(signerAddress, signDoc);
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
    const signedAuthInfoBytes = makeAuthInfoBytes(
      [{pubkey, sequence: signedSequence}],
      signed.fee.amount,
      signedGasLimit,
      signed.fee.granter,
      signed.fee.payer,
      signMode
    );
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
    const signer = this.forceGetSigner();
    assert(isOfflineDirectSigner(signer));
    const accountFromSigner = (await signer.getAccounts()).find((account) => account.address === signerAddress);
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
    const authInfoBytes = makeAuthInfoBytes([{pubkey, sequence}], fee.amount, gasLimit, fee.granter, fee.payer);
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const {signature, signed} = await signer.signDirect(signerAddress, signDoc);
    return TxRaw.encode(
      TxRaw.fromPartial({
        bodyBytes: signed.bodyBytes,
        authInfoBytes: signed.authInfoBytes,
        signatures: [fromBase64(signature.signature)]
      })
    ).finish();
  }
}
