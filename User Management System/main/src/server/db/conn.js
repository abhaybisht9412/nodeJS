const mongoose = require('mongoose');
const DB = 'mongodb+srv://admin:admin123@cluster0.pscyzdq.mongodb.net/users?retryWrites=true&w=majority';
const connectDB = async () => {
try {
    const con = await mongoose.connect(DB , {
        useNewUrlParser : true ,
        useUnifiedTopology : true 
    })
    console.log(`connection established with DB `);
} catch (error) {
    console.log(error);
    process.exit(1);
}    
}

module.exports = connectDB ;
