var User = require('../models/user');
var Shelf = require('../models/shelf');
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

var _this = this;


exports.signup = async function (user) {

    var user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: user.name,
        email: user.email,
        password: user.password,
        profilePic: user.profilePic,
        shelves: [],
        friends: []
    });

    try {
        var newUser = await user.save();
        console.log(newUser);
        return newUser;
    }

    catch (e) {
        throw Error("Error while creating user");
    }
}

exports.login = async function (user) {
    console.log(user);
  
    var user= await User.find({email:user.email,password:user.password});
    if(user[0])
    {
        const token = jwt.sign(
            {
                user_id:user[0]._id,
            },
            "racoon",
            {
                expiresIn:'2h'
            }
        );
        var userInfo=[{
            user:user[0],
            token:token
        }]
        return userInfo;
    }

    else return user;
}

exports.getShelves = async function (userId) {
    console.log("Getting shelves");
    var response = await User.find({_id: userId},{shelves: 1});
    var shelfIds = response[0].shelves;
    var shelves = await Shelf.find({_id: {$in:shelfIds}}, {_id:1,shelfName: 1});
    return shelves;
}

exports.insertIntoShelf = async function(book){
    console.log(book);
    var shelf = await Shelf.findById(book.shelfId, {books:1});
    var id = book.bookId;
    console.log(id);
    var books=shelf.books;
    var isDuplicate=false;
    for(let items of books)
    {
        console.log(items.bookId);
        console.log(id);
        if(items.bookId==id)isDuplicate=true;
    }
    if(!isDuplicate)
    {
        books.push({bookId:id, readingStatus:"Want To Read"});
    }

    var newShelf = Shelf.update({_id:book.shelfId},{books:books});
    return newShelf;   
};

exports.getUserById = async function(id){
    var user = await User.findById(id);
    return user;
};

exports.createNewShelf = async function(shelf) {
    console.log("Creating shelves...");
    var userID = shelf.userID;
    var shelfName = shelf.shelfName;
    var isPrivate = shelf.isPrivate;

    var newShelf = new Shelf({
        _id: new mongoose.Types.ObjectId(),
        shelfName: shelfName,
        isPrivate: isPrivate,
        books: []
    })

        console.log(newShelf);
        var user = await User.find({_id:userID},{shelves:1});
        console.log(user);
        var shelves = user[0].shelves;
        var isDuplicate=false;
        for(let particularShelf of shelves)
        {
            if(particularShelf.shelfName==newShelf.shelfName)isDuplicate=true;
        }
        if(!isDuplicate)
        {
         var createdShelf = await newShelf.save();
         console.log(createdShelf);
         shelves.push(createdShelf._id);
        }
        
        var updatedUser = await User.update({_id:userID}, {$set:{shelves:shelves}});
        return updatedUser;


}




