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
    return book;
};

var getBookSuggestions= async function getBookSuggestions(searchQuery){
    var book = await Book.find({ title: {$regex: searchQuery, $options: 'i'}}).limit(5);
    console.log(book);
    var bookTitles = [];
    for(var index in book){
        bookTitles.push(book[index].title);
    }
    console.log(bookTitles);
    return bookTitles;
};

module.exports={
    findBookByName:getBookByName,
    getBookSuggestions:getBookSuggestions
};