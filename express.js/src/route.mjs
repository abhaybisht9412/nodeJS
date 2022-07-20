
import express from 'express' ;

const app = express() ;
const port = 8000 ;

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