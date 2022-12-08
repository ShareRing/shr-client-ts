/* eslint-disable @typescript-eslint/naming-convention */

import {sha256} from "@cosmjs/crypto";
import {toHex} from "@cosmjs/encoding";
import {Uint53} from "@cosmjs/math";
import {toRfc3339WithNanoseconds} from "@cosmjs/tendermint-rpc";
import {sleep} from "@cosmjs/utils";
import {Account} from "./account";
import {BaseClient} from "./baseclient";
import {MsgData} from "./codec/cosmos/base/abci/v1beta1/abci";
import {Event, fromTendermint34Event} from "./events";
import {AuthExtension} from "./modules/auth";
import {TxExtension} from "./modules/tx";
import {isSearchByHeightQuery, isSearchBySentFromOrToQuery, isSearchByTagsQuery, SearchTxFilter, SearchTxQuery} from "./search";

export class TimeoutError extends Error {
  public readonly txId: string;

  public constructor(message: string, txId: string) {
    super(message);
    this.txId = txId;
  }
}

/**
 * This is the same as BlockHeader from @cosmjs/launchpad but those might diverge in the future.
 */
export interface BlockHeader {
  readonly version: {
    readonly block: string;
    readonly app: string;
  };
  readonly height: number;
  readonly chainId: string;
  /** An RFC 3339 time string like e.g. '2020-02-15T10:39:10.4696305Z' */
  readonly time: string;
}

/**
 * This is the same as Block from @cosmjs/launchpad but those might diverge in the future.
 */
export interface Block {
  /** The ID is a hash of the block header (uppercase hex) */
  readonly id: string;
  readonly header: BlockHeader;
  /** Array of raw transactions */
  readonly txs: readonly Uint8Array[];
}

/** A transaction that is indexed as part of the transaction history */
export interface IndexedTx {
  readonly height: number;
  /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
  readonly hash: string;
  /** Transaction execution error code. 0 on success. */
  readonly code: number;
  readonly events: readonly Event[];
  /**
   * A string-based log document.
   *
   * This currently seems to merge attributes of multiple events into one event per type
   * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
   * field instead.
   */

  readonly rawLog: string;
  /**
   * Raw transaction bytes stored in Tendermint.
   *
   * If you hash this, you get the transaction hash (= transaction ID):
   *
   * ```js
   * import { sha256 } from "@cosmjs/crypto";
   * import { toHex } from "@cosmjs/encoding";
   *
   * const transactionId = toHex(sha256(indexTx.tx)).toUpperCase();
   * ```
   *
   * Use `decodeTxRaw` from @cosmjs/proto-signing to decode this.
   */
  readonly tx?: Uint8Array;
  readonly gasUsed: number;
  readonly gasWanted: number;
}

export interface SequenceResponse {
  readonly accountNumber: number;
  readonly sequence: number;
}

/**
 * The response after successfully broadcasting a transaction.
 * Success or failure refer to the execution result.
 */
export interface DeliverTxResponse {
  readonly height: number;
  /** Error code. The transaction suceeded iff code is 0. */
  readonly code: number;
  readonly transactionHash: string;
  readonly events: readonly Event[];
  /**
   * A string-based log document.
   *
   * This currently seems to merge attributes of multiple events into one event per type
   * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
   * field instead.
   */
  readonly rawLog?: string;
  readonly data?: readonly MsgData[];
  readonly gasUsed: number;
  readonly gasWanted: number;
}

export function isDeliverTxFailure(result: DeliverTxResponse): boolean {
  return !!result.code;
}

export function isDeliverTxSuccess(result: DeliverTxResponse): boolean {
  return !isDeliverTxFailure(result);
}

/**
 * Ensures the given result is a success. Throws a detailed error message otherwise.
 */
export function assertIsDeliverTxSuccess(result: DeliverTxResponse): void {
  if (isDeliverTxFailure(result)) {
    throw new Error(
      `Error when broadcasting tx ${result.transactionHash} at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`
    );
  }
}

