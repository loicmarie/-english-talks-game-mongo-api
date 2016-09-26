let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

/* The schema describing the collection in mongo database */
let schema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    nickname : String,
    email : String,
    password : String,
    avatar : String,
    emailVerified : { type: Boolean , default: false}
});

/* We export the model to use it in users.js routes file */
module.exports = mongoose.model('User', schema);
