const router = require('express').Router();
const orderModel = require('../models/orderModel')


// add items
router.post('/orders', orderModel.createOrder);

// get items
// router.get('/orders', orderModel.getOrder);

module.exports = router;