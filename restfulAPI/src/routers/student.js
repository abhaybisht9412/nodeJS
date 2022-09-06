const express = require("express");
const StudentModel = require("../models/student")
const router = new express.Router();

//need to define a router
router.get("/bisht" , (req , res) => {
    res.send("Hello");
 });

 router.post("/students" ,async(req , res) => {
   
    try{
       const newStudent = new StudentModel(req.body);
       const createUser = await newStudent.save();
       res.status(201).send(newStudent);
    }catch(err){
       res.status(400).send(err);
    }
 })

 // READ OR GET students
router.get("/students" , async(req ,res) => {
    try {
     const studentsData = await StudentModel.find();
     res.send(studentsData);
    } catch (error) {
       res.send(error);
    }
 })
 //updating students by id630effab176692abb35a1060
router.patch("/students/:id" , async (req , res) => {
    try {
       const _id = req.params.id;
       const updateStudent = await StudentModel.findByIdAndUpdate(_id,req.body);
       res.send(updateStudent) ;
    } catch (error) {
       res.status(400).send(updateStudent);
    }
 })
 
 
 module.exports = router ;
