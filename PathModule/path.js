const path = require("path");

console.log(path.dirname("C:/Users/adity/Desktop/node js TUT/PathModule/path.js"));
console.log(path.extname("C:/Users/adity/Desktop/node js TUT/PathModule/path.js"));
console.log(path.basename("C:/Users/adity/Desktop/node js TUT/PathModule/path.js"));
// sab ek sath 
console.log(path.parse("C:/Users/adity/Desktop/node js TUT/PathModule/path.js"));
//calling individually

 const myPath= path.parse("C:/Users/adity/Desktop/node js TUT/PathModule/path.js");
 console.log(myPath.name);