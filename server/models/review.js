const mongoose = require('mongoose');

const reviewSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    user:{name:String,profilePic:String},
    bookId:mongoose.Schema.ObjectId,
    review:String,
    reviewTitle:String,
    rating:Number,
    reviewDate:Date,
})

module.exports=mongoose.model('Review', reviewSchema);