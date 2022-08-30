//to define schema and model for students
const mongoose = require('mongoose');
const validator = require('validator');
 
//creating schema
const studentSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
        minlegth : 3 ,
        trim : true
    } ,
    email : {
        type : String ,
        required : true ,
        unique : [true ,"email already present"] ,
        validate (val) {
            if( !validator.isEmail(val) ){
                throw new Error ("Invalid eMail !!")
            }
        }
    } ,
    phone : {
        type : Number ,
        min : 10 ,
        max : 10 ,
        required : true,
        unique : true
    } ,
    address : {
        type : String ,
        required : true
    }
}) //end of schema

//defining model
const StudentModel = new mongoose.Model("StudentModel" ,studentSchema);
module.exports = StudentModel;