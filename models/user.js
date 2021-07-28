const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required:true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    }}
    );

module.exports = mongoose.model("Users", userSchema, 'users');