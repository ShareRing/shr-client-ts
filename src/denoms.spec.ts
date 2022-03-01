import {expect} from "chai";
import {fromCent, fromNshr, toCent, toNshr} from "./denoms";

describe("denoms", () => {
  describe("fromNshr", () => {
    it("shoud work with number", () => {
      expect(fromNshr(2000)).to.deep.equal({
        amount: "0.000002",
        denom: "shr"
      });
    });

    it("shoud work with string", () => {
      expect(fromNshr("900000000000")).to.deep.equal({
        amount: "900",
        denom: "shr"
      });
    });
  });

  describe("toNshr", () => {
    it("shoud work with number", () => {
      expect(toNshr(2000)).to.deep.equal({
        amount: "2000000000000",
        denom: "nshr"
      });
    });

    it("shoud work with string", () => {
      expect(toNshr("0.00582")).to.deep.equal({
        amount: "5820000",
        denom: "nshr"
      });
    });
  });

  describe("fromCent", () => {
    it("shoud work with number", () => {
      expect(fromCent(2000)).to.deep.equal({
        amount: "20",
        denom: "shrp"
      });
    });

    it("shoud work with string", () => {
      expect(fromCent("3")).to.deep.equal({
        amount: "0.03",
        denom: "shrp"
      });
    });
  });

  describe("toCent", () => {
    it("shoud work with number", () => {
      expect(toCent(2000)).to.deep.equal({
        amount: "200000",
        denom: "cent"
      });
    });

    it("shoud work with string", () => {
      expect(toCent("0.3")).to.deep.equal({
        amount: "30",
        denom: "cent"
      });
    });
  });
});
