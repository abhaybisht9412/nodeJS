const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect("mongodb://127.0.0.1:27017/playlistDB")
.then(() => console.log("connection success..."))
.catch((err) => console.log(err));

// schema 
const playListSchema = new mongoose.Schema({
    name : {
        type : String ,
        ctype : String ,
        trim : true,
        minlength : [2 , "minimum 2 letter for a name"]
    },
    email : {
        type : String ,
        required : true,
        unique : true,
        // validator se validation
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error ("Email is invalid! Try Again...")
            }
        }
    } ,
    ctype : {
        type : String ,
        required : true ,
        enum : ["Front End" , "Full Stack" , "Database", "Back End"]
    },
    videos : {
        type : Number ,
        // custom validation
        validate(val) {//val wo value hai jo user daalega
            if(val < 0){
                throw new Error ("Count cannot be negative")
            }
        }
    },
    author : String , 
    active : Boolean ,
    date : {
        type : Date,
        default : Date.now 
    }
});

// creating a model for inserting collections
const playListCollection = new mongoose.model("Collection1" , playListSchema);

// inseting docs inside colleciton1 
const createPlaylist = async () => {
    try {
        const playlist1 = new playListCollection({
            name : "React JS",
            email : "abc@gmail.com",
            ctype : "Front End",
            videos : 90 ,
            author : "Thapa" , 
            active : true 
        })
        const playlist2 = new playListCollection({
            name : "Node JS",
            email : "abcd@gmail.com",
            ctype : "Back End",
            videos : 80 ,
            author : "Thapa" , 
            active : true 
        })
        const playlist3 = new playListCollection({
            name : "Mongo DB",
            // email : "abc@abc.in",this gives error
            email : "dawkljfii@gmail.com",
            ctype : "Database",
            videos : 25 ,
            author : "Thapa" , 
            active : true 
        })  
        const playlist4 = new playListCollection({
            name : "My SQL",
            email : "abce@gmail.com",
            ctype : "Database",
            videos : 33 ,
            author : "Thapa" , 
            active : true 
        })
        const playlist5 = new playListCollection({
            name : "Next.JS",
            email : "abcfee@gmail.com",
            ctype : "Full Stack",
            videos : 20 ,
            author : "Thapa" , 
            active : true 
        })
        const playlist6 = new playListCollection({
            name : "JavaScript",
            email : "abcdaw@gmail.com",
            ctype : "Full Stack",
            videos : 110 ,
            author : "Thapa" , 
            active : true 
        })
        const result = await playListCollection.insertMany([playlist1,playlist2,playlist3,playlist4,playlist5,playlist6]);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

createPlaylist();