const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8000 || process.env.PORT ;

app.get("/" , (req , res) => {
    res.send("Hello");
})

app.listen(port , () => {
    console.log(`listening to port no. ${port} `);
})
