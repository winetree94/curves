const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: prod ? './src/entry.ts' : './src/dev.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devServer: {
    port: 9009,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'public/index.html',
    }),
  ],
  output: {
    library: 'Curves',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    filename: 'curves.min.js'
  },
  devtool: 'eval-cheap-source-map',
  target: ['web', 'es5'],
};