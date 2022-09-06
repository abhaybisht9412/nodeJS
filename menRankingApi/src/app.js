const express = require('express');
require('./db/conn') ; 
const app = express();
const port = process.env.PORT || 8000;

app.get("/", async (req,res) => {
    res.send("hello");
})

app.listen(port , () => {
    console.log(`connection established at port ${port}`);
});