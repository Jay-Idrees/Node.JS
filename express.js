const express=require('express')
const bodyParser=require('body-parser')

const app=express(); // Here I am creating a new variable called app that is storing all the functions of express, so that later I can invoke them using object oriented programming
// with app.use allows us to use middlewares on requests. Each middleware will start separately with app.use


app.listen(5000);