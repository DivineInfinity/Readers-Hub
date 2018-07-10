const Book = require('../models/book');

var getBookByName= async function getBookByName(searchQuery){
    var searchRegex = new RegExp('\\b'+searchQuery);
    var book = await Book.find(
        {
            $or: [
                {title: {$regex: searchRegex, $options: 'i'}},
                {author: {$regex: searchRegex, $options: 'i'}},
                {publisher: {$regex: searchRegex, $options: 'i'}},
            ]
        },
        {
            frontCover: 1,
            title: 1,
            author: 1,
            averageRating: 1,
            publisher: 1,
            genre: 1,
            publishedDate: 1
        }
    ).limit(30);
    return book;
};

var getBookSuggestions= async function getBookSuggestions(searchQuery){
    var searchRegex = new RegExp('\\b'+searchQuery);
    var titles = await Book.find({title: {$regex:searchRegex , $options: 'i'}},{title: 1,}).limit(5);
    var searchSuggestions=[];
    for(index in titles)
    {
        searchSuggestions.push(titles[index].title);
    }
    return searchSuggestions;
}

module.exports={
    findBookByName:getBookByName,
    getBookSuggestions:getBookSuggestions
}
