import path from "path";
import type { Configuration } from "webpack";

import plugins from "./webpack-config/plugins";
import module from "./webpack-config/module";
import devServer from "./webpack-config/devServer";

type NodeEnv = Configuration["mode"];

const mode: NodeEnv = process.env.NODE_ENV
  ? (process.env.NODE_ENV as NodeEnv)
  : "production";

const config: Configuration = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "build.js",
    clean: true,
  },
  devtool: "inline-source-map",
  plugins,
  module,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    alias: {
      components: path.join(__dirname, "src", "components"),
    },
  },
  devServer,
};

export default config;
