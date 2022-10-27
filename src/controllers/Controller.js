
const bookModel= require("../models/AbookModel")
const authorModel= require("../models/authorModel")
// Question 1 ->

const createAuthor  = async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
} 

const createBook = async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    let bookData= await
    res.send({msg: savedData})
}

// Question 2 ->

const findBook = async function (req, res) {
    let data= req.body
    let saveid= await authorModel.find( {author_name:"Chetan Bhagat"} ).select( {author_id:1, _id:0} )
    let savebook= await bookModel.find( {author_id:1} ).select( {book_Name:1, _id:0} )
    res.send({msg:savebook })
} 


// Question 3 ->

const findAuthor = async function (req, res) {
    let data= req.body
 
    let getid= await bookModel.findOneAndUpdate( {book_Name:"Two states"}, { $set:{price:100} } ).select( {author_id:1, _id:0} )
    let getauthorName = await authorModel.find( {author_id:1} ).select( {author_name:1, _id:0} )
    res.send({msg:getauthorName })
} 

// Question 4 ->

const findPrice = async function (req, res) {
    let allbooks= await bookModel.find({ price : { $gte: 50, $lte: 100} })
    let a =[]

    for(i of allbooks){
        let objjj=await authorModel.findOne({author_id:(i.author_id)}).select({author_name:1,_id:0})
        
         a.push(i)
         a.push(objjj)
    }
    
    
    res.send({msg:a})
}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook

module.exports.findBook = findBook

module.exports.findAuthor = findAuthor

module.exports.findPrice =  findPrice




