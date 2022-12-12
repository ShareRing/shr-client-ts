import {coins} from "@cosmjs/amino";
import {Secp256k1, Secp256k1Signature, sha256} from "@cosmjs/crypto";
import {fromBase64, fromHex, toHex} from "@cosmjs/encoding";
import {expect} from "chai";

import {executeKdf, KdfConfiguration} from "./encryption";
import {extractKdfConfiguration, Secp256k1HdWallet} from "./hdwallet";
import {makeShareledgerPath} from "./paths";
import {makeAuthInfoBytes, makeSignBytes, makeSignDoc} from "./signing";
import {base64Matcher, testAccounts, testVectors} from "./testdata.spec";

describe("Secp256k1HdWallet", () => {
  const defaultMnemonic = testAccounts[0].mnemonic;
  const defaultPubkey = fromHex(testAccounts[0].pubkey);
  const defaultAddress = testAccounts[0].address;

  describe("fromMnemonic", () => {
    it("works", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic);
      expect(wallet).to.be.ok;
      expect(wallet.mnemonic).to.equal(defaultMnemonic);
    });

    it("works with options", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic, {
        bip39Password: "password123",
        hdPaths: [makeShareledgerPath(123)],
        prefix: "yolo"
      });
      expect(wallet.mnemonic).to.equal(defaultMnemonic);
      const [{pubkey, address}] = await wallet.getAccounts();
      expect(pubkey).not.to.equalBytes(defaultPubkey);
      expect(address.slice(0, 4)).to.equal("yolo");
    });

    it("works with explicitly undefined options", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic, {
        bip39Password: undefined,
        hdPaths: undefined,
        prefix: undefined
      });
      expect(wallet.mnemonic).to.equal(defaultMnemonic);
      const [{pubkey, address}] = await wallet.getAccounts();
      expect(pubkey).to.equalBytes(defaultPubkey);
      expect(address).to.equal(defaultAddress);
    });
  });

  describe("generate", () => {
    it("defaults to 12 words", async () => {
      const wallet = await Secp256k1HdWallet.generate();
      expect(wallet.mnemonic.split(" ").length).to.equal(12);
    });

    it("can use different mnemonic lengths", async () => {
      expect((await Secp256k1HdWallet.generate(12)).mnemonic.split(" ").length).to.equal(12);
      expect((await Secp256k1HdWallet.generate(15)).mnemonic.split(" ").length).to.equal(15);
      expect((await Secp256k1HdWallet.generate(18)).mnemonic.split(" ").length).to.equal(18);
      expect((await Secp256k1HdWallet.generate(21)).mnemonic.split(" ").length).to.equal(21);
      expect((await Secp256k1HdWallet.generate(24)).mnemonic.split(" ").length).to.equal(24);
    });
  });

  describe("deserialize", () => {
    it("can restore", async () => {
      const original = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic);
      const password = "123";
      const serialized = await original.serialize(password);
      const deserialized = await Secp256k1HdWallet.deserialize(serialized, password);
      const accounts = await deserialized.getAccounts();

      expect(deserialized.mnemonic).to.equal(defaultMnemonic);
      expect(accounts).to.deep.equal([
        {
          algo: "secp256k1",
          address: defaultAddress,
          pubkey: defaultPubkey
        }
      ]);
    });

    it("can restore multiple accounts", async () => {
      const mnemonic = "palace hour attitude hold tool blood debate divide fragile skin grant gasp label fine flee smoke cousin pen";
      const prefix = "shareledger";
      const accountNumbers = [0, 1, 2, 3, 4];
      const hdPaths = accountNumbers.map(makeShareledgerPath);
      const original = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        hdPaths: hdPaths,
        prefix: prefix
      });
      const password = "123";
      const serialized = await original.serialize(password);
      const deserialized = await Secp256k1HdWallet.deserialize(serialized, password);
      const accounts = (await deserialized.getAccounts()).map((acc) => ({...acc, pubkey: toHex(acc.pubkey)}));

      expect(deserialized.mnemonic).to.equal(mnemonic);
      expect(accounts).to.deep.equal([
        {
          algo: "secp256k1",
          pubkey: "032b12e27c3a36fea711743c3f94813fd2338855e027f98082c7838f748fb05971",
          address: "shareledger1nctvtj0vf8d6tjsk7dwt4pgjsdcgsu3hup4fy3"
        },
        {
          algo: "secp256k1",
          pubkey: "03b58e6fd72b34e314c5962adb5314035871f2112744b6943d2e30cabb504b271a",
          address: "shareledger1n5stx4st48vfqqy5ulgkrvwl8rvdk63chyxg0m"
        },
        {
          algo: "secp256k1",
          pubkey: "03b170409096b0ae775cab5294f4d1e8f351463d4fcbf1eff40dbcb844c6c540f0",
          address: "shareledger1zqs3cq2h95n4s222jtxdcptrnrvjtvxcllm7uc"
        },
        {
          algo: "secp256k1",
          pubkey: "0346f6b4ee5dfc528e59a8d392beb8fd4b9a73ab5d56d13edbe1c58f899dd2e968",
          address: "shareledger1nnmpm5275l67jtmhgjr4jewwkwkxav7r5n6956"
        },
        {
          algo: "secp256k1",
          pubkey: "024ce378440583eeb34913a119e57bce2d5a1c6648dd7cd1507c134d7c89fdf66c",
          address: "shareledger17l7tz6nvgltlmaq3m8yflp2ecwul0t7vukrj4f"
        }
      ]);
    });
  });

  describe("deserializeWithEncryptionKey", () => {
    it("can restore", async () => {
      const password = "123";

      const original = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic);
      const anyKdfParams: KdfConfiguration = {
        algorithm: "argon2id",
        params: {
          outputLength: 32,
          opsLimit: 4,
          memLimitKib: 3 * 1024
        }
      };
      const encryptionKey1 = await executeKdf(password, anyKdfParams);
      const serialized = await original.serializeWithEncryptionKey(encryptionKey1, anyKdfParams);

      const kdfConfiguration = extractKdfConfiguration(serialized);
      const encryptionKey2 = await executeKdf(password, kdfConfiguration);
      const deserialized = await Secp256k1HdWallet.deserializeWithEncryptionKey(serialized, encryptionKey2);
      expect(deserialized.mnemonic).to.equal(defaultMnemonic);
      expect(await deserialized.getAccounts()).to.deep.equal([
        {
          algo: "secp256k1",
          address: defaultAddress,
          pubkey: defaultPubkey
        }
      ]);
    });

    it("can restore multiple accounts", async () => {
      const mnemonic = "palace hour attitude hold tool blood debate divide fragile skin grant gasp label fine flee smoke cousin pen";
      const prefix = "shareledger";
      const password = "123";
      const accountNumbers = [0, 1, 2, 3, 4];
      const hdPaths = accountNumbers.map(makeShareledgerPath);

      const original = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: prefix,
        hdPaths: hdPaths
      });
      const anyKdfParams: KdfConfiguration = {
        algorithm: "argon2id",
        params: {
          outputLength: 32,
          opsLimit: 4,
          memLimitKib: 3 * 1024
        }
      };
      const encryptionKey1 = await executeKdf(password, anyKdfParams);
      const serialized = await original.serializeWithEncryptionKey(encryptionKey1, anyKdfParams);

      const kdfConfiguration = extractKdfConfiguration(serialized);
      const encryptionKey2 = await executeKdf(password, kdfConfiguration);
      const deserialized = await Secp256k1HdWallet.deserializeWithEncryptionKey(serialized, encryptionKey2);
      const accounts = (await deserialized.getAccounts()).map((acc) => ({...acc, pubkey: toHex(acc.pubkey)}));

      expect(deserialized.mnemonic).to.equal(mnemonic);
      expect(accounts).to.deep.equal([
        {
          algo: "secp256k1",
          pubkey: "032b12e27c3a36fea711743c3f94813fd2338855e027f98082c7838f748fb05971",
          address: "shareledger1nctvtj0vf8d6tjsk7dwt4pgjsdcgsu3hup4fy3"
        },
        {
          algo: "secp256k1",
          pubkey: "03b58e6fd72b34e314c5962adb5314035871f2112744b6943d2e30cabb504b271a",
          address: "shareledger1n5stx4st48vfqqy5ulgkrvwl8rvdk63chyxg0m"
        },
        {
          algo: "secp256k1",
          pubkey: "03b170409096b0ae775cab5294f4d1e8f351463d4fcbf1eff40dbcb844c6c540f0",
          address: "shareledger1zqs3cq2h95n4s222jtxdcptrnrvjtvxcllm7uc"
        },
        {
          algo: "secp256k1",
          pubkey: "0346f6b4ee5dfc528e59a8d392beb8fd4b9a73ab5d56d13edbe1c58f899dd2e968",
          address: "shareledger1nnmpm5275l67jtmhgjr4jewwkwkxav7r5n6956"
        },
        {
          algo: "secp256k1",
          pubkey: "024ce378440583eeb34913a119e57bce2d5a1c6648dd7cd1507c134d7c89fdf66c",
          address: "shareledger17l7tz6nvgltlmaq3m8yflp2ecwul0t7vukrj4f"
        }
      ]);
    });
  });

  describe("getAccounts", () => {
    it("resolves to a list of accounts", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic);
      const accounts = await wallet.getAccounts();
      expect(accounts.length).to.equal(1);
      expect(accounts[0]).to.deep.equal({
        address: defaultAddress,
        algo: "secp256k1",
        pubkey: defaultPubkey
      });
    });

    it("creates the same address as Go implementation", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(
        "oyster design unusual machine spread century engine gravity focus cave carry slot"
      );
      const [{address}] = await wallet.getAccounts();
      expect(address).to.equal("shareledger1cjsxept9rkggzxztslae9ndgpdyt24088j9dwh");
    });
  });

  describe("signDirect", () => {
    it("resolves to valid signature", async () => {
      const {accountNumber, sequence, bodyBytes} = testVectors[1].inputs;
      const wallet = await Secp256k1HdWallet.fromMnemonic(testAccounts[0].mnemonic);
      const pubkey = {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: fromHex(testAccounts[0].pubkey)
      };
      const fee = coins(2000, "stake");
      const gasLimit = 200000;
      const chainId = "planet";
      const signDoc = makeSignDoc(fromHex(bodyBytes), makeAuthInfoBytes([{pubkey, sequence}], fee, gasLimit), chainId, accountNumber);
      const signDocBytes = makeSignBytes(signDoc);
      const {signature} = await wallet.signDirect(testAccounts[0].address, signDoc);
      const valid = await Secp256k1.verifySignature(
        Secp256k1Signature.fromFixedLength(fromBase64(signature.signature)),
        sha256(signDocBytes),
        pubkey.value
      );
      expect(valid).to.be.true;
    });
  });

  describe("serialize", () => {
    it("can save with password", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic);
      const serialized = await wallet.serialize("123");
      // console.log(JSON.stringify(serialized));
      const parsed = JSON.parse(serialized);
      expect(parsed.type).to.equal("secp256k1hdwallet-v1");
      expect(parsed.kdf).to.deep.equal({
        algorithm: "argon2id",
        params: {
          outputLength: 32,
          opsLimit: 24,
          memLimitKib: 12 * 1024
        }
      });
      expect(parsed.encryption).to.deep.equal({
        algorithm: "xchacha20poly1305-ietf"
      });
      expect(base64Matcher.test(parsed.data)).to.be.true;
    });
  });

  describe("serializeWithEncryptionKey", () => {
    it("can save with password", async () => {
      const wallet = await Secp256k1HdWallet.fromMnemonic(defaultMnemonic);

      const key = fromHex("aabb221100aabb332211aabb33221100aabb221100aabb332211aabb33221100");
      const customKdfConfiguration: KdfConfiguration = {
        algorithm: "argon2id",
        params: {
          outputLength: 32,
          opsLimit: 321,
          memLimitKib: 11 * 1024
        }
      };
      const serialized = await wallet.serializeWithEncryptionKey(key, customKdfConfiguration);
      // console.log(JSON.stringify(serialized));
      const parsed = JSON.parse(serialized);
      expect(parsed.type).to.equal("secp256k1hdwallet-v1");
      expect(parsed.kdf).to.deep.equal(customKdfConfiguration);
      expect(parsed.encryption).to.deep.equal({
        algorithm: "xchacha20poly1305-ietf"
      });
      expect(base64Matcher.test(parsed.data)).to.be.true;
    });
  });
});
