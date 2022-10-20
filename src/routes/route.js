const express = require('express');
const router = express.Router();

// Problem 1 Pritesh sir-

// let myArray1 = [1,2,3,5,6,7]
// let n = 7
// let mySum1 = n*(n+1)/2; // 28
// let mysum2 = 0;
// for(i=0; i<myArray1.length; i++) {
//     mysum2 = mysum2+myArray1[i]; // 24
// }
// router.get('/Find', function(req, res){
//     res.send(console.log(mySum1-mysum2));
// })

// Problem 2 Pritesh sir-

// let myArray3 = [33,34,35,37,38] // 36 is missing
// let n = myArray3.length+1; // 6
// let ToatlSum = (myArray3[0]+myArray3[myArray3.length-1])*n/2 // 213
// let ToatlSum2 = 0;
// for(i=0; i<myArray3.length; i++) {
//     ToatlSum2 = ToatlSum2+myArray3[i]; // 177
// }
// router.get('/Find2', function(req, res){
//     res.send(console.log(ToatlSum-ToatlSum2));
// })



// Problem 3 - Player Assignment =>


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

   router.post("/players1",function (req, res) {
    let players2 = req.body.element
     for (i of players) {
         if (i.name === players2.name) {
             return res.send({msg:"name already exists"})
             
         }
     }
 
     players.push(players2)
     console.log(players2)
     res.send({ msg: players, status: true })
 
 })


 
//    router.post('/newPlayers', function(req,res) {
//     let newp= req.body
//     players.push(newp)
//     res.send(players)
//    })



module.exports = router;

