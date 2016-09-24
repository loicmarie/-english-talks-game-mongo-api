"use strict";
let mongoose = require('mongoose');

/* The schema describing the collection in mongo database */
let schema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    nickname : String,
    email : String,
    password : String,
    avatar : String,
    emailVerified : { Boolean , default : false }
});

/* We export the model to use it in users.js routes file */
module.exports = mongoose.model('User', schema);
