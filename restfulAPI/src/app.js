const express = require('express');
const studentRoute = require("./routers/student")

const router = express() ; 
const port = process.env.PORT || 8000 ; 

require('./db/conn'); 

//register the router
router.use(studentRoute);
//This part is for POST
router.use(
    express.urlencoded({ extended: true })
);
    
router.use(express.json());

//creating new student using MODEL
const StudentModel = require ('./models/student.js');

//this is the promise method
// router.post("/students" , (req ,res) => {

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

//creating a new router which is in routers folder



//using async await of advanced js


 //end of POST



//get data of a specific student by id
// router.get("/students/:id" , async (req ,res) => {
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

// router.get("/students/:name" , async (req , res) => {
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
router.patch("/students/:id" , async (req , res) => {
   try {
      const _id = req.params.id;
      const updateStudent = await StudentModel.findByIdAndUpdate(_id,req.body);
      res.send(updateStudent) ;
   } catch (error) {
      res.status(400).send(updateStudent);
   }
})

router.listen(port ,() => {
   console.log(`listening to PORT NO ${port}`);
})