/**
 * Ensures the given result is a failure. Throws a detailed error message otherwise.
 */
export function assertIsDeliverTxFailure(result: DeliverTxResponse): void {
  if (isDeliverTxSuccess(result)) {
    throw new Error(
      `Transaction ${result.transactionHash} did not fail at height ${result.height}. Code: ${result.code}; Raw log: ${result.rawLog}`
    );
  }
}

/**
 * An error when broadcasting the transaction. This contains the CheckTx errors
 * from the blockchain. Once a transaction is included in a block no BroadcastTxError
 * is thrown, even if the execution fails (DeliverTx errors).
 */
export class BroadcastTxError extends Error {
  public readonly code: number;
  public readonly codespace: string;
  public readonly log: string | undefined;

  public constructor(code: number, codespace: string, log: string | undefined) {
    super(`Broadcasting transaction failed with code ${code} (codespace: ${codespace}). Log: ${log}`);
    this.code = code;
    this.codespace = codespace;
    this.log = log;
  }
}

export interface Client extends AuthExtension, TxExtension {} // eslint-disable-line @typescript-eslint/no-empty-interface

@AuthExtension
@TxExtension
export class Client extends BaseClient {
  private chainId: string | undefined;

  public async getChainId(): Promise<string> {
    if (!this.chainId) {
      const response = await this.forceGetTmClient().status();
      const chainId = response.nodeInfo.network;
      if (!chainId) throw new Error("Chain ID must not be empty");
      this.chainId = chainId;
    }

    return this.chainId;
  }

  public async getHeight(): Promise<number> {
    const status = await this.forceGetTmClient().status();
    return status.syncInfo.latestBlockHeight;
  }

  public async getBlock(height?: number): Promise<Block> {
    const response = await this.forceGetTmClient().block(height);
    return {
      id: toHex(response.blockId.hash).toUpperCase(),
      header: {
        version: {
          block: new Uint53(response.block.header.version.block).toString(),
          app: new Uint53(response.block.header.version.app).toString()
        },
        height: response.block.header.height,
        chainId: response.block.header.chainId,
        time: toRfc3339WithNanoseconds(response.block.header.time)
      },
      txs: response.block.txs
    };
  }

