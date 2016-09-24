/**
 * Import all routes. In each route, we import the associated model
 */
module.exports = server => {
    require('./users.js')(server);
    require('./talks.js')(server);
}
