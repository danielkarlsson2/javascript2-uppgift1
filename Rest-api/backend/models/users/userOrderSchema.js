const req = require('express/lib/request');
const mongoose = require('mongoose');

// const itemSchema = mongoose.Schema({
//     productId:  { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
//     // productId:  { },
//     quantity:   { type: Number, required: true, min: [1]},
//     price:      { type: Number, required: true},
//     total:      { type: Number, required: true} 
// }, { timestamps: true },
// )

// const OrderSchema = new Schema({
//     item: [itemSchema],
//     subtotal: {
//         default: 0,
//         type: number
//     }
// }, { timestamps: true})

const OrderSchema = mongoose.Schema({
    userId:     { type: mongoose.Schema.Types.ObjectId},
    productId:  { type: mongoose.Schema.Types.ObjectId, ref: "Product"},
    cart:       { type: Array},
    // quantity:   { type: Number, required: true, min: [1]},
    // totalPrice: { type: Number},


}, { timestamps: true})
module.exports = mongoose.model('Cart', OrderSchema);


