var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    preLoaders: [
      { test: /\.vue$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.html$/, loader: 'vue-html' }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    })
  ]
}
