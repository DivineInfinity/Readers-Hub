const mongoose = require('mongoose');

const reviewSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    user:{name:String,profilePic:String},
    review:String,
    reviewTitle:String,
    rating:Date,
    reviewDate:String,
})

module.exports=mongoose.model('Review', reviewSchema);