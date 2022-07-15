//importing from http module
const log = console.log;
import http from "http" ;
import fs from "fs" ;
//creating server
const server = http.createServer((req,res) => {
    //request object used to get info about current http request
    //eg. url,request,header and data.
    //reqeust url afftr localhost:8000/contact                      
    log(req.url);
    if(req.url == "/"){
        res.end("hello from the home side!");
    }else if(req.url == "/about"){
        res.end("hello from the about side!");
    }else if(req.url == "/contact"){
        res.end("hello from the contact side!");
    }else if(req.url == "/api"){
        fs.readFile(`${__dirname/httpServer/userApi/userapi.json}`,"UTF-8",(err,data) => {
            log(data) ;
        })
    }else{
        //it will still show the status code as 200 which is incorrect it shoudl be in the range 400-500 in the network panel in inspect
        res.writeHead(404,{"Content-type": "text/html"}); //now status 404 \/ and content type html
        res.end("<h1> Error 404 ! not found :( </h1>");

    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no. 8000") ;
});





// Informational responses (100–199)
// Successful responses (200–299)
// Redirection messages (300–399)
// Client error responses (400–499)
// Server error responses (500–599)