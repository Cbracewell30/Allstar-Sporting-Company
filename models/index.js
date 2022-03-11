const Product = require("./Product");
const User = require("./Users");
const Store = require("./Store");
const Rating = require("./Rating");

// creating model associations

User.hasOne(Store, {
  foreignKey: "store_id",
});

Store.hasMany(User, {
  foreignKey: "store_id",
});

Store.hasMany(Product, {
  foreignKey: "store_id",
});

Product.belongsTo(Store, {
  foreignKey: "store_id",
});

Rating.belongsTo(Product, {
  foreignKey: "rating_id",
});

Product.hasOne(Rating, {
  foreignKey: "rating_id",
});

Rating.belongsToMany(Store, {
  through: Product,
  as: "product_rating",
  foreignKey: "store_id",
});

Store.hasMany(Rating, {
  through: Product,
  as: "store_product_rating",
  foreignKey: "rating_id",
});
