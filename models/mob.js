const sequelize = require('../database/database');
const { DataTypes } = require('sequelize');

const Mob = sequelize.define('mob', {
    idMob: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameMob: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    strMob: {
        type: DataTypes.INTEGER
    },
    dexMob: {
        type: DataTypes.INTEGER
    },
    sagMob: {
        type: DataTypes.INTEGER
    },
    conMob: {
        type: DataTypes.INTEGER
    },
    intMob: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});

module.exports = Mob;
