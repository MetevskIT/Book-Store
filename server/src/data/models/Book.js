const { model, Schema } = require('mongoose');

const bookSchema = new Schema({
   email: {
      type: String,
      required: [true, "Email is required!"],
      minLength: [4, 'Min length is 3!']
   }
})

module.exports = model("Book", bookSchema);;