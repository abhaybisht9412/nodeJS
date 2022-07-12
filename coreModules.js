const fs = require("fs");
// creating a new file 
// fs.writeFileSync("read.txt","welcome");
// fs.writeFileSync("read.txt","abhay bisht welcome"); //content will be overwritten

fs.appendFileSync("read.txt"," this is the new content using file append");

