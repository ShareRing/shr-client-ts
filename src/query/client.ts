/* eslint-disable no-dupe-class-members, @typescript-eslint/ban-types, @typescript-eslint/naming-convention, @typescript-eslint/no-unused-vars */

import {iavlSpec, ics23, tendermintSpec, verifyExistence, verifyNonExistence} from "@confio/ics23";
import {toAscii, toHex} from "@cosmjs/encoding";
import {firstEvent} from "@cosmjs/stream";
import {tendermint34, Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {arrayContentEquals, assert, assertDefined, isNonNullObject, sleep} from "@cosmjs/utils";
import {ProofOps} from "../codec/tendermint/crypto/proof";
import {Stream} from "xstream";

function checkAndParseOp(op: tendermint34.ProofOp, kind: string, key: Uint8Array): ics23.CommitmentProof {
  if (op.type !== kind) {
    throw new Error(`Op expected to be ${kind}, got "${op.type}`);
  }
  if (!arrayContentEquals(key, op.key)) {
    throw new Error(`Proven key different than queried key.\nQuery: ${toHex(key)}\nProven: ${toHex(op.key)}`);
  }
  return ics23.CommitmentProof.decode(op.data);
}

export interface ProvenQuery {
  readonly key: Uint8Array;
  readonly value: Uint8Array;
  readonly proof: ProofOps;
  readonly height: number;
}

export class QueryClient {
  private readonly tmClient: Tendermint34Client;

  public constructor(tmClient: Tendermint34Client) {
    this.tmClient = tmClient;
  }

  public async queryVerified(store: string, key: Uint8Array, desiredHeight?: number): Promise<Uint8Array> {
    const {height, proof, value} = await this.queryRawProof(store, key, desiredHeight);

    const subProof = checkAndParseOp(proof.ops[0], "ics23:iavl", key);
    const storeProof = checkAndParseOp(proof.ops[1], "ics23:simple", toAscii(store));

    // this must always be existence, if the store is not a typo
    assert(storeProof.exist);
    assert(storeProof.exist.value);

    // this may be exist or non-exist, depends on response
    if (!value || value.length === 0) {
      // non-existence check
      assert(subProof.nonexist);
      // the subproof must map the desired key to the "value" of the storeProof
      verifyNonExistence(subProof.nonexist, iavlSpec, storeProof.exist.value, key);
    } else {
      // existence check
      assert(subProof.exist);
      assert(subProof.exist.value);
      // the subproof must map the desired key to the "value" of the storeProof
      verifyExistence(subProof.exist, iavlSpec, storeProof.exist.value, key, value);
    }

    // the store proof must map its declared value (root of subProof) to the appHash of the next block
    const header = await this.getNextHeader(height);
    verifyExistence(storeProof.exist, tendermintSpec, header.appHash, toAscii(store), storeProof.exist.value);

    return value;
  }

  public async queryRawProof(store: string, queryKey: Uint8Array, desiredHeight?: number): Promise<ProvenQuery> {
    const {key, value, height, proof, code, log} = await this.tmClient.abciQuery({
      // we need the StoreKey for the module, not the module name
      // https://github.com/cosmos/cosmos-sdk/blob/8cab43c8120fec5200c3459cbf4a92017bb6f287/x/auth/types/keys.go#L12
      path: `/store/${store}/key`,
      data: queryKey,
      prove: true,
      height: desiredHeight
    });

    if (code) {
      throw new Error(`Query failed with (${code}): ${log}`);
    }

    if (!arrayContentEquals(queryKey, key)) {
      throw new Error(`Response key ${toHex(key)} doesn't match query key ${toHex(queryKey)}`);
    }

    if (!height) {
      throw new Error("No query height returned");
    }
    if (!proof || proof.ops.length !== 2) {
      throw new Error(`Expected 2 proof ops, got ${proof?.ops.length ?? 0}. Are you using stargate?`);
    }

    // we don't need the results, but we can ensure the data is the proper format
    checkAndParseOp(proof.ops[0], "ics23:iavl", key);
    checkAndParseOp(proof.ops[1], "ics23:simple", toAscii(store));

    return {
      key: key,
      value: value,
      height: height,
      // need to clone this: readonly input / writeable output
      proof: {
        ops: [...proof.ops]
      }
    };
  }

  public async queryUnverified(path: string, request: Uint8Array, desiredHeight?: number): Promise<Uint8Array> {
    const response = await this.tmClient.abciQuery({
      path: path,
      data: request,
      prove: false,
      height: desiredHeight
    });

    if (response.code) {
      throw new Error(`Query failed with (${response.code}): ${response.log}`);
    }

    return response.value;
  }

  // this must return the header for height+1
  // throws an error if height is 0 or undefined
  private async getNextHeader(height?: number): Promise<tendermint34.Header> {
    assertDefined(height);
    if (height === 0) {
      throw new Error("Query returned height 0, cannot prove it");
    }

    const searchHeight = height + 1;
    let nextHeader: tendermint34.Header | undefined;
    let headersSubscription: Stream<tendermint34.NewBlockHeaderEvent> | undefined;
    try {
      headersSubscription = this.tmClient.subscribeNewBlockHeader();
    } catch {
      // Ignore exception caused by non-WebSocket Tendermint clients
    }

    if (headersSubscription) {
      const firstHeader = await firstEvent(headersSubscription);
      // The first header we get might not be n+1 but n+2 or even higher. In such cases we fall back on a query.
      if (firstHeader.height === searchHeight) {
        nextHeader = firstHeader;
      }
    }

    while (!nextHeader) {
      // start from current height to avoid backend error for minHeight in the future
      const correctHeader = (await this.tmClient.blockchain(height, searchHeight)).blockMetas
        .map((meta) => meta.header)
        .find((h) => h.height === searchHeight);
      if (correctHeader) {
        nextHeader = correctHeader;
      } else {
        await sleep(1000);
      }
    }

    assert(nextHeader.height === searchHeight, "Got wrong header. This is a bug in the logic above.");
    return nextHeader;
  }
}
