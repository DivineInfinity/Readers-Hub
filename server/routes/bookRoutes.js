const express = require('express');
const bookController=require('../controller/bookController');
const router = express.Router();


router.get('/search/:searchQuery', bookController.findBookByName);
router.get('/search-suggestions/:searchQuery',bookController.getBookSuggestions);

module.exports=router;