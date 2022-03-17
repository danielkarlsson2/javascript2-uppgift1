const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    title:      { type: String, required: true},
    desc:       { type: String},
    price:      { type: Number, required: true},
    imageUrl:   { type: String, required: true},
})

module.exports = mongoose.model('product', productSchema)