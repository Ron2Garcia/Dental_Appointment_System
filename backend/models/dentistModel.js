const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dentistsSchema = new Schema ({
    dentistID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    scheduleDateID: {
        type: Array
    },
    scheduleTimeID: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('Dentists',dentistsSchema)
