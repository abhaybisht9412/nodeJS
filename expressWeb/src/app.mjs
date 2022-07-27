import express from 'express';
import hbs from 'hbs' ;

const app = express() ;
const port = process.env.PORT || 8000;

//using view engine handlebars
app.set("view engine", 'hbs') ;
//after renaming views and creating partials
app.set('views','../src/templates/views') ;
//using public files 
app.use(express.static('../public'));
//setting partials 
hbs.registerPartials('../src/templates/views') ;



//routing 
//render instead of send
app.get('/', (req,res) => {
    res.render('index') ;
})

// app.get('/about', (req,res) => {
//     res.send("Welcome to about ") ;
// })
app.get('/about', (req,res) => {
    res.render('about.hbs') ;
})


app.get('/weather', (req,res) => {
    res.render("Welcome to app ") ;
})

app.get('*', (req,res) => {
    res.render(" Error 404 not found :( ") ;
})

app.listen(port, () => {
    console.log(`listening to port number ${port}`);
})