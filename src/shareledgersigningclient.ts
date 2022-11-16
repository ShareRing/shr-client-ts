import {HttpEndpoint, Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {isUint8Array} from "@cosmjs/utils";
import {AminoConverters, AminoTypes, StdFee} from "./amino";
import {DeliverTxResponse} from "./client";
import {toNshr} from "./denoms";
import {AssetExtension, createAssetActions, createAssetTypes} from "./modules/asset";
import {AuthExtension} from "./modules/auth";
import {BankExtension} from "./modules/bank";
import {DistributionExtension} from "./modules/distribution";
import {createDocumentActions, createDocumentTypes, DocumentExtension} from "./modules/document";
import {createElectoralActions, createElectoralTypes, ElectoralExtension} from "./modules/electoral";
import {FeegrantExtension} from "./modules/feegrant";
import {createGentlemintActions, createGentlemintTypes, GentlemintExtension} from "./modules/gentlemint";
import {GovExtension} from "./modules/gov";
import {createIdActions, createIdTypes, IdExtension} from "./modules/id";
import {SlashingExtension} from "./modules/slashing";
import {StakingExtension} from "./modules/staking";
import {createSwapActions, createSwapTypes, SwapExtension} from "./modules/swap";
import {TxExtension} from "./modules/tx";
import {createWasmActions, createWasmTypes, WasmExtension} from "./modules/wasm";
import {EncodeObject, GeneratedType, OfflineSigner, Registry, Secp256k1HdWallet, Secp256k1Wallet} from "./signing";
import {defaultRegistryTypes, createDefaultAminoTypes, SignerData, SigningClient, SigningOptions, defaultActions} from "./signingclient";

const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...[createAssetTypes, createDocumentTypes, createElectoralTypes, createGentlemintTypes, createIdTypes, createSwapTypes, createWasmTypes].reduce(
    (prev, curr) => [...prev, ...curr()],
    []
  )
];

function createRegistry(): Registry {
  return new Registry(registryTypes);
}

function createAminoTypes(prefix: string): AminoConverters {
  return [
    createDefaultAminoTypes
    // not support amino
  ].reduce((prev, curr) => ({...prev, ...curr(prefix)}), {});
}

const actions: Record<string, string> = {
  ...defaultActions,
  ...[
    createAssetActions,
    createDocumentActions,
    createElectoralActions,
    createGentlemintActions,
    createIdActions,
    createSwapActions,
    createWasmActions
  ].reduce((prev, curr) => ({...prev, ...curr()}), {})
};

export interface ShareledgerSigningClient
  extends AuthExtension,
    BankExtension,
    DistributionExtension,
    GovExtension,
    FeegrantExtension,
    SlashingExtension,
    StakingExtension,
    TxExtension,
    AssetExtension,
    DocumentExtension,
    ElectoralExtension,
    GentlemintExtension,
    IdExtension,
    SwapExtension,
    WasmExtension {}

@AuthExtension
@BankExtension
@DistributionExtension
@GovExtension
@FeegrantExtension
@SlashingExtension
@StakingExtension
@TxExtension
@AssetExtension
@DocumentExtension
@ElectoralExtension
@GentlemintExtension
@IdExtension
@SwapExtension
@WasmExtension
export class ShareledgerSigningClient extends SigningClient {
  public constructor(tmClient: Tendermint34Client | undefined, signer?: OfflineSigner, options: SigningOptions = {}) {
    super(tmClient, signer, {
      ...options,
      aminoTypes: new AminoTypes(createAminoTypes(options.prefix ?? "shareledger")),
      registry: createRegistry()
    });
  }

