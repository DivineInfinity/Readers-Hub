const mongoose = require('mongoose');

const reviewSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    user:{userId:String,name:String,profilePic:String},
    review:String,
    reviewTitle:String,
    rating:Number,
    reviewDate:Date,
})

module.exports=mongoose.model('Review', reviewSchema);