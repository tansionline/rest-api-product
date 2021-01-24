const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Product = new Schema({
    name: {
        type: String,
        required: 'Must be Product Name'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('Product', Product);