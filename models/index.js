const Rate = require("./Rating");
const Product = require("./Product");
const Store = require("./Store");
const User = require("./User");

const sequelize = require("../config/connection");

// creating model associations
Store.hasMany(User, {
  foreignKey: " fkstore_id",
});

User.belongsTo(Store, {
  foreignKey: " fkstore_id",
});

Store.hasMany(Product, {
  foreignKey: "product_id",
});

Product.belongsTo(Store, {
  foreignKey: "fkstore_id",
});

// Rate.belongsTo(Product, {
//   foreignKey: "rating_id",
// });

// Product.hasOne(Rate, {
//   foreignKey: "rating_id",
// });

module.exports = { Store, User, Rate, Product };
