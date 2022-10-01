const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    
    name : {
        type : String ,
        required : [true , "mandatory field"],
        trim : true ,
        minLength : 3  
    } ,
    email : {
        type : "String" ,
        required : [true , "mandatory field"],
        unique : true ,
        validate (value){
            if(!validator.isEmail(value)){
                throw new Error ("invalid Email id")
            }
        }
    },
    phone : {
        type : Number,
        required : [true , "mandatory field"],
        unique : true,
        min : 10
    },
    message : {
        type : String,
        required : [true , "mandatory field"],
        unique : true,
    } ,
    date : {
        type : Date ,
        default : Date.now
    }
})

//creating model or collection
const UserModel = mongoose.model("UserModel",userSchema);

module.exports = UserModel;