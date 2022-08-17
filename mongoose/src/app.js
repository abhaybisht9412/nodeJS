const mongoose = require('mongoose');

// creating connnnn
mongoose.connect("mongodb://localhost:27017/bisht" , { useNewUrlParser: true } ); 

mongoose.connection
    .once('open', () => console.log("connected..."))
    .on('error' ,(err) =>{
        console.log("Error :(",err);
    });
