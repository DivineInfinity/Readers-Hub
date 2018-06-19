const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookInfoController=require('../controller/bookInfoController');
const router = express.Router();
const Book= require('../models/book')

router.get('/:x', bookInfoController.insertBookInfo);

module.exports=router;