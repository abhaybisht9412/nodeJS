import express from 'express' ;

const app = express () ;

app.get('/' ,(req , res ) => {
    app.send("ello express.js") ;
})