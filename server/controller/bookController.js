const bookService = require('../services/bookService');
const Book = require('../models/book');
exports.findBookByName= async function(req,res,next){
    var response = await bookService.findBookByName(req.params.searchQuery);

    console.log(response);
    res.status(200).json({messageEagle:"Successfully searched for book",books:response});
}

exports.getBookSuggestions = async function(req,res,next){
    console.log(req.params.searchQuery);
    var response = await bookService.getBookSuggestions(req.params.searchQuery);

    console.log(response);
    res.status(200).json({messageEagle:"Successfully searched for suggestions",searchSuggestions:response});
}
