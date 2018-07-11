const mongoose = require('mongoose');

const shelfSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    shelfName:String,
    isPrivate:Boolean,
    books:[{bookId:String, bookTitle:String, frontCover:String, readingStatus:String}]
});

module.exports=mongoose.model('Shelf', shelfSchema);