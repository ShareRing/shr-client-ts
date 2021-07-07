import {expect} from "chai";
import {Slip10RawIndex} from "@cosmjs/crypto";
import {makeShareledgerPath} from "./paths";

describe("paths", () => {
  describe("makeShareledgerPath", () => {
    it("works", () => {
      // m/44'/118'/0'/0/0
      expect(makeShareledgerPath(0)).to.deep.equal([
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(118),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.normal(0),
        Slip10RawIndex.normal(0)
      ]);
      // m/44'/118'/0'/0/123
      expect(makeShareledgerPath(123)).to.deep.equal([
        Slip10RawIndex.hardened(44),
        Slip10RawIndex.hardened(118),
        Slip10RawIndex.hardened(0),
        Slip10RawIndex.normal(0),
        Slip10RawIndex.normal(123)
      ]);
    });
  });
});
