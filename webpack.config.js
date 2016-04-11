var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
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
  devtool: 'eval-source-map',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    })
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': '"development"'
    //   }
    // })
  ]
}
