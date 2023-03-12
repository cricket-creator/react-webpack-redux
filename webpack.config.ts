import path from "path";
import type { Configuration } from "webpack";

import setWebpackModuleRules from "./webpack-config/module";
import setWebpackDevServer from "./webpack-config/devServer";
import setWebpackPlugins from "./webpack-config/plugins";

type NodeEnv = Configuration["mode"];

const mode: NodeEnv = process.env.NODE_ENV
  ? (process.env.NODE_ENV as NodeEnv)
  : "production";

const isDevMode: boolean = mode === "development";

const config: Configuration = {
  mode,
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "build.js",
    clean: true,
  },
  plugins: setWebpackPlugins(isDevMode),
  module: setWebpackModuleRules(isDevMode),
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    alias: {
      components: path.join(__dirname, "src", "components"),
      lib: path.join(__dirname, "src", "lib"),
    },
  },
  devServer: setWebpackDevServer(isDevMode),
  devtool: isDevMode ? "inline-source-map" : false,
};

export default config;
