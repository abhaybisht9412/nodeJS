//single module 
// const sum = require("./op");
// console.log(sum(5,5));

//multiple modules using array destructuring
//made easy

const {add,sub,mul,mod,name} = require('./op');

console.log(add(5,5));
console.log(sub(10,5));
console.log(mul(10,5))
console.log(mod(10,5));
console.log(name);

