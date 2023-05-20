const { model, Schema, Types } = require('mongoose');

const bookSchema = new Schema({
   title: {
      type: String,
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
   imageUrl: {
      type: String
   }

})

module.exports = model("Book", bookSchema);;