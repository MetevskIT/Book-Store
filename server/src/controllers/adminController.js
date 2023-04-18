const adminService = require('../services/adminService')

async function createBook(req, res) {
    try {
        const book = await adminService.createBook(req.body)
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function editBook(req, res) {
    const bookId = req.params.id;

    const book = await adminService.editBook(bookId, req.body)
    if (book) {
        res.status(200).json(book)

    } else {
        res.status(404).json({ message: "Book is not exist!" })
    }
}

async function deleteBook(req, res) {
    const bookId = req.params.id;

    const book = await adminService.deleteBook(bookId)
    if (book) {
        res.status(200).json(book)

    } else {
        res.status(404).json({ message: "Book is not exist!" })
    }
}

async function manageOrder(req, res) {
    try {
        const orderId = req.params.id;
        const statusId = req.body.statusId;
        const order = await adminService.changeOrderStatus(orderId, statusId);

        res.status(200).json(order)
    } catch (error) {
        res.status(404).json({ message: "Book is not exist!" })
    }
}


module.exports = {
    createBook,
    editBook,
    deleteBook,
    manageOrder,
};