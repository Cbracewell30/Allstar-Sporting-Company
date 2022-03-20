// Rate Seeds
const { Rate } = require("../models");

const rateData = [
  {
    rating: "1: Not Good",
  },
  {
    rating: "2: Average",
  },
  {
    rating: "3: Good",
  },
  {
    rating: "4: Great",
  },
];

const seedRating = () => Rate.bulkCreate(rateData);

module.exports = seedRating;
