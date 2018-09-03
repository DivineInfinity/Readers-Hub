const Book = require('../models/book');
const nodeFetch = require('node-fetch');

var getBookByName= async function getBookByName(searchQuery){
    var searchRegex = new RegExp('\\b'+searchQuery);
    console.log("Searching...");
    var book = await Book.find(
        {
            $or: [
                {title: {$regex: searchQuery, $options: 'i'}},
                {author: {$regex: searchQuery, $options: 'i'}},
                {publisher: {$regex: searchQuery, $options: 'i'}},
                {genre: {$regex: searchQuery, $options: 'i'}},
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
    );
    if(book.length)return book;
    else
    {
        var result= await nodeFetch(`http://localhost:8081/book-info/${searchQuery}`);
        var newBook = await Book.find(
            {
                $or: [
                    {title: {$regex: searchQuery, $options: 'i'}},
                    {author: {$regex: searchQuery, $options: 'i'}},
                    {publisher: {$regex: searchQuery, $options: 'i'}},
                    {genre: {$regex: searchQuery, $options: 'i'}},
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
        );
        console.log("API call");
        console.log(result);
        return newBook;
    }
    
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

var getListByGenre= async function getListByGenre(){
    var genreList = await Book.find({},{genre: 1});
    console.log(genreList);
    return genreList; 
}

module.exports={
    findBookByName:getBookByName,
    getBookSuggestions:getBookSuggestions,
    getListByGenre:getListByGenre
}
