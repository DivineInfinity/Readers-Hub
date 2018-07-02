const Book = require('../models/book');
const Review = require('../models/review');
var findBookById =async function(id){
    var book = await Book.find({_id:id});

    return book;
}
var findReviewById = async function(id){
    var reviews = await Review.find({_id:{ "$in": id }});

    return reviews;
}
module.exports={
    findBookById:findBookById,
    findReviewById:findReviewById
}