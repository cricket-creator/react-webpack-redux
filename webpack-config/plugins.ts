import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration } from "webpack";

export default function setWebpackPlugins(
  isDevMode: boolean
): Configuration["plugins"] {
  return [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: isDevMode ? "[name].css" : "[name][hash].css",
      chunkFilename: isDevMode ? "[id].css" : "[id][hash].css",
    }),
  ];
}
