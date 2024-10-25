const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({// schema takes an object with key value pairs

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
})


//creating model for that schema
//model function takes two arguments- name of the model(which will be the name of the collection in the db) and the schema
module.exports = mongoose.model("User" , userSchema) ;  //by exporting , we can use it in other files