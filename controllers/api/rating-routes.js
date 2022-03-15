const router = require('express').Router();
const sequelize = require('../../config/connection');
//add models request here
const { Rating } = require('../../models');


//add route to get all Ratings, model.findAll
router.get('/', (req, res) => {
    Rating.findAll()
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//add route to get 1 Rating, model.findOne
router.get('/:id', (req, res) => {
    Rating.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbRatingData => {
            //display message if id value has no Rating
            if (!dbRatingData) {
                res.status(404).json({ message: 'No Rating has this id.' });
                return;
            }
            res.json(dbRatingData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


//add route to create new Rating, model.create
router.post('/', (req, res) => {
    Rating.create({
        product_id: req.body.product_id,
        store_id: req.body.store_id,
        value: req.body.value
    })
        .then(dbRatingData => res.json(dbRatingData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//add route to update 1 Rating, model.update
router.put('/:id', (req, res) => {
    Rating.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbRatingData => {
            //display message if id value has no Rating
            if (!dbRatingData) {
                res.status(404).json({ message: 'No Rating has this id.' });
                return;
            }
            res.json(dbRatingData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//add route to delete 1 Rating, model.destroy
router.delete('/:id', (req, res) => {
    Rating.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRatingData => {
            //display message if id value has no Rating
            if (!dbRatingData) {
                res.status(404).json({ message: 'No Rating has this id.' });
                return;
            }
            res.json(dbRatingData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;