const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Rate } = require("../../models/");

//add route to get all Rates, model.findAll
router.get("/", (req, res) => {
  Rate.findAll()
    .then((dbRateData) => res.json(dbRateData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to get 1 Rate, model.findOne
router.get("/:id", (req, res) => {
  Rate.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRateData) => {
      //display message if id value has no Rate
      if (!dbRateData) {
        res.status(404).json({ message: "No Rate has this id." });
        return;
      }
      res.json(dbRateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to create new Rate, model.create
router.post("/", (req, res) => {
  Rate.create({
    Rate: req.body.Rate
  })
    .then((dbRateData) => res.json(dbRateData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to update 1 Rate, model.update
router.put("/:id", (req, res) => {
  Rate.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbRateData) => {
      //display message if id value has no Rate
      if (!dbRateData) {
        res.status(404).json({ message: "No Rate has this id." });
        return;
      }
      res.json(dbRateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//add route to delete 1 Rate, model.destroy
router.delete("/:id", (req, res) => {
  Rate.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbRateData) => {
      //display message if id value has no Rate
      if (!dbRateData) {
        res.status(404).json({ message: "No Rate has this id." });
        return;
      }
      res.json(dbRateData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
