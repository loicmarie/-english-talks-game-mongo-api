"use strict";
const User = require('../models/User');

module.exports = server => {

    /**
     * Handle GET requests on users
     * Return a list of all the users to the client
     */
    server.get('/users', (req, res, next) => {
        User.find((err, users) => {
            res.send(users);
            next();
        });
    });


    /**
     * Handle GET requests on specific user
     * Return a description of the cat to the client
     */
    server.get('/users/:id', (req, res, next) => {
        User.findOne({ _id:req.params.id }, (err, user) => {
            res.send(user);
            next();
        });
    });

    /**
     * Handle POST requests on cats
     * Create a new cat in database
     */
    server.post('/users', (req, res, next) => {
        let user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            nickname: req.body.nickname,
            email : req.body.email,
            password : req.body.password,
            avatar : req.body.avatar,
            emailVerified : req.body.emailVerified
        });
        for (let prop in req.body)
            user[prop] = req.body[prop];
        user.save().then(user => {
            res.send(user);
            next();
        });
    });

    /**
     * Handle PUT requests on specific cat
     * Update an existing cat in database
     */
    server.put('/users/:id', (req, res, next) => {
        User.findOne({ _id:req.params.id }, (err, user) => {
            for (let prop in req.body)
                user[prop] = req.body[prop];
            user.save().then(user => {
                res.send(user);
                next();
            });
        });
    });

    /**
     * Handle DELETE requests on specific cat
     * Delete an existing cat in database
     */
    server.del('/users/:id', (req, res, next) => {
        User.remove({ _id: req.params.id }, err => {
            res.send({ok: 'ok'});
            next();
        });
    });

}
