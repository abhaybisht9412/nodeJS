// cred ops using asynchrounous methodologies

const fs = require("fs");

// fs.writeFile("bio.txt","this is old content for async ",(err) => {
//     console.log("file created");
// })

// fs.appendFile("asynChallenge/bio.txt","this is the new content here async",(err) => {
//     console.log("file appended success");
// })

//reading 


fs.readFile('bio.txt',"UTF-8",(err,data) => {
    console.log(data);

})

//reading encryoted content
fs.readFile('bio.txt',(err,data) => {
    console.log(data);

})
//renaming 

fs.rename("asynChallenge/bio.txt","asynChallenge/bioData.txt",(err) => {
    console.log("success");
});
