const bookService = require('../services/bookService');
const Book = require('../models/book');
var mongoose = require('mongoose');
exports.findBookByName= async function(req,res,next){ 
    var response = await bookService.findBookByName(req.params.searchQuery);

    console.log(response);
    res.status(200).json({messageEagle:"Successfully searched for book",books:response});
}

exports.getBookSuggestions= async function(req,res,next){ 
    var response = await bookService.getBookSuggestions(req.params.searchQuery);

    console.log(response);
    res.status(200).json({messageEagle:"Successfully searched for book",searchSuggestions:response});
}