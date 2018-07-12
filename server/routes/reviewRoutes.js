const express = require('express');
const reviewController = require('../controller/reviewController');
const router = express.Router();


router.get('/:id',  reviewController.getReviews);
router.post('/',reviewController.updateReview);
router.get('/user/:userId/:bookId',  reviewController.getUserReview);

module.exports = router;