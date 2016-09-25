const Talk = require('../models/Talk');

module.exports = server => {

    /**
     * Handle GET requests on users
     * Return a list of all the users to the client
     */
    server.get('/talks', (req, res, next) => {
        Talk.find((err, talks) => {
            res.send(talks);
            next();
        });
    });


    /**
     * Handle GET requests on specific user
     * Return a description of the cat to the client
     */
    server.get('/talks/:id', (req, res, next) => {
        Talk.findOne({ _id:req.params.id }, (err, talk) => {
            res.send(talk);
            next();
        });
    });

    /**
     * Handle POST requests on cats
     * Create a new cat in database
     */
    server.post('/talks', (req, res, next) => {
        let user = new Talk(req.body);
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
