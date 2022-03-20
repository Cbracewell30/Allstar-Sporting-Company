const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Store, Product } = require("../../models/");

//add route to get all Stores, model.findAll
router.get("/", (req, res) => {
  Store.findAll()
    .then((dbStoreData) => {
      res.json(dbStoreData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to get 1 Store, model.findOne
router.get("/:store_id", (req, res) => {
  Product.findAll({
    where: {
      store_id: req.params.store_id,
    },
    attributes: [
      "id",
      "name",
      "price",
      "stock",
      "store_id",
      "filename",
      "description",
    ],
    order: [["stock", "DESC"]],
    include: [
      {
        model: Store,
        attributes: ["store_name", "store_location"],
      },
    ],
  })
    .then((dbStoreData) => {
      //display message if id value has no Store
      if (!dbStoreData) {
        res.status(404).json({ message: "No Store has this id." });
        return;
      }
      res.json(dbStoreData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to create new Store, model.create
router.post("/", (req, res) => {
  Store.create({
    store_name: req.body.store_name,
    store_location: req.body.store_location,
  })
    .then((dbStoreData) => res.json(dbStoreData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to update 1 Store, model.update
router.put("/:id", (req, res) => {
  Store.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbStoreData) => {
      //display message if id value has no Store
      if (!dbStoreData) {
        res.status(404).json({ message: "No Store has this id." });
        return;
      }
      res.json(dbStoreData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to delete 1 Store, model.destroy
router.delete("/:id", (req, res) => {
  Store.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbStoreData) => {
      //display message if id value has no Store
      if (!dbStoreData) {
        res.status(404).json({ message: "No Store has this id." });
        return;
      }
      res.json(dbStoreData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
