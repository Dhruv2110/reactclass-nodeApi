const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendorSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: false
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    vendorKey: {
        type: String,
        required: false,
        trim: false
    }
});

module.exports = mongoose.model('VendorsModel' , vendorSchema, 'vendorSchema')
