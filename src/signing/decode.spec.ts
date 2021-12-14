import {expect} from "chai";
import { fromBase64, fromHex } from "@cosmjs/encoding";
import { MsgSend } from "../codec/cosmos/bank/v1beta1/tx";
import { PubKey } from "../codec/cosmos/crypto/secp256k1/keys";
import { SignMode } from "../codec/cosmos/tx/signing/v1beta1/signing";
import { Any } from "../codec/google/protobuf/any";
import Long from "long";

import { decodeTxRaw } from "./decode";
import { testAccounts, testVectors } from "./testdata.spec";

describe("decode", () => {
  describe("decodeTxRaw", () => {
    it("works", () => {
      const pubkeyBytes = fromBase64(testAccounts[0].pubkey);
      const prefixedPubkeyBytes = Uint8Array.from(PubKey.encode({ key: pubkeyBytes }).finish());
      const testVector = testVectors[0];

      const expectedMsg: Any = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: Uint8Array.from(
          MsgSend.encode({
            fromAddress: "cosmos1pkptre7fdkl6gfrzlesjjvhxhlc3r4gmmk8rs6",
            toAddress: "cosmos1qypqxpq9qcrsszg2pvxq6rs0zqg3yyc5lzv7xu",
            amount: [
              {
                denom: "ucosm",
                amount: "1234567",
              },
            ],
          }).finish(),
        ),
      };

      const decoded = decodeTxRaw(fromHex(testVector.outputs.signedTxBytes));
      expect(decoded).to.deep.equal({
        authInfo: {
          signerInfos: [
            {
              publicKey: {
                typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                value: prefixedPubkeyBytes,
              },
              modeInfo: {
                single: {
                  mode: SignMode.SIGN_MODE_DIRECT,
                },
              },
              sequence: Long.fromNumber(0, true),
            },
          ],
          fee: {
            gasLimit: Long.fromNumber(200000, true),
            payer: "",
            granter: "",
            amount: [{ amount: "2000", denom: "ucosm" }],
          },
        },
        body: {
          memo: "",
          timeoutHeight: Long.UZERO,
          messages: [expectedMsg],
          extensionOptions: [],
          nonCriticalExtensionOptions: [],
        },
        signatures: [fromHex(testVector.outputs.signature)],
      });
    });
  });
});