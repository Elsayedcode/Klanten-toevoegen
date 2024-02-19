
const express = require('express')
const router = express.Router()
const user = require("../models/customerSchema");
var moment = require('moment');
const userController = require('../controllers/userController');

// GET Requst
  router.get("/", userController.user_index_get);
  
  
  router.get("/edit/:id", userController.user_edit_get);
  
  
  router.get("/view/:id", userController.user_view_get);
  
  router.get("/add", userController.user_add_get);

// Route to handle user creation (POST request)
router.post("/add", userController.user_post);
  // query Requst
  router.post("/search", userController.user_search_post);
  
  // Delete Requst
  router.delete("/edit/:id", userController.user_delete);
  
  // PUT Requst
  router.put("/edit/:id", userController.user_put);

module.exports = router