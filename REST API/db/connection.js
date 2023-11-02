const mongoose = require('mongoose');

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://127.0.0.1:27017/userDB')
.then(() => console.log("connection to db done..."))
.catch((err) => console.log(err)); 

 