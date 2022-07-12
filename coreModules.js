const fs = require("fs");
// creating a new file 
// fs.writeFileSync("read.txt","welcome");
// fs.writeFileSync("read.txt","abhay bisht welcome"); //content will be overwritten

fs.appendFileSync("read.txt"," this is the new content using file append");

//reading a file
//first binary form retrieval and then converting binary buffer into string

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

const org_data = buf_data.toString();
console.log(org_data);

//renaming a file

fs.renameSync('read.txt','readwrite_coreModule.txt');
