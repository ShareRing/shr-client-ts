import {Tendermint34Client} from "@cosmjs/tendermint-rpc";

import {accountFromAny, AccountParser} from "./account";
import {QueryClient} from "./query";

export interface ClientOptions {
  readonly accountParser?: AccountParser;
}

export class BaseClient {
  protected readonly tmClient: Tendermint34Client | undefined;
  protected readonly queryClient: QueryClient | undefined;
  protected readonly accountParser: AccountParser;

  public constructor(tmClient: Tendermint34Client | undefined, options: ClientOptions) {
    if (tmClient) {
      this.tmClient = tmClient;
      this.queryClient = new QueryClient(tmClient);
    }
    const {accountParser = accountFromAny} = options;
    this.accountParser = accountParser;
  }

  protected forceGetTmClient(): Tendermint34Client {
    if (!this.tmClient) {
      throw new Error("Tendermint client not available. You cannot use online functionality in offline mode.");
    }
    return this.tmClient;
  }

  protected forceGetQueryClient(): QueryClient {
    if (!this.queryClient) {
      throw new Error("Query client not available. You cannot use online functionality in offline mode.");
    }
    return this.queryClient;
  }
}
