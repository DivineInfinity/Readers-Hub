const mongoose = require('mongoose');

const shelfSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    shelfName:String,
    isPrivate:Boolean,
    books:[{bookID:mongoose.Schema.ObjectId,readingStatus:String}]
});

module.exports=mongoose.model('Shelf', shelfSchema);