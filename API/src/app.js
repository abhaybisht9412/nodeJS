const express = require('express');
require("../src/db/conn") 
const myModel = require("../src/models/people")

const app = express();
const port = 8000;

app.use(express.json())

// app.get("/" , (req  , res) => {
//     res.send("Hello");
// })

// handling post request
app.post("/api-post" , async(req , res) => {
    try {
        const add = new myModel(req.body)
        console.log(req.body);
        const insertPeople = await add.save();
        res.send(insertPeople);
    } catch (error) {
        console.log(error);
    }
})

app.listen(port , () => {
    console.log(`listening to port ${port}`)
})


