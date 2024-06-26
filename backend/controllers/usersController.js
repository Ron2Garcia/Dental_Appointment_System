const Users = require('../models/usersModel')


// GET ALL

const getUsers = async (req, res) => {
    const users = await Users.find({}).sort({userID: -1})

    res.status(200).json(users)
}


// GET SINGLE DATA  
const getUser = async (req, res) => {
    const getEmail = req.params.email
    const user = await Users.find({email: getEmail})
    res.status(200).json(user)
}


// CREATE NEW DATA
const addUsers = async (req, res) => {
    // const {gameID , rounds} = req.body
    let userDetail = req.body
    const users = await Users.find({}).sort({userID: -1})
    userDetail.userID = !users || users.length == 0 ? 1 : users[users.length-1].userID + 1

    try {
        const setUsers = await Users.create(userDetail)
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
    getUsers,
    addUsers,
    getUser
}