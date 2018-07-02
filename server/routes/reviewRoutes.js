const express = require('express');
const reviewController = require('../controller/reviewController');
const router = express.Router();


router.get('/:id',  reviewController.getReviews);

module.exports = router;