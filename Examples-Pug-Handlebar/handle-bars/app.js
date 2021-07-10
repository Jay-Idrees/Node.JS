const express=require('express');
const bodyParser=require('body-parser')
const expressHbs=require('express-handlebars');

const users=[];

const app=express();

app.engine('hbs',expressHbs({defaultLayout:'main-layouts', extname:'hbs'}));
// app.set('view engine', 'hbs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res,next)=>{
    res.render('index', {pageTitle:'Add user'})
    
});

app.get('/users', (req,res,next)=>{ 
    res.render('users', {pageTitle:'Users', users:users, hasUsers:users.length>0}, )
});



app.post('/add-user', (req,res,next)=>{
 users.push({name:req.body.username});
 res.redirect('/users')

});







app.listen(5000, console.log('http://localhost:5000'))