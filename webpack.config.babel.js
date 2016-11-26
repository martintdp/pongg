import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// Phaser webpack config
const phaserModule = path.join(__dirname, '/node_modules/phaser/')
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js')
const pixi = path.join(phaserModule, 'build/custom/pixi.js')
const p2 = path.join(phaserModule, 'build/custom/p2.js')
const box2D = path.join(__dirname, '/src/libs/box2d-plugin-full.js')

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
      { test: /\.css$/, loader: "style!css" },
      { test: /pixi\.js/, loader: 'expose?PIXI' },
      { test: /phaser-split\.js$/, loader: 'expose?Phaser' },
      { test: /p2\.js/, loader: 'expose?p2' }   ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2,
    }
  },
    plugins: [new HtmlWebpackPlugin()]
  };
