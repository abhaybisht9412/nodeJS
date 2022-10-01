const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/placementAPI" , {
    useUnifiedTopology : true,
    useNewUrlParser : true
}) .then( () => {
    console.log("connected to db success");
}).catch(() => {
    console.log(err);
})