const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const reviewService = require('../services/reviewService');
const userService = require('../services/userService');


const app = express()
const router = express.Router();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

 var getReviews= async function(req,res,next) {  
 var books = await reviewService.findBookById(req.params.id);
  console.log(books[0]);
  var rating=[0,0,0,0,0,0];
  var reviews = await reviewService.findReviewById(books[0].reviews);
  for(var i=0;i<reviews.length;i++){
  rating[reviews[i].rating]++;
  }
  console.log(rating);
  return res.status(200).json({
    message: "successfully fetched lists",
    book : books[0],
    reviews:reviews,
    ratings:{
      oneStar:rating[1]/reviews.length*100,
      twoStar:rating[2]/reviews.length*100,
      threeStar:rating[3]/reviews.length*100,
      fourStar:rating[4]/reviews.length*100,
      fiveStar:rating[5]/reviews.length*100,
      totalRatings:reviews.length

    }
  })
}
var updateReview =async function(req,res,next){
  var todayDate = new Date().toISOString().slice(0,10);
  var review ={
    rating:req.body.rating,
    review:req.body.review,
    user:req.body.user,
    reviewDate:todayDate,
    bookId:req.body.bookId
  }
  var response = await reviewService.updateReview(review);
  // console.log("logging review data");
  // console.log(review);
  // console.log(res);
  return res.status(200).json({messageEagle:"Successfully updated review"});
}

var getUserReview= async function(req,res,next) {  
  console.log("getUserReview()");
  
  var userReview = await reviewService.getUserReview({userId:req.params.userId, bookId: req.params.bookId})
  console.log(userReview);
  return res.status(200).json({
    messageEagle:"Successfully got the user review",
    userReview:userReview 
  })
}

module.exports = {
  getReviews:getReviews,
  updateReview:updateReview,
  getUserReview:getUserReview
}

