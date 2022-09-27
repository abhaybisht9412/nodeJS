const express = require('express');
const route = express.Router();
const controller = require('../controller/control')
const axios = require('axios');


route.get("/", (req , res) => {
    // res.send("Main route");
    //make a get req to /api/users
    axios.get('http://localhost:8000/api/users')
    .then(function(response){
        // console.log(response.data);
        res.render("index",{users : response.data}); 
    }).catch(err => {
        res.send(err);
    })
})
route.get("/add-user", (req , res) => {
    // res.send("add user");
    res.render("add_user");
})
route.get("/update-user" , (req , res) => {
    // res.send("update user");
    
    axios.get('http://localhost:8000/api/users',{params : {id : req.query.id}})
    .then(function(userData){
        res.render("update_user" , {user : userData.data})
    })
    .catch(err => {
        res.send(err);
    })
})

//API
route.post('/api/users' , controller.create)
route.get('/api/users' , controller.find)
route.put('/api/users/:id' , controller.update)
route.delete('/api/users/:id' , controller.delete)

module.exports = route;