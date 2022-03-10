const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Store = require("./store");

// Creating Products Model

class Products extends Model {}

Products.init({
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
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
    },
  },

  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 10,
    validate: {
      isNumeric: true,
    },
  },
  store_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "Store",
      key: "id",
    },
  },
});

module.exports = Products;
