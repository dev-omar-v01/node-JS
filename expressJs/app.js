const express = require('express');
const app = express();
const UserRouter = require('./routes/users.route');



//user route difine
app.use("/api/user",UserRouter);
app.use('/',(req,res)=>{
   res.send("i am a get request  at home route");
});
// invalid route checker
app.use((req,res)=>{
   res.send("404 Not fount Page");
});

module.exports = app;