const dotenv = require('dotenv');
const mongoose = require('mongoose');
var express = require('express');
var app = express();


dotenv.config({path:"./config.env"});

const DB = process.env.DATABASE;

mongoose.connect(DB,{
   useNewUrlParser: true,
   useCreateIndex:true,
   useUnifiedTopology: true,
   useFindAndModify: false
}).then(()=>{
   console.log("connection successful");
}).catch((err)=>{console.log(err)});
//Midleware

const middleware =(req,res,next)=>{
   console.log("IN Middleware");
   next();
}

app.get('/', (req, res) => {
    res.send("<br>Epress - js");
 });

 app.get('/login', (req, res) => {
    res.send("<br>LOGIN");
 });

 app.get('/signup', (req, res) => {
    res.send("<br>SIGNUP");
 });
  
 app.get('/datasrc', (req, res) => {
    res.send("<br>DATA SOURCE");
 });

app.get('/bots', (req, res) => {
    res.send("<br>BOTS");
 });
 
  
app.listen(8080);