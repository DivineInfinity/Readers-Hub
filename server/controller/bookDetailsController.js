const bookDetailsService = require('../services/bookDetailsService');
const Book = require('../models/book');
var mongoose = require('mongoose');
exports.getBookDetails= async function(req,res,next){

        var Details = await bookDetailsService.getBookDetails(req.params.x);
        console.log(Details);    
        res.status(200).json({bookDetails:Details[0],messageEagle:"Book details successfully fetched"}); 
    
}
