const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');



//query parameter passing 
// app.get("/",(req,res)=>{
//     const {id,name} =req.query; 
//     res.send(`Student id is : ${id}  student name ${name}`);
// })

//route perameter passing
// app.get("/userId/:id/userAge/:age",(req,res)=>{
//     const {id,age} =req.params; 
//     res.send(`Student id is : ${id}  student name ${age}`);
// });

// header perameter passing

// app.get("/",(req,res)=>{
//     const id =req.header('id'); 
//     const name =req.header('name'); 
//     res.send(`Student id is : ${id}  student name ${name}`);
// });


//json body send 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/register",(req,res)=>{
  res.sendFile(__dirname + "/view/index.html");
});

app.post('/register',(req,res)=>{
 const name = req.body.fullName;
   res.send(`name is ${name}`);
});

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});