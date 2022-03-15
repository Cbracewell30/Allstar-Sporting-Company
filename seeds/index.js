const sequelize = require("../config/connection");
const seedProducts = require("./products");
const seedStores = require("./stores");
const seedUsers = require("./user");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedStores();
  await seedUsers();
  await seedProducts();

  process.exit(0);
};

seedAll();
