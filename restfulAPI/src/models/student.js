//to define schema and model for students
const mongoose = require('mongoose');
const validator = require('validator');
 
//creating schema
const studentSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : [true ,"name is required"] ,
        minlength : 3 
    } ,
    email : { 
        type : String ,
        lowercase : true ,
        required : [true ,"email is required"] ,
        unique : [true ,"email already present"] ,
        validate (val) {
            if( !validator.isEmail(val) ){
                throw new Error ("Invalid eMail !!")
            }
        }
    } ,
    phone : {
        type : Number ,
        min : 10,
        required : [true ,"phone no. is required"],
        unique : true
    } ,
    address : {
        type : String ,
        required : [true ,"address is required"]
    }
}) //end of schema

//defining model
const StudentModel = new mongoose.model("StudentModel" ,studentSchema);

module.exports = StudentModel;
