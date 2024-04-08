const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Boss = sequelize.define('boss', {
    idBoss: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameBoss: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    strBoss: {
        type: DataTypes.INTEGER
    },
    dexBoss: {
        type: DataTypes.INTEGER
    },
    sagBoss: {
        type: DataTypes.INTEGER
    },
    conBoss: {
        type: DataTypes.INTEGER
    },
    intBoss: {
        type: DataTypes.INTEGER
    },
    dmgRangeBoss: {
        type: DataTypes.STRING(50)
    },
    dmgCDBoss: {
        type: DataTypes.STRING(50)
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Boss;
