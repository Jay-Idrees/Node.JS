const express=require('express');
const path=require('path');

const rootDir=require('../util/root-dir')

router=express.Router();

router.get('/user',(req,res,next)=>{
    res.send({message: 'hello user'})
});

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','index.html'));
});

module.exports=router;