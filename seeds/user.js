const { User } = require("../models");

const userData = [
  {
    name: "Allison",
    email: "Allison@gmail.com",
    fkstore_id: 3,
    password: "Allison321",
  },
  {
    name: "Chris",
    email: "Chris@gmail.com",
    fkstore_id: 1,
    password: "Chris333",
  },
  {
    name: "Michael",
    email: "Michael@gmail.com",
    fkstore_id: 2,
    password: "Michael123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
