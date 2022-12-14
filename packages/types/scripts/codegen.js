#!/usr/bin/env node

const {join} = require("path");
const {writeFileSync} = require("fs");
const telescope = require("@osmonauts/telescope").default;

const outPath = join(__dirname, "/../src");

telescope({
  protoDirs: [
    "cosmos-sdk/proto",
    "cosmos-sdk/third_party/proto",
    "ibc-go/proto",
    "ibc-go/third_party/proto",
    "wasmd/proto",
    "wasmd/third_party/proto",
    "shareledger/proto"
  ],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: false
    },
    eslintDisable: {
      disableAll: true
    },
    bundle: {
      enabled: false
    },
    prototypes: {
      includePackageVar: true,
      excluded: {
        protos: [
          "amino/amino.proto",
          "cosmos/authz/v1beta1/event.proto",
          "cosmos/autocli/v1/options.proto",
          "cosmos/autocli/v1/query.proto",
          "cosmos/base/reflection/v2alpha1/reflection.proto",
          "cosmos/crypto/secp256r1/keys.proto",
          "cosmos_proto/cosmos.proto",
          "ibc/core/port/v1/query.proto",
          "ibc/lightclients/solomachine/v2/solomachine.proto",
          "tendermint/libs/bits/types.proto",
          "google/api/annotations.proto",
          "google/api/http.proto",
          "google/api/httpbody.proto",
          "gogoproto/gogo.proto",
          "tendermint/blockchain/types.proto",
          "tendermint/consensus/types.proto",
          "tendermint/consensus/wal.proto",
          "tendermint/mempool/types.proto",
          "tendermint/p2p/conn.proto",
          "tendermint/p2p/pex.proto",
          "tendermint/privval/types.proto",
          "tendermint/rpc/grpc/types.proto",
          "tendermint/state/types.proto",
          "tendermint/statesync/types.proto",
          "tendermint/store/types.proto",
          "tendermint/types/canonical.proto",
          "tendermint/types/events.proto"
        ]
      },
      methods: {
        fromJSON: false,
        toJSON: false
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration"
      }
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: ["Msg", "Query", "Service", "ReflectionService", "ABCIApplication"]
    },
    aminoEncoding: {
      enabled: false
    }
  }
}).then(
  () => {
    // Create index.ts
    const index_ts = `
    // Auto-generated, see scripts/codegen.js!
    // Exports we want to provide at the root of the "cosmjs-types" package
    export {DeepPartial, Exact} from "./helpers";
    `;
    writeFileSync(`${outPath}/index.ts`, index_ts);

    console.log("✨ All Done!");
  },
  (e) => {
    console.error(e);
    process.exit(1);
  }
);