const express = require('express');

const {
    getUsers,
    addUsers,
    getUser
} = require('../controllers/usersController')

const router = express.Router();

// Get ALL
router.get('/', getUsers);

// Get single item
router.get('/:email', getUser);

// post new
router.post('/', addUsers);

// delete 
router.delete('/:id', (req, res) => {
    res.json({msg: ''})
});

// update 
router.patch('/:id', (req, res) => {
    res.json({msg: ''})
});



module.exports = router