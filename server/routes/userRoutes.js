const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
router.get('/:id',userController.getUserById);
router.post('/shelf',userController.createNewShelf);
module.exports = router;