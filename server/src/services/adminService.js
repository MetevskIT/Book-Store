const Book = require('../data/models/Book')

async function createBook(model) {
    try {
        const book = new Book({
            title: model.title,
            price: model.price,
            description: model.description,
            genre: model.genre,
            imageUrls: model.imageUrls,
        });

        book.save();
        return book;
    } catch (error) {
        return error;
    }
}

async function editBook(bookId, model) {
    try {
        const book = {
            title: model.title,
            price: model.price,
            description: model.description,
            genre: model.genre,
            imageUrls: model.imageUrls,
        }
        return await Book.findByIdAndUpdate(bookId, book);
    } catch (error) {
        return error;
    }
}

async function deleteBook(bookId){
    return await Book.findByIdAndDelete(bookId)
}

module.exports = {
    createBook,
    editBook,
    deleteBook
}