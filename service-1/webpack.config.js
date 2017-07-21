const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: './client.js',
    output: {
      path: path.resolve('./dist/client'),
      filename: 'app.js',
      chunkFilename: '[name].chunk.js',
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
          title: 'Code Splitting'
      })
    ],
  },
  {
    entry: './static.js',
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
