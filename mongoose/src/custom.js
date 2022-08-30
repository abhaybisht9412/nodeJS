const mongoose = require('mongoose');
const validator = require('validator');
const log = console.log ;

// connection to db
mongoose.connect("mongodb://localhost:27017/show" ,{useNewUrlParser : true ,
useUnifiedTopology : true })
.then( () => log("done !"))
.catch((err) => log(err));

//schema
const showSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true ,
        trim : true 
    } ,
    genre : String ,
    season : { //adding custom validations
        //no negative values
        type : Number ,
        validate(value){ //own validation
            if(value < 0)
            throw new Error('season cannot be negative')
        }
    },
    production : String ,
    active : Boolean ,
    email : {
        type : String ,
        required : true ,
        trim : true,
        unique : true ,
        validate (value){
            if(!validator.isEmail(value)){
                throw new Error ("email invalid")
            }
        }
    } ,
    date : {
         type : Date,
        default : Date.now
    }
})

//model for schema
const RatingModel = new mongoose.model("RatingModel", showSchema) ;

//adding docs
const addShow = async () => {
try{
const firstShow = new RatingModel({ 
    name : "Special Ops" ,
    genre : "Thriller/Action/Mystery" ,
    season : 2 ,
    production : "Hotstar" ,
    email : "hotstar123@gmail.com"  ,//correct email,
    active : true 
 }) 
 const secondModel = new RatingModel({
    name : "Family Man" ,
    genre : "Thriller/Action/Mystery/Drama" ,
    season : 3 ,
    production : "Amazon Prime" ,
    // email : "amazon.prime@go", this one is invalid
    email : "amazonPrime@gmail.com" ,
    //correct 
    active : true 
 })
 const res = await RatingModel.insertMany([firstShow , secondModel]);
 log(res) ;
   } catch(err) {
    log(err);
    }
}


addShow();