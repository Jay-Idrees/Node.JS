const express=require('express');
const path=require('path')
const rootDir=require('./util/root-dir')

const app=express();

const userRoutes=require('./routes/user');


app.use(express.static(path.join(__dirname,'public')));

app.use('/',userRoutes);



app.listen(5000);