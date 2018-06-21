const Book = require('../models/book');

var getBookDetails= async function getBookDetails(x){
    var book = await Book.find({_id:x});
    console.log(book);
    return book;
}

module.exports={
getBookDetails:getBookDetails
}