const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Product, Rate, Store } = require("../models");

//route to get homepage
router.get("/", (req, res) => {
  // if(response.ok) {
  try {
    res.render("homepage", { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//route to login to webpage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

//route to signup for user account
router.get("/signup", (req, res) => {
  res.render("signup");
});

//route to get all products
router.get("/products", (req, res) => {
  if (req.session.loggedIn) {
    Product.findAll()
      .then((dbProductData) => {
        const product = dbProductData.map((product) =>
          product.get({ plain: true })
        );
        res.render("product", { product });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//route to find 1 product, renders page that can edit product
router.get("/products/:id", (req, res) => {
  if (req.session.loggedIn) {
    Product.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Store,
          attributes: ["id"],
        },
      ],
    })
      .then((dbProductData) => {
        //display message if id value has no product
        if (!dbProductData) {
          res.status(404).json({ message: "No product has this id." });
          return;
        }
        // if route is good it brings up the edit product page
        res.render("edit-product", dbProductData.get({ plain: true }));
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//route to create new product, renders new product page
router.get("/new-product", (req, res) => {
  res.render("new-product");
});

//route to show all store locations
router.get("/stores", (req, res) => {
  if (req.session.loggedIn) {
    Store.findAll()
      .then((dbStoreData) => {
        const store = dbStoreData.map((store) => store.get({ plain: true }));
        res.render("store", { store });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

//route to show 1 page, renders all products in specific store
router.get("/stores/:store_id", (req, res) => {
  Product.findAll({
    where: {
      store_id: req.params.store_id,
    },
  })
    .then((dbStoreData) => {
      //display message if id value has no Store
      if (!dbStoreData) {
        res.status(404).json({ message: "No Store has this id." });
        return;
      }
      const product = dbStoreData.map((product) =>
        product.get({ plain: true })
      );
      res.render("single-store", { product });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route to create new product, renders new product page
router.get("/new-store", (req, res) => {
  res.render("new-store");
});

module.exports = router;
