import {HttpEndpoint, Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {isUint8Array} from "@cosmjs/utils";
import {AminoConverters, AminoTypes} from "@shareledgerjs/amino";
import {createDefaultAminoTypes, defaultRegistryTypes, SigningClient as SigningBase, SigningOptions} from "@shareledgerjs/client";
import {GeneratedType, OfflineSigner, Registry, Secp256k1HdWallet, Secp256k1Wallet} from "@shareledgerjs/signing";

import {createTokenTypes, TokenExtension} from "./modules/token";

const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...[createTokenTypes].reduce<ReadonlyArray<[string, GeneratedType]>>((prev, curr) => [...prev, ...curr()], [])
];

function createRegistry(): Registry {
  return new Registry(registryTypes);
}

function createAminoTypes(prefix: string): AminoConverters {
  return [createDefaultAminoTypes].reduce((prev, curr) => ({...prev, ...curr(prefix)}), {});
}

export interface ShareledgerSigningClient extends SigningBase, TokenExtension {}

@TokenExtension
export class ShareledgerSigningClient extends SigningBase {
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

  public override async withSigner(signer: string | Uint8Array | OfflineSigner): Promise<ShareledgerSigningClient> {
    signer =
      typeof signer === "string" || isUint8Array(signer) || Buffer.isBuffer(signer)
        ? await ShareledgerSigningClient.createSigner(signer)
        : signer;
    await super.withSigner(signer);
    return this;
  }

  public override withoutSigner(): ShareledgerSigningClient {
    super.withoutSigner();
    return this;
  }
}
