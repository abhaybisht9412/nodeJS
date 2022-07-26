//this is only for purpose of index.hbs at views folder
import hbs from 'hbs';
import express from 'express';

const app = express() ;
const port = 8000 ;

//rather use function we will use app.set() to access hbs file

app.set("view engine","hbs") ; //sirf itna likhne se nahi chlega
//renaming
app.set('views','../src/templates/views'); //views reanmed as templates

//new lecture k liye partails folder mai content dalne k liye
hbs.registerPartials('../src/templates/partials') ;


//so we need template engine route
app.get("/",(req,res) => {
    res.render("./index.hbs") // render is dynamic
})

app.get('/', (req,res) => {
    res.send( "ur at the home page !" );
})

app.listen(port, () => {
    console.log(`listening to port no. ${port}`);
})

//views will be renamed as template folder