import http from 'http';
import fs from 'fs';
const log = console.log ;
const server = http.createServer();

//old method niche wala
// server.on('request' , (req,res) => {

//  fs.readFile('input.txt',"UTF-8",(err,data) => {
//     if(err) return log(err);
//     res.end(data.toString());
//  });
// })

//-----------streaming method -------------

server.on('request',(req,res) => {
   const rStream = fs.createReadStream("input.txt") ;
   rStream.on("data",(chunkData) => {
      res.write(chunkData);
   });
   rStream.on("end",() => {
      res.end();
   });
   rStream.on("error",(err) => {
      log(err) ;
      res.end("file not found :(");
   });
});

server.listen(8000,"127.0.0.1") ;
log("listening to port no. 8000") ;