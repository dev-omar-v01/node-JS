const express = require('express');
const app = express();
exports.app = app;
const UserRouter = require('./routes/users.route');
app.use("/api/user",UserRouter);

app.use('/',(req,res)=>{

   res.send("i am a get request  at home  route");
});

app.use('/register',(req,res)=>{

   res.send("i am a get request  at register");
});


app.use((req,res)=>{
   res.send("404 Not fount Page");
});

module.exports = app;