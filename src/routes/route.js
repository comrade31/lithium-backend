const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)


// Assignment -> 
router.get("/cowin/getByDistrictid", CowinController.getbyDistrictid)

router.get("/londerWether", CowinController.londonWether)

router.get("/allcitiesWether", CowinController.filtercites)

router.post("/post-meme", CowinController.memePost)






module.exports = router;

// 53a3359b52714fad433f36e8b156ae1a || 75b5429392bd2f875f0caaf97114190c - atulsinghparihar
// parihar