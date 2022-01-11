import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
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
import {GeneratedType, OfflineSigner, Registry} from "./signing";
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

export interface ShareledgerClient
  extends AuthExtension,
    BankExtension,
    DistributionExtension,
    GovExtension,
    SlashingExtension,
    StakingExtension,
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
@AssetExtension
@DocumentExtension
@ElectoralExtension
@GentlemintExtension
@IdExtension
export class ShareledgerClient extends SigningClient {
  public constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningOptions) {
    super(tmClient, signer, {...options, registry: new Registry(registryTypes)});
  }

  public static async connectWithSigner(endpoint: string, signer: OfflineSigner, options: SigningOptions = {}): Promise<ShareledgerClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerClient(tmClient, signer, options);
  }

  public static async offline(signer: OfflineSigner, options: SigningOptions = {}): Promise<SigningClient> {
    return new ShareledgerClient(undefined, signer, options);
  }
}
