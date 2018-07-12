const Book = require('../models/book');
const Review = require('../models/review');
var mongoose = require('mongoose');
var findBookById =async function(id){
    var book = await Book.find({_id:id});
    return book;
}

var getUserReview =async function(user){
    var book = await Book.find({_id:user.bookId}, {reviews:1});
    console.log(book);
    var bookReviews = book[0].reviews;
    var reviews = await findReviewById(bookReviews);
    var review;
    for(let i=0;i<reviews.length;i++)
    {
        if(reviews[i].user.userId==user.userId)
        review=reviews[i];
    }
    console.log(review);
    return review;
}
var findReviewById = async function(id){
    var reviews = await Review.find({_id:{ "$in": id }});
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
        fullReviews = await findReviewById(reviews);
        var updateReview=false;
        console.log(review);
        for(let i=0;i<fullReviews.length;i++)
        {
            if(fullReviews[i].user.userId==review.user.userId)
            {   console.log("YES");
                updateReview=true;
                await Review.remove({_id:fullReviews[i]._id});
                reviews[i]=newReview._id;

                break;
            }
        }
        if(!updateReview)reviews.push(newReview._id);

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
    updateReview:updateReview,
    getUserReview:getUserReview
}