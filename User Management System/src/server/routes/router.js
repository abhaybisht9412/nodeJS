const express = require('express');
const route = express.Router();
const controller = require('../controller/control')

route.get("/", (req , res) => {
    // res.send("Main route");
    res.render("index",{users : "New Data"});
})
route.get("/add-user", (req , res) => {
    // res.send("add user");
    res.render("add_user");
})
route.get("/update-user" , (req , res) => {
    // res.send("update user");
    res.render("update_user");
})

//API
route.post('/api/users' , controller.create)
route.get('/api/users' , controller.find)
route.put('/api/users/:id' , controller.update)
route.delete('/api/users/:id' , controller.delete)

module.exports = route;