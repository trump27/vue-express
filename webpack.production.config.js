var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('./webpack.config.js')

config.entry.shift()
config.devtool = 'source-map'
config.plugins = [
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

module.exports = config
