const BookGenre = require("../models/BookGenre");

async function bookGenresSeed() {
       const bookGenres = ['Dystopian', 'Mystery', 'Horror', 'Thriller', 'Paranormal', 'Historical fiction', 'Science Fiction', 'Children'];

       if ((await BookGenre.find()).length <= 0) {
              bookGenres.forEach(x => {
                     const bookGenre = new BookGenre({
                            bookGenre: x,
                     })
                     bookGenre.save();
              })
       }
}

module.exports = bookGenresSeed;