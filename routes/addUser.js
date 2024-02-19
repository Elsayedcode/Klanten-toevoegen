const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to render form for adding a user (GET request)
router.get("/add", userController.user_add_get);

// Route to handle user creation (POST request)
router.post("/add", userController.user_post);


module.exports = router;
