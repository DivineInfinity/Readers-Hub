const mongoose = require('mongoose');

const shelfSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    shelfName:String,
    isPrivate:boolean,
    books:[mongoose.Schema.ObjectId]
})

module.exports=mongoose.model('Shelf', shelfSchema);