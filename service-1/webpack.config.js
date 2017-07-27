const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = [
  {
    entry: './lib/client.js',
    output: {
      path: path.resolve('./dist/client/static'),
      filename: 'app.[hash].js',
      chunkFilename: '[name].[chunkhash].chunk.js',
      publicPath: './static/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
          filename: '../index.html'
      }),
      new AssetsPlugin({ filename: './dist/webpack-assets.json' })
    ],
  },
  {
    entry: './lib/server.js',
    output: {
      path: path.resolve('./dist/server'),
      filename: 'index.js',
      libraryTarget: 'commonjs',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        }
      ]
    },
  }
];
