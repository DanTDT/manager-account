const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'Accounts',
    {
        userName: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        password: {
            type: Sequelize.STRING
        },
        createDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        expirDate: {
            type: Sequelize.DATE
        },
        maGDV: {
            type: Sequelize.STRING
        },
        maRole:{
            type: Sequelize.INTEGER
        }

    },
    {
        timestamps: false
    }
)