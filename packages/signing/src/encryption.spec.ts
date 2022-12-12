import {fromHex, fromUtf8, toUtf8} from "@cosmjs/encoding";
import {expect} from "chai";

import {decrypt, encrypt, EncryptionConfiguration, executeKdf, KdfConfiguration, supportedAlgorithms} from "./encryption";

describe("encryption", () => {
  const plainText = "helloworld";
  const encryptedText = "c03e9c3766e994770ee40bf49b47dba867fd6b31b5b1dd3ceaa04db6ad9e3c8ce448b1558bea1554f564159d77c4904dc9e9";
  const password = "sharering";
  const kdfConfiguration: KdfConfiguration = {
    algorithm: "argon2id",
    params: {
      outputLength: 32,
      opsLimit: 24,
      memLimitKib: 12 * 1024
    }
  };
  const encryptionConfiguration: EncryptionConfiguration = {
    algorithm: supportedAlgorithms.xchacha20poly1305Ietf
  };
  describe("encrypt", () => {
    it("works", async () => {
      const encryptionKey = await executeKdf(password, kdfConfiguration);
      const encrypted = await encrypt(toUtf8(plainText), encryptionKey, encryptionConfiguration);
      expect(encrypted).to.be.ok;
    });

    it("thows for unsupported algo", async () => {
      const config: EncryptionConfiguration = {
        algorithm: "something"
      };
      const encryptionKey = await executeKdf(password, kdfConfiguration);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      expect(encrypt(toUtf8(plainText), encryptionKey, config)).to.eventually.be.rejectedWith(/Unsupported encryption algorithm/);
    });
  });

  describe("decrypt", () => {
    it("works", async () => {
      const encryptionKey = await executeKdf(password, kdfConfiguration);
      const decrypted = await decrypt(fromHex(encryptedText), encryptionKey, encryptionConfiguration);
      expect(fromUtf8(decrypted)).to.equal(plainText);
    });

    it("thows for unsupported algo", async () => {
      const config: EncryptionConfiguration = {
        algorithm: "something"
      };
      const encryptionKey = await executeKdf(password, kdfConfiguration);
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      expect(decrypt(fromHex(encryptedText), encryptionKey, config)).to.eventually.be.rejectedWith(/Unsupported encryption algorithm/);
    });
  });
});
