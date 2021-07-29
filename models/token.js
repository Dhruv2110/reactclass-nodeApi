const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    refreshToken: {
        type: String,
        required: true,
        trim: true
    }
   
}, { timestamps: true, versionKey: false })

module.exports = mongoose.model('Token', tokenSchema);