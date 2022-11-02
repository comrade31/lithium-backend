const { count } = require("console")


const testMe1 = async function (req, res) {
   
    res.send("My first ever api!")
}

const testMe2 =  async function (req, res) {
  
    res.send("My Second ever api!")
}


const testMe3 = async function (req, res) {

    res.send("My Third ever api!")
}


const testMe4 = async function (req, res) {
   
    res.send("My fourth ever api!")
}


const testMe5 = async function (req, res) {
   
    res.send("My fifth ever api!")
}



module.exports.testMe1 = testMe1
module.exports.testMe2 = testMe2
module.exports.testMe3 = testMe3
module.exports.testMe4 = testMe4
module.exports.testMe5 = testMe5
