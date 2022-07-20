import express from 'express' ;

const app = express() ;

app.get('/',(req,res) => {
    res.send("ello express.js") ;
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