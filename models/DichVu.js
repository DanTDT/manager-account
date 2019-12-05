const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'DichVu',
    {
        maDV: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        kyHan: {
            type: Sequelize.INTEGER
        },
        tenDV: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)