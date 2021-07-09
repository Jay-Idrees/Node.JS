const express=require('express');
const bodyParser=require('body-parser')
const expressHbs=require('express-handlebars');

const users=[];

const app=express();
app.engine('hbs',expressHbs({defaultLayout:'main-layouts', extname:'hbs'}));
app.set('view engine', 'hbs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res,next)=>{
    res.render('index', {pageTitle:'Add user'})
    
});

app.get('/users', (req,res,req)=>{ 

});



app.post('/add-user', (req,res,next)=>{

});







app.listen(5000, console.log('http://localhost:5000'))