const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type : String,
        required : true //forcing data to have a title because it is flexible 
    },
    price:{
        typr : Number,
        required: true
    },
    description:{
        type: String,
        required : true
    },
    image:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', productSchema);