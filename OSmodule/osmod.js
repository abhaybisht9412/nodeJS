const os = require("os");

//system architechture
console.log(os.arch());

//free ram available
const freeMem = os.freemem();
//by default it will show in bytes
console.log(freeMem);
//converting into memory equivalents here (GB) 
console.log(`${freeMem / 1024 / 1024 / 1024}`);

// total memory 
const totalMem = os.totalmem();
console.log(`${totalMem / 1024 / 1024 / 1024}`);

//host name
console.log(os.hostname());

//platform
console.log(os.platform());

console.log(os.release());

console.log(os.tmpdir());

console.log(os.type()); 