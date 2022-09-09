const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/userRegistration", {
    useNewUrlParser : true ,
    useUnifiedTopology : true
}) . then ( () => {
    console.log("connection established with database...");
}).catch((err) => {
    console.log("Not secured Connection :(");
}) 


