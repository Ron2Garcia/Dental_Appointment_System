const express = require('express');

const {
    getSchedules,
    addSchedule
} = require('../controllers/schedulesController')

const router = express.Router();

// Get ALL
router.get('/', getSchedules);

// Get single item
// router.get('/:email', getUser);

// post new
router.post('/', addSchedule);

// delete 
router.delete('/:id', (req, res) => {
    res.json({msg: ''})
});

// update 
router.patch('/:id', (req, res) => {
    res.json({msg: ''})
});



module.exports = router