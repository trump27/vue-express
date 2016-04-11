var Sequelize = require('sequelize')

var sequelize = new Sequelize(
  'database', '', '', {
    dialect: 'sqlite',
    storage: './data/db.sqlite3'
  }
)

var Task = sequelize.define('task', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  completed: Sequelize.BOOLEAN
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
  timestamps: false
})

// initialize db / npm run init-db
Task.sequelize.sync()
// Task.sequelize.sync({
//   force: true,
//   logging: console.log
// })

module.exports = Task
