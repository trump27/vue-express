var app = require('./src/server/app.js')

var server = app.listen(process.env.PORT || 3000, function (err) {
  if (err) { console.log(err); return }

  var host = server.address().address
  var port = server.address().port
  console.log('Listening at http://%s:%s', host, port)
})
