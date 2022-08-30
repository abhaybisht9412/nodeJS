const mongoose = require('mongoose');
mongoose.connect ("mongodb://localhost:27017/studentsAPI", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}) .then ( () => {
    console.log("connection established...");
}).catch((err) => {
    console.log(" ERR not connected...:( ");
})

