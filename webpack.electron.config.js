'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  
  entry: './src/electron/index.ts',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out/electron')
  },

  module: {
    rules: require('./webpack.rules'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    ...require('./webpack.plugins'),
  ],
  
  target: 'electron-main',

  node: {
    __dirname: false
  },
};
