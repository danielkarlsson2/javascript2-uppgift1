const Cart = require('./users/userOrderSchema');
// const Product = require('./productSchema');

exports.createOrder = async (req, res) => {

    // Testar--------------
    Cart.create({
        userId: req.body.objectId,
        productId: req.body.objectId, ref: "Product",
        cart: []
    })
    .then(data => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: 'Created the product succesfully',
          data
        })
      })
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to create the product',
          err
        })
      }) 

    // END--------------

    // let cart = []

    // Cart.create({
    //     cart: [
    //         { productId: mongoose.Schema.Types.ObjectId, ref:'product'},
    //     ],
    //     // quantity:  1
    // })
    // .then(data => {
    //     res.status(200).json({
    //         statusCode: 200,
    //         status: true,
    //         message: 'Created the cart',
    //         data
    //     })
    //     .catch(err => {
    //         res.status(400).json({
    //             statusCode: 400,
    //             status: false,
    //             message: 'Problem creating the cart',
    //             err
    //         })
    //     })
    // })
}

// const Order = require()