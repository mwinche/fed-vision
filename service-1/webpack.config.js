const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    chunkFilename: '[name].index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  }
};
