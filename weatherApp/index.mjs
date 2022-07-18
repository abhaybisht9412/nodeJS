import http from 'http' ;
import fs from "fs";
import request from 'requests' ;
const log = console.log;
const homeFile = fs.readFileSync('home.html','UTF-8') ;

const server = http.createServer((req,res) => {
   if(req.url == '/'){
    request(
    "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=4ddc95afdd918d68d310071457560ed8"
    )
    .on("data", (chunk) =>{
        log(chunk) ;
        const objData = JSON.parse(chunk) ;
        const arrData = [objData] ; 
        log(arrData); //array of objects
        log(arrData[0].main.temp);
    })
    .on("end",(err) =>{
        if (err) return log("connection failed",err);
        log("end");
    });
   }  
});

server.listen(8000,"127.0.0.1") ;
log("listening to port 8000") ;