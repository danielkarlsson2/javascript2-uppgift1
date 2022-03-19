const { json } = require('express/lib/response');
const Product = require('./productSchema');

exports.getAllProducts = async (req, res) => {
    
    try {
        const data = await Product.find()
        res.status(200).json(data)
    }
    catch(err) {
        res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Something went wrong when getting the product',
            err
        })
    }
}

exports.getProductByID = (req, res) => {
  
  Product.exists({ _id: req.params.id}, (err, product) => {
    
    if(err) {
      return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'You made a bad request'            
      })
    }
    if(!product) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: 'Hey there, this product doesn\'t exist!'
      })
    }
    Product.findById(req.params.id)
      .then(data => res.status(200).json(data))
      .catch(err => {
        res.status(500).json({
          statusCode: 500,
          status: 500,
          message: err.message
        })
      })
  })
}

exports.createNewProduct = (req, res) => {

    Product.create({
        title:   req.body.title,        
        desc:   req.body.desc,
        price:  req.body.price,
        imageUrl:  req.body.imageUrl
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
}


exports.updateProduct = (req, res) => {   
  
      Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })  

        .then(data => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Updated the product!',
            data        
        })  
      })
      .catch(err => {
        if(err) {
          return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Damn, we failed to update the product',
          })
        }
      })
  }



exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id }, (err, data) => {
        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Something went wrong when deleting the product'
            })
        }

        if(!data) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Not Found'
            })
        }

        res.status(201).json(data)   
    })
}