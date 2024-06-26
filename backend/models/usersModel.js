const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usersSchema = new Schema ({
    userID: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    birthdate: {
        type: String
    },
    gender: {
        type: String
    },
    address: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model('Users',usersSchema)
