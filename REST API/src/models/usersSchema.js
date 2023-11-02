const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    user : {
        type : String ,
        required : true,
        minlength : [2, "name cannot be less than 2 characters..."]
    },
    email : {
        type : String ,
        required : true ,
        unique : [true , "this email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('INVALID EMAIL!...')
            }
        }
    },
    phone : {
        type : Number ,
        required : true ,
        unique : [true , "This number already exists , Use another phone number... "],
        min : [10, "Inavlid phone"]
        } ,
    address : {
        type : String ,
        required : true ,
    }
})

// creating new collection using model
const UserCollection = new mongoose.model('UserCollection', userSchema);

module.exports = UserCollection;