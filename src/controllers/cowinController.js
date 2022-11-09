let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// <<<<<<----------------------------------------------------------->>>>>>>>

// Q 1 -> WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date. This is a very basic assignment and totally along the lines of what we covered in the session.
// Solution ->

let getbyDistrictid = async function (req, res) {
    try {
        let disId = req.query.district_id
        let date = req.query.date
        // console.log(`query params are: ${disId} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${disId}&date=${date}`
        }

        let result = await axios(options)
        // console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// <<<<<<----------------------------------------------------------->>>>>>>>


// Q 2 ->Get weather of London from  http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId> 
//then change the above to get the temperature only( of London 


let londonWether = async function (req, res) {
    try {
        let city = req.query.q
        let appCode = req.query.appid

        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appCode}`
        }
        let result = await axios(options)
// Get all weather details of london -        
        // res.status(200).send({ msg: result.data})
        // res.status(200).send({ msg:data })

 // Get only Temprature of London -       
        let temp = result.data.main.temp
        res.status(200).send({ msg:temp })

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ msg: error.message })
    }

}

// <<<<<<----------------------------------------------------------->>>>>>>>


// Q  - Sort the cities     [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]   in order of their increasing temperature Result should look something like this.
// [
//     {city:"London", temp: 280},
//     {city:"Moscow", temp: 290},
//     {city:"Bangalore", temp: 301.2},
//     .......
//     ]

// Solution ->

// let filtercites = async function (req, res) {
//     try {
//         let city = req.query.q
//         let appCode = req.query.appid

//         var options = {
//             method: "get",
//             url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appCode}`
//         }
//         let result = await axios(options)

//  // Get only Temprature of London -       
//         let temp = result.data.main.temp
//         res.status(200).send({ msg:temp })

//     }
//     catch (error) {
//         console.log(error);
//         res.status(500).send({ msg: error.message })
//     }

// }

// <<<<<<----------------------------------------------------------->>>>>>>>

// Q 4- 3. Axios POST request assignment Statement:
// Step1: Get all the memes at Postman (https://api.imgflip.com/get_memes)
// Step 2 : Pick a memeId you want (Eg 129242436) for the POST request (from the result from  above )
// Assignment: Create a Post request API (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below OR incase you find error in using this username password due to too many people trying to access it, then create your own account and plz do share username password on your group so that others can use it too- be kind and helpful):
    
//            template_id <meme_id>
//            text0 <text you want as a caption>
//            text1 <optional>
//            username chewie12345
//            password meme@123

// Return a response with a body like this
            
//            "data": {
//                    "url": "https://i.imgflip.com/5mvxax.jpg",
//                    "page_url": "https://imgflip.com/i/5mvxax"
//                }

// Solution -

let memePost =async function (req, res) {
           //    181913649
    try {
        
        let empId = req.query.template_id
        let txt0 = req.query.text0
        let txt1 = req.query.text1
        let userN= req.query.username
        let pass = req.query.password
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?emplate-id=${empId}&text0=${txt0}&text1=${txt1}&username=${userN}&password=${pass}`
        }
        console.log(options);
        let result = await axios(options);
        let data = (result)
        console.log(data);
    
        res.status(200).send({ msg: data, status: true})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp

module.exports.getbyDistrictid = getbyDistrictid
module.exports.londonWether = londonWether
// module.exports.filtercites = filtercites
module.exports.memePost = memePost




















// const sortbytemp = async (req, res) => {
//     try {
//         const {apikey} = req.query;
//         const cities = ["bengaluru","mumbai", "delhi", "kolkata", "chennai", "london", "moscow"];
//         const temp = [];
//         for (let i = 0; i < cities.length; i++) {
//             const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${apikey}`);
//             temp.push({city: cities[i], temp: response.data.main.temp});

//         }
//         temp.sort((a, b) => a.temp - b.temp);  
//         res.status(200).json(temp);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }

















