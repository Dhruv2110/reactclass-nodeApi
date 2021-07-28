const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const numberSchema = new Schema({
    number: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: false
    },
    vendor: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    vendorPrice: {
        type: Number,
        required: true,
        trim: true
    },
    isSold: {
        type: Boolean,
        required: false,
        trim: true
    }
});

module.exports = mongoose.model('FancyNumbersModel' , numberSchema, 'numberSchema')

