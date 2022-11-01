const express = require('express');
const router = express.Router();


const ApiController = require("../controllers/Controller")

router.get("/test-me", )

 router.get("/testMe1", ApiController.testMe1)
 router.get("/testMe2", ApiController.testMe2)
 router.get("/testMe3", ApiController.testMe3)
 router.get("/testMe4", ApiController.testMe4)
 router.get("/testMe5", ApiController.testMe5)


module.exports = router;