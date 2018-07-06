const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

router.post('/login', userController.login);
router.post('/signup', userController.signup);
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/shelves/:userId', userController.getShelves);
=======
router.get('/:id',userController.getUserById)
>>>>>>> 8a79e0b2f6b7124a1e693bcc4adde1cf41628e2a

=======
router.get('/:id',userController.getUserById);
router.post('/shelf',userController.createNewShelf);
>>>>>>> a7577f115baf83e9131a70b8b1d5c47bb2a0f4a5
module.exports = router;