const {Schema, Types, model} = require('mongoose');

const orderSchema = new Schema({
    createdOn:{
        type:Date,
        default:Date.now(),
    },
    user:{
        type:Types.ObjectId,
        ref:'User',
    },
    books:[{
        type:Types.ObjectId,
        ref:'Book',
    }],
    status:{
        type:Types.ObjectId,
        ref:'OrderStatus',
        default:'Pending'
    }

});

module.exports = model("Order",orderSchema);