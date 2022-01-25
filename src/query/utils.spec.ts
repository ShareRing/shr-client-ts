import {fromHex} from "@cosmjs/encoding";
import {expect} from "chai";
import {decodeCosmosSdkDecFromProto} from "./utils";

describe("utils", () => {
  describe("decodeCosmosSdkDecFromProto", () => {
    it("works for string inputs", () => {
      expect(decodeCosmosSdkDecFromProto("0").toString()).to.equal("0");
      expect(decodeCosmosSdkDecFromProto("1").toString()).to.equal("0.000000000000000001");
      expect(decodeCosmosSdkDecFromProto("3000000").toString()).to.equal("0.000000000003");
      expect(decodeCosmosSdkDecFromProto("123456789123456789").toString()).to.equal("0.123456789123456789");
      expect(decodeCosmosSdkDecFromProto("1234567891234567890").toString()).to.equal("1.23456789123456789");
    });

    it("works for byte inputs", () => {
      expect(decodeCosmosSdkDecFromProto(fromHex("313330303033343138373830313631333938")).toString()).to.equal("0.130003418780161398");
    });
  });
});
