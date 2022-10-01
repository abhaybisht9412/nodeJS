const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./conn.js');

const app = express();
const port = 8000 || process.env.PORT;
const path = require('path');

const pathForPublic = path.join(__dirname ,"../public");
app.use(bodyParser.urlencoded ({
    extended : true
}))

app.post("/sign-up", (req , res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var pass = req.body.password;
    
    var data = {
        "name" : name ,
        "email" : email,
        "phone" : phone,
        "password" : pass
    }
})   

app.use(bodyParser.json())
app.use(express.static('pathForPublic'))

app.get("/" , (req , res) => {
    res.send("hello from main");
})

app.listen(port , () => {
    console.log(`listening to port ${port}`);
})