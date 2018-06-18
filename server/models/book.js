const mongoose = require('mongoose');

const bookSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    title:String,
    author:String,
    publisher:String,
    publishedDate:Date,
    frontCover:String,
    description:String,
    genere:String,
    averageRating:Number,
    pageCount:Number,
    languages:[],
    isbn:String,
    buyLinks:[String],
    isTrending:Boolean,
    isNewlyReleased:Boolean,
    Reviews:[mongoose.Schema.ObjectId]
})

module.exports=mongoose.model('Book', bookSchema);