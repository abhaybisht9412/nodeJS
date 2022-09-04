const express = require('express');

const app = express() ; 
const port = process.env.PORT || 8000 ; 

require('./db/conn'); 

//This part is for POST
app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

//creating new student using MODEL
const StudentModel = require ('./models/student.js');

//this is the promise method
// app.post("/students" , (req ,res) => {

//     //  const newStudent = new StudentModel(req.body);
//      const newStudent = new StudentModel({
//         name: req.body.name,
//         email: req.body.email,
//         phone : req.body.phone,
//         address : req.body.address
//      });
//     //  console.log(newStudent);
//     //  res.send("hello from home") ;
//      newStudent.save().then(() =>{   //promise method  < async await
//         res.status(201).send(newStudent);
//      }).catch((err) =>{
//         res.status(400).send(err);
//      })
// })  end of promise method

//using async await of advanced js
app.post("/students" ,async(req , res) => {
   
   try{
      const newStudent = new StudentModel(req.body);
      const createUser = await newStudent.save();
      res.status(201).send(newStudent);
   }catch(err){
      res.status(400).send(err);
   }
})

 //end of POST

// READ OR GET students
app.get("/students" , async(req ,res) => {
   try {
    const studentsData = await StudentModel.find();
    res.send(studentsData);
   } catch (error) {
      res.send(error);
   }
})

//get data of a specific student by id
// app.get("/students/:id" , async (req ,res) => {
//    try {
//       const _id = req.params.id; //getting value of id
//       const studentData = await StudentModel.findById(_id);
//       if(!studentData){
//           return res.status(404).send();
//       }else{
//          res.send(studentData);
//       }
//    } catch (error) {
//       res.status(404).send(err);
//    }
// })

//find student by name

// app.get("/students/:name" , async (req , res) => {
//    try {
//       const getName = req.params.name;
//       console.log(getName);
//       const studentData = await StudentModel.findById(getName);
//       // console.log(studentData);
//       if(!studentData) {
//          res.status(404).send();
//       } else {
//          res.status(404).send(studentData);
//       }
//    } catch (error) {
//       res.status(501).send(error);
//    }
// })

//updating students by id630effab176692abb35a1060
app.patch("/students/:id" , async (req , res) => {
   try {
      const _id = req.params.id;
      const updateStudent = await StudentModel.findByIdAndUpdate(_id,req.body);
      res.send(updateStudent) ;
   } catch (error) {
      res.status(400).send(updateStudent);
   }
})

app.listen(port ,() => {
   console.log(`listening to PORT NO ${port}`);
})
