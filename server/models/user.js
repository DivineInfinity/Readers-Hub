const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    _id:mongoose.Schema.ObjectId,
    name:String,
    email:String,
    password:String,
    profilePic:Date,
    bio:String,
    friends:[mongoose.Schema.ObjectId],
    shelves:[mongoose.Schema.ObjectId],
})

module.exports=mongoose.model('User', userSchema);