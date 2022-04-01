const Cart = require('./users/userOrderSchema');
const Product = require('./productSchema');

exports.createOrder = async (req, res) => {

    // Testar--------------
    const {productId} = req.body;
    const quantity = Number.parseInt(req.body.quantity);

    try {
        let cart = await Cart.cart();
        let productDetails = await Product.productById(productId);
            if(!productDetails) {
                return res.status(500).json({
                    type: "Not found",
                    message: "INvalid"
                })
            }
    }

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