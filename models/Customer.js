const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'Customers',
    {
        CMNN: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        ngayCap: {
            type: Sequelize.DATE
        }
    },
    {
        timestamps: false
    }
)