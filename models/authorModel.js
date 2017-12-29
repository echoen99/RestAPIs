var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var authorModel = new Schema({
    name: {
        type: String
    },
    address: { type: String },
    favoriteGenre: { type: String },
    hasBooks: {type: Boolean, default: false}
});

module.exports = mongoose.model('Author', authorModel);
