import {encodeSecp256k1Pubkey, StdFee, makeSignDoc as makeSignDocAmino} from "@cosmjs/amino";
import {fromBase64} from "@cosmjs/encoding";
import {Int53} from "@cosmjs/math";
import {Tendermint34Client} from "@cosmjs/tendermint-rpc";
import {assert} from "@cosmjs/utils";
import {AminoTypes} from "./amino";
import {BroadcastTxResponse} from "./client";
import {MsgMultiSend} from "./codec/cosmos/bank/v1beta1/tx";
import {
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawDelegatorReward,
  MsgWithdrawValidatorCommission
} from "./codec/cosmos/distribution/v1beta1/tx";
import {MsgBeginRedelegate, MsgCreateValidator, MsgDelegate, MsgEditValidator, MsgUndelegate} from "./codec/cosmos/staking/v1beta1/tx";
import {SignMode} from "./codec/cosmos/tx/signing/v1beta1/signing";
import {TxRaw} from "./codec/cosmos/tx/v1beta1/tx";
import {ShareledgerClient} from "./shareledgerclient";
import {
  EncodeObject,
  encodePubkey,
  GeneratedType,
  isOfflineDirectSigner,
  makeAuthInfoBytes,
  makeSignDoc,
  OfflineSigner,
  Registry,
  TxBodyEncodeObject
} from "./signing";

/**
 * Signing information for a single signer that is not included in the transaction.
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.42.2/x/auth/signing/sign_mode_handler.go#L23-L37
 */
export interface SignerData {
  readonly accountNumber: number;
  readonly sequence: number;
  readonly chainId: string;
}

export interface SigningOptions {
  readonly registry?: Registry;
  readonly aminoTypes?: AminoTypes;
  readonly prefix?: string;
  readonly broadcastTimeoutMs?: number;
  readonly broadcastPollIntervalMs?: number;
}

export const defaultRegistryTypes: ReadonlyArray<[string, GeneratedType]> = [
  ["/cosmos.bank.v1beta1.MsgMultiSend", MsgMultiSend],
  ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool],
  ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
  ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward],
  ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission],
  ["/cosmos.staking.v1beta1.MsgBeginRedelegate", MsgBeginRedelegate],
  ["/cosmos.staking.v1beta1.MsgCreateValidator", MsgCreateValidator],
  ["/cosmos.staking.v1beta1.MsgDelegate", MsgDelegate],
  ["/cosmos.staking.v1beta1.MsgEditValidator", MsgEditValidator],
  ["/cosmos.staking.v1beta1.MsgUndelegate", MsgUndelegate]
  // ["/ibc.core.channel.v1.MsgChannelOpenInit", MsgChannelOpenInit],
  // ["/ibc.core.channel.v1.MsgChannelOpenTry", MsgChannelOpenTry],
  // ["/ibc.core.channel.v1.MsgChannelOpenAck", MsgChannelOpenAck],
  // ["/ibc.core.channel.v1.MsgChannelOpenConfirm", MsgChannelOpenConfirm],
  // ["/ibc.core.channel.v1.MsgChannelCloseInit", MsgChannelCloseInit],
  // ["/ibc.core.channel.v1.MsgChannelCloseConfirm", MsgChannelCloseConfirm],
  // ["/ibc.core.channel.v1.MsgRecvPacket", MsgRecvPacket],
  // ["/ibc.core.channel.v1.MsgTimeout ", MsgTimeout],
  // ["/ibc.core.channel.v1.MsgTimeoutOnClose", MsgTimeoutOnClose],
  // ["/ibc.core.channel.v1.MsgAcknowledgement", MsgAcknowledgement],
  // ["/ibc.core.client.v1.MsgCreateClient", MsgCreateClient],
  // ["/ibc.core.client.v1.MsgUpdateClient", MsgUpdateClient],
  // ["/ibc.core.client.v1.MsgUpgradeClient", MsgUpgradeClient],
  // ["/ibc.core.client.v1.MsgSubmitMisbehaviour", MsgSubmitMisbehaviour],
  // ["/ibc.core.connection.v1.MsgConnectionOpenInit", MsgConnectionOpenInit],
  // ["/ibc.core.connection.v1.MsgConnectionOpenTry", MsgConnectionOpenTry],
  // ["/ibc.core.connection.v1.MsgConnectionOpenAck", MsgConnectionOpenAck],
  // ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", MsgConnectionOpenConfirm],
  // ["/ibc.applications.transfer.v1.MsgTransfer", MsgTransfer],
];

function createDefaultRegistry(): Registry {
  return new Registry(defaultRegistryTypes);
}

export class ShareledgerSigningClient extends ShareledgerClient {
  public readonly registry: Registry;
  public readonly broadcastTimeoutMs: number | undefined;
  public readonly broadcastPollIntervalMs: number | undefined;

  private readonly signer: OfflineSigner;
  private readonly aminoTypes: AminoTypes;

