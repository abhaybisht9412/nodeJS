const express = require('express');
const router = new express.Router();
const UserCollection = require('../models/usersSchema');

router.get('/home',(req,res) => {
      res.send("hello");
})
// create User  -> adding a user
router.post('/users', (req , res) =>{
    // // const NewUser = new UserCollection({
    //     user: 'Abhay Bisht',
    //     email: 'abhaybisht9412@gmail.com',
    //     phone: 9412156508,
    //     address: 'Dehradun',
    //     _id: new ObjectId("6530a0e59f552da1cf0fbaf8"),
    //     __v: 0
    // // })
    // ye upar wala POSTMAN se ayega body se toh req.body
    const NewUser = new UserCollection(req.body);
    // console.log(NewUser);
    // newUser json form mai aa rha hai

    // now saving into the database
    NewUser.save().then(() => {
        console.log(NewUser);
    }).catch((e) => {
        console.log(e);
    })
})
// creating user using async await
router.post("/users", async (req, res) => {
  try {
    const NewUser = new UserCollection(req.body);
    const user = await NewUser.save();
    res.status(201).send(user);
    console.log(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(e);
  } 
});

// reading user 
router.get('/users',async (req,res) => {
  try {
    const data = await UserCollection.find();
    res.status(201).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
})

// reading user by id
router.get('/users/:user',async(req,res) => {
  try {
    // const _id = req.params;
    // console.log(_id);
    // res.send(_id)
    const uid = req.params.id; 
    // console.log();
    const data = await UserCollection.findById({ _id : uid }); //jiski id uid hai
    console.log(data);
    if(!data){
      return res.status(404).send();
    }else{
      res.send(data);    
    }
  } catch (e) {
    res.status(400).send(e);
  }
})

// update using id
router.patch('/users/:id', async(req, res) => {
    try {
       const uid = req.params.id;
        const data = await UserCollection.findByIdAndUpdate(uid,req.body,{
          new : true
        });//uid wale id ka find karo aur fir req.body mai jo hai usse update karo
       res.send(data);
       console.log(data);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error);
    }
})

// delete using id
router.delete('/users/:id', async(req, res) => {
    try {
        const deletedData = await UserCollection.findByIdAndDelete(req.params.id)
        res.send(deletedData);
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;
