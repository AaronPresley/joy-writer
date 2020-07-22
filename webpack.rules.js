module.exports = [
  {
    test: /\.svelte$/,
    use: {
      loader: 'svelte-loader',
      options: {
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
