const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const router = require('./router/student');

// importing db file for connection
require("../db/connection");

// importing our model and schema
const UserCollection = require("./models/usersSchema");

// to recognize each incoming file as json
app.use(express.json());


// USING ROUTERS FOR NEAT
// const router = new express.Router();

// REGISTERING ROUTER IN EXPRESS
app.use(router);

// // routing using router
// router.get('/home',(req,res) => {
//   res.send("hello");
// })



app.listen(port, () => {
  console.log(`port is ${port}`);
});
