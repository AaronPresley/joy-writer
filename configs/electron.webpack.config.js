const path = require('path');

module.exports = {
  mode: 'development',

  entry: path.resolve('./src/electron/index.ts'),

  output: {
    filename: 'index.js',
    path: path.resolve('./out/electron'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  target: 'electron-main',

  node: {
    __dirname: false
  },
  
};