  public static async connectWithSigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningOptions = {}
  ): Promise<ShareledgerSigningClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new ShareledgerSigningClient(tmClient, signer, options);
  }

  /**
   * Creates a client in offline mode.
   *
   * This should only be used in niche cases where you know exactly what you're doing,
   * e.g. when building an offline signing application.
   *
   * When you try to use online functionality with such a signer, an
   * exception will be raised.
   */
  public static async offline(signer: OfflineSigner, options: SigningOptions = {}): Promise<ShareledgerSigningClient> {
    return new ShareledgerSigningClient(undefined, signer, options);
  }

  protected constructor(tmClient: Tendermint34Client | undefined, signer: OfflineSigner, options: SigningOptions) {
    super(tmClient);
    const {registry = createDefaultRegistry(), aminoTypes = new AminoTypes({prefix: options.prefix})} = options;
    this.registry = registry;
    this.aminoTypes = aminoTypes;
    this.signer = signer;
    this.broadcastTimeoutMs = options.broadcastTimeoutMs;
    this.broadcastPollIntervalMs = options.broadcastPollIntervalMs;
  }

  public async signAndBroadcast(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo = ""
  ): Promise<BroadcastTxResponse> {
    const txRaw = await this.sign(signerAddress, messages, fee, memo);
    const txBytes = TxRaw.encode(txRaw).finish();
    return this.broadcastTx(txBytes, this.broadcastTimeoutMs, this.broadcastPollIntervalMs);
  }

  /**
   * Gets account number and sequence from the API, creates a sign doc,
   * creates a single signature and assembles the signed transaction.
   *
   * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
   *
   * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
   * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
   * (See the SigningStargateClient.offline constructor).
   */
  public async sign(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    explicitSignerData?: SignerData
  ): Promise<TxRaw> {
    let signerData: SignerData;
    if (explicitSignerData) {
      signerData = explicitSignerData;
    } else {
      const {accountNumber, sequence} = await this.getSequence(signerAddress);
      const chainId = await this.getChainId();
      signerData = {
        accountNumber: accountNumber,
        sequence: sequence,
        chainId: chainId
      };
    }

    return isOfflineDirectSigner(this.signer)
      ? this.signDirect(signerAddress, messages, fee, memo, signerData)
      : this.signAmino(signerAddress, messages, fee, memo, signerData);
  }

  private async signAmino(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData
  ): Promise<TxRaw> {
    assert(!isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const signMode = SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
    const msgs = messages.map((msg) => this.aminoTypes.toAmino(msg));
    const signDoc = makeSignDocAmino(msgs, fee, chainId, memo, accountNumber, sequence);
    const {signature, signed} = await this.signer.signAmino(signerAddress, signDoc);
    const signedTxBody = {
      messages: signed.msgs.map((msg) => this.aminoTypes.fromAmino(msg)),
      memo: signed.memo
    };
    const signedTxBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: signedTxBody
    };
    const signedTxBodyBytes = this.registry.encode(signedTxBodyEncodeObject);
    const signedGasLimit = Int53.fromString(signed.fee.gas).toNumber();
    const signedSequence = Int53.fromString(signed.sequence).toNumber();
    const signedAuthInfoBytes = makeAuthInfoBytes([pubkey], signed.fee.amount, signedGasLimit, signedSequence, signMode);
    return TxRaw.fromPartial({
      bodyBytes: signedTxBodyBytes,
      authInfoBytes: signedAuthInfoBytes,
      signatures: [fromBase64(signature.signature)]
    });
  }

  private async signDirect(
    signerAddress: string,
    messages: readonly EncodeObject[],
    fee: StdFee,
    memo: string,
    {accountNumber, sequence, chainId}: SignerData
  ): Promise<TxRaw> {
    assert(isOfflineDirectSigner(this.signer));
    const accountFromSigner = (await this.signer.getAccounts()).find((account) => account.address === signerAddress);
    if (!accountFromSigner) {
      throw new Error("Failed to retrieve account from signer");
    }
    const pubkey = encodePubkey(encodeSecp256k1Pubkey(accountFromSigner.pubkey));
    const txBodyEncodeObject: TxBodyEncodeObject = {
      typeUrl: "/cosmos.tx.v1beta1.TxBody",
      value: {
        messages: messages,
        memo: memo
      }
    };
    const txBodyBytes = this.registry.encode(txBodyEncodeObject);
    const gasLimit = Int53.fromString(fee.gas).toNumber();
    const authInfoBytes = makeAuthInfoBytes([pubkey], fee.amount, gasLimit, sequence);
    const signDoc = makeSignDoc(txBodyBytes, authInfoBytes, chainId, accountNumber);
    const {signature, signed} = await this.signer.signDirect(signerAddress, signDoc);
    return TxRaw.fromPartial({
      bodyBytes: signed.bodyBytes,
      authInfoBytes: signed.authInfoBytes,
      signatures: [fromBase64(signature.signature)]
    });
  }
}
