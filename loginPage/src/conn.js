const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/login", {
    useUnifiedTopology : true,
    useNewUrlParser : true
}) .then(() => {
    console.log("connection to db success");
}) .catch( (err) => {
    console.log(err);
})


