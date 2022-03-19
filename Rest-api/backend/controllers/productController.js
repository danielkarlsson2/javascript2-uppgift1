const router = require('express').Router();
const productModel = require('../models/productModel');
const auth = require('../auth/authentication')

router.get('/', productModel.getAllProducts);
router.get('/:id', productModel.getProductByID);




router.post('/', auth.tokenVerification, productModel.createNewProduct);

router.put('/:id',auth.tokenVerification, productModel.updateProduct);

router.delete('/:id',auth.tokenVerification, productModel.deleteProduct);

module.exports = router;