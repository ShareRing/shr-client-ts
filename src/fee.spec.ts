import {expect} from "chai";
import {Decimal} from "@cosmjs/math";
import {calculateFee, GasPrice} from "./fee";

describe("GasPrice", () => {
  it("can be constructed", () => {
    const inputs = ["3.14", "3", "0.14"];
    inputs.forEach((input) => {
      const gasPrice = new GasPrice(Decimal.fromUserInput(input, 18), "utest");
      expect(gasPrice.amount.toString()).to.equal(input);
      expect(gasPrice.denom).to.equal("utest");
    });
  });

  describe("fromString", () => {
    it("works", () => {
      const inputs: Record<string, {amount: string; denom: string}> = {
        // Test amounts
        "3.14utest": {amount: "3.14", denom: "utest"},
        "3utest": {amount: "3", denom: "utest"},
        "0.14utest": {amount: "0.14", denom: "utest"},
        // Test denoms
        "0.14sht": {amount: "0.14", denom: "sht"},
        "0.14testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest":
          {
            amount: "0.14",
            denom:
              "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
          },
        "0.14ucoin2": {amount: "0.14", denom: "ucoin2"},
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "0.14FOOBAR": {amount: "0.14", denom: "FOOBAR"}
      };
      for (const [input, expected] of Object.entries(inputs)) {
        const gasPrice = GasPrice.fromString(input);
        expect(gasPrice.amount.toString()).to.equal(expected.amount);
        expect(gasPrice.denom).to.equal(expected.denom);
      }
    });

    it("errors for invalid gas price", () => {
      // Checks basic format <amount><denom>
      expect(() => GasPrice.fromString("")).to.throw(/Invalid gas price string/i);
      expect(() => GasPrice.fromString("utkn")).to.throw(/Invalid gas price string/i);
      expect(() => GasPrice.fromString("@utkn")).to.throw(/Invalid gas price string/i);
      expect(() => GasPrice.fromString("234")).to.throw(/Invalid gas price string/i);
      expect(() => GasPrice.fromString("-234tkn")).to.throw(/Invalid gas price string/i);
      // Checks details of <denom>
      expect(() => GasPrice.fromString("234t")).to.throw(/denom must be between 3 and 128 characters/i);
      expect(() => GasPrice.fromString("234tt")).to.throw(/denom must be between 3 and 128 characters/i);
      expect(() =>
        GasPrice.fromString(
          "234ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
        )
      ).to.throw(/denom must be between 3 and 128 characters/i);
      // Checks details of <amount>
      expect(() => GasPrice.fromString("3.utkn")).to.throw(/Fractional part missing/i);
      expect(() => GasPrice.fromString("..utkn")).to.throw(/More than one separator found/i);
    });
  });
});

describe("toString", () => {
  it("works", () => {
    const price1 = new GasPrice(Decimal.fromUserInput("3.14", 18), "utest");
    expect(price1.toString()).to.equal("3.14utest");
    const price2 = new GasPrice(Decimal.fromUserInput("0.14", 18), "utest");
    expect(price2.toString()).to.equal("0.14utest");

    // is normalized just like other Decimals
    const price3 = new GasPrice(Decimal.fromUserInput("003.000", 18), "utest");
    expect(price3.toString()).to.equal("3utest");
  });
});

describe("calculateFee", () => {
  it("multiplies the gas price by the gas limit", () => {
    const gasLimit = 80000;
    const gasPrice = GasPrice.fromString("0.025ucosm");
    const fee = calculateFee(gasLimit, gasPrice);
    expect(fee).to.deep.equal({
      amount: [{amount: "2000", denom: "ucosm"}],
      gas: "80000"
    });
  });

  it("accepts a string gas price", () => {
    const gasLimit = 80000;
    const gasPrice = "0.025ucosm";
    const fee = calculateFee(gasLimit, gasPrice);
    expect(fee).to.deep.equal({
      amount: [{amount: "2000", denom: "ucosm"}],
      gas: "80000"
    });
  });

  it("works with large gas price", () => {
    // "The default gas price is 5000000000000 (5e^12), as the native coin has 18 decimals it is exceeding the max safe integer"
    // https://github.com/cosmos/cosmjs/issues/1134
    const gasPrice = GasPrice.fromString("5000000000000tiny");
    const fee = calculateFee(500_000, gasPrice);
    expect(fee).to.deep.equal({
      amount: [{amount: "2500000000000000000", denom: "tiny"}],
      gas: "500000"
    });
  });
});
