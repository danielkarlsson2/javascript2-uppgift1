const router = require('express').Router();
const productModel = require('../models/productModel');

router.get('/', productModel.getAllProducts);

router.get('/:id', productModel.getProductByID);

router.post('/', productModel.createNewProduct);

router.put('/:id', productModel.updateProduct);

router.delete('/:id', productModel.deleteProduct);

module.exports = router;