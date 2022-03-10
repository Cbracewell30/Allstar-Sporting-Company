const sequelize = require('../config/connection');
const seedProducts = require('./products');
const seedStores = require('./stores');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedProducts();
    await seedStores();

    process.exit(0);
};

seedAll();