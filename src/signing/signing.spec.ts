/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-non-null-assertion */

import {expect} from "chai";
import {fromBase64, fromHex, toHex} from "@cosmjs/encoding";
import {PubKey} from "../codec/cosmos/crypto/secp256k1/keys";
import {SignMode} from "../codec/cosmos/tx/signing/v1beta1/signing";
import {TxRaw} from "../codec/cosmos/tx/v1beta1/tx";

import {decodeTxRaw} from "./decode";
import {Secp256k1HdWallet} from "./hdwallet";
import {Registry} from "./registry";
import {makeSignBytes, makeSignDoc} from "./signing";
import {testAccounts, testVectors} from "./testdata.spec";

describe("signing", () => {
  const chainId = "planet";
  const toAddress = testAccounts[1].address;

  const sendAmount = "1000";
  const sendDenom = "token";
  const gasLimit = 180000;

  it("correctly parses signed transactions from test vectors", async () => {
    const wallet = await Secp256k1HdWallet.fromMnemonic(testAccounts[0].mnemonic);
    const [{address, pubkey: pubkeyBytes}] = await wallet.getAccounts();
    const prefixedPubkeyBytes = Uint8Array.from(PubKey.encode({ key: pubkeyBytes }).finish());

    testVectors.forEach(({outputs: {signedTxBytes}}) => {
      const parsedTestTx = decodeTxRaw(fromHex(signedTxBytes));
      expect(parsedTestTx.signatures.length).to.equal(1);
      expect(parsedTestTx.authInfo.signerInfos.length).to.equal(1);
      expect(Uint8Array.from(parsedTestTx.authInfo.signerInfos[0].publicKey!.value)).to.equalBytes(prefixedPubkeyBytes);
      expect(parsedTestTx.authInfo.signerInfos[0].modeInfo!.single!.mode).to.equal(SignMode.SIGN_MODE_DIRECT);
      expect({...parsedTestTx.authInfo.fee!.amount[0]}).to.deep.equal({denom: "stake", amount: "180000"});
      expect(parsedTestTx.authInfo.fee!.gasLimit.toString()).to.equal(gasLimit.toString());
      expect(parsedTestTx.body.extensionOptions).to.deep.equal([]);
      expect(parsedTestTx.body.nonCriticalExtensionOptions).to.deep.equal([]);
      expect(parsedTestTx.body.messages.length).to.equal(1);

      const registry = new Registry();
      const parsedTestTxMsg = registry.decode({
        typeUrl: parsedTestTx.body.messages[0].typeUrl,
        value: parsedTestTx.body.messages[0].value
      });
      expect(parsedTestTxMsg.fromAddress).to.equal(address);
      expect(parsedTestTxMsg.toAddress).to.equal(toAddress);
      expect(parsedTestTxMsg.amount.length).to.equal(1);
      expect(parsedTestTxMsg.amount[0].denom).to.equal(sendDenom);
      expect(parsedTestTxMsg.amount[0].amount).to.equal(sendAmount);
    });
  });

  it("correctly generates sign docs and signed transactions from test vectors", async () => {
    const wallet = await Secp256k1HdWallet.fromMnemonic(testAccounts[0].mnemonic);
    const [{address}] = await wallet.getAccounts();

    await Promise.all(
      testVectors.map(async ({inputs, outputs}) => {
        const signDoc = makeSignDoc(fromHex(inputs.bodyBytes), fromHex(inputs.authInfoBytes), chainId, inputs.accountNumber);
        const signDocBytes = makeSignBytes(signDoc);
        expect(toHex(signDocBytes)).to.equal(outputs.signBytes);

        const {signature} = await wallet.signDirect(address, signDoc);
        const txRaw = TxRaw.fromPartial({
          bodyBytes: fromHex(inputs.bodyBytes),
          authInfoBytes: fromHex(inputs.authInfoBytes),
          signatures: [fromBase64(signature.signature)]
        });
        const txRawBytes = Uint8Array.from(TxRaw.encode(txRaw).finish());
        const txBytesHex = toHex(txRawBytes);
        expect(txBytesHex).to.equal(outputs.signedTxBytes);
      })
    );
  });
});
