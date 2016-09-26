let restify  = require('restify'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/atg');

let server = restify.createServer();

/* bodyParser allows to parse body parameters when handling requests */
server.use(restify.bodyParser({ mapParams: true }));


server.use(restify.CORS({

  // Defaults to ['*'].
  origins: ['http://localhost:8080'],

  // Defaults to false.
  credentials: true,

  // Sets expose-headers.
  headers: ['x-foo']

}));


require('./routes/index')(server);

server.listen(8081, function() {
  console.log('%s listening at %s', server.name, server.url);
});
