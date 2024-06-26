const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schedulesSchema = new Schema ({
    scheduleID: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dentist: {
        type: String,
    },
    date: {
        type: String
    },
    time: {
        type: String
    },
    // remarks: {
    //     type: String
    // }
}, { timestamps: true })

module.exports = mongoose.model('Schedules',schedulesSchema)
