var webpack = require('webpack')
var config = require('./webpack.config.js')
config.output.publicPath = '/'

var compiler = webpack(config)

var app = require('./src/server/app.js')

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
}))
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}))

var server = app.listen(3000, function (err) {
  if (err) { console.log(err); return }

  // var host = server.address().address
  var port = server.address().port
  console.log('Listening at http://%s:%s', 'localhost', port)
})
