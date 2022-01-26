import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {Client} from "./client";
import {AssetQueryExtension} from "./modules/asset";
import {AuthQueryExtension} from "./modules/auth";
import {BankQueryExtension} from "./modules/bank";
import {DistributionQueryExtension} from "./modules/distribution";
import {DocumentQueryExtension} from "./modules/document";
import {ElectoralQueryExtension} from "./modules/electoral";
import {GentlemintQueryExtension} from "./modules/gentlemint";
import {GovQueryExtension} from "./modules/gov";
import {IdQueryExtension} from "./modules/id";
import {SlashingQueryExtension} from "./modules/slashing";
import {StakingQueryExtension} from "./modules/staking";
import {TxQueryExtension} from "./modules/tx";

export interface ShareledgerClient
  extends AuthQueryExtension,
    BankQueryExtension,
    DistributionQueryExtension,
    GovQueryExtension,
    SlashingQueryExtension,
    StakingQueryExtension,
    TxQueryExtension,
    AssetQueryExtension,
    DocumentQueryExtension,
    ElectoralQueryExtension,
    GentlemintQueryExtension,
    IdQueryExtension {}

@AuthQueryExtension
@BankQueryExtension
@DistributionQueryExtension
@GovQueryExtension
@SlashingQueryExtension
@StakingQueryExtension
@TxQueryExtension
@AssetQueryExtension
@DocumentQueryExtension
@ElectoralQueryExtension
@GentlemintQueryExtension
@IdQueryExtension
export class ShareledgerClient extends Client {
  public static async connect(endpoint: string): Promise<ShareledgerClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerClient(tmClient);
  }
}
