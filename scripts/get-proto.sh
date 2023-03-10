#!/bin/bash
set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

PROTO_DIR="./proto"
COSMOS_DIR="$PROTO_DIR/cosmos"
COSMOS_SDK_DIR="$COSMOS_DIR/cosmos-sdk"
ZIP_FILE="$COSMOS_DIR/tmp.zip"
COSMOS_SDK_REF=${COSMOS_SDK_REF:-"v0.45.0"}
SUFFIX=${COSMOS_SDK_REF}

[[ $SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && SUFFIX=${SUFFIX#v}

mkdir -p "$COSMOS_DIR"

wget -qO "$ZIP_FILE" "https://github.com/cosmos/cosmos-sdk/archive/$COSMOS_SDK_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$COSMOS_DIR"
mv "$COSMOS_SDK_DIR-$SUFFIX" "$COSMOS_SDK_DIR"
rm "$ZIP_FILE"

IBC_DIR="$PROTO_DIR/ibc"
IBC_SDK_REF=${IBC_SDK_REF:-"v3.0.0"}
SUFFIX=${IBC_SDK_REF}

[[ $SUFFIX =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-.+)?$ ]] && SUFFIX=${SUFFIX#v}

wget -qO "$ZIP_FILE" "https://github.com/cosmos/ibc-go/archive/$IBC_SDK_REF.zip"
unzip "$ZIP_FILE" "*.proto" -d "$IBC_DIR"
cp -r "$IBC_DIR/ibc-go-$SUFFIX/proto/ibc" "$COSMOS_SDK_DIR/proto"
cp -r "$IBC_DIR/ibc-go-$SUFFIX/third_party/proto" "$COSMOS_SDK_DIR/third_party"
rm "$ZIP_FILE"
rm -rf "$IBC_DIR"