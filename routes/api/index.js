const router = require('express').Router();

const sportingRoutes = require('./sporting-routes');
const storeRoutes = require('./store-routes');
const userRoutes = require('./user-routes');

router.use('/sporting', sportingRoutes);
router.use('/stores', storeRoutes);
router.use('/users', userRoutes);

module.exports = router;