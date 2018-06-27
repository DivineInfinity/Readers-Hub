const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookDetailsController=require('../controller/bookDetailsController');
const router = express.Router();
const Book= require('../models/book')

router.get('/:x', bookDetailsController.getBookDetails);

module.exports=router;