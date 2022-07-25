import express from 'express' ;
import path from 'path';
import url from 'url';
//defining url


const __dirname = new URL('.',import.meta.url).pathname ;
const app = express() ;

// console.log(__dirname);


// console.log(path.join(__dirname,"../public"));

//builtin middleware
 app.use(express.static('public')) ;

app.get('/',(req,res) => {
    // console.log(__dirname,"../public");
    res.send("hello from home") ;
})
app.get('/about',(req,res) => {
    res.send("hello from about") ;
})
app.get('/contact',(req,res) => {
    res.send("contact us??") ;
})
app.listen(8000,() => {
    console.log('listening to port 8000');
})