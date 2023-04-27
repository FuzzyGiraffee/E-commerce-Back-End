const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // Define id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Define product_id column
    product_id: {
      type: DataTypes.INTEGER,
      // References the product model id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // Define tag_id column
    tag_id: {
      type: DataTypes.INTEGER,
      // Refrences the tag model id
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
