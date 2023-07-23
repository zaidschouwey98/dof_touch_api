const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Equipment = sequelize.define('Equipment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lvl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  statistics: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  recipe: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
module.exports = Equipment;