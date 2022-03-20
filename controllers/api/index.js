const router = require("express").Router();
// requiring api routes
const productRoutes = require("./product-routes");
const storeRoutes = require("./store-routes");
const userRoutes = require("./user-routes");
const ratingRoutes = require("./rating-routes");

router.use("/products", productRoutes);
router.use("/stores", storeRoutes);
router.use("/users", userRoutes);
router.use("/ratings", ratingRoutes);

module.exports = router;
