// const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const User = require('./userSchema');



exports.registerUser = (req, res) => {
    User.exists({ email: req.body.email }, (err, result) => {

        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'You made a bad request',
                err
            })
        }
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'The email is already registered'                
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
                    message: 'User was created without no problem!',
                    token: auth.generateToken(user)
                })
            })
            .catch(err => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'Failed to create the user',
                    err
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
                message: 'Success!',
                token: auth.generateToken(user)
            })
        })
    })
}