//importing from http module
import http from "http" ;
//creating server
const server = http.createServer((req,res) => {
    //request object used to get info about current http request
    //eg. url,request,header and data.
    res.end("hello from the other side!");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port no. 8000") ;
});

