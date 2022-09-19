const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({path:'config.env'})
const port = 8000 || process.env.PORT;

const pathForViews = path.join(__dirname , "../templates/views");
const pathForPartials = path.join(__dirname , "../templates/partials");

//log req using morgan
app.use(morgan('tiny'));

//parse req to body parser
app.use(bodyparser.urlencoded({extended:true}));

//set view engine
app.set("view engine","hbs");
app.set("views",pathForViews);
hbs.registerPartials(pathForPartials);

// console.log(__dirname);  

//load public
app.use('/css',express.static(path.resolve(__dirname,"public/css"))) ;
app.use('/img',express.static(path.resolve(__dirname,"public/img"))) ;
app.use('/js',express.static(path.resolve(__dirname,"public/js"))) ;

app.get("/", (req , res) => {
    // res.send("Main route");
    res.render("index");
})
app.get("/add-user", (req , res) => {
    // res.send("add user");
    res.render("add_user");
})
app.get("/update-user" , (req , res) => {
    // res.send("update user");
    res.render("update_user");
})

app.listen(port , () => {
    console.log(`listening to port NO. ${port}`);
})