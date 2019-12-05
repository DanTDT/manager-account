const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'LaiSuat',
    {
        ngayAD: {
            type: Sequelize.DATE,
            primaryKey: true
        },
        maDV: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        laiSuat: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)