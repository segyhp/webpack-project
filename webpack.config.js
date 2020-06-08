module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  // location that used by webpack to put result of pack
  devServer: {
    contentBase: './dist',
  },
  // loader rules for babel and eslint
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['eslint-loader'],
    },
    ],
  },
  // To enable import without extension on js file
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
