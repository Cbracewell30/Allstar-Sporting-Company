const router = require("express").Router();
const sequelize = require("../../config/connection");
const withAuth = require('../../utils/auth');
//add models request here
const { Product, User, Rate, Store } = require("../../models");

//add route to get all products, model.findAll
router.get("/", (req, res) => {
  // res.render('new-product');
  Product.findAll({
    attributes: ['id', 'name', 'price', 'stock', 'store_id', 'filename', 'description']
})
    .then((dbProductData) => {
      const product = dbProductData.map(product => product.get({ plain: true }));
      res.render("product", {product});
    })
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
      attributes: ['id', 'name', 'price', 'stock', 'store_id', 'filename', 'description'],
      include: [{
        model: Store,
        attributes: ['id']
      }]
  })
    .then((dbProductData) => {
      console.log(dbProductData);
      // const product = dbProductData.map({ plain: true });
      res.render("edit-product", {dbProductData});

      //display message if id value has no product
      if (!dbProductData) {
        res.status(404).json({ message: "No product has this id." });
        return;
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to create new product, model.create
router.post("/", (req, res) => {
  Product.create({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    store_id: req.body.store_id,
    filename: req.body.filename,
    description: req.body.description
  })
    .then((dbProductData) => {
      res.json(dbProductData);

    })
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
        res.status(404).json({ message: "No" });
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


// router.get('/', withAuth, (req, res) => {
//   Product.findAll({
//           where: {
//               user_id: req.session.user_id
//           },
//           attributes: [
//               'name',
//               'price',
//               'stock',
//               'store_id',
//               'filename',
//               'description'
//           ],
//           include: [{
//                   model: Product,
//                   attributes: ['id', 'name', 'price', 'stock', 'store_id', 'filename', 'description'],
//                   include: {
//                       model: User,
//                       attributes: ['email']
//                   }
//               },
//               {
//                   model: User,
//                   attributes: ['email']
//               }
//           ]
//       })
//       .then(dbPostData => {
//           const posts = dbPostData.map(post => post.get({ plain: true }));
//           res.render('product', { posts, loggedIn: true });
//       })
//       .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//       });
// });

// // //edit product
// router.get('/edit/:id', withAuth, (req, res) => {
//   Product.findOne({
//           where: {
//               id: req.params.id
//           },
//           attributes: ['id',
//               'name',
//               'price',
//               'stock',
//               'store_id',
//               'filename',
//               'description'
//           ],
//       })
//       .then(dbProductData => {
//           if (!dbProductData) {
//               res.status(404).json({ message: 'No product found with this id' });
//               return;
//           }

//           const post = dbProductData.get({ plain: true });
//           res.render('edit-product', { post, loggedIn: true });
//       })
//       .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//       });
// });


// router.get('/new', (req, res) => {
//   res.render('new-product');
// });

module.exports = router;