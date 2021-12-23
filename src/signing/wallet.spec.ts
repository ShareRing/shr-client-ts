/* eslint-disable @typescript-eslint/naming-convention */

import {expect} from "chai";
import {coins} from "@cosmjs/amino";
import {Secp256k1, Secp256k1Signature, sha256} from "@cosmjs/crypto";
import {fromBase64, fromHex} from "@cosmjs/encoding";

import {Secp256k1Wallet} from "./wallet";
import {makeAuthInfoBytes, makeSignBytes, makeSignDoc} from "./signing";
import {testAccounts, testVectors} from "./testdata.spec";

describe("Secp256k1Wallet", () => {
  const defaultPrivkey = fromHex(testAccounts[0].privkey);
  const defaultAddress = testAccounts[0].address;
  const defaultPubkey = fromHex(testAccounts[0].pubkey);

  describe("fromKey", () => {
    it("works", async () => {
      const signer = await Secp256k1Wallet.fromKey(defaultPrivkey);
      expect(signer).to.be.ok;
      const [account] = await signer.getAccounts();
      expect(account.address).to.equal(defaultAddress);
      expect(account.pubkey).to.equalBytes(defaultPubkey);
    });
  });

  describe("getAccounts", () => {
    it("resolves to a list of accounts", async () => {
      const signer = await Secp256k1Wallet.fromKey(defaultPrivkey);
      const accounts = await signer.getAccounts();
      expect(accounts.length).to.equal(1);
      expect(accounts[0]).to.deep.equal({
        address: defaultAddress,
        algo: "secp256k1",
        pubkey: defaultPubkey
      });
    });
  });

  describe("signDirect", () => {
    it("resolves to valid signature", async () => {
      const {accountNumber, sequence, bodyBytes} = testVectors[1].inputs;
      const wallet = await Secp256k1Wallet.fromKey(defaultPrivkey);
      const [account] = await wallet.getAccounts();
      const pubkey = {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: account.pubkey
      };
      const fee = coins(1, "stake");
      const gasLimit = 180000;
      const chainId = "planet";
      const signDoc = makeSignDoc(fromHex(bodyBytes), makeAuthInfoBytes([{ pubkey, sequence }], fee, gasLimit), chainId, accountNumber);
      const signDocBytes = makeSignBytes(signDoc);
      const {signature} = await wallet.signDirect(account.address, signDoc);
      const valid = await Secp256k1.verifySignature(
        Secp256k1Signature.fromFixedLength(fromBase64(signature.signature)),
        sha256(signDocBytes),
        pubkey.value
      );
      expect(valid).to.be.true;
    });

    it("resolves to fail signature", async () => {
      const {accountNumber, sequence, bodyBytes} = testVectors[1].inputs;
      const wallet = await Secp256k1Wallet.fromKey(defaultPrivkey);
      const [account] = await wallet.getAccounts();
      const pubkey = {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: fromHex(testAccounts[1].pubkey) // this is where the pubkey goes wrong
      };
      const fee = coins(1, "stake");
      const gasLimit = 180000;
      const chainId = "planet";
      const signDoc = makeSignDoc(fromHex(bodyBytes), makeAuthInfoBytes([{ pubkey, sequence }], fee, gasLimit), chainId, accountNumber);
      const signDocBytes = makeSignBytes(signDoc);
      const {signature} = await wallet.signDirect(account.address, signDoc);
      const valid = await Secp256k1.verifySignature(
        Secp256k1Signature.fromFixedLength(fromBase64(signature.signature)),
        sha256(signDocBytes),
        pubkey.value
      );
      expect(valid).to.be.false;
    });

    it("throws for incorrect account address", async () => {
      const {accountNumber, sequence, bodyBytes} = testVectors[1].inputs;
      const wallet = await Secp256k1Wallet.fromKey(defaultPrivkey);
      const [account] = await wallet.getAccounts();
      const pubkey = {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: account.pubkey
      };
      const fee = coins(1, "stake");
      const gasLimit = 180000;
      const chainId = "planet";
      const signDoc = makeSignDoc(fromHex(bodyBytes), makeAuthInfoBytes([{ pubkey, sequence }], fee, gasLimit), chainId, accountNumber);
      expect(wallet.signDirect(testAccounts[1].address, signDoc)).to.eventually.be.rejectedWith(/not found in wallet/);
    });
  });
});
