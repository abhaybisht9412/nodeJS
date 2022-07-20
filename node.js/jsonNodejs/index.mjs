const log = console.log;
//this is the object isko hum convert krnge json mai
const bioData = {
    name : "abhay" ,
    age : "20" ,
    team : "liquid" ,
};
 
//console.log(bioData.team) ;

//object -> json convert -> stringify()
// json format-> {"name":"abhay","age":"20","team":"liquid"} 
// const jsonData = JSON.stringify(bioData);
// log(jsonData);

//json -> object convert -> parse()
//object format -> { name: 'abhay', age: '20', team: 'liquid' } 

// const objData = JSON.parse(jsonData);
// log(objData);

//tasks in node js
// 1. convert to JSON \/ 
// 2.dusre file mai add  \/
// 3.read file \/
// 4. convert back to js \/ 
// 5.console.log \/

import fs from "fs" ;

const jsonData = JSON.stringify(bioData) ;
fs.writeFile("json1.json",jsonData, (err) => {
    log("success!");
}) ;
//need to get or access the api 

fs.readFile("json1.json","UTF-8",(err,data) => {
    log(data) ; // json data we need to convert this into object data 
    const orgObjData = JSON.parse(data) ;
    log(orgObjData) ; //required original data in object form
});




