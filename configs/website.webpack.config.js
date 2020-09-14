const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: path.resolve('./src/website/index.tsx'),

  output: {
    filename: 'index.js',
    path: path.resolve('./out/website'),
  },
  
  module: {
    rules: [
      ...require('./shared-modules'),
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  target: 'electron-renderer',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/website/index.html')
    }),
  ],
  
};
