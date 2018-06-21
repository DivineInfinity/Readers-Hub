const Book = require('../models/book');

var getBookByName= async function getBookByName(searchQuery){
    var book = await Book.find(
        {
            $or: [
                {title: {$regex: searchQuery, $options: 'i'}},
                {author: {$regex: searchQuery, $options: 'i'}},
                {publisher: {$regex: searchQuery, $options: 'i'}},
            ]
        },
        {
            frontCover: 1,
            title: 1,
            author: 1,
            averageRating: 1
        }
    ).limit(12);
    console.log(book);
    return book;
}

module.exports={
    findBookByName:getBookByName
}