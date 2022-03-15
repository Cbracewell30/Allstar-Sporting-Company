const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Rating extends Model { }

Rating.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id'
    }
  },

  store_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'store',
      key: 'id'
    }
  },

  value: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating'
  }
);

module.exports = Rating;
