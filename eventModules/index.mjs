// EventEmitter ek class hai
//events module hai
import EventEmitter from 'events' ;
const log = console.log;
const event = new EventEmitter() ;


event.on('sayMyName', () => {
     log("reeverb") ;
})
event.on('sayMyName', () => {
    log("NO ?") ;
})
event.on('sayMyName', () => {
    log("then Vinatge reeverb") ;
})

event.emit("sayMyName");

//checking status code of any page

event.on("checkStatus",(statusCode,msg) => {
    log(`status code of this page is ${statusCode} and the page is ${msg}`);
} );

event.emit("checkStaus",200,"ok") ;
