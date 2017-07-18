const path = require('path');

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
  }
};
