const { Schema, model } = require('mongoose');

const bookGenreSchema = new Schema({
    bookGenre: {
        type: String,
        required: true,
    }
});

module.exports = model('BookGenre', bookGenreSchema);