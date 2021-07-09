import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {Coin} from "./codec/cosmos/base/v1beta1/coin";
import {Account, accountFromAny} from "./account";
import {Client, SequenceResponse} from "./client";
import {AuthExtension} from "./modules/auth/module";
import {BankExtension} from "./modules/bank";
import {GovExtension} from "./modules/gov";
import {StakingExtension} from "./modules/staking";

export interface ShareledgerClient extends AuthExtension, BankExtension, GovExtension, StakingExtension {}

@AuthExtension
@BankExtension
@GovExtension
@StakingExtension
export class ShareledgerClient extends Client {
  public static async connect(endpoint: string): Promise<ShareledgerClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerClient(tmClient);
  }

  public async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const account = await this.auth.account(searchAddress);
      return account ? accountFromAny(account) : null;
    } catch (error) {
      if (/rpc error: code = NotFound/i.test(error)) {
        return null;
      }
      throw error;
    }
  }

  public async getAccountVerified(searchAddress: string): Promise<Account | null> {
    const account = await this.auth.verified.account(searchAddress);
    return account ? accountFromAny(account) : null;
  }

  public async getSequence(address: string): Promise<SequenceResponse> {
    const account = await this.getAccount(address);
    if (!account) {
      throw new Error("Account does not exist on chain. Send some tokens there before trying to query sequence.");
    }
    return {
      accountNumber: account.accountNumber,
      sequence: account.sequence
    };
  }

  public async getBalance(address: string, searchDenom: string): Promise<Coin> {
    return this.bank.balance(address, searchDenom);
  }

  /**
   * Queries all balances for all denoms that belong to this address.
   *
   * Uses the grpc queries (which iterates over the store internally), and we cannot get
   * proofs from such a method.
   */
  public async getAllBalances(address: string): Promise<readonly Coin[]> {
    return this.bank.allBalances(address);
  }
}
