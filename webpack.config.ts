import path from "path";
import { Configuration } from "webpack";
import "webpack-dev-server";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type NodeEnv = Configuration["mode"];

const port = process.env.PORT || 3000;

let mode: NodeEnv = "production";

if (process.env.NODE_ENV) {
  mode = process.env.NODE_ENV as NodeEnv;
}

const isDevelopment: boolean = process.env.NODE_ENV !== "production";

const plugins: Configuration["plugins"] = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: isDevelopment ? "[name].css" : "[name][hash].css",
    chunkFilename: isDevelopment ? "[id].css" : "[id][hash].css",
  }),
];

const config: Configuration = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "build.js",
    clean: true,
  },
  plugins,
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.html$/i, loader: "html-loader" },
      {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/, /\.module.s[ac]ss$/],
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: isDevelopment } },
          {
            loader: "sass-loader",
            options: { sourceMap: isDevelopment },
          },
        ],
      },
      {
        test: /\.module.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: isDevelopment } },
          {
            loader: "sass-loader",
            options: { sourceMap: isDevelopment },
          },
        ],
      },
      { test: /\.tsx?$/i, exclude: /node_modules/, use: "ts-loader" },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
    alias: {
      components: path.join(__dirname, "src", "components"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    compress: true,
    port,
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error("no server found");
      }

      const address = devServer.server?.address();
      if (typeof address === "object") {
        console.log(`Server running on port: ${address?.port}`);
      }
    },
  },
};

export default config;
