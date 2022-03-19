const jwt = require('jsonwebtoken');
require('dotenv').config();

const sercretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id }, sercretKey)
}