const Schedules = require('../models/schedulesModel')


// GET ALL

const getSchedules = async (req, res) => {
    const schedules = await Schedules.find({}).sort({scheduleID: -1})

    res.status(200).json(schedules)
}


// GET SINGLE DATA  



// CREATE NEW DATA
const addSchedule = async (req, res) => {
    let scheduleDetail = req.body
    const schedules = await Schedules.find({}).sort({scheduleID: -1})
    scheduleDetail.scheduleID = !schedules || schedules.length == 0 ? 1 : schedules[schedules.length-1].scheduleID + 1

    try {
        const setSchedule = await Schedules.create(scheduleDetail)
        res.status(200).json(setSchedule)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETA DATA


// UPDATE DATA
const updateUsers = async (req, res) => {
    
}


module.exports = {
    getSchedules,
    addSchedule
}