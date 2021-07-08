const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  externals: {},
  devtool: 'source-map',
  entry: {
    index: './src/index.ts'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin()
    ],
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  mode: 'production',
  stats: 'verbose', // errors-only, minimal, none, normal, verbose
  optimization: {
    minimize: false,
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(__dirname, '.'),
    filename: '[name].js',
  },
};
