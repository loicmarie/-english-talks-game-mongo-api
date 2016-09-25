let restify  = require('restify'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/atg');

let server = restify.createServer();

/* bodyParser allows to parse body parameters when handling requests */
server.use(restify.bodyParser({ mapParams: true }));

require('./routes/index')(server);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
