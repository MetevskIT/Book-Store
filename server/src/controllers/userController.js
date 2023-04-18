const userService = require('../services/userService')

async function register(req, res) {
    const { email, password } = req.body;

    try {
        const user = await userService.register(email, password)

        return res.status(201).json(user);

    } catch (error) {
        return res.status(401).json({ "message": error.message })
    }
}

async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await userService.login(email, password)
        return res.status(200).json(user);

    } catch (error) {
        return res.status(401).json({ "message": error.message })
    }
}

async function logout(req, res, next) {
    //return res.status(202).json(req.body)
}

async function addToCart(req, res) {
    try {
        const userId = req.user._id;
        const bookId = req.params.id;
        await userService.addToCart(userId, bookId)
        res.status(204).json()
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}

async function removeFromCart(req, res) {
    try {
        const userId = req.user._id;
        const bookId = req.params.id;
        await userService.removeFromCart(userId, bookId)
        res.status(204).json()
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}

async function getBooksFromCart(req, res) {
    try {
        const userId = req.user._id;
        const books = await userService.getBookFromCart(userId);
        res.status(200).json(books)
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}

module.exports = {
    register,
    login,
    logout,
    addToCart,
    removeFromCart,
    getBooksFromCart,

};