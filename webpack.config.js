const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    chunkFilename: "scripts/[name].[fullhash:8].bundle.js",
    filename: "scripts/[name].[fullhash:8].bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.mp3$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
};
