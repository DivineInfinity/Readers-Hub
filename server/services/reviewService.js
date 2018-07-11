const Book = require('../models/book');
const Review = require('../models/review');
var mongoose = require('mongoose');
var findBookById =async function(id){
    var book = await Book.find({_id:id});
    return book;
}
var findReviewById = async function(id){
    var reviews = await Review.find({_id:{ "$in": id }});
    console.log(reviews);
    return reviews;
}
var updateReview = async function(review){
    var userReview = new Review({
        _id:new mongoose.Types.ObjectId(),
        review:review.review,
        user:review.user,
        rating:review.rating,
        reviewDate:review.reviewDate

    })
    try {
        var newReview = await userReview.save();
        console.log(newReview);
        var book = await Book.find({_id:review.bookId});
        var reviews = book[0].reviews;
        reviews.push(newReview._id);
        var bookResponse = await Book.update(
            {_id:review.bookId},
            {$set:{reviews:reviews}}
        )
        console.log(bookResponse);
        return newReview;
    }

    catch (e) {
        throw Error(e);
    }

}
module.exports={
    findBookById:findBookById,
    findReviewById:findReviewById,
    updateReview:updateReview
}