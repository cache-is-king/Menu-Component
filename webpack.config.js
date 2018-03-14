const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname + '/src/client');
const BUILD_DIR = path.resolve(__dirname + '/src/public');

const config = {
  entry: APP_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
    ],
  },
};

module.exports = config;
