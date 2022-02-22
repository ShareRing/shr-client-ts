import {StdFee, coin} from "@cosmjs/amino";
import {Decimal} from "@cosmjs/math";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {isUint8Array} from "@cosmjs/utils";
import {BroadcastTxResponse} from "./client";
import {calculateFee, GasPrice} from "./fee";
import {AssetExtension, createActions as AA, createRegistryTypes as A} from "./modules/asset";
import {AuthExtension} from "./modules/auth";
import {BankExtension} from "./modules/bank";
import {DistributionExtension} from "./modules/distribution";
import {createActions as BB, createRegistryTypes as B, DocumentExtension} from "./modules/document";
import {createActions as CC, createRegistryTypes as C, ElectoralExtension} from "./modules/electoral";
import {createActions as DD, createRegistryTypes as D, GentlemintExtension} from "./modules/gentlemint";
import {GovExtension} from "./modules/gov";
import {createActions as EE, createRegistryTypes as E, IdExtension} from "./modules/id";
import {SlashingExtension} from "./modules/slashing";
import {StakingExtension} from "./modules/staking";
import {TxExtension} from "./modules/tx";
import {EncodeObject, GeneratedType, OfflineSigner, Registry, Secp256k1HdWallet, Secp256k1Wallet} from "./signing";
import {defaultActions, defaultRegistryTypes, SignerData, SigningClient, SigningOptions} from "./signingclient";

export const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...[A, B, C, D, E].reduce((prev, curr) => [...prev, ...curr()], [])
];

export const actions: Record<string, string> = {
  ...defaultActions,
  ...[AA, BB, CC, DD, EE].reduce((prev, curr) => ({...prev, ...curr()}), {})
};

function createRegistry(): Registry {
  const registry = new Registry();
  registryTypes.forEach(([typeUrl, type]) => {
    registry.register(typeUrl, type);
  });
  return registry;
}

export interface ShareledgerSigningClient
  extends AuthExtension,
    BankExtension,
    DistributionExtension,
    GovExtension,
    SlashingExtension,
    StakingExtension,
    TxExtension,
    AssetExtension,
    DocumentExtension,
    ElectoralExtension,
    GentlemintExtension,
    IdExtension {}

@AuthExtension
@BankExtension
@DistributionExtension
@GovExtension
@SlashingExtension
@StakingExtension
@TxExtension
@AssetExtension
@DocumentExtension
@ElectoralExtension
@GentlemintExtension
@IdExtension
export class ShareledgerSigningClient extends SigningClient {
  public constructor(tmClient: Tendermint34Client | undefined, signer?: OfflineSigner, options: SigningOptions = {}) {
    super(tmClient, signer, {...options, registry: createRegistry()});
  }

  public static async connect(endpoint: string): Promise<ShareledgerSigningClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerSigningClient(tmClient);
  }

  /**
   * Connect with blockchain RPC using mnemonic
   * @param endpoint RPC endpoint
   * @param mnemonic Mnemonic
   * @param options Signing options
   */
  public static async connectWithSigner(endpoint: string, mnemonic: string, options?: SigningOptions): Promise<ShareledgerSigningClient>;
  /**
   * Connect with blockchain RPC using private key
   * @param endpoint RPC endpoint
   * @param privKey Private key
   * @param options Signing options
   */
  public static async connectWithSigner(
    endpoint: string,
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
    endpoint: string,
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
    fee?: StdFee,
    memo?: string
  ): Promise<BroadcastTxResponse> {
    if (!fee) {
      fee = await this.estimate(signerAddress, messages, memo);
    }
    return super.signAndBroadcast(signerAddress, messages, fee, memo);
  }

  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee?: StdFee,
    memo?: string,
    explicitSignerData?: SignerData
  ): Promise<Uint8Array> {
    if (!fee) {
      fee = await this.estimate(signerAddress, messages, memo);
    }
    return super.sign(signerAddress, messages, fee, memo, explicitSignerData);
  }

  public async estimate(signerAddress: string, messages: readonly EncodeObject[], memo?: string) {
    let c = await this.gentlemint
      .determineFee(
        signerAddress,
        messages.map((msg) => actions[msg.typeUrl])
      )
      .catch(() => undefined);
    if (!c) {
      c = this.minTxFee ?? coin(1, "shr");
    }
    const gasEstimation = await this.simulate(signerAddress, messages, memo, [c]);
    const buff = Math.round(gasEstimation * 1.275);
    return {
      gas: buff.toString(),
      amount: [c]
    };
  }
}
