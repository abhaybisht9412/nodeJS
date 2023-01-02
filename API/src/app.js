const express = require('express');
require("../src/db/conn") 
const myModel = require("../src/models/people")

const app = express();
const port = 8000;

app.use(express.json());

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
//get 
app.get("/api-get/:ranking" , async(req , res) => {
    try {
        const _id = req.params.ranking;
        console.log(_id);
        const data = await myModel.findById(_id);
        if(!data){
            return res.status(404).send();
        }else{
            res.send(data);
        }
    } catch (error) {
        res.status(404).send(error);
    }
})

app.listen(port , () => {
    console.log(`listening to port ${port}`)
})


