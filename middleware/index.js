const express = require('express');
const app = express();
const PORT = 3000;
//static middleWare!
// app.use(express.static('public'));

const myMiddleWare = (req, res, next)=>{
   console.log("MiddleWare function");
   req.currentTime = new Date(Date.now());
   next();
};

app.get('/',myMiddleWare,(req,res)=>{
    res.send("I am a Home Route"+req.currentTime);
});

app.listen(PORT,()=>{
  console.log(`Server is Running http://localhost:${PORT}`);
});