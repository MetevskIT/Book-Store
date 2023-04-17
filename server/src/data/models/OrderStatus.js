const { Schema, Types, model } = require('mongoose');

const orderStatusSchema = new Schema({
    status:{
        type:String,
        required: true,
    }
})

module.exports = model("OrderStatus",orderStatusSchema);