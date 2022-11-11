import {expect} from "chai";
import {fromHex} from "@cosmjs/encoding";
import {MsgSend} from "../codec/cosmos/bank/v1beta1/tx";
import {PubKey} from "../codec/cosmos/crypto/secp256k1/keys";
import {SignMode} from "../codec/cosmos/tx/signing/v1beta1/signing";
import {Any} from "../codec/google/protobuf/any";
import Long from "long";

import {decodeTxRaw} from "./decode";
import {testAccounts, testVectors} from "./testdata.spec";

describe("decode", () => {
  describe("decodeTxRaw", () => {
    it("works", () => {
      const pubkeyBytes = fromHex(testAccounts[0].pubkey);
      const prefixedPubkeyBytes = Uint8Array.from(PubKey.encode({key: pubkeyBytes}).finish());
      const testVector = testVectors[0];

      const expectedMsg: Any = {
        typeUrl: "/cosmos.bank.v1beta1.MsgSend",
        value: Uint8Array.from(
          MsgSend.encode({
            fromAddress: "shareledger19x0cxrsdcfgxdeukdq4lctuhlsu9qzerkr3dy0",
            toAddress: "shareledger1tfraj88al8j6mms73fqxzswpwyn7eue2uy2xnk",
            amount: [
              {
                denom: "shr",
                amount: "1000"
              }
            ]
          }).finish()
        )
      };

      const decoded = decodeTxRaw(fromHex(testVector.outputs.signedTxBytes));
      expect(decoded).to.deep.equal({
        authInfo: {
          signerInfos: [
            {
              publicKey: {
                typeUrl: "/cosmos.crypto.secp256k1.PubKey",
                value: prefixedPubkeyBytes
              },
              modeInfo: {
                single: {
                  mode: SignMode.SIGN_MODE_DIRECT
                }
              },
              sequence: Long.UZERO
            }
          ],
          fee: {
            gasLimit: Long.fromNumber(200000, true),
            payer: "",
            granter: "",
            amount: [{amount: "5", denom: "shr"}]
          }
        },
        body: {
          memo: "",
          timeoutHeight: Long.UZERO,
          messages: [expectedMsg],
          extensionOptions: [],
          nonCriticalExtensionOptions: []
        },
        signatures: [fromHex(testVector.outputs.signature)]
      });
    });
  });
});
