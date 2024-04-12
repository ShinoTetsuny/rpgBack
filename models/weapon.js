const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Weapon = sequelize.define('weapon', {
    idWeapon: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameWeapon: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dmgRangeWeapon: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    dmgCDWeapon: {
        type: DataTypes.INTEGER
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Weapon;
