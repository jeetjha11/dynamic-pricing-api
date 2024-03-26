// Assuming you have already initialized Sequelize and established a connection to your PostgreSQL database

const { Sequelize, DataTypes } = require('sequelize');

// Define Item model


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};


// Define Pricing model
const Pricing = sequelize.define('Pricing', {
    base_distance_in_km: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    km_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fix_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

Item.hasMany(Pricing);
Pricing.belongsTo(Item);

module.exports = { Item, Pricing };
