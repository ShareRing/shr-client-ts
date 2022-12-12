/* eslint-disable @typescript-eslint/naming-convention */
import {fromBase64} from "@cosmjs/encoding";
import {Any} from "@shareledgerjs/types/google/protobuf/any";
import {expect} from "chai";

import {decodePubkey, encodePubkey} from "./pubkey";

describe("pubkey", () => {
  const defaultPubkeyBase64 = "AtQaCqFnshaZQp6rIkvAPyzThvCvXSDO+9AzbxVErqJP";
  const defaultPubkeyBytes = fromBase64(defaultPubkeyBase64);
  const defaultPubkeyProtoBytes = Uint8Array.from([0x0a, defaultPubkeyBytes.length, ...defaultPubkeyBytes]);

  describe("encodePubkey", () => {
    it("works for secp256k1", () => {
      const pubkey = {type: "tendermint/PubKeySecp256k1", value: defaultPubkeyBase64};
      expect(encodePubkey(pubkey)).to.deep.equal(
        Any.fromPartial({
          typeUrl: "/cosmos.crypto.secp256k1.PubKey",
          value: defaultPubkeyProtoBytes
        })
      );
    });

    it("throws for unsupported pubkey types", () => {
      const pubkey = {
        type: "tendermint/PubKeyUnknown",
        value: defaultPubkeyBase64
      };
      expect(() => encodePubkey(pubkey)).to.throw(/not recognized/i);
    });
  });

  describe("decodePubkey", () => {
    it("works for secp256k1", () => {
      const pubkey = {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: defaultPubkeyProtoBytes
      };
      expect(decodePubkey(pubkey)).to.deep.equal({
        type: "tendermint/PubKeySecp256k1",
        value: defaultPubkeyBase64
      });
    });

    it("throws for unsupported pubkey types", () => {
      const pubkey = {
        typeUrl: "/cosmos.crypto.unknown.PubKey",
        value: defaultPubkeyProtoBytes
      };
      expect(() => decodePubkey(pubkey)).to.throw(/not recognized/i);
    });
  });
});
