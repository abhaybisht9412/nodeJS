import express from 'express';

const app = express() ;
const port = process.env.PORT || 8000;

app.use(express.static('../public'));

app.get('/', (req,res) => {
    res.send("Welcome to Home ") ;
})

app.get('/about', (req,res) => {
    res.send("Welcome to about ") ;
})

app.get('/weather', (req,res) => {
    res.send("Welcome to app ") ;
})

app.get('*', (req,res) => {
    res.send(" Error 404 not found :( ") ;
})

app.listen(port, () => {
    console.log(`listening to port number ${port}`);
})