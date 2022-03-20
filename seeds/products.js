// Product seeds
const { Product } = require("../models");

const productData = [
  {
    name: "Baseball Bat",
    price: "75.00",
    stock: "11",
    store_id: "1",
    filename: "bat.jpg",
    description: "Image of wooden baseball bat",
  },
  {
    name: "Baseball",
    price: "5.00",
    stock: "100",
    store_id: "2",
    filename: "baseball.jpg",
    description: "Baseball on the ground",
  },
  {
    name: "Cleats",
    price: "50.00",
    stock: "3",
    store_id: "1",
    filename: "cleats.jpg",
    description: "White cleats in the grass",
  },
  {
    name: "Baseball Glove",
    price: "35.00",
    stock: "15",
    store_id: "1",
    filename: "baseball-glove.jpg",
    description: "Brown leather with red accents baseball glove.",
  },
  {
    name: "Soccer Ball",
    price: "20.00",
    stock: "25",
    store_id: "2",
    filename: "soccerball.jpg",
    description: "Blue and yellow Adidas soccerball.",
  },
  {
    name: "Shin Gaurds",
    price: "22.00",
    stock: "12",
    store_id: "2",
    filename: "shin-gaurds.jpg",
    description: "Black Adidas shin gaurds.",
  },
  {
    name: "Knee High Socks",
    price: "8.00",
    stock: "16",
    store_id: "3",
    filename: "",
    description: "",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
