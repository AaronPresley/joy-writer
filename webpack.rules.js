module.exports = [
  {
    test: /\.svelte$/,
    use: {
      loader: 'svelte-loader',
      options: {
        emitCss: true,
        hotReload: true
      }
    }
  },
  {
    test: /\.s?css$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
  }
];
