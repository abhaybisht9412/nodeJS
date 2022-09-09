const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/project" ,{
    useNewUrlParser : true,
    useUnifiedTopology : true 
}).then(() => {
    console.log("connection established with db!...");
}).catch((err) => {
    console.log(err);
})