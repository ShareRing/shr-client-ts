const path = require("path");
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');



module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: "tsconfig.build.json" })
    ]
  },
  output: {
    filename: "index.umd.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    // new NodePolyfillPlugin()
  ]
};