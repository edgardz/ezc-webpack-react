var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './source/index.tsx'
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://0.0.0.0:8080/'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: 'errors-only',
    host: '0.0.0.0',
    port: '8080'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'html'
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loaders: [
          'babel',
          'ts'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};