  public async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const account = await this.auth.account(searchAddress);
      return account ? this.accountParser(account) : null;
    } catch (error: any) {
      if (/rpc error: code = NotFound/i.test(error.toString())) {
        return null;
      }
      throw error;
    }
  }

  public async getSequence(address: string): Promise<SequenceResponse> {
    const account = await this.getAccount(address);
    if (!account) {
      // throw new Error("Account does not exist on chain. Send some tokens there before trying to query sequence.");
      return {
        accountNumber: 0,
        sequence: 0
      };
    }
    return {
      accountNumber: account.accountNumber,
      sequence: account.sequence
    };
  }

  public async getTx(id: string): Promise<IndexedTx | null> {
    // const results = await this.txsQuery(`tx.hash='${id}'`);
    // return results[0] ?? null;
    const result = await this.tx.getTx(id).catch(() => undefined);
    return result && result.txResponse
      ? {
          code: result.txResponse.code,
          gasUsed: result.txResponse.gasUsed.toNumber(),
          gasWanted: result.txResponse.gasWanted.toNumber(),
          hash: result.txResponse.txhash,
          height: result.txResponse.height.toNumber(),
          events: result.txResponse.events.map(fromTendermint34Event),
          rawLog: result.txResponse.rawLog,
          tx: result.txResponse.tx?.value
        }
      : null;
  }

  public getTxHash(tx: Uint8Array | string): string {
    return toHex(sha256(typeof tx === "string" ? Buffer.from(tx, "base64") : tx)).toUpperCase();
  }

  public async searchTx(query: SearchTxQuery, filter: SearchTxFilter = {}): Promise<readonly IndexedTx[]> {
    const minHeight = filter.minHeight || 0;
    const maxHeight = filter.maxHeight || Number.MAX_SAFE_INTEGER;

    if (maxHeight < minHeight) return []; // optional optimization

    function withFilters(originalQuery: string): string {
      return `${originalQuery} AND tx.height>=${minHeight} AND tx.height<=${maxHeight}`;
    }

    let txs: readonly IndexedTx[];

    if (isSearchByHeightQuery(query)) {
      txs = query.height >= minHeight && query.height <= maxHeight ? await this.txsQuery(`tx.height=${query.height}`) : [];
    } else if (isSearchBySentFromOrToQuery(query)) {
      const sentQuery = withFilters(`message.module='bank' AND transfer.sender='${query.sentFromOrTo}'`);
      const receivedQuery = withFilters(`message.module='bank' AND transfer.recipient='${query.sentFromOrTo}'`);
      const [sent, received] = await Promise.all([sentQuery, receivedQuery].map((rawQuery) => this.txsQuery(rawQuery)));
      const sentHashes = sent.map((t) => t.hash);
      txs = [...sent, ...received.filter((t) => !sentHashes.includes(t.hash))];
    } else if (isSearchByTagsQuery(query)) {
      const rawQuery = withFilters(query.tags.map((t) => `${t.key}='${t.value}'`).join(" AND "));
      txs = await this.txsQuery(rawQuery);
    } else {
      throw new Error("Unknown query type");
    }

    const filtered = txs.filter((tx) => tx.height >= minHeight && tx.height <= maxHeight);
    return filtered;
  }

  public disconnect(): void {
    if (this.tmClient) this.tmClient.disconnect();
  }

  /**
   * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
   *
   * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
   * an error is thrown.
   *
   * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
   *
   * If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
   * usually needs to check for execution success or failure.
   */
  public async broadcastTx(tx: Uint8Array, timeoutMs = 60_000, pollIntervalMs = 3_000): Promise<DeliverTxResponse> {
    let timedOut = false;
    const txPollTimeout = setTimeout(() => {
      timedOut = true;
    }, timeoutMs);

    const pollForTx = async (txId: string): Promise<DeliverTxResponse> => {
      if (timedOut) {
        throw new TimeoutError(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
            timeoutMs / 1000
          } seconds.`,
          txId
        );
      }
      await sleep(pollIntervalMs);
      const result = await this.getTx(txId);
      return result
        ? {
            code: result.code,
            height: result.height,
            events: result.events,
            rawLog: result.rawLog,
            transactionHash: txId,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted
          }
        : pollForTx(txId);
    };

    const broadcasted = await this.forceGetTmClient().broadcastTxSync({tx});
    if (broadcasted.code) {
      return Promise.reject(new BroadcastTxError(broadcasted.code, broadcasted.codespace ?? "", broadcasted.log));
    }
    const transactionId = toHex(broadcasted.hash).toUpperCase();
    return new Promise((resolve, reject) =>
      pollForTx(transactionId).then(
        (value) => {
          clearTimeout(txPollTimeout);
          resolve(value);
        },
        (error) => {
          clearTimeout(txPollTimeout);
          reject(error);
        }
      )
    );
  }

  private async txsQuery(query: string): Promise<readonly IndexedTx[]> {
    const results = await this.forceGetTmClient().txSearchAll({query: query});
    return results.txs.map((tx) => {
      return {
        height: tx.height,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        events: tx.result.events.map(fromTendermint34Event),
        rawLog: tx.result.log || "",
        tx: tx.tx,
        gasUsed: tx.result.gasUsed,
        gasWanted: tx.result.gasWanted
      };
    });
  }

  public subscribeNewBlock() {
    return this.forceGetTmClient().subscribeNewBlock();
  }

  public subscribeNewBlockHeader() {
    return this.forceGetTmClient().subscribeNewBlockHeader();
  }

  public subscribeTx(query?: string) {
    return this.forceGetTmClient().subscribeTx(query);
  }
}
