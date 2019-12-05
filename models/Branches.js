const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'Branches',
    {
        maCN: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        nameBranch: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)