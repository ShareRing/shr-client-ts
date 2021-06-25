#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto/cosmos/cosmos-sdk"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/proto"
THIRD_PARTY_PROTO_DIR="$ROOT_PROTO_DIR/third_party/proto"
OUT_DIR="./src/codec/"

mkdir -p "$OUT_DIR"

protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/auth.proto" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/auth/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/bank.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/abci/v1beta1/abci.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/kv/v1beta1/kv.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/query/v1beta1/pagination.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/reflection/v1beta1/reflection.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/snapshots/v1beta1/snapshot.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/store/v1beta1/commit_info.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/store/v1beta1/snapshot.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/tendermint/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/base/v1beta1/coin.proto" \
  "$COSMOS_PROTO_DIR/cosmos/capability/v1beta1/capability.proto" \
  "$COSMOS_PROTO_DIR/cosmos/capability/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crisis/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crisis/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/ed25519/keys.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/multisig/keys.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/multisig/v1beta1/multisig.proto" \
  "$COSMOS_PROTO_DIR/cosmos/crypto/secp256k1/keys.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/distribution.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/evidence.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/genutil/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/gov.proto" \
  "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/gov/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/mint/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/mint/v1beta1/mint.proto" \
  "$COSMOS_PROTO_DIR/cosmos/mint/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/params/v1beta1/params.proto" \
  "$COSMOS_PROTO_DIR/cosmos/params/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/slashing.proto" \
  "$COSMOS_PROTO_DIR/cosmos/slashing/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/staking.proto" \
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/signing/v1beta1/signing.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/v1beta1/service.proto" \
  "$COSMOS_PROTO_DIR/cosmos/tx/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/upgrade/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/upgrade/v1beta1/upgrade.proto" \
  "$COSMOS_PROTO_DIR/cosmos/vesting/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/vesting/v1beta1/vesting.proto" \
  "$COSMOS_PROTO_DIR/ibc/applications/transfer/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/applications/transfer/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/applications/transfer/v1/transfer.proto" \
  "$COSMOS_PROTO_DIR/ibc/applications/transfer/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/channel.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/client.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/localhost/v1/localhost.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/solomachine/v1/solomachine.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/tendermint/v1/tendermint.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/commitment/v1/commitment.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/connection.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/types/v1/genesis.proto" \
  "$THIRD_PARTY_PROTO_DIR/confio/proofs.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/abci/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/keys.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/proof.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/libs/bits/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/params.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/validator.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/version/types.proto"

# Remove unnecessary codec files
rm -rf \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ \
  src/codec/google/protobuf/descriptor.ts