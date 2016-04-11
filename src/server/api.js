var express = require('express')
var router = express.Router()
var Tasks = require('./model-tasks.js')

router.get('/msg', (req, res) => {
  res.json({ 'get method': 'Hello world!!' })
  console.log('msg called')
})

router.post('/msg2', (req, res) => {
  res.json({ 'post method': req.body })
  console.log('msg2 called')
})

router.get('/tasks', function (req, res) {
  Tasks.all().then(function (taskList) {
    res.json({tasks: taskList})
  })
})

router.post('/task', function (req, res) {
  Tasks
    .build(req.body)
    .save()
    .then(function () {
      Tasks.findAll({}).then(function (taskList) {
        res.json({tasks: taskList})
      })
    })
})

router.put('/task:id', function (req, res) {
  Tasks
    .find({
      where: {
        id: req.params.id
      }
    })
    .then(function (task) {
      if (task) {
        task
          .updateAttributes(req.body)
          .then(function () {
            Tasks.findAll({}).then(function (taskList) {
              res.json({tasks: taskList})
            })
          })
      }
    })
})

router.delete('/task', function (req, res) {
  Tasks
    .destroy({
      where: {
        id: req.body.id
      }
    })
    .then(function () {
      Tasks.findAll({}).then(function (taskList) {
        res.json({tasks: taskList})
      })
    })
})

module.exports = router
