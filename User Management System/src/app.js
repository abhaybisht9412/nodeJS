const express = require('express');
const hbs = require('hbs');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/db/conn')

const app = express();

dotenv.config({path:path.resolve(__dirname, '../src/config.env')});
const port = 8000 || process.env.PORT;

const pathForViews = path.join(__dirname , "../templates/views");
const pathForPartials = path.join(__dirname , "../templates/partials");

//log req using morgan
app.use(morgan('tiny'));

//mongoBD connection
connectDB();

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

//load routers
app.use('/',require('../src/server/routes/router'))

app.listen(port , () => {
    console.log(`listening to port NO. ${port}`);
})