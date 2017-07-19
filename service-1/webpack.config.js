const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const PROD = process.env.NODE_ENV === 'production';

const baseConfig = {
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
    new HTMLWebpackPlugin({
        title: 'Code Splitting'
    })
  ]
};

const prodConfig = Object.assign({}, baseConfig, {
  resolve: {
    alias: {
      'react': require.resolve('react/dist/react.min'),
      'react-dom': require.resolve('react-dom/dist/react-dom.min'),
      'react-redux': require.resolve('react-redux/dist/react-redux.min'),
      'glamor': require.resolve('glamor/es6')
    }
  }
});

module.exports = PROD ? prodConfig : baseConfig;
