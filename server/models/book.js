const mongoose = require('mongoose');

const bookSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    title:String,
    author:String,
    publisher:String,
    publishedDate:Date,
    frontCover:String,
    description:String,
    genre:[],
    averageRating:Number,
    pageCount:Number,
    languages:[],
    isbn:{type:String,unique:true},
    buyLinks:[String],
    isTrending:Boolean,
    isNewlyReleased:Boolean,
    reviews:[mongoose.Schema.ObjectId]
})

module.exports=mongoose.model('Book', bookSchema);