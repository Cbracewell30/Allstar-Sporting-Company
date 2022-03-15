const router = require('express').Router();
const sequelize = require('../../config/connection');
//add models request here
const { User } = require('../../models');


//add route to get all Users, model.findAll
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//add route to get 1 User, model.findOne
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            //display message if id value has no User
            if (!dbUserData) {
                res.status(404).json({ message: 'No User has this id.' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


//add route to create new User, model.create
router.post('/', (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        store_id: req.body.store_id,
        password: req.body.password
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//add route to update 1 User, model.update
router.put('/:id', (req, res) => {
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            //display message if id value has no User
            if (!dbUserData) {
                res.status(404).json({ message: 'No User has this id.' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


//add route to delete 1 User, model.destroy
router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            //display message if id value has no User
            if (!dbUserData) {
                res.status(404).json({ message: 'No User has this id.' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;