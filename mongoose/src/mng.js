const mongoose = require ('mongoose');
const log = console.log
mongoose.connect("mongodb://localhost:27017/demo" , {useNewUrlParser : true , useUnifiedTopology : true})
.then( () => console.log("connection success...")) 
.catch( (err) => console.log(err)) ;

const demoSchema = new mongoose . Schema({
    name : {
        //validations
        type : String ,
        required : true,
        unique : true ,
        lowercase : true ,
        trim : true ,// trims useless gaps but avoids trimming gaps bw words  
        minlength : [2,"min length 2 hai"],
        maxlength : 30
    } ,
    ftype : {
        type : String ,
        //enum restrict krega ki jo value hai wo sirf aaray values se match krni chaiye uske alawa kopi aur string nahi ayegi ...here fruit can only be 3 types
        enum : ["gomu-gomu" , "mizu-mizu","wari-wari"] 
    },
    strength : Number,
    author : String, 
    active : Boolean ,
    date : {
        type : Date,
        default : Date.now 
    }
})

const DemoModel = new mongoose . model ("DemoModel" , demoSchema) ;

const addDoc = async () => {
    try{
        const demoOne = new DemoModel({
            name : "     luffyyyyy     " ,
            ftype : "gomu-gomu",
            strength : 96 ,
            author : "ichiro oda" ,
            active : true ,
        })

        const res = await DemoModel . insertMany([demoOne]);
        
        log(res) ;

    }catch(err){
        log(err);
    }
}
addDoc();