// console.log("Hello World");

// const express=require('express');
require('dotenv').config();
// import express from "express"
const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.get('/login',(req,res)=>{
    res.send('<h1>Login in at mypage</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
})