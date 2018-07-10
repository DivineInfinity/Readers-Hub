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
  var user = await userService.getUserById(reviews[i].user);
  rating[reviews[i].rating]++;
  reviews[i].user =user;
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
module.exports = {
  getReviews:getReviews
}
