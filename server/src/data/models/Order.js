const { Schema, Types, model } = require('mongoose');

const orderSchema = new Schema({
    createdOn: {
        type: Date,
        default: Date.now(),
    },
    user: {
        type: Types.ObjectId,
        ref: 'User',
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },

    books: [{
        type: Types.ObjectId,
        ref: 'Book',
    }],
    status: {
        type: Types.ObjectId,
        ref: 'OrderStatus'
    }

});

module.exports = model("Order", orderSchema);