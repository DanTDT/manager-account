
const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('managerAccount', 'sa', '51303263', {
    host: 'localhost',
    dialect: 'mssql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db