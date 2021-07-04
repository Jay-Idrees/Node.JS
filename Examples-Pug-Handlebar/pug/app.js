const bodyParser = require('body-parser');
const express=require('express');

const users=[]

const app=express();

// This is specifying the template engine to be used for rendering pug html pages. Here "pug" exactly matches the name of the module
app.set('view engine','pug');
// This line is defining the folder where the pug files are located
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res,next)=>{
    res.render('index', {pageTitle:"Add User"});
});

app.get('/', (req,res,next)=>{
    res.render('users', {pageTitle:"Users", users:users})
})

app.post('/add-user', )


app.listen(6000)