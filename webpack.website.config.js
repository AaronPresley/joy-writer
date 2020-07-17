'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  
  entry: './src/website/index.tsx',
  
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out/website'),
  },

  module: {
    rules: [
      ...require('./webpack.rules')
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  plugins: [
    ...require('./webpack.plugins'),
    new HtmlWebpackPlugin({
      template: 'src/website/index.html',
    }),
  ],
};
