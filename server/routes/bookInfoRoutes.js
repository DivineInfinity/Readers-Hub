const express = require('express');
const bookInfoController=require('../controller/bookInfoController');
const router = express.Router();

router.get('/:x', bookInfoController.insertBookInfo);

module.exports=router;