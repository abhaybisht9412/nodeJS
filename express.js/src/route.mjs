
import express from 'express' ;
import url from 'url';
import path from "path";
const app = express() ;
const port = 8000 ;

const __dirname = new URL('.',import.meta.url).pathname ;

const staticPath = path.join(__dirname,"../public") ;

app.use(express.static(staticPath)) ;

app.get('/',(req,res) => {
    res.status(200).send("ello express.js") ;
})
app.get('/about',(req,res) => {
    res.send("hello from about") ;
})
app.get('/contact',(req,res) => {
    res.send("contact us??") ;
})
app.listen(port,() => {
    console.log(`listening to port ${port}`);
})