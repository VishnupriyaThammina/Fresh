const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Find user by ID
router.get('/users/:id', userController.findUserById);

// Find user by email
router.get('/users/email/:email', userController.findEmail);

// Update a user by ID
router.put('/users/:id', userController.updateUserById);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUserById);



module.exports = router;
