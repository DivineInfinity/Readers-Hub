const express = require('express');
const bookDetailsController=require('../controller/bookDetailsController');
const router = express.Router();
router.get('/:x', bookDetailsController.getBookDetails);

module.exports=router;