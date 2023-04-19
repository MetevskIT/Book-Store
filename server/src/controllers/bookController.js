const bookService = require('../services/bookService')

async function getAll(req, res) {
    const books = await bookService.getAllBooksAsync();
    res.status(200).json(books)
}

async function getBookById(req, res) {
    try {
        const id = req.params.id;
        const book = await bookService.getBookById(id);
        res.status(200).json(book)
    } catch (error) {
        res.status(404).json({ message: "Not found!" })
    }
}
async function getGenres(req,res){
    const genres = await bookService.getBookGenres();
    res.status(200).json(genres)
}

async function getLastThenBooks(req,res){
    console.log("asd");
    const books = await bookService.getLastThenBooks();
    res.status(200).json(books)
}

async function getBooksByGenre(req,res){
    try {
        const genreId = req.params.genreId;
        const books = await bookService.getBooksByGenres(genreId);
        res.status(200).json(books);

    } catch (error) {
        res.status(404).json({ message: "Not found!" });
    }
}

module.exports = {
    getAll,
    getBookById,
    getGenres,
    getLastThenBooks,
    getBooksByGenre
}