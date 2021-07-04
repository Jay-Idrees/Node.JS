const express=require('express');
const bodyParser = require('body-parser');

const app=express();
const users=[];



// This is specifying the template engine to be used for rendering pug html pages. Here "pug" exactly matches the name of the module
app.set('view engine','pug');
// This line is defining the folder where the pug files are located
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
    // Anything tagged with # in 
    res.render('index', {pageTitle:'Add User'});
});

app.get('/users', (req,res,next)=>{
    // The blue users here should match what is used in the users.pug
    res.render('users', {pageTitle:'User', users:users});
});

app.post('/add-user',(req,res,next)=>{
    users.push({name:req.body.username});
    res.redirect("/users");
});

// app.post('/add-user', (req, res, next) => {
//     users.push({ name: req.body.username });
//     res.redirect('/users');
//   });
  

app.listen(5000)