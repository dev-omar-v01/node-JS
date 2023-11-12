
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
//json body send 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/view/index.html");
});

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname + "/view/circle.html");
});

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname + "/view/triangle.html");
});


app.post("/triangle",(req,res)=>{
   const height = req.body.height;
   const base  = req.body.base;
   const area  = 0.5 *base *height;
   res.send(`<h1> Area of Triangle  is : ${area}</h1>`);

});
app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    const circle = Math.PI * radius * radius; 

    res.send(`<h1> Area of Circle  is : ${circle}</h1>`);
 
 });

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
});