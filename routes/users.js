const User = require('../models/User.js');

module.exports = server => {

  /**
  * Handle GET requests on users
  * Return a list of all the users to the client
  */
  server.get('/users', (req, res, next) => {
    User.find((err, users) => {
      console.log(users);
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
      if(err) return next(err);
      if(user)
      {
        res.send(user);
        next();
      }else{
        res.send(404);
        next();
      }
    });
  });

  /**
  * Handle POST requests on users
  * Create a new user in database
  */
  server.post('/users', (req, res, next) => {
    let user = new User({
      firstname: req.body.firstname,
      lastname : req.body.lastname,
      nickname : req.body.nickname,
      email : req.body.email,
      password : req.body.password,
      avatar : req.body.avatar
    });
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
      if(err) return next(err);
      if(user)
      {
        for (let prop in req.body)
        user[prop] = req.body[prop];
        user.save().then(user => {
          res.send(user);
          next();
        });
      }else // User not found
      {
        res.send(404);
        next();
      }

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
