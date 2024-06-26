const Dentist = require('../models/dentistModel')


// GET ALL

const getDentists = async (req, res) => {
    const users = await Dentist.find({}).sort({dentistID: -1})

    res.status(200).json(users)
}


// GET SINGLE DATA  


// CREATE NEW DATA
const addDentist = async (req, res) => {
    let dentistDetail = req.body
    try {
        const setUsers = await Dentist.create(dentistDetail)
        res.status(200).json(setUsers)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETA DATA


// UPDATE DATA
const updateUsers = async (req, res) => {
    
}


module.exports = {
    getDentists,
    addDentist
}