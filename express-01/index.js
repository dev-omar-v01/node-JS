const express = require('express');
const app = express();
const PORT = 3000;

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

app.get("/",(req,res)=>{
    const id =req.header('id'); 
    const name =req.header('name'); 
    res.send(`Student id is : ${id}  student name ${name}`);
});

app.listen(PORT,()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
});