const express = require('express');
const app = express();
const cors = require('cors');


const productController = require('./controllers/productController');
const userController = require('./controllers/userController');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/webbshop', productController);
app.use('/api/users', userController);



module.exports = app;