let mongoose = require('mongoose');

/* The schema describing the collection in mongo database */
let schema = new mongoose.Schema({
    theme: String,
    themeTranslation : String,
    keywords : [{
      value : String,
      suggestedSentence : String,
      translation : String
    }]
});

/* We export the model to use it in talk.js routes file */
module.exports = mongoose.model('Talk', schema);
