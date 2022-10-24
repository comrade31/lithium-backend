const { models } = require("mongoose")
const UserModel= require("../models/userModel")


const createBook= async function (req, res) {
    let data = req.body
   let saveData= await UserModel.create(data)
    res.send({msz: saveData})
}


const getBook=  async function (req, res) {
    let allbooks = await UserModel.find()
    res.send({msz: allbooks})
}


module.exports.createBook = createBook
module.exports.getBook = getBook
