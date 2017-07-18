const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './bundle.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js'
    })
  ]
};
