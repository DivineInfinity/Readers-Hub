const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose');
const reviewService = require('../services/reviewService');


const app = express()
const router = express.Router();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

 var getReviews= async function(req,res,next) {  
 var books = await reviewService.getBook(req.params.id);
  console.log(books[0]);
  return res.status(200).json({
    message: "successfully fetched lists",
    book : books[0],
    reviews:"",
    ratings:""
  })
}
module.exports = {
  getReviews:getReviews
}
