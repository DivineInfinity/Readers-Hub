const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/shelves/:userId', userController.getShelves);

module.exports = router;