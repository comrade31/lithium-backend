const mongoose = require('mongoose');

//// Assignment BookSchema -->

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    authoreName: {
        type: String,
        required: true
    },
    category: {
        String,
        enum: ["science", "english", "math", "hindi", "others"]  
    },
    year: Number

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)  // Books

