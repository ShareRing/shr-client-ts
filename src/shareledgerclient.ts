import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {isUint8Array} from "@cosmjs/utils";
import {AssetExtension} from "./modules/asset";
import {AuthExtension} from "./modules/auth";
import {BankExtension} from "./modules/bank";
import {DistributionExtension} from "./modules/distribution";
import {DocumentExtension} from "./modules/document";
import {ElectoralExtension} from "./modules/electoral";
import {GentlemintExtension} from "./modules/gentlemint";
import {GovExtension} from "./modules/gov";
import {IdExtension} from "./modules/id";
import {SlashingExtension} from "./modules/slashing";
import {StakingExtension} from "./modules/staking";
import {TxExtension} from "./modules/tx";
import {GeneratedType, OfflineSigner, Registry, Secp256k1HdWallet, Secp256k1Wallet} from "./signing";
import {defaultRegistryTypes, SigningClient, SigningOptions} from "./signingclient";

/** */
import {createRegistryTypes as A} from "./modules/asset";
import {createRegistryTypes as B} from "./modules/document";
import {createRegistryTypes as C} from "./modules/electoral";
import {createRegistryTypes as D} from "./modules/gentlemint";
import {createRegistryTypes as E} from "./modules/id";
/** */

export const registryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ...[A, B, C, D, E].reduce((prev, curr) => [...prev, ...curr()], [])
];

function createRegistry(): Registry {
  const registry = new Registry();
  registryTypes.forEach(([typeUrl, type]) => {
    registry.register(typeUrl, type);
  });
  return registry;
}

export interface ShareledgerClient
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
export class ShareledgerClient extends SigningClient {
  public constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningOptions) {
    super(tmClient, signer, {...options, registry: createRegistry()});
  }

  /**
   * Connect with blockchain RPC using mnemonic
   * @param endpoint RPC endpoint
   * @param mnemonic Mnemonic
   * @param options Signing options
   */
  public static async connectWithSigner(endpoint: string, mnemonic: string, options?: SigningOptions): Promise<ShareledgerClient>;
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
  ): Promise<ShareledgerClient>;
  /**
   * Connect with blockchain RPC using offline signer
   * @param endpoint RPC endpoint
   * @param signer Signer
   * @param options Signing options
   */
  public static async connectWithSigner(endpoint: string, signer: OfflineSigner, options?: SigningOptions): Promise<ShareledgerClient>;
  public static async connectWithSigner(
    endpoint: string,
    signer: string | Uint8Array | OfflineSigner,
    options: SigningOptions = {}
  ): Promise<ShareledgerClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    signer = typeof signer === "string" || isUint8Array(signer) ? await this.createSigner(signer) : signer;
    return new ShareledgerClient(tmClient, signer, options);
  }

  public static async offline(mnemonic: string, options?: SigningOptions): Promise<ShareledgerClient>;
  public static async offline(privKey: string | Uint8Array, options?: SigningOptions): Promise<ShareledgerClient>;
  public static async offline(signer: OfflineSigner, options?: SigningOptions): Promise<ShareledgerClient>;
  public static async offline(signer: string | Uint8Array | OfflineSigner, options: SigningOptions = {}): Promise<SigningClient> {
    signer = typeof signer === "string" || isUint8Array(signer) ? await this.createSigner(signer) : signer;
    return new ShareledgerClient(undefined, signer, options);
  }

  private static async createSigner(input: string | Uint8Array) {
    let signer: OfflineSigner;
    if (typeof input === "string" && !/^[A-F0-9]+$/i.test(input)) {
      signer = await Secp256k1HdWallet.fromMnemonic(input);
    } else {
      signer = await Secp256k1Wallet.fromKey(isUint8Array(input) ? input : Buffer.from(input, "hex"));
    }
    return signer;
  }
}
