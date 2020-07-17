module.exports = [
  {
    test: /\.scss$/,
    loaders: [
      "style-loader",
      "css-loader",
      "sass-loader"
    ]
  },
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
  }
];
