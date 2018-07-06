const userService = require('../services/userService');
const User = require('../models/user');
var mongoose = require('mongoose');

exports.login= async function(req,res,next){
    var user = {
        email:req.body.email,
        password:req.body.password
    }

    var userLogin = await userService.login(user);

    console.log(userLogin);
    if(userLogin.length>0)
    {
        res.status(200).json({
            messageEagle:"Successfully logged in",
            userData:userLogin,
        });
    }
    else
    {
        res.status(200).json({
            message:"user not found",
            user:userLogin
        })
    }
    
}

exports.signup= async function(req,res,next){
    var user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }

    var newUser = await userService.signup(user);

    console.log(newUser);
    if(newUser)
    {
        res.status(200).json({
            messageEagle:"Successfully signed up",
            user:newUser,
        });
    }
    else
    {
        res.status(404).json({
            message:"Something went wrong",
            user:newUser
        });
    }
    
}

exports.getShelves= async function(req,res,next){
    console.log("i m in userController");
    var id = req.params.userId;
    var shelves = await userService.getShelves(id);

    console.log(shelves);
    if(shelves.length>0)
    {
        res.status(200).json({
            messageEagle:"Successfully signed up",
            shelves: shelves,
        });
    }
    else
    {
        res.status(200).json({
            message:"Something went wrong",
            shelves: shelves
        });
    }
    
}
