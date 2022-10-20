const express = require('express');
const router = express.Router();



let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 
 
//  Solution =>

router.post('/raja', function(req,res) {

    const votingAge = req.query.votingAge // We are accessing the data (voting value via query param)
   console.log(votingAge);
    const elegiblePerson = []
    persons.forEach((x) => {
       if(x.age > votingAge) {
       x.votingStatus = true
       elegiblePerson.push(x)
       }
    })
    return res.send ({elegiblePerson: elegiblePerson})
})



module.exports = router;