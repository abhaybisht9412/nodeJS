//single module
// const add = (a,b) => {
//     return a+b;
// }
// module.exports= add;

//multiple module

const add = (a,b) => {
    return a+b ;
}
const sub = (a,b) => {
    return a-b ;
}
const mul = (a,b) => {
    return a*b ;
}
const mod = (a,b) => {
    return a%b ;
}

const name = "reeverb";

module.exports = {add,sub,mul,mod,name};