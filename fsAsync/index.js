const fs = require("fs") ;
// fs.writeFile('read.txt',"today is awesome content ", (err) => {
//     console.log("file created success");
//     console.log(err);
// }); 
//err fat arrow is a call back function and its a must while using asynchronous 

// fs.appendFile('read.txt',"this is new awesome appended content", (err) => {
//     console.log("success!");
// });
fs.readFile('read.txt',"UTF-8",(err,data) => {
    console.log(data);
    
})