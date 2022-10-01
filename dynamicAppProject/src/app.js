const express = require('express');
const app = express();
const hbs = require('hbs');
const mongoose = require('mongoose');
const path = require('path');
const { registerPartials } = require("hbs");

require('./db/conn');
const UserModel = require("./models/userMessage")

const port = 8000 || process.env.PORT;

//setting path
const pathForPublic = path.join(__dirname , "../public"); 
const pathForViews = path.join(__dirname , "../templates/views");
const pathForPartials = path.join(__dirname , "../templates/partials");

//middlewares
app.use('/css', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.urlencoded({
    extended : false
}))
app.use(express.static(pathForPublic));
app.set("view engine" , "hbs");
app.set("views" , pathForViews);
hbs.registerPartials(pathForPartials);

//routing
app.get("/" , (req , res) => {
    res.render("index");
})
app.get("/contact" ,(req , res) => {
    res.render("contact");
})
app.post("/contact" , async(req,res) => {
    try {
        // res.send(req.body);
        const userData = new UserModel(req.body);
         await userData.save();
         res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})

//server
app.listen(port , () => {
    console.log(`listening to port no. ${port}`);
})