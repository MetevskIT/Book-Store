const BookGenre = require("../models/BookGenre");

async function BookGenresSeed(){
   
    if(await BookGenre.find().length<=0){
       await BookGenre.create({
        bookGenre:"Test",
       })
    }

}

module.exports = BookGenresSeed;