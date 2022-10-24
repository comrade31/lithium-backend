const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")


/// Books Assignment -->


// Create Book api -

router.post("/create-bookdata", UserController.createBook)

// Get Book api -

router.get("/create-bookdata", UserController.getBook)


module.exports = router;