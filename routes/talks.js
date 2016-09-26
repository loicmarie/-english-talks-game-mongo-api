const Talk = require('../models/Talk');

module.exports = server => {

  /**
  * Handle GET requests on users
  * Return a list of all the users to the client
  */
  server.get('/talks', (req, res, next) => {
    Talk.find((err, talks) => {
      if(err) return next(err);

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
      if(err) return next(err);

      if(talk)
      {
        res.send(talk);
        next();
      }else{
        res.send(404);
        next();
      }
    });
  });

  /**
  * Handle POST requests on cats
  * Create a new cat in database
  */
  server.post('/talks', (req, res, next) => {
    let talk = new Talk(req.body);

    for (let prop in req.body)
      talk[prop] = req.body[prop];

    talk.save().then(talk => {
      res.send(talk);
      next();
    });
  });

  /**
  * Handle PUT requests on specific talk
  * Update an existing talk in database
  */
  server.put('/talks/:id', (req, res, next) => {
    Talk.findOne({ _id:req.params.id }, (err, talk) => {
      if(err) return next(err);

      if(talk)
      {
        for (let prop in req.body)
        talk[prop] = req.body[prop];
        talk.save().then(user => {
          res.send(user);
          next();
        });
      }else
      {
        res.send(404);
        next();
      }
    });
  });

  /**
  * Handle DELETE requests on specific talk
  * Delete an existing talk in database
  */
  server.del('/talks/:id', (req, res, next) => {
    Talk.remove({ _id: req.params.id }, err => {

      if(err) return next(err);

      res.send({ok: 'ok'});
      next();
    });
  });

}
