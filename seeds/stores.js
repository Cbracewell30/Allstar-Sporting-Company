const { Store } = require('../models');

const storeData = [
    {
        store_name: 'Allstar Sporting Goods',
        location: 'Chicago'
    },
    {
        store_name: '#1 Sports',
        location: 'Milwaukee'
    },
    {
        store_name: 'Profession Sporting Goods',
        location: 'St. Louis'
    },
];

const seedStores = () => Store.bulkCreate(storeData);

module.exports = seedStores;