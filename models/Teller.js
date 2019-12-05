const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'Tellers',
    {
        maGDV: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        maCN: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)