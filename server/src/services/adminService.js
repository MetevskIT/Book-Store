const Book = require('../data/models/Book');
const Order = require('../data/models/Order');

async function createBook(model) {
    try {
        const book = new Book({
            title: model.title,
            price: model.price,
            description: model.description,
            genre: model.genre,
            imageUrl: model.imageUrl,
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
            imageUrl: model.imageUrl,
        }
        return await Book.findByIdAndUpdate(bookId, book);
    } catch (error) {
        return error;
    }
}

async function deleteBook(bookId) {
    return await Book.findByIdAndDelete(bookId)
}
async function changeOrderStatus(orderId, statusId) {
    const order = await Order.findByIdAndUpdate(orderId, {
        status: statusId
    })
    return order;
}

module.exports = {
    createBook,
    editBook,
    deleteBook,
    changeOrderStatus
}