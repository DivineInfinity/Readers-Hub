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

 getReviews= async function() {  
 var reviews = await reviewService.getReviews();

  return res.status(200).json({
    message: "successfully fetched lists",
    reviews : reviews
  })
}
module.exports = router;
//connect db
//create server file and import
