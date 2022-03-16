const router = require("express").Router();
const sequelize = require("../../config/connection");
//add models request here
const { Product } = require("../../models");

//add route to get all products, model.findAll
router.get("/", (req, res) => {
  Product.findAll({})
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to get 1 product, model.findOne
router.get("/:id", (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => {
      //display message if id value has no product
      if (!dbProductData) {
        res.status(404).json({ message: "No product has this id." });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to create new product, model.create
router.post("/", (req, res) => {
  Product.create({
    price: req.body.price,
    stock: req.body.stock,
    store_id: req.body.store_id,
    rating: req.body.rating,
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to update 1 product, model.update
router.put("/:id", (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => {
      //display message if id value has no product
      if (!dbProductData) {
        res.status(404).json({ message: "No product has this id." });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to delete 1 product, model.destroy
router.delete("/:id", (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => {
      //display message if id value has no product
      if (!dbProductData) {
        res.status(404).json({ message: "No product has this id." });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