  public static async connect(endpoint: string | HttpEndpoint, options?: SigningOptions): Promise<ShareledgerSigningClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerSigningClient(tmClient, undefined, options);
  }

  /**
   * Connect with blockchain RPC using mnemonic
   * @param endpoint RPC endpoint
   * @param mnemonic Mnemonic
   * @param options Signing options
   */
  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    mnemonic: string,
    options?: SigningOptions
  ): Promise<ShareledgerSigningClient>;
  /**
   * Connect with blockchain RPC using private key
   * @param endpoint RPC endpoint
   * @param privKey Private key
   * @param options Signing options
   */
  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    privKey: string | Uint8Array,
    options?: SigningOptions
  ): Promise<ShareledgerSigningClient>;
  /**
   * Connect with blockchain RPC using offline signer
   * @param endpoint RPC endpoint
   * @param signer Signer
   * @param options Signing options
   */
  public static async connectWithSigner(
    endpoint: string | HttpEndpoint,
    signer: OfflineSigner,
    options?: SigningOptions
  ): Promise<ShareledgerSigningClient>;
  public static async connectWithSigner(
    endpoint: string,
    signer: string | Uint8Array | OfflineSigner,
    options: SigningOptions = {}
  ): Promise<ShareledgerSigningClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    signer = typeof signer === "string" || isUint8Array(signer) || Buffer.isBuffer(signer) ? await this.createSigner(signer) : signer;
    return new ShareledgerSigningClient(tmClient, signer, options);
  }

  public static async offline(mnemonic: string, options?: SigningOptions): Promise<ShareledgerSigningClient>;
  public static async offline(privKey: string | Uint8Array, options?: SigningOptions): Promise<ShareledgerSigningClient>;
  public static async offline(signer: OfflineSigner, options?: SigningOptions): Promise<ShareledgerSigningClient>;
  public static async offline(
    signer: string | Uint8Array | OfflineSigner,
    options: SigningOptions = {}
  ): Promise<ShareledgerSigningClient> {
    signer = typeof signer === "string" || isUint8Array(signer) || Buffer.isBuffer(signer) ? await this.createSigner(signer) : signer;
    return new ShareledgerSigningClient(undefined, signer, options);
  }

  private static async createSigner(input: string | Uint8Array) {
    let signer: OfflineSigner;
    if (typeof input === "string" && !/^[A-F0-9]+$/i.test(input)) {
      signer = await Secp256k1HdWallet.fromMnemonic(input);
    } else {
      signer = await Secp256k1Wallet.fromKey(isUint8Array(input) || Buffer.isBuffer(input) ? input : Buffer.from(input, "hex"));
    }
    return signer;
  }

  public async withSigner(signer: string | Uint8Array | OfflineSigner): Promise<ShareledgerSigningClient> {
    signer =
      typeof signer === "string" || isUint8Array(signer) || Buffer.isBuffer(signer)
        ? await ShareledgerSigningClient.createSigner(signer)
        : signer;
    await super.withSigner(signer);
    return this;
  }

  public withoutSigner(): ShareledgerSigningClient {
    super.withoutSigner();
    return this;
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee?: StdFee | number,
    memo?: string
  ): Promise<DeliverTxResponse> {
    if (typeof fee === "number" || !fee || (!fee.amount && !fee.gas)) {
      const {amount, gas} = await this.estimate(signerAddress, messages, memo, fee);
      fee = typeof fee === "number" ? {amount, gas} : {...fee, amount, gas};
    }
    return super.signAndBroadcast(signerAddress, messages, fee, memo);
  }

  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee?: StdFee | number,
    memo?: string,
    explicitSignerData?: SignerData
  ): Promise<Uint8Array> {
    if (typeof fee === "number" || !fee || (!fee.amount && !fee.gas)) {
      const {amount, gas} = await this.estimate(signerAddress, messages, memo, fee);
      fee = typeof fee === "number" ? {amount, gas} : {...fee, amount, gas};
    }
    return super.sign(signerAddress, messages, fee, memo, explicitSignerData);
  }

  public async estimate(signerAddress: string, messages: readonly EncodeObject[], memo?: string, fee?: StdFee | number) {
    const feeEstimation = await this.gentlemint.estimateFee(
      signerAddress,
      messages.map((msg) => actions[msg.typeUrl])
    );
    let feeByNshr = feeEstimation.fee;
    if (!feeByNshr) {
      const fees = await this.gentlemint.feeLevels();
      feeByNshr = fees.low || fees.medium || fees.high || toNshr(1);
    }
    const multiplier = typeof fee === "number" ? fee : 1.275;
    fee = typeof fee === "number" ? {amount: [feeByNshr]} : {...fee, amount: [feeByNshr]};
    const gasEstimation = await this.simulate(signerAddress, messages, memo, fee);
    const buff = Math.round(gasEstimation * multiplier);
    return {
      gas: buff.toString(),
      amount: [feeByNshr]
    };
  }
}
