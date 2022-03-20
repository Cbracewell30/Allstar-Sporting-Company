const Rate = require("./Rate");
const Product = require("./Product");
const Store = require("./Store");
const User = require("./User");

const sequelize = require("../config/connection");
const { hasMany } = require("./Rate");

// creating model associations
Store.hasMany(User, {
  foreignKey: "store_id",
});

User.belongsTo(Store, {
  foreignKey: "store_id",
});

Product.belongsTo(Store, {
  foreignKey: "store_id",
  onDelete: "Cascade",
});

Store.hasMany(Product, {
  foreignKey: "store_id",
});

module.exports = { Store, User, Rate, Product };
