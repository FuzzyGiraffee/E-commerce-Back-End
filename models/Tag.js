const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { INTEGER } = require('sequelize');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    // Define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define tag_name column
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
