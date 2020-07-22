'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  
  entry: './src/website/main.ts',
  
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'out/website'),
  },

	resolve: {
		alias: {
			svelte: path.resolve('node_modules', 'svelte')
		},
		extensions: ['.mjs', '.js', '.svelte'],
		mainFields: ['svelte', 'browser', 'module', 'main']
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
