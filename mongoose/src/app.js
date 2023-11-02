const mongoose = require('mongoose');

mongoose.connect ("mongodb://127.0.0.1:27017/hhhhhh")
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
const Playlist  = new mongoose.model("brandNewPlay",playlistSchema);

//document


// const createDoc = async () => {
//     try{
//         const ReactPlaylist = new Playlist({
//             name : "React JS" ,
//             ctype : "Front End" ,
//             videos : 50 ,
//             author : "bisth" ,
//             active : true
//         })
//         const JavaScriptPlaylist = new Playlist({
//             name :  " JS " ,
//             ctype : "Front End" ,
//             videos : 150 ,
//             author : "bisth" ,
//             active : true
//         })
//         const  mongoDBplaylist = new Playlist({
//             name : "mongoDB" ,
//             ctype : "Database" ,
//             videos : 501 ,
//             author : "bisth" ,
//             active : true
//         })
//         const mongoosePlaylist = new Playlist({
//             name : "mongoose JS" ,
//             ctype : "Back End" ,
//             videos : 10 ,
//             author : "bisth" ,
//             active : true
//         })
        
//         const result = await Playlist.insertMany([ReactPlaylist,JavaScriptPlaylist,mongoDBplaylist,mongoosePlaylist]);
//         console.log(result);
//     } catch(err){
//         console.log(err);
//     }
// }
// createDoc();

// reading document

//in operrator
// const getDoc = async () => {
//      const result = await Playlist
//      .find({ctype : {$in : ["Back End" , "Database"]} })
//      .select({name : 1})
     
//     console.log(result);
// }

// getDoc ();

// logical operators
//display names of all docs whose author name is bisth OR || whose ctype : Back End 
// const getDoc = async () => {
//     try{
//         const result = await Playlist 
//         .find( { $or : [{ ctype : "Back End"} , {author : "bisth" } ]})
//         .select ({name : 1})

//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }
// // AND operator is same , get logic
// getDoc ();

 //count function 
 
//  const getDoc = async () => {
//     try{
//         const result = await Playlist 
//         .find({ author : "bisth" })
//         .select ({name : 1})
//         //  .countDocuments() ;       
//         .sort("name : 1") ;
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDoc ();

//updating document 
// const updateDoc = async (id) => {
//     try{
//         const result = Playlist.findByIdAndUpdate ({_id: id } 

//         , {  $set : {
//              name : "JavaScript "
//             }
//         },{
//             new : true,
//             useFindAndModify : false 
//         }); 
//     console.log(result);

//     }catch (err) {
//         console.log(err);
//     }
// }

// updateDoc("6306026a3caa011bb0f0a0a2") ;

// const deleteDoc = async (_id) => {
//     try{
//         const result = Playlist.findByIdAndDelete({_id} ); 
//     console.log(result);

//     }catch (err) {
//         console.log(err);
//     }
// }
// deleteDoc("6306026a3caa011bb0f0a0a2");

