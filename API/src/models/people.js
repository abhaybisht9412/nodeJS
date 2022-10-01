const express = require('express');
const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    ranking : {
        type : Number ,
        required : [true , "mandatory field"],
        unique : true
    } ,
    name : {
        type : String ,
        required : [true , "mandatory field"],
        trim : true
    } ,
    email : {
        type : "String" ,
        required : [true , "mandatory field"],
        unique : true
    },
    phone : {
        type : "String",
        required : [true , "mandatory field"],
        unique : true
    }
})

const myModel = mongoose.model("myModel",mySchema)

module.exports = myModel;