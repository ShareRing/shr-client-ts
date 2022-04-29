#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

ROOT_PROTO_DIR="./proto/cosmos/cosmos-sdk"
COSMOS_PROTO_DIR="$ROOT_PROTO_DIR/proto"
THIRD_PARTY_PROTO_DIR="$ROOT_PROTO_DIR/third_party/proto"
SHARELEDGER_PROTO_DIR="./proto/shareledger/proto"
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
  "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/authz.proto" \
  "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/event.proto" \
  "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/authz/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/bank/v1beta1/authz.proto" \
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
  "$COSMOS_PROTO_DIR/cosmos/base/store/v1beta1/listening.proto" \
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
  "$COSMOS_PROTO_DIR/cosmos/crypto/secp256r1/keys.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/distribution.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/distribution/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/evidence.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/evidence/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/feegrant.proto" \
  "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/genesis.proto" \
  "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/cosmos/feegrant/v1beta1/tx.proto" \
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
  "$COSMOS_PROTO_DIR/cosmos/staking/v1beta1/authz.proto" \
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
  "$COSMOS_PROTO_DIR/ibc/applications/transfer/v2/packet.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/channel.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/channel/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/client.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/client/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/commitment/v1/commitment.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/connection.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/query.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/connection/v1/tx.proto" \
  "$COSMOS_PROTO_DIR/ibc/core/types/v1/genesis.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/localhost/v1/localhost.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/solomachine/v1/solomachine.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/solomachine/v2/solomachine.proto" \
  "$COSMOS_PROTO_DIR/ibc/lightclients/tendermint/v1/tendermint.proto" \
  "$THIRD_PARTY_PROTO_DIR/proofs.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/abci/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/keys.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/crypto/proof.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/libs/bits/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/p2p/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/block.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/evidence.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/params.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/types.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/types/validator.proto" \
  "$THIRD_PARTY_PROTO_DIR/tendermint/version/types.proto"

sed -i "" 's/import "asset\//import "shareledger\/asset\//' $SHARELEDGER_PROTO_DIR/shareledger/**/*.proto
sed -i "" 's/import "booking\//import "shareledger\/booking\//' $SHARELEDGER_PROTO_DIR/shareledger/**/*.proto
sed -i "" 's/import "document\//import "shareledger\/document\//' $SHARELEDGER_PROTO_DIR/shareledger/**/*.proto
sed -i "" 's/import "electoral\//import "shareledger\/electoral\//' $SHARELEDGER_PROTO_DIR/shareledger/**/*.proto
sed -i "" 's/import "gentlemint\//import "shareledger\/gentlemint\//' $SHARELEDGER_PROTO_DIR/shareledger/**/*.proto
sed -i "" 's/import "id\//import "shareledger\/id\//' $SHARELEDGER_PROTO_DIR/shareledger/**/*.proto

protoc \
  --plugin="$(yarn bin protoc-gen-ts_proto)" \
  --ts_proto_out="$OUT_DIR" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --proto_path="$SHARELEDGER_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$SHARELEDGER_PROTO_DIR/shareledger/asset/asset.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/asset/genesis.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/asset/query.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/asset/tx.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/booking/booking.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/booking/genesis.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/booking/query.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/booking/tx.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/document/doc_basic_state.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/document/doc_detail_state.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/document/document.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/document/genesis.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/document/query.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/document/tx.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/electoral/acc_state.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/electoral/authority.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/electoral/genesis.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/electoral/query.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/electoral/treasurer.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/electoral/tx.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/gentlemint/action_level_fee.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/gentlemint/exchange_rate.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/gentlemint/genesis.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/gentlemint/level_fee.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/gentlemint/query.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/gentlemint/tx.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/id/base_id.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/id/genesis.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/id/id.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/id/query.proto" \
  "$SHARELEDGER_PROTO_DIR/shareledger/id/tx.proto" \

# Remove unnecessary codec files
rm -rf \
  src/codec/cosmos_proto/ \
  src/codec/gogoproto/ \
  src/codec/google/api/ \
  src/codec/google/protobuf/descriptor.ts \
  src/codec/shareledger/cosmos_proto/ \
  src/codec/shareledger/gogoproto/ \
  src/codec/shareledger/google/