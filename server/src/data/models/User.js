const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        minLength: [4, "Min length is 4!"],
        maxLength: [20, "Max length is 20!"],
        required: [true, "Email is required!"],
    },
    hashedPassword: {
        type: String,
        required: [true, "Password is required!"],
    },
    favoriteBooks: [{
        type: Types.ObjectId,
        ref: "Book"
    }],
    cart: [{
        type: Types.ObjectId,
        ref: "Book"
    }],
    registredOn: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User"
    },
    orders:[{
        type:Types.ObjectId,
        ref:'Order'
    }],
})
module.exports = model("User", userSchema);