// Store seed
const seed = require("seed");
const { Store } = require("../models");

const storeData = [
  {
    store_name: "Allstar Sporting Goods",
    store_location: "Chicago, IL",
  },
  {
    store_name: "#1 Sports",
    store_location: "Milwaukee, WI",
  },
  {
    store_name: "Profession Sporting Goods",
    store_location: "St. Louis, MO",
  },
];

const seedStores = () => Store.bulkCreate(storeData);

module.exports = seedStores;
