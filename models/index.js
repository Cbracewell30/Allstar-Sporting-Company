const Product = require("./Product");
const User = require("./User");
const Store = require("./Store");
const Rating = require("./Rating");

// creating model associations

User.belongsTo(Store, {
  foreignKey: "store_id"
});

Store.hasMany(User, {
  foreignKey: "store_id"
});

Store.hasMany(Product, {
  foreignKey: "store_id"
});

Product.belongsTo(Store, {
  foreignKey: "store_id"
});

Rating.belongsTo(Product, {
  foreignKey: "product_id"
});

Product.hasOne(Rating, {
  foreignKey: "product_id"
});

Rating.belongsTo(Store, {
  foreignKey: "store_id"
});

Store.hasMany(Rating, {
  foreignKey: "store_id"
});

module.exports = { User, Product, Store, Rating };