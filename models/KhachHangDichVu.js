const Sequelize = require('sequelize')
const db = require('../database/db.js')
module.exports = db.sequelize.define(
    'KhachHang_DichVu',
    {
        maPhieu: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        KhachHangCMNN: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        DichVumaDV: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        maGDV: {
            type: Sequelize.DATE,
            primaryKey: true,
        },
        ngayGui: {
            type: Sequelize.DATE
        },
        laiSuat: {
            type: Sequelize.FLOAT
        },
        soTienGui: {
            type: Sequelize.FLOAT
        },
        ngayDenHan: {
            type: Sequelize.DATE
        },
        ngayRut: {
            type: Sequelize.DATE
        },
        tienLai: {
            type: Sequelize.FLOAT
        }
    },
    {
        timestamps: false
    }
)