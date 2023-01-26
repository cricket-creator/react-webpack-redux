import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { Configuration } from "webpack";

const isDevelopment: boolean = process.env.NODE_ENV !== "production";

const module: Configuration["module"] = {
  rules: [
    { test: /\.(jsx?$)/, exclude: /node_modules/, use: ["babel-loader"] },
    { test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" },
    { test: /\.html$/, loader: "html-loader" },
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
      test: /\.module.s[ac]ss$/,
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
  ],
};

export default module;
