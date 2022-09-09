const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 8000 || process.env.PORT ;

require('./db/conn');

// console.log(__dirname);

const pathForPublic = path.join(__dirname , "../public"); 
const pathForViews = path.join(__dirname , "../templates/views");
const pathForPartials = path.join(__dirname , "../templates/partials");

app.use(express.static(pathForPublic));

app.set("view engine" , "hbs");
app.set("views" , pathForViews);
hbs.registerPartials(pathForPartials);

app.get("/" , (req , res) => {
    res.render("index.hbs");
})

app.listen(port , () => {
    console.log(`listening to port no. ${port} `);
})
