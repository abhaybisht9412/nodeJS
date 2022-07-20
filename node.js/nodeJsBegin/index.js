// REPL 
// 1. js Expression
// 2. use variables
// 3. multiline code
// 4. use(_) to get last result
// 5. we can use editor mode 

//crud folder and all

const fs = require("fs") ;

// fs.mkdirSync('cmChallenge');
// fs.writeFileSync('cmChallenge/bio.txt',"initial data ");

//fs.appendFileSync("cmChallenge/bio.txt","//this is appended data ");

const buff_data = fs.readFileSync('cmChallenge/bio.txt');

// console.log(buff_data);

const orig_data = buff_data.toString();

console.log(orig_data) ;

//fs.renameSync('cmChallenge/bio.txt','cmChallenge/bioData.txt');

//deleting the file
// fs.unlinkSync("cmChallenge/bioData.txt");
//deleting the folder
// fs.rmdirSync('cmChallenge');
 

