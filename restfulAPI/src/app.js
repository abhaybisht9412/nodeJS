const express = require('express');
const app = express() ; 
const port = process.env.PORT || 8000 ; 
require('./db/conn');
//creating new student

app.post("/students" , (req ,res) => {
     res.send("hello from home") ;
})

app.listen(port ,() => {
    console.log(`listening to PORT NO ${port}`);
})
