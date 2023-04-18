const Order = require("../data/models/Order")
const OrderStatus = require("../data/models/OrderStatus")
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Types;

async function getOrderStatuses() {
    return await OrderStatus.find();
}
async function createOrder(userId, orderInfo) {
    const pendingStatus = await OrderStatus.findOne({ status: "Pending" })
    const order = new Order({
        user: userId,
        status: pendingStatus._id,
        firstName: orderInfo.firstName,
        lastName: orderInfo.lastName,
        email: orderInfo.email,
        address: orderInfo.address
    })
    orderInfo.books.forEach(x => {
        order.books.push(new ObjectId(x))
    });
    return order.save();
}

async function deleteOrder(userId, orderId) {
    const order = await Order.findById(orderId)
    if (!order) {
        throw new Error("This order not exist!");
    }
    if (order.user.toString() != userId) {
        throw new Error("Unauthorized");
    }
    await order.deleteOne();
    return order;
}

async function getOrderDetails(userId, orderId) {
    const order = await Order.findById(orderId);
    if (!order) {
        throw new Error("This order not exist!");
    }
    if (order.user.toString() != userId) {
        throw new Error("Unauthorized!");
    }
    return order;
}

async function getAllOrders(userId) {
    try {
        const orders = Order.find().where('user').equals(userId).populate('books')
        return orders;
    } catch (error) {
        return error;
    }
}


module.exports = {
    getOrderStatuses,
    createOrder,
    deleteOrder,
    getOrderDetails,
    getAllOrders,
}