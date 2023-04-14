const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
    },
    hashedPassword: {
      type:String,
    },
    favoriteBooks: [{
        type: Types.ObjectId,
        ref: "Book"
    }],
    registredOn: {
        type: Date,
        default: Date.now()
    }
})
module.exports = model("User",userSchema);