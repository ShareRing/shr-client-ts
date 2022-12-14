import {HttpEndpoint, Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {Client as Base, ClientOptions} from "@shareledgerjs/client";

import {TokenQueryExtension} from "./modules/token";

export interface ShareledgerClient extends Base, TokenQueryExtension {}

@TokenQueryExtension
export class ShareledgerClient extends Base {
  public static async connect(endpoint: string | HttpEndpoint, options: ClientOptions = {}): Promise<ShareledgerClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerClient(tmClient, options);
  }
}
