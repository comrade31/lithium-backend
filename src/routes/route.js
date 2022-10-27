const express = require('express');
const router = express.Router();
const UserController =require("../controllers/Controller")

const authorModel = require("../models/authorModel")
const bookModel =  require("../models/AbookModel")


// Assignment 1 ->
router.post("/create-Author",UserController.createAuthor)

router.post("/create-Book", UserController.createBook)

// Assignment 2 ->

router.get("/find-Book",UserController.findBook)

// Assignment 3 ->


router.post("/find-Author",UserController.findAuthor)

// Assignment 4 ->

router.post("/find-Price",UserController.findPrice  )

module.exports = router;

