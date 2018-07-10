const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    name:String,
    email:String,
    password:String,
    profilePic:String,
    bio:String,
    friends:[mongoose.Schema.ObjectId],
    shelves:[mongoose.Schema.ObjectId],
    reviews:[mongoose.Schema.ObjectId]
})

module.exports=mongoose.model('User', userSchema);