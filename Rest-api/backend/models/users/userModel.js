// const res = require('express/lib/response');
const User = require('./userSchema');
const bcrypt = require('bcryptjs');
const auth = require('../../auth/authentication');

exports.generateToken = (user) => {
    return jwt.sign({ id: user._id }, secretKey, { expiresIn: '2h'})
}

exports.registerUser = (req, res) => {
    User.exists({ email: req.body.email }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'That\'s a bad request',                
            })
        }
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'The email is unfortunately registered'                
            })
        }

        const salt = bcrypt.genSaltSync(10);

        bcrypt.hash(req.body.password, salt, (err, hash) => {

            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to encrypt the password',
                    err
                })
            }

            User.create({
                firstName:     req.body.firstName,
                lastName:      req.body.lastName,
                email:         req.body.email,
                passwordHash:  hash
            })
            .then(user => {
                res.status(201).json({
                    statusCode: 201,
                    status: true,
                    message: 'User was created without a problem!',
                    token: auth.generateToken(user)
                    // token: 'testar'
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to create the user',                    
                })
            })
        })
    })
}

exports.loginUser = (req, res) => {

    User.findOne({ email: req.body.email }, (err, user) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'Bad request',
                err
            })
        }
        if(!user) {
            return res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'That\'s an incorrect email or password ',                
            })
        }


        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Hmm, something went wrong while decrypting the password',                    
                })
            }
            if(!result) {
                return res.status(401).json({
                    statusCode: 401,
                    status: false,
                    message: 'That\'s an incorrect email or password ',                
                })
            }

            res.status(200).json({                
                statusCode: 200,
                status: true,
                message: 'Logged in successfully!',
                token: auth.generateToken(user),
                // token: 'testar123'
                
            })
            
            
            exports.generateToken = (user) => {
            return jwt.sign({ id: user._id }, secretKey, { expiresIn: '2h'})
}
        })
    })
}




