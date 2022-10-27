
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    book_Name: {
        type: String,
        require:true,
        unique:true
    },
    author_id : {
        type: Number,
        require:true
    },
    price:Number,
    ratings: Number
},  {timestamps: true } );

    module.exports = mongoose.model('Abook', bookSchema) //abooks