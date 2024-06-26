const express = require('express');

const {
    getDentists,
    addDentist
} = require('../controllers/dentistController')

const router = express.Router();

// Get ALL
router.get('/', getDentists);

// Get single item
// router.get('/:email', getUser);

// post new
router.post('/', addDentist);

// delete 
router.delete('/:id', (req, res) => {
    res.json({msg: ''})
});

// update 
router.patch('/:id', (req, res) => {
    res.json({msg: ''})
});



module.exports = router