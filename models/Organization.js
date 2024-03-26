
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Organization = sequelize.define('Organization', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Organization;
