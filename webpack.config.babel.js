import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: "./dist",
    filename: "bundle.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
