import http from 'http'
import fs from 'fs';

const log = console.log ;

const server = http.createServer((req,res) => {
    log(req.url) ;
    const data = fs.readFileSync("userApi/asyncApi.json","UTF-8") ;
    const objData = JSON.parse(data);
    if(req.url == "/"){
        res.end("hello from home async");
    }else if(req.url == "/about"){
        res.end("hello from aboutUs side sync") ;
    }else if(req.url == "/contact"){
        res.end("contact us sync") ;
    }else if(req.url == "/userapi"){
        res.writeHead(200,{"Content-type":"application/json"}) ;
        res.end(objData[2].name);
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("Bad Gateway 504 :(");
    }
});
server.listen(8000,"127.0.0.1",() => {
    log("listening to port 8000 ");
});
