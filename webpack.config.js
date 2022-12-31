const path = require("path");
const webpack = require("webpack");
require("webpack-dev-server");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const port = process.env.PORT || 3000;

let mode = "production";

if (process.env.NODE_ENV) {
  mode = process.env.NODE_ENV;
}

const isDevelopment = process.env.NODE_ENV !== "production";

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: isDevelopment ? "[name].css" : "[name][hash].css",
    chunkFilename: isDevelopment ? "[id].css" : "[id][hash].css",
  }),
];

module.exports = {
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
      const address = devServer.server?.address();
      if (typeof address === "object") {
        console.log(`Server running on port: ${address.port}`);
      }
    },
  },
};
