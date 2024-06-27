const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        maxLenght: 200,
    },
    name: {
        type: String,
        require: true,
        maxLenght: 50,
    },
    forname: {
        type: String,
        require: true,
        maxLenght: 50,
    },
    password: {
        type: String,
        require: true,
        maxLenght: 50,
    },
}, {timestamps: true});

module.exports = mongoose.model("user", UserSchema)
