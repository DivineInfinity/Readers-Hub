const express = require('express');
const bookController=require('../controller/bookController');
const router = express.Router();


router.get('/search/:searchQuery', bookController.findBookByName);

module.exports=router;