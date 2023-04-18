const orderService = require('../services/orderService')

async function createOrder(req, res) {
    try {
        const userId = req.user._id;
        const { ...orderInfo } = req.body;

        const order = await orderService.createOrder(userId, orderInfo)
        res.status(200).json(order)
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}

async function deleteOrder(req, res) {
    try {
        const userId = req.user._id;
        const bookId = req.params.id;
        const order = await orderService.deleteOrder(userId, bookId)
        res.status(200).json(order)
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}

async function getOrderDetails(req, res) {
    try {
        const userId = req.user._id;
        const bookId = req.params.id;
        const order = await orderService.getOrderDetails(userId, bookId)
        res.status(200).json(order)
    } catch (error) {
        return res.status(40).json({ "message": error.message })
    }
}

async function getAllOrders(req, res) {
    try {
        const userId = req.user._id;
        const orders = await orderService.getAllOrders(userId)
        res.status(200).json(orders)
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}

async function getOrderStatuses(req, res) {
    try {
        const orders = await orderService.getOrderStatuses()
        res.status(200).json(orders)
    } catch (error) {
        return res.status(400).json({ "message": error.message })
    }
}
module.exports = {
    createOrder,
    deleteOrder,
    getOrderDetails,
    getAllOrders,
    getOrderStatuses
}
