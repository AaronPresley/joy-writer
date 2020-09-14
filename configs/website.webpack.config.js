const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  devtool: 'source-map',

  entry: path.resolve('./src/website/index.ts'),

  output: {
    filename: 'index.js',
    path: path.resolve('./out/website'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/website/index.html')
    }),
  ],
  
};
