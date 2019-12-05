const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'Roles',
    {
        maRole: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        nameRole: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)