const Book = require('../data/models/Book')
const BookGenres = require('../data/models/BookGenre')

async function getBookGenres() {
    return await BookGenres.find();
}

async function getAllBooksAsync() {
    return await Book.find();
}

async function getBookById(id) {
    return await Book.findById(id);
}
async function getLastThenBooks(){
    return await Book.find().sort({createdOn:1}).limit(10);
}

async function getBooksByGenres(genreId){
    return await Book.find().sort({createdOn:1}).where('genre').equals(genreId)
}

module.exports = {
    getAllBooksAsync,
    getBookById,
    getBookGenres,
    getBooksByGenres,
    getLastThenBooks
}