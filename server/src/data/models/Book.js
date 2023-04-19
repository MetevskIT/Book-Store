const { model, Schema, Types } = require('mongoose');

const bookSchema = new Schema({
   title: {
      type: String,
      minLength: [4, "Min length is 4!"],
      maxLength: [20, "Max length is 20!"],
      required: [true, "Title is required!"],
   },
   price: {
      type: String,

   },
   description: {
      type: String,
   },
   genre: {
      type: Types.ObjectId,
      ref: 'BookGenre'
   },
   createdOn: {
      type: Date,
      default: Date.now()
   },
   imageUrls: {
      type: String
   }

})

module.exports = model("Book", bookSchema);;