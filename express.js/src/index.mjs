import express from 'express';
import path from 'path' ;
import url from 'url' ;

const __dirname = new URL('.',import.meta.url).pathname ;

const app = express() ;
const log = console.log;
const port = 8000 ;

// log(path.join(__dirname,'../public'));

app.use(express.static('../public/scrambleGame')) ;

app.get('/', (req,res) => {
    res.send("hello from server") ;
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})