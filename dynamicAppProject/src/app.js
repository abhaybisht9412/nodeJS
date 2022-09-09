const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

require('./db/conn');

const port = 8000 || process.env.PORT;

//setting path

//middlewares
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.set("view engine", "hbs");

//routing
app.get("/" , (req , res) => {
    res.render("index");
})
app.get("/contact" ,(req , res) => {
    res.render("contact");
})
//server
app.listen(port , () => {
    console.log(`listening to port no. ${port}`);
})