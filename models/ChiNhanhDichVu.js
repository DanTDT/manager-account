const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'ChiNhanh_DichVu',
    {
        ChiNhanhmaCN: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        DichVumaDV: {
            type: Sequelize.STRING,
            primaryKey: true
        }
    },
    {
        timestamps: false
    }
)