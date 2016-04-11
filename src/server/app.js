var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var morgan = require('morgan')

var app = express()
var api = require('./api.js')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
app.use(morgan('dev'))

// jquery, bootstrap
app.use(express.static('node_modules/bootstrap/dist/'))
app.use(express.static('node_modules/jquery/dist/'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'))
  })
} else {
  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client'))
  })
}

app.use('/api', api)

// error
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: err
  })
})

module.exports = app
