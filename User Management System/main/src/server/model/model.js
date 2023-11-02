const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true ,"name is required"]
    },
    email : {
        type : String ,
        required : [true,"email is required"] ,
        unique : [true,'email already present']
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb' , schema);

module.exports = Userdb;