const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Store = require("./store");

// Creating Products Model

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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

  rating_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "rating",
      key: "id",
    },
  },
});

module.exports = Product;
