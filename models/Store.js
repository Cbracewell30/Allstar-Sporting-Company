const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Store extends Model {}

Store.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    store_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    store_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "store",
  }
);

module.exports = Store;
