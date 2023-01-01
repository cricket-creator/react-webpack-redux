import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration } from "webpack";

const isDevelopment: boolean = process.env.NODE_ENV !== "production";

const plugins: Configuration["plugins"] = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "..", "public", "index.html"),
  }),
  new MiniCssExtractPlugin({
    filename: isDevelopment ? "[name].css" : "[name][hash].css",
    chunkFilename: isDevelopment ? "[id].css" : "[id][hash].css",
  }),
];

export default plugins;
