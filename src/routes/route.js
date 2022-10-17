const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


// ------------- Problem 1 Movies APi ------------ 

let myArray = ["Kantara","Ramayana","HankyPanky","Nayakan","JaiBhim"]

router.get('/Movies', function (req, res) {
    res.send(myArray)
})

// --------- Problem 2 Index number ---------

router.get('/Movies/:indexNumber',(req,res)=>{
    let index = req.params.indexNumber  
    res.send(myArray[index])
 })

// -------- Problem 3 error --------



router.get('/Movies/:indexNumber', (req,res) => {
    let index = req.params.indexNumber
    if(index>myArray.length){
        res.send("Please use a valid index");
    }
    else{
        res.send(myArray[index])  
    }
})

// ---------Problem4 stead of an array of strings define an array of movie objects this time

let films = [ {
    'id': 1,
    'name': 'The Shining'
   }, {
    'id': 2,
    'name': 'Incendies'
   }, {
    'id': 3,
    'name': 'Rang de Basanti'
   }, {
    'id': 4,
    'name': 'Finding Nemo'
   }]

   router.get('/films', (req, res) => {
    res.send(films)
})

// Problem 5

router.get('/films/:filmid',(req,res)=>{
    let filmid = req.params.filmid
    if (filmid>films.length){
        res.send('No movie exists with this id')
    }
    else{
        res.send(films[filmid-1])
    }
})

module.exports = router;



///// Another Codes of same assignment ==>>

// router.get('/movies', function (req,res){
    
//     const mo=["Midnightmass","Friday 13","NArnia","Harry Potter"]
//     res.send(mo)
// })

// router.get('/movies/:index', function (req,res){
//      let inParams = req.params
//      console.log(inParams)
//      const mo=["Midnightmass","Friday 13","NArnia","Harry Potter"]
//      if(inParams.index>mo.length){
//         res.send("right valid")
//      }
    
    
//     res.send(mo[inParams.index])
// })

// router.get('/films', function (req,res){
    
//     const fi=[ {
//         id: 1,
//         name: "The Shining"
//        },
//         {
//         id: 2,
//         name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]
       
//     res.send(fi)
// })

// router.get('/films/:id', function (req,res){

//     let idParam=req.params
    
//     const fi=[ {
//         id: 1,
//         name: "The Shining"
//        },
//         {
//         id: 2,
//         name: "Incendies"
//        }, {
//         id: 3,
//         name: "Rang de Basanti"
//        }, {
//         id: 4,
//         name: "Finding Nemo"
//        }]

       
//        if(idParam.id>(fi.length+1)||idParam.id==0){
//         res.send("not valid")
        
//     }      
       
       
//        for(i of fi){

       
        
        
//         if(i.id==idParam.id){
//             console.log(i)
//             res.send(i.name)
//         }
//        }
//         // res.send("enter valid")
       


//     //    console.log(idParam)
       
//     // res.send(idParam.name)
// })