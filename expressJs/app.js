const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    // res.send("i am a get request  at home route");
    // res.json({ message: "I am a put request at home route" });
});

app.post('/',(req,res)=>{
   res.send("I am a post request at home route");
});

app.put('/',(req,res)=>{
    res.send("I am a put request at home route");
 });
 
 app.delete('/',(req,res)=>{
    res.send("I am a delete request at home route");
 });




module.exports = app;