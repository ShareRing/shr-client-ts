/* eslint-disable @typescript-eslint/naming-convention */
import {
  Ed25519Pubkey,
  encodeSecp256k1Pubkey,
  isEd25519Pubkey,
  isMultisigThresholdPubkey,
  isSecp256k1Pubkey,
  MultisigThresholdPubkey,
  Pubkey,
  pubkeyType,
  SinglePubkey
} from "@cosmjs/amino";
import {fromBase64, toBase64} from "@cosmjs/encoding";
import {Uint53} from "@cosmjs/math";
import {PubKey as Ed25519PubKey} from "../codec/cosmos/crypto/ed25519/keys";
import {LegacyAminoPubKey} from "../codec/cosmos/crypto/multisig/keys";
import {PubKey as Secp256k1PubKey} from "../codec/cosmos/crypto/secp256k1/keys";
import {Any} from "../codec/google/protobuf/any";

export function encodeEd25519Pubkey(pubkey: Uint8Array): Ed25519Pubkey {
  return {
    type: pubkeyType.ed25519,
    value: toBase64(pubkey)
  };
}

export function encodePubkey(pubkey: Pubkey): Any {
  if (isSecp256k1Pubkey(pubkey)) {
    const pubkeyProto = Secp256k1PubKey.fromPartial({
      key: fromBase64(pubkey.value)
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.secp256k1.PubKey",
      value: Uint8Array.from(Secp256k1PubKey.encode(pubkeyProto).finish())
    });
  } else if (isEd25519Pubkey(pubkey)) {
    const pubkeyProto = Ed25519PubKey.fromPartial({
      key: fromBase64(pubkey.value)
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.ed25519.PubKey",
      value: Uint8Array.from(Ed25519PubKey.encode(pubkeyProto).finish())
    });
  } else if (isMultisigThresholdPubkey(pubkey)) {
    const pubkeyProto = LegacyAminoPubKey.fromPartial({
      threshold: Uint53.fromString(pubkey.value.threshold).toNumber(),
      publicKeys: pubkey.value.pubkeys.map(encodePubkey)
    });
    return Any.fromPartial({
      typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
      value: Uint8Array.from(LegacyAminoPubKey.encode(pubkeyProto).finish())
    });
  } else {
    throw new Error(`Pubkey type ${pubkey.type} not recognized`);
  }
}

function decodeSinglePubkey(pubkey: Any): SinglePubkey {
  switch (pubkey.typeUrl) {
    case "/cosmos.crypto.secp256k1.PubKey": {
      const {key} = Secp256k1PubKey.decode(pubkey.value);
      return encodeSecp256k1Pubkey(key);
    }
    case "/cosmos.crypto.ed25519.PubKey": {
      const {key} = Ed25519PubKey.decode(pubkey.value);
      return encodeEd25519Pubkey(key);
    }
    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized as single public key type`);
  }
}

export function decodePubkey(pubkey?: Any | null): Pubkey | null {
  if (!pubkey || !pubkey.value) {
    return null;
  }

  switch (pubkey.typeUrl) {
    case "/cosmos.crypto.ed25519.PubKey":
    case "/cosmos.crypto.secp256k1.PubKey": {
      return decodeSinglePubkey(pubkey);
    }
    case "/cosmos.crypto.multisig.LegacyAminoPubKey": {
      const {threshold, publicKeys} = LegacyAminoPubKey.decode(pubkey.value);
      const out: MultisigThresholdPubkey = {
        type: "tendermint/PubKeyMultisigThreshold",
        value: {
          threshold: threshold.toString(),
          pubkeys: publicKeys.map(decodeSinglePubkey)
        }
      };
      return out;
    }
    default:
      throw new Error(`Pubkey type_url ${pubkey.typeUrl} not recognized`);
  }
}
