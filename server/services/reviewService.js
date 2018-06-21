const Book = require('../models/book');
var getBook =async function(id){
    var book = await Book.find({_id:id});
    console.log(book);
    return book;
}
module.exports={
    getBook:getBook
}