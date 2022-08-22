const mongoose = require('mongoose');

mongoose.connect ("mongodb://localhost:27017/bisht" , {useNewUrlParser : true , 
useUnifiedTopology : true})
.then( () => console.log("connection established..."))
.catch( (err) => console.log(err)) ;


// creating schema for playlist
const playlistSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    ctype : String ,
    videos : Number,
    author : String, 
    active : Boolean ,
    date : {
        type : Date,
        default : Date.now 
    }
})

//models or collection for playlist
const Playlist  = new mongoose.model("Playlist",playlistSchema);

//document


const createDoc = async () => {
    try{
        const ReactPlaylist = new Playlist({
            name : "React JS" ,
            ctype : "Back End" ,
            videos : 50 ,
            author : "bisth" ,
            active : true
        })
        const JavaScriptPlaylist = new Playlist({
            name :  " JS " ,
            ctype : "Back End + Front End" ,
            videos : 150 ,
            author : "bisth" ,
            active : true
        })
        const  mongoDBplaylist = new Playlist({
            name : "mongoDB" ,
            ctype : "Database" ,
            videos : 501 ,
            author : "bisth" ,
            active : true
        })
        const mongoosePlaylist = new Playlist({
            name : "mongoose JS" ,
            ctype : "Back End" ,
            videos : 10 ,
            author : "bisth" ,
            active : true
        })
        
        const result = await Playlist.insertMany([ReactPlaylist,JavaScriptPlaylist,mongoDBplaylist,mongoosePlaylist]);
        console.log(result);
    } catch(err){
        console.log(err);
    }
}
createDoc();