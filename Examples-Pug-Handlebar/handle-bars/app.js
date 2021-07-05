const express=require('express');
const bodyParser=require('body-parser')
const hbs=require('express-handlebars');



const app=express();
app.engine('hbs',hbs({defaultLayout:'main-layouts', extname:'hbs'}))
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res,next)=>{
    
});

app.get('/users', (req,res,req)=>{

});

app.post('/add-user', (req,res,next)=>{

});







app.listen(5000, console.log('http://localhost:5000'